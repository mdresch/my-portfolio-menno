import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { requireImageLibraryAdmin } from "../../../../../lib/image-library-admin";
import { imageLibraryErrorResponse } from "../../../../../lib/image-library-db";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, context: RouteContext) {
  const auth = await requireImageLibraryAdmin();
  if (auth.error) return auth.error;

  const { id } = await context.params;

  try {
    const usages = await prisma.imageUsage.findMany({
      where: { imageId: id },
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json({ usages });
  } catch (e) {
    console.error("GET /api/images/[id]/usage:", e);
    const { status, error } = imageLibraryErrorResponse(e);
    return NextResponse.json({ error }, { status });
  }
}
