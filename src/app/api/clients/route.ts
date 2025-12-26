import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl;
    const status = url.searchParams.get("status");
    
    const clients = await prisma.client.findMany({
      where: status ? { status } : undefined,
      include: {
        projects: true,
        inquiries: true,
        _count: {
          select: {
            projects: true,
            inquiries: true,
            communications: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(clients);
  } catch (error) {
    console.error("Error loading clients:", error);
    return NextResponse.json({ error: "Failed to load clients" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const client = await prisma.client.create({
      data: {
        name: body.name,
        email: body.email,
        company: body.company || null,
        phone: body.phone || null,
        website: body.website || null,
        industry: body.industry || null,
        description: body.description || null,
        status: body.status || "active",
      },
    });

    return NextResponse.json(client);
  } catch (error) {
    console.error("Error creating client:", error);
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
  }
}