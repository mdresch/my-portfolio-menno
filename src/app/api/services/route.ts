import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl;
    const activeOnly = url.searchParams.get("active") === "true";
    
    const services = await prisma.service.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error("Error loading services:", error);
    return NextResponse.json({ error: "Failed to load services" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const service = await prisma.service.create({
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        features: body.features || [],
        duration: body.duration || null,
        priceRange: body.priceRange || null,
        isActive: body.isActive ?? true,
        order: body.order || 0,
      },
    });

    return NextResponse.json(service);
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
  }
}