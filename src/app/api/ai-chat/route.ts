import { GoogleAuth } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

// TODO: Replace with your actual Vertex AI endpoint and API key
const VERTEX_AI_API_URL = process.env.VERTEX_AI_API_URL!;
const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || 'my-portfolio-menno-1c10fc787618.json';
const PORTFOLIO_API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5154/api';

async function fetchPortfolioData() {
  // Fetch projects and blog posts as context
  const [projectsRes, blogRes] = await Promise.all([
    fetch(`${PORTFOLIO_API_BASE}/projects`),
    fetch(`${PORTFOLIO_API_BASE}/blogposts`)
  ]);
  const projects = projectsRes.ok ? await projectsRes.json() : [];
  const blogposts = blogRes.ok ? await blogRes.json() : [];
  return { projects, blogposts };
}

async function getAccessToken() {
  const isVercel = !!process.env.VERCEL;
  const credentials = isVercel && process.env.GOOGLE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
    : undefined;
  const keyFile = !isVercel
    ? process.env.GOOGLE_APPLICATION_CREDENTIALS || 'my-portfolio-menno-1c10fc787618.json'
    : undefined;
  const auth = new GoogleAuth({
    credentials,
    keyFile,
    scopes: 'https://www.googleapis.com/auth/cloud-platform',
  });
  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  return accessToken?.token || accessToken;
}

export async function POST(request: NextRequest) {
  try {
    // Debug: Log environment variables and file existence
    console.log('VERTEX_AI_API_URL:', process.env.VERTEX_AI_API_URL);
    console.log('GOOGLE_APPLICATION_CREDENTIALS:', GOOGLE_APPLICATION_CREDENTIALS);
    try {
      const fileExists = fs.existsSync(GOOGLE_APPLICATION_CREDENTIALS);
      console.log('Service account key file exists:', fileExists);
      if (fileExists) {
        const stats = fs.statSync(GOOGLE_APPLICATION_CREDENTIALS);
        console.log('Service account key file size:', stats.size);
      }
    } catch (fileErr) {
      console.error('Error checking service account key file:', fileErr);
    }

    const { message } = await request.json();
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Fetch portfolio data for context
    const context = await fetchPortfolioData();

    // Prepare prompt for Vertex AI
    const prompt = `You are an AI assistant for Menno's portfolio. Use the following data to answer user questions.\n\nProjects: ${JSON.stringify(context.projects)}\n\nBlogPosts: ${JSON.stringify(context.blogposts)}\n\nUser: ${message}`;

    // Get OAuth2 access token
    const accessToken = await getAccessToken();

    // Call Vertex AI with Bearer token
    const vertexRes = await fetch(VERTEX_AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ]
      }),
    });

    if (!vertexRes.ok) {
      const err = await vertexRes.text();
      console.error('Vertex AI error:', err);
      return NextResponse.json({ error: 'Vertex AI error', details: err }, { status: 500 });
    }
    const vertexData = await vertexRes.json();
    console.log('Vertex AI raw response:', JSON.stringify(vertexData));
    // Gemini generateContent returns candidates array
    let aiResponse = 'No response from AI.';
    if (vertexData && Array.isArray(vertexData.candidates) && vertexData.candidates[0]?.content?.parts?.[0]?.text) {
      aiResponse = vertexData.candidates[0].content.parts[0].text;
    } else if (vertexData && Array.isArray(vertexData.candidates) && vertexData.candidates[0]?.content?.parts) {
      aiResponse = vertexData.candidates[0].content.parts.map((p: any) => p.text).filter(Boolean).join('\n');
    }
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('API /ai-chat error:', error, error instanceof Error ? error.stack : '');
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error', stack: error instanceof Error ? error.stack : '' }, { status: 500 });
  }
}
