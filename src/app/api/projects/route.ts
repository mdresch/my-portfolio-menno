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
      include: {
        client: true,
      },
      orderBy: {
        datePublished: "desc",
      },
    });

    const payload = projects.map((p) => ({
      id: p.id,
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
      // Contractor-specific fields
      isService: p.isService,
      serviceType: p.serviceType,
      duration: p.duration,
      budget: p.budget,
      clientName: p.clientName,
      testimonial: p.testimonial,
      status: p.status,
      client: p.client,
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
    
    const project = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description || null,
        technologies: body.technologies || [],
        link: body.link || null,
        datePublished: body.datePublished ? new Date(body.datePublished) : null,
        category: body.category || null,
        screenshots: body.screenshots || [],
        outcomes: body.outcomes || [],
        challenges: body.challenges || [],
        caseStudy: body.caseStudy || null,
        slug: body.slug || body.title.toLowerCase().replace(/\s+/g, "-"),
        // Contractor-specific fields
        isService: body.isService || false,
        serviceType: body.serviceType || null,
        duration: body.duration || null,
        budget: body.budget || null,
        clientName: body.clientName || null,
        testimonial: body.testimonial || null,
        status: body.status || "completed",
        clientId: body.clientId || null,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
