import { NextRequest, NextResponse } from 'next/server';
import { getPostDataFromFile, getSortedPostsData } from '@/lib/markdown';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    
    console.log(`API request for ${slug ? `post: ${slug}` : 'all posts'}`);
    
    if (slug) {
      const post = await getPostDataFromFile(slug);
      
      if (!post) {
        console.log(`Post not found: ${slug}`);
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      
      return NextResponse.json(post);
    }
    
    // Return all posts if no slug is provided
    const posts = await getSortedPostsData();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error in posts API:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}