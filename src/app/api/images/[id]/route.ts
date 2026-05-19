import { NextRequest, NextResponse } from "next/server";
import { requireImageLibraryAdmin } from "../../../../lib/image-library-admin";
import { prisma } from "../../../../lib/prisma";
import { serializeImageAsset } from "../../../../lib/image-library-serialize";
import { slugifyFilename } from "../../../../lib/image-slug";
import { imageLibraryErrorResponse } from "../../../../lib/image-library-db";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, context: RouteContext) {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  const { id } = await context.params;

  try {
    const row = await prisma.imageAsset.findUnique({
      where: { id },
      include: { _count: { select: { views: true } } },
    });
    if (!row) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({
      image: serializeImageAsset(row, { viewCount: row._count.views }),
    });
  } catch (e) {
    console.error("GET /api/images/[id]:", e);
    const { status, error } = imageLibraryErrorResponse(e);
    return NextResponse.json({ error }, { status });
  }
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  const { id } = await context.params;

  try {
    const existing = await prisma.imageAsset.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const body = (await request.json()) as Record<string, unknown>;

    let slug = existing.slug;
    if (typeof body.slug === "string" && body.slug.trim()) {
      const next = slugifyFilename(body.slug.trim());
      if (next !== existing.slug) {
        const taken = await prisma.imageAsset.findFirst({
          where: { slug: next, NOT: { id } },
        });
        if (taken) {
          return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
        }
        slug = next;
      }
    }

    const tags =
      Array.isArray(body.tags)
        ? body.tags.map(String).filter(Boolean)
        : typeof body.tags === "string"
          ? body.tags.split(",").map((t) => t.trim()).filter(Boolean)
          : undefined;

    const restore = body.restore === true;

    const data: Parameters<typeof prisma.imageAsset.update>[0]["data"] = { slug };
    if (typeof body.title === "string") data.title = body.title.trim() || null;
    if (typeof body.altText === "string") data.altText = body.altText.trim() || null;
    if (typeof body.caption === "string") data.caption = body.caption.trim() || null;
    if (typeof body.description === "string") data.description = body.description.trim() || null;
    if (tags !== undefined) data.tags = tags;
    if (restore) data.deletedAt = null;
    else if (body.softDelete === true) data.deletedAt = new Date();

    const row = await prisma.imageAsset.update({
      where: { id },
      data,
    });

    return NextResponse.json({ image: serializeImageAsset(row) });
  } catch (e) {
    console.error("PATCH /api/images/[id]:", e);
    const { status, error } = imageLibraryErrorResponse(e);
    return NextResponse.json({ error }, { status });
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  const { id } = await context.params;

  try {
    const row = await prisma.imageAsset.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return NextResponse.json({ image: serializeImageAsset(row) });
  } catch (e) {
    console.error("DELETE /api/images/[id]:", e);
    const { status, error } = imageLibraryErrorResponse(e);
    return NextResponse.json({ error }, { status });
  }
}
