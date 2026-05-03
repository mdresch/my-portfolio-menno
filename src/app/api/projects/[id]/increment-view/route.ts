import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

/**
 * POST /api/projects/:slugOrId/increment-view
 * Uses the existing `[id]` segment so slugs (e.g. cba-ai-foundry) and numeric ids both work.
 */
export async function POST(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: raw } = await context.params;
    const segment = decodeURIComponent(raw).trim();
    if (!segment) {
      return NextResponse.json({ error: "Invalid path" }, { status: 400 });
    }

    const bySlug = await prisma.project.updateMany({
      where: { slug: segment },
      data: { viewCount: { increment: 1 } },
    });
    if (bySlug.count > 0) {
      const row = await prisma.project.findUnique({
        where: { slug: segment },
        select: { viewCount: true },
      });
      return NextResponse.json({ viewCount: row?.viewCount ?? 0 });
    }

    const numericId = Number(segment);
    if (Number.isFinite(numericId) && numericId >= 1) {
      const byId = await prisma.project.updateMany({
        where: { id: Math.floor(numericId) },
        data: { viewCount: { increment: 1 } },
      });
      if (byId.count > 0) {
        const row = await prisma.project.findUnique({
          where: { id: Math.floor(numericId) },
          select: { viewCount: true },
        });
        return NextResponse.json({ viewCount: row?.viewCount ?? 0 });
      }
    }

    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  } catch (error) {
    console.error("POST increment-view:", error);
    return NextResponse.json({ error: "Failed to record view" }, { status: 500 });
  }
}
