import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl;
    const status = url.searchParams.get("status");
    const priority = url.searchParams.get("priority");
    
    const inquiries = await prisma.clientInquiry.findMany({
      where: {
        ...(status && { status }),
        ...(priority && { priority }),
      },
      include: {
        client: true,
        communications: {
          orderBy: { createdAt: "desc" },
          take: 5, // Latest 5 communications
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error("Error loading client inquiries:", error);
    return NextResponse.json({ error: "Failed to load client inquiries" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const inquiry = await prisma.clientInquiry.create({
      data: {
        name: body.name,
        email: body.email,
        company: body.company || null,
        phone: body.phone || null,
        subject: body.subject,
        message: body.message,
        serviceType: body.serviceType || null,
        budget: body.budget || null,
        timeline: body.timeline || null,
        priority: body.priority || "medium",
        source: body.source || null,
      },
    });

    return NextResponse.json(inquiry);
  } catch (error) {
    console.error("Error creating client inquiry:", error);
    return NextResponse.json({ error: "Failed to create client inquiry" }, { status: 500 });
  }
}