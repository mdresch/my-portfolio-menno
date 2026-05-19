import { NextRequest, NextResponse } from "next/server";
import { requireImageLibraryAdmin } from "../../../../lib/image-library-admin";
import { prisma } from "../../../../lib/prisma";
import {
  ALLOWED_IMAGE_MIME,
  MAX_IMAGE_BYTES,
  MAX_SLUG_RESOLVE_ATTEMPTS,
  detectImageMimeFromBuffer,
  sha256Checksum,
  safeStoredFilename,
  storeImageBuffer,
} from "../../../../lib/image-library-storage";
import { serializeImageAsset } from "../../../../lib/image-library-serialize";
import { slugifyFilename, uniqueSlugCandidate } from "../../../../lib/image-slug";
import { imageLibraryErrorResponse } from "../../../../lib/image-library-db";

export const dynamic = "force-dynamic";

async function resolveUniqueSlug(base: string): Promise<string> {
  let candidate = base;
  for (let n = 0; n < MAX_SLUG_RESOLVE_ATTEMPTS; n++) {
    const existing = await prisma.imageAsset.findUnique({ where: { slug: candidate } });
    if (!existing) return candidate;
    candidate = uniqueSlugCandidate(base, String(n + 1));
  }
  throw new Error("Could not allocate a unique slug");
}

export async function POST(request: NextRequest) {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Missing file field" }, { status: 400 });
    }

    if (file.size > MAX_IMAGE_BYTES) {
      return NextResponse.json({ error: "Max file size is 10 MB" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const detectedMime = detectImageMimeFromBuffer(buffer);
    if (!detectedMime || !ALLOWED_IMAGE_MIME.has(detectedMime)) {
      return NextResponse.json(
        { error: "File content must be a valid JPEG, PNG, WebP, or GIF image" },
        { status: 400 }
      );
    }

    const checksum = sha256Checksum(buffer);

    const duplicate = await prisma.imageAsset.findUnique({ where: { checksum } });
    if (duplicate) {
      return NextResponse.json(
        {
          error: "This file was already uploaded",
          existingSlug: duplicate.slug,
          existingId: duplicate.id,
        },
        { status: 409 }
      );
    }

    const storedFilename = safeStoredFilename(file.name, detectedMime);

    const titleFromForm = String(form.get("title") ?? "").trim();
    const altFromForm = String(form.get("altText") ?? "").trim();
    const tagsRaw = String(form.get("tags") ?? "").trim();
    const tags = tagsRaw
      ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

    const baseSlug = slugifyFilename(storedFilename);
    const slug = await resolveUniqueSlug(baseSlug);

    const { id } = await prisma.imageAsset.create({
      data: {
        slug,
        storageKey: "pending",
        filename: storedFilename,
        mimeType: detectedMime,
        byteSize: buffer.length,
        title: titleFromForm || null,
        altText: altFromForm || null,
        tags,
        source: "upload",
        checksum,
      },
      select: { id: true },
    });

    try {
      const stored = await storeImageBuffer(id, storedFilename, detectedMime, buffer);
      const row = await prisma.imageAsset.update({
        where: { id },
        data: {
          storageKey: stored.storageKey,
          blobUrl: stored.blobUrl,
        },
      });
      return NextResponse.json({ image: serializeImageAsset(row) }, { status: 201 });
    } catch (storeErr) {
      await prisma.imageAsset.delete({ where: { id } }).catch(() => undefined);
      throw storeErr;
    }
  } catch (e) {
    console.error("POST /api/images/upload:", e);
    const { status, error } = imageLibraryErrorResponse(e);
    return NextResponse.json({ error }, { status });
  }
}
