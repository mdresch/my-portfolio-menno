import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";

function serializeProject(p: {
  id: number;
  title: string;
  description: string | null;
  technologies: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  datePublished: Date | null;
  category: string | null;
  screenshots: string[];
  outcomes: string[];
  challenges: string[];
  caseStudy: string | null;
  slug: string;
}) {
  return {
    id: p.id,
    title: p.title,
    description: p.description || "",
    technologies: p.technologies || [],
    repoUrl: p.repoUrl || "",
    liveUrl: p.liveUrl || "",
    datePublished: p.datePublished ? p.datePublished.toISOString() : null,
    category: p.category || "",
    screenshots: p.screenshots || [],
    outcomes: p.outcomes || [],
    challenges: p.challenges || [],
    caseStudy: p.caseStudy || "",
    slug: p.slug,
  };
}

/** When only legacy `link` is sent, split into repo vs live. */
function applyLegacyLink(data: Prisma.ProjectUpdateInput, body: Record<string, unknown>) {
  if (body.link === undefined) return;
  if (body.repoUrl !== undefined || body.liveUrl !== undefined || body.gitHubUrl !== undefined) return;

  const raw = String(body.link ?? "").trim();
  if (!raw) {
    data.repoUrl = null;
    data.liveUrl = null;
    return;
  }
  if (/github\.com/i.test(raw)) {
    data.repoUrl = raw;
    data.liveUrl = null;
  } else {
    data.repoUrl = null;
    data.liveUrl = raw;
  }
}

function resolveScreenshots(body: Record<string, unknown>): string[] | undefined {
  if (Array.isArray(body.screenshots)) return body.screenshots as string[];
  if (body.imageUrl !== undefined) {
    const u = String(body.imageUrl ?? "").trim();
    if (u) return [u];
    if (String(body.imageUrl ?? "").trim() === "") return [];
  }
  return undefined;
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: raw } = await context.params;
    const id = Number(raw);
    if (!Number.isFinite(id) || id < 1) {
      return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
    }
    const p = await prisma.project.findUnique({ where: { id } });
    if (!p) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(serializeProject(p));
  } catch (error) {
    console.error("GET /api/projects/[id]:", error);
    return NextResponse.json({ error: "Failed to load project" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: raw } = await context.params;
    const id = Number(raw);
    if (!Number.isFinite(id) || id < 1) {
      return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
    }

    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const body = (await request.json()) as Record<string, unknown>;
    const data: Prisma.ProjectUpdateInput = {};

    if (body.title !== undefined) data.title = String(body.title);

    if (body.description !== undefined) {
      data.description = body.description === "" || body.description === null ? null : String(body.description);
    }

    if (body.technologies !== undefined) {
      data.technologies = Array.isArray(body.technologies)
        ? (body.technologies as string[])
        : String(body.technologies ?? "")
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);
    }

    if (body.repoUrl !== undefined) {
      const v = body.repoUrl;
      data.repoUrl = v === null || v === "" ? null : String(v).trim();
    } else if (body.gitHubUrl !== undefined) {
      const g = String(body.gitHubUrl ?? "").trim();
      data.repoUrl = g || null;
    }

    if (body.liveUrl !== undefined) {
      const v = body.liveUrl;
      data.liveUrl = v === null || v === "" ? null : String(v).trim();
    }

    applyLegacyLink(data, body);

    if (body.datePublished !== undefined) {
      data.datePublished =
        body.datePublished === null || body.datePublished === ""
          ? null
          : new Date(String(body.datePublished));
    }

    if (body.category !== undefined) {
      data.category = body.category === "" || body.category === null ? null : String(body.category);
    }

    const shots = resolveScreenshots(body);
    if (shots !== undefined) data.screenshots = shots;

    if (body.outcomes !== undefined) {
      data.outcomes = Array.isArray(body.outcomes) ? (body.outcomes as string[]) : [];
    }
    if (body.challenges !== undefined) {
      data.challenges = Array.isArray(body.challenges) ? (body.challenges as string[]) : [];
    }

    if (body.caseStudy !== undefined) {
      data.caseStudy = body.caseStudy === "" || body.caseStudy === null ? null : String(body.caseStudy);
    }

    if (body.slug !== undefined) {
      const slug = String(body.slug).trim();
      if (slug) data.slug = slug;
    }

    const updated = await prisma.project.update({
      where: { id },
      data,
    });

    return NextResponse.json(serializeProject(updated));
  } catch (error) {
    console.error("PUT /api/projects/[id]:", error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: raw } = await context.params;
    const id = Number(raw);
    if (!Number.isFinite(id) || id < 1) {
      return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
    }

    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    await prisma.project.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("DELETE /api/projects/[id]:", error);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
