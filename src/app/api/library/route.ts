import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { serializePublicImageAsset } from "../../../lib/image-library-serialize";
import { imageLibraryErrorResponse } from "../../../lib/image-library-db";

export const dynamic = "force-dynamic";

/** Public catalog of non-deleted library images (search + tag filter). */
export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim().toLowerCase() ?? "";
  const tag = request.nextUrl.searchParams.get("tag")?.trim() ?? "";

  try {
    const rows = await prisma.imageAsset.findMany({
      where: {
        deletedAt: null,
        ...(tag ? { tags: { has: tag } } : {}),
      },
      orderBy: { createdAt: "desc" },
      include: {
        _count: { select: { views: true, usages: true } },
      },
    });

    let images = rows.map((row) =>
      serializePublicImageAsset(row, {
        viewCount: row._count.views,
        usageCount: row._count.usages,
      })
    );

    if (q) {
      images = images.filter((img) => {
        const haystack = [
          img.slug,
          img.title ?? "",
          img.altText ?? "",
          img.caption ?? "",
          img.filename,
          ...img.tags,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }

    const allTags = [...new Set(rows.flatMap((r) => r.tags))].sort((a, b) =>
      a.localeCompare(b)
    );

    return NextResponse.json({ images, tags: allTags });
  } catch (e) {
    console.error("GET /api/library:", e);
    const { status, error } = imageLibraryErrorResponse(e);
    return NextResponse.json({ error }, { status });
  }
}
