import { initializeApp, getApps, getApp } from "firebase/app";
import { getAI, getGenerativeModel, VertexAIBackend } from "firebase/ai";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize FirebaseApp (avoid multiple initialization)
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize the Vertex AI Gemini API backend service
const ai = getAI(firebaseApp, { backend: new VertexAIBackend() });

// AI Models available
export const availableModels = [
  'gemini-2.0-flash-exp',
  'gemini-2.0-flash',
  'gemini-1.5-pro',
  'gemini-1.5-flash',
];

// Create and cache models for better performance
const modelCache = new Map<string, ReturnType<typeof getGenerativeModel>>();

const getModel = (modelName: string) => {
  if (!modelCache.has(modelName)) {
    const model = getGenerativeModel(ai, { model: modelName });
    modelCache.set(modelName, model);
  }
  return modelCache.get(modelName)!;
};

// Direct Firebase AI function - can be used client-side
export const generateAIResponseDirect = async (prompt: string, modelName: string = 'gemini-2.0-flash') => {
  try {
    const model = getModel(modelName);
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};

// Helper function to call AI API (for server-side or when you want to use the API route)
export const generateAIResponse = async (prompt: string, modelName: string = 'gemini-2.0-flash-exp') => {
  try {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        model: modelName,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate response');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error calling AI API:', error);
    throw error;
  }
};

// Export for use in other components
export { firebaseApp };
