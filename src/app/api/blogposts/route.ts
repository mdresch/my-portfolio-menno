import { NextRequest, NextResponse } from "next/server";

// This endpoint serves as an alias for /api/posts to maintain compatibility
// with the RAG chat system that expects /api/blogposts

export async function GET(request: NextRequest) {
  try {
    // Get the base URL from the request
    const baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`;
    
    // Forward the request to the posts endpoint
    const response = await fetch(`${baseUrl}/api/posts`);
    
    if (!response.ok) {
      throw new Error(`Posts API returned ${response.status}`);
    }
    
    const posts = await response.json();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error forwarding to posts API:", error);
    return NextResponse.json(
      { error: "Failed to load blog posts" },
      { status: 500 }
    );
  }
}
