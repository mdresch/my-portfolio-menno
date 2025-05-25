import { VertexAI } from '@google-cloud/vertexai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Vertex AI
const vertexAI = new VertexAI({
  project: process.env.GOOGLE_CLOUD_PROJECT,
  location: 'us-central1',
});

const model = 'projects/my-portfolio-menno/locations/us-central1/publishers/google/models/gemini-2.5-flash-preview-05-20';

export async function POST(req: NextRequest) {
  try {
    const { message, systemPrompt } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Log configuration for debugging
    console.log('Vertex AI Configuration:', {
      project: process.env.GOOGLE_CLOUD_PROJECT,
      location: 'us-central1',
      model: model
    });

    // Combine systemPrompt and message if systemPrompt is provided
    const prompt = systemPrompt ? `${systemPrompt}\n${message}` : message;

    // Get the generative model
    const generativeModel = vertexAI.preview.getGenerativeModel({
      model: model,
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
      }      const text = response.candidates[0].content.parts[0].text;
      
      // Enhanced response with metadata
      return NextResponse.json({ 
        response: text,
        metadata: {
          timestamp: new Date().toISOString(),
          model: 'gemini-2.5-flash-preview',
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
      // Try to get more details about the error
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