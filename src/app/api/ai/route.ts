import { NextRequest, NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { getAI, getGenerativeModel, VertexAIBackend } from "firebase/ai";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig);

// Initialize the Vertex AI Gemini API backend service
const ai = getAI(firebaseApp, { backend: new VertexAIBackend() });

export async function POST(request: NextRequest) {
  try {
    const { prompt, model: modelName = 'gemini-2.0-flash' } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Create a `GenerativeModel` instance with the specified model
    const model = getGenerativeModel(ai, { model: modelName });

    // Generate content using Firebase AI
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ 
      response: text,
      model: modelName,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error generating AI response:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate response', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
