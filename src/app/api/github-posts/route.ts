import { NextRequest, NextResponse } from "next/server";
import { fetchPostsFromGitHub, fetchPostFromGitHub } from "../../../lib/github";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    
    // Get the token from the request header rather than query parameter for better security
    const token = request.headers.get("X-GitHub-Token") || undefined;
    
    // Return a specific post if slug is provided
    if (slug) {
      const post = await fetchPostFromGitHub(slug, token);
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json(post);
    }
    
    // Otherwise return all posts
    const posts = await fetchPostsFromGitHub(token);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error in /api/github-posts:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch posts from GitHub" },
      { status: 500 }
    );
  }
}