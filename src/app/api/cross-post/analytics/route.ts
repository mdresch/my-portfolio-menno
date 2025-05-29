import { NextRequest, NextResponse } from "next/server";

// This is where you would define your .NET API URL in production
const DOTNET_API_URL = process.env.DOTNET_API_URL || "http://localhost:5000";

export async function GET(request: NextRequest) {
  try {
    // Forward the request to the .NET backend
    const response = await fetch(`${DOTNET_API_URL}/api/BlogCrossPost/analytics`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Don't cache this data since it changes frequently
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
      console.error("Error from .NET API:", errorData);
      return NextResponse.json(
        { error: errorData.error || `API Error: ${response.status}` }, 
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching from .NET API:", error);
    return NextResponse.json(
      { error: "Failed to connect to .NET backend service" }, 
      { status: 500 }
    );
  }
}

// Handle POST requests to create new cross-post records
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Forward the request to the .NET backend
    const response = await fetch(`${DOTNET_API_URL}/api/BlogCrossPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Error from .NET API:", data);
      return NextResponse.json(
        { error: data.error || `API Error: ${response.status}` },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error posting to .NET API:", error);
    return NextResponse.json(
      { error: "Failed to connect to .NET backend service" },
      { status: 500 }
    );
  }
}
