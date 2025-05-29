import { GoogleAuth } from "google-auth-library";
import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limit (per IP, dev only)
const rateLimitMap = new Map<string, { count: number; last: number }>();
const RATE_LIMIT = 10; // max requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

async function getAccessToken() {
  const isVercel = !!process.env.VERCEL;
  const credentials = isVercel && process.env.GOOGLE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
    : undefined;
  const keyFile = !isVercel
    ? process.env.GOOGLE_APPLICATION_CREDENTIALS || "my-portfolio-menno-1c10fc787618.json"
    : undefined;
  const auth = new GoogleAuth({
    credentials,
    keyFile,
    scopes: "https://www.googleapis.com/auth/cloud-platform",
  });
  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  return accessToken?.token || accessToken;
}

export async function POST(request: NextRequest) {
  try {
    console.log("AI API endpoint called");
    // Enforce App Check token for production
    const appCheckToken = request.headers.get("X-Firebase-AppCheck");
    if (!appCheckToken && process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Missing App Check token" },
        { status: 401 }
      );
    }
    // Rate limiting (per IP, dev only)
    const ip = request.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const rl = rateLimitMap.get(ip) || { count: 0, last: now };
    if (now - rl.last > RATE_LIMIT_WINDOW) {
      rl.count = 0;
      rl.last = now;
    }
    rl.count++;
    rateLimitMap.set(ip, rl);
    if (rl.count > RATE_LIMIT) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }
    const body = await request.json();
    const { prompt, model } = body;
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required and must be a string" },
        { status: 400 }
      );
    }
    if (!model || typeof model !== "string") {
      return NextResponse.json(
        { error: "Model is required and must be a string" },
        { status: 400 }
      );
    }
    // Call Vertex AI
    const VERTEX_AI_API_URL = process.env.VERTEX_AI_API_URL!;
    const accessToken = await getAccessToken();
    const vertexRes = await fetch(VERTEX_AI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ]
      }),
    });
    if (!vertexRes.ok) {
      const err = await vertexRes.text();
      return NextResponse.json({ error: "Vertex AI error", details: err }, { status: 500 });
    }
    const vertexData = await vertexRes.json();
    let aiResponse = "No response from AI.";
    if (vertexData && Array.isArray(vertexData.candidates) && vertexData.candidates[0]?.content?.parts?.[0]?.text) {
      aiResponse = vertexData.candidates[0].content.parts[0].text;
    } else if (vertexData && Array.isArray(vertexData.candidates) && vertexData.candidates[0]?.content?.parts) {
      aiResponse = vertexData.candidates[0].content.parts.map((p: any) => p.text).filter(Boolean).join("\n");
    }
    return NextResponse.json({
      response: aiResponse,
      model: model,
      timestamp: new Date().toISOString(),
      success: true
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error: "Internal server error occurred while processing your request",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

// Test endpoint to verify API is working
export async function GET() {
  console.log("AI API GET endpoint called");
  
  return NextResponse.json({
    message: "AI API endpoint is running",
    timestamp: new Date().toISOString(),
    availableModels: [
      "gemini-2.0-flash-exp",
      "gemini-1.5-pro",
      "gemini-1.5-flash",
      "gemini-2.0-flash"
    ],
    methods: ["POST", "GET"],
    status: "healthy"
  });
}
