import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../lib/prisma";

function isRecordNotFound(e: unknown): boolean {
  return e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025";
}

/**
 * POST /api/projects/:slugOrId/increment-view
 * Uses the existing `[id]` segment so slugs (e.g. cba-ai-foundry) and numeric ids both work.
 * Single atomic `update` per match so concurrent increments return the post-update count.
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

    try {
      const row = await prisma.project.update({
        where: { slug: segment },
        data: { viewCount: { increment: 1 } },
        select: { viewCount: true },
      });
      return NextResponse.json({ viewCount: row.viewCount });
    } catch (e) {
      if (!isRecordNotFound(e)) throw e;
    }

    const numericId = Number(segment);
    if (Number.isFinite(numericId) && numericId >= 1) {
      try {
        const row = await prisma.project.update({
          where: { id: Math.floor(numericId) },
          data: { viewCount: { increment: 1 } },
          select: { viewCount: true },
        });
        return NextResponse.json({ viewCount: row.viewCount });
      } catch (e) {
        if (!isRecordNotFound(e)) throw e;
      }
    }

    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  } catch (error) {
    console.error("POST increment-view:", error);
    return NextResponse.json({ error: "Failed to record view" }, { status: 500 });
  }
}
