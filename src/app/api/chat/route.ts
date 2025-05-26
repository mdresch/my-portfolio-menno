import { VertexAI } from '@google-cloud/vertexai';
import { NextRequest, NextResponse } from 'next/server';

// Securely load service account credentials for Vercel
function getVertexAIInstance() {
  const isVercel = !!process.env.VERCEL;
  const project = process.env.GOOGLE_CLOUD_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION || 'us-central1';
  if (!project) throw new Error('GOOGLE_CLOUD_PROJECT env var is required');
  if (isVercel) {
    const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccount) throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY env var is required on Vercel');
    return new VertexAI({
      project,
      location,
      credentials: JSON.parse(serviceAccount)
    });
  } else {
    // Local: use ADC or GOOGLE_APPLICATION_CREDENTIALS
    return new VertexAI({ project, location });
  }
}

// Use env for model name
const MODEL_ID = process.env.VERTEX_AI_MODEL || 'projects/my-portfolio-menno/locations/us-central1/publishers/google/models/gemini-2.5-flash-preview-05-20';

// Simple in-memory rate limit (per IP, dev only)
const rateLimitMap = new Map<string, { count: number; last: number }>();
const RATE_LIMIT = 10; // max requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

export async function POST(req: NextRequest) {
  try {
    // Enforce App Check token in production
    const appCheckToken = req.headers.get('X-Firebase-AppCheck');
    if (!appCheckToken && process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Missing App Check token' }, { status: 401 });
    }
    // Rate limiting (per IP, dev only)
    const ip = req.headers.get('x-forwarded-for') || 'local';
    const now = Date.now();
    const rl = rateLimitMap.get(ip) || { count: 0, last: now };
    if (now - rl.last > RATE_LIMIT_WINDOW) {
      rl.count = 0;
      rl.last = now;
    }
    rl.count++;
    rateLimitMap.set(ip, rl);
    if (rl.count > RATE_LIMIT) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    const { message, systemPrompt } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }
    // Combine systemPrompt and message if systemPrompt is provided
    const prompt = systemPrompt ? `${systemPrompt}\n${message}` : message;
    // Get the generative model
    const vertexAI = getVertexAIInstance();
    const generativeModel = vertexAI.preview.getGenerativeModel({
      model: MODEL_ID,
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.4,
        topP: 0.8,
        topK: 40
      },
    });
    try {
      // Generate content
      const result = await generativeModel.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });
      const response = result.response;
      if (!response?.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format from Vertex AI');
      }
      const text = response.candidates[0].content.parts[0].text;
      // Enhanced response with metadata
      return NextResponse.json({
        response: text,
        metadata: {
          timestamp: new Date().toISOString(),
          model: MODEL_ID,
          tokensUsed: response.usageMetadata?.totalTokenCount || 0,
          wordCount: text.split(/\s+/).length,
          responseTime: Date.now(),
          generationConfig: {
            temperature: 0.4,
            topP: 0.8,
            topK: 40
          }
        }
      });
    } catch (generateError) {
      console.error('Content generation error:', generateError);
      const errorDetails = generateError instanceof Error ? {
        message: generateError.message,
        name: generateError.name,
        stack: generateError.stack,
        ...(Object.fromEntries(Object.entries(generateError)))
      } : generateError;
      return NextResponse.json({
        error: 'Content generation failed',
        details: errorDetails
      }, { status: 500 });
    }
  } catch (err) {
    console.error('AI generation failed:', err);
    return NextResponse.json({
      error: 'AI generation failed',
      details: err instanceof Error ? err.message : 'Unknown error',
      code: err instanceof Error && 'code' in err ? err.code : undefined
    }, { status: 500 });
  }
}