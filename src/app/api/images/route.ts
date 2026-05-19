import { NextRequest, NextResponse } from "next/server";
import { requireImageLibraryAdmin } from "../../../lib/image-library-admin";
import { prisma } from "../../../lib/prisma";
import { serializeImageAsset } from "../../../lib/image-library-serialize";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  const includeDeleted = request.nextUrl.searchParams.get("includeDeleted") === "1";

  try {
    const rows = await prisma.imageAsset.findMany({
      where: includeDeleted ? undefined : { deletedAt: null },
      orderBy: { createdAt: "desc" },
      include: {
        _count: { select: { views: true } },
      },
    });

    return NextResponse.json({
      images: rows.map((row) =>
        serializeImageAsset(row, { viewCount: row._count.views })
      ),
    });
  } catch (e) {
    console.error("GET /api/images:", e);
    return NextResponse.json({ error: "Failed to list images" }, { status: 500 });
  }
}
