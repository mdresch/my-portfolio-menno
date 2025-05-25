import { NextRequest, NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';

// TODO: Replace with your actual Vertex AI endpoint and credentials
const VERTEX_AI_ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/my-portfolio-menno/locations/us-central1/models/gemini-2.5-pro-preview-05-06:predict';
const VERTEX_AI_API_KEY = process.env.VERTEX_AI_API_KEY;
const PORTFOLIO_API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5154/api';

const auth = new GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS, // set this env var below
  scopes: 'https://www.googleapis.com/auth/cloud-platform',
});

async function getAccessToken() {
  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  return tokenResponse.token;
}

async function fetchPortfolioSummary() {
  // Fetch projects, blog posts, and skills in parallel
  const [projects, blogPosts, skills] = await Promise.all([
    fetch(`${PORTFOLIO_API_BASE}/projects`).then(r => r.json()),
    fetch(`${PORTFOLIO_API_BASE}/blogposts`).then(r => r.json()),
    fetch(`${PORTFOLIO_API_BASE}/skills`).then(r => r.json()),
  ]);
  return { projects, blogPosts, skills };
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  if (!message) {
    return NextResponse.json({ error: 'No message provided' }, { status: 400 });
  }

  try {
    // Fetch portfolio data
    const portfolioData = await fetchPortfolioSummary();

    // Prepare prompt/context for Vertex AI
    const prompt = `User: ${message}\n\nPortfolio Data: ${JSON.stringify(portfolioData)}`;

    // Call Vertex AI (Gemini/PaLM)
    const accessToken = await getAccessToken();
    const vertexRes = await fetch(VERTEX_AI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        instances: [{ content: prompt }],
        parameters: { temperature: 0.2, maxOutputTokens: 512 },
      }),
    });

    let vertexData;
    let aiResponse;
    if (vertexRes.ok) {
      vertexData = await vertexRes.json();
      aiResponse = vertexData?.predictions?.[0]?.content || 'No response from AI.';
      return NextResponse.json({ response: aiResponse });
    } else {
      let errorText = await vertexRes.text();
      let error;
      try {
        error = JSON.parse(errorText);
      } catch {
        error = errorText;
      }
      console.error('Vertex AI error:', error);
      return NextResponse.json({ error, status: vertexRes.status }, { status: 500 });
    }
  } catch (err) {
    console.error('API Chat Route Error:', err);
    return NextResponse.json({ error: String(err), details: err }, { status: 500 });
  }
}
