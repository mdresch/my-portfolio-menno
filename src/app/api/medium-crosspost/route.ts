import { NextRequest, NextResponse } from 'next/server';

const MEDIUM_API_URL = 'https://api.medium.com/v1';

export async function POST(request: NextRequest) {
  try {
    const { post } = await request.json();
    const mediumToken = process.env.MEDIUM_INTEGRATION_TOKEN;
    if (!mediumToken) {
      return NextResponse.json({ error: 'MEDIUM_INTEGRATION_TOKEN is not set in environment.' }, { status: 500 });
    }
    // Get userId from Medium
    const userRes = await fetch(`${MEDIUM_API_URL}/me`, {
      headers: { 'Authorization': `Bearer ${mediumToken}` }
    });
    const userData = await userRes.json();
    if (!userData.data?.id) {
      return NextResponse.json({ error: 'Failed to fetch Medium user ID.' }, { status: 500 });
    }
    // Prepare post data
    const payload = {
      title: post.title,
      contentFormat: 'markdown',
      content: post.content,
      tags: post.categories?.slice(0, 5) || [],
      canonicalUrl: post.canonicalUrl || '',
      publishStatus: 'draft',
    };
    // Post to Medium
    const res = await fetch(`${MEDIUM_API_URL}/users/${userData.data.id}/posts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mediumToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.errors) {
      return NextResponse.json({ error: data.errors }, { status: 400 });
    }
    return NextResponse.json({ success: true, url: data.data?.url });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
