import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl;
    const limitParam = url.searchParams.get("limit");
    const LIMIT = limitParam ? Math.max(1, Number(limitParam)) : 10;

    // Query projects from the database. Order by datePublished desc when available.
    const projects = await prisma.project.findMany({
      take: LIMIT,
      orderBy: {
        datePublished: "desc",
      },
    });

    const payload = projects.map((p) => ({
      id: p.id,
      name: p.title || p.slug,
      title: p.title,
      description: p.description || "",
      technologies: p.technologies || [],
      link: p.link || "",
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
