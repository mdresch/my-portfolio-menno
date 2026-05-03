import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl;
    const limitParam = url.searchParams.get("limit");
    let take: number | undefined;
    if (limitParam != null && limitParam !== "") {
      const n = Number(limitParam);
      if (Number.isFinite(n) && n > 0) {
        take = Math.min(Math.floor(n), 500);
      }
    }

    // Query projects from the database. No `limit` = return all (admin/UI); cap with ?limit= for large DBs.
    const projects = await prisma.project.findMany({
      ...(take ? { take } : {}),
      orderBy: {
        datePublished: "desc",
      },
    });

    const payload = projects.map((p) => ({
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
    }));

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Error loading projects from database:", error);
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const repoFromBody =
      body.repoUrl !== undefined && body.repoUrl !== ""
        ? String(body.repoUrl).trim()
        : body.gitHubUrl
          ? String(body.gitHubUrl).trim()
          : null;
    const liveFromBody =
      body.liveUrl !== undefined && body.liveUrl !== "" ? String(body.liveUrl).trim() : null;
    const legacyLink =
      body.link !== undefined && body.link !== "" ? String(body.link).trim() : null;
    let repoUrl: string | null = repoFromBody || null;
    let liveUrl: string | null = liveFromBody || null;
    if (!repoUrl && !liveUrl && legacyLink) {
      if (/github\.com/i.test(legacyLink)) {
        repoUrl = legacyLink;
      } else {
        liveUrl = legacyLink;
      }
    }

    const project = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description || null,
        technologies: body.technologies || [],
        repoUrl,
        liveUrl,
        datePublished: body.datePublished ? new Date(body.datePublished) : null,
        category: body.category || null,
        screenshots: body.screenshots || [],
        outcomes: body.outcomes || [],
        challenges: body.challenges || [],
        caseStudy: body.caseStudy || null,
        slug: body.slug || body.title.toLowerCase().replace(/\s+/g, "-"),
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
