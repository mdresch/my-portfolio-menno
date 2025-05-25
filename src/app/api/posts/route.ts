import { NextRequest, NextResponse } from 'next/server';
import { getPostDataFromFile, getSortedPostsData } from '@/lib/markdown';

// Simple in-memory cache for all posts
let cachedPosts: any[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_TTL = 60 * 1000; // 1 minute

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    
    console.log(`[API] Request for ${slug ? `post: ${slug}` : 'all posts'}`);
    
    if (slug) {
      const post = await getPostDataFromFile(slug);
      if (!post) {
        console.log(`[API] Post not found: ${slug}`);
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      console.log(`[API] Returning post: ${slug}`);
      return NextResponse.json(post);
    }
    // Return all posts if no slug is provided
    const now = Date.now();
    if (cachedPosts && cacheTimestamp && now - cacheTimestamp < CACHE_TTL) {
      console.log(`[API] Returning cached posts (${cachedPosts.length})`);
      return NextResponse.json(cachedPosts);
    }
    const posts = await getSortedPostsData();
    console.log(`[API] Read ${posts.length} posts from disk`);
    cachedPosts = posts;
    cacheTimestamp = now;
    return NextResponse.json(posts);
  } catch (error) {
    console.error('[API] Error in posts API:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}