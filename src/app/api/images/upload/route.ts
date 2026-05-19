import { NextRequest, NextResponse } from "next/server";
import { requireImageLibraryAdmin } from "../../../../lib/image-library-admin";
import { prisma } from "../../../../lib/prisma";
import {
  ALLOWED_IMAGE_MIME,
  MAX_IMAGE_BYTES,
  sha256Checksum,
  storeImageBuffer,
} from "../../../../lib/image-library-storage";
import { serializeImageAsset } from "../../../../lib/image-library-serialize";
import { slugifyFilename, uniqueSlugCandidate } from "../../../../lib/image-slug";
import { imageLibraryErrorResponse } from "../../../../lib/image-library-db";

export const dynamic = "force-dynamic";

async function resolveUniqueSlug(base: string): Promise<string> {
  let candidate = base;
  let n = 0;
  while (true) {
    const existing = await prisma.imageAsset.findUnique({ where: { slug: candidate } });
    if (!existing) return candidate;
    n += 1;
    candidate = uniqueSlugCandidate(base, String(n));
  }
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

    if (!ALLOWED_IMAGE_MIME.has(file.type)) {
      return NextResponse.json(
        { error: "Allowed types: JPEG, PNG, WebP, GIF" },
        { status: 400 }
      );
    }

    if (file.size > MAX_IMAGE_BYTES) {
      return NextResponse.json({ error: "Max file size is 10 MB" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const checksum = sha256Checksum(buffer);

    const duplicate = await prisma.imageAsset.findUnique({ where: { checksum } });
    if (duplicate) {
      return NextResponse.json(
        {
          error: "This file was already uploaded",
          existing: serializeImageAsset(duplicate),
        },
        { status: 409 }
      );
    }

    const titleFromForm = String(form.get("title") ?? "").trim();
    const altFromForm = String(form.get("altText") ?? "").trim();
    const tagsRaw = String(form.get("tags") ?? "").trim();
    const tags = tagsRaw
      ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

    const baseSlug = slugifyFilename(file.name);
    const slug = await resolveUniqueSlug(baseSlug);

    const { id } = await prisma.imageAsset.create({
      data: {
        slug,
        storageKey: "pending",
        filename: file.name,
        mimeType: file.type,
        byteSize: file.size,
        title: titleFromForm || null,
        altText: altFromForm || null,
        tags,
        source: "upload",
        checksum,
      },
      select: { id: true },
    });

    try {
      const stored = await storeImageBuffer(id, file.name, file.type, buffer);
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
