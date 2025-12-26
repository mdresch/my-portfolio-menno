import { NextRequest, NextResponse } from "next/server";

// Cross-post analytics functionality disabled - .NET backend removed
export async function GET(request: NextRequest) {
  return NextResponse.json(
    { 
      error: "Cross-post analytics not available - .NET backend removed",
      message: "This feature will be reimplemented with Prisma/PostgreSQL in the future"
    },
    { status: 501 }
  );
}

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      error: "Cross-post creation not available - .NET backend removed",
      message: "This feature will be reimplemented with Prisma/PostgreSQL in the future"
    },
    { status: 501 }
  );
}
