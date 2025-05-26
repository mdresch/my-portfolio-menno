import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

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

// Available models with default fallback
export const availableModels: string[] = [
  'gemini-2.0-flash-exp',
  'gemini-1.5-pro',
  'gemini-1.5-flash',
  'gemini-2.0-flash'
];

// Validate configuration
function validateFirebaseConfig() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID'
  ];

  const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missing.length > 0) {
    console.error('Missing Firebase environment variables:', missing);
    return false;
  }
  
  return true;
}

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  if (!validateFirebaseConfig()) {
    throw new Error('Firebase configuration is incomplete');
  }

  // Initialize Firebase only if it hasn't been initialized already
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize services
  auth = getAuth(app);
  db = getFirestore(app);

} catch (error) {
  console.error('Firebase initialization error:', error);
  // Create dummy objects to prevent undefined errors
  app = {} as FirebaseApp;
  auth = {} as Auth;
  db = {} as Firestore;
}

// AI Response functions with improved error handling
export async function generateAIResponse(prompt: string, model: string = 'gemini-2.0-flash-exp'): Promise<string> {
  try {
    // Validate inputs
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      throw new Error('Invalid prompt provided');
    }

    if (!model || typeof model !== 'string') {
      throw new Error('Invalid model specified');
    }

    console.log(`Generating AI response with model: ${model}`);

    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        prompt: prompt.trim(), 
        model 
      }),
    });

    // Check if the response is ok
    if (!response.ok) {
      let errorMessage = 'Failed to generate response';
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch (parseError) {
        console.error('Failed to parse error response:', parseError);
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.response) {
      throw new Error('No response data received from AI service');
    }

    return data.response;

  } catch (error) {
    console.error('Error in generateAIResponse:', error);
    
    // Provide user-friendly error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error: Unable to connect to AI service. Please check your connection and try again.');
    }
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('An unexpected error occurred while generating the response');
  }
}

export async function generateAIResponseDirect(prompt: string, model: string = 'gemini-2.0-flash-exp'): Promise<string> {
  try {
    // For now, use the API route method
    // In the future, you can implement direct Firebase AI calls here
    return await generateAIResponse(prompt, model);
  } catch (error) {
    console.error('Error in generateAIResponseDirect:', error);
    
    if (error instanceof Error) {
      throw new Error(`Direct AI generation failed: ${error.message}`);
    }
    
    throw new Error('Failed to generate AI response using direct method');
  }
}

// Export with proper error handling
export { app, auth, db };

// Helper function to check if Firebase is properly initialized
export function isFirebaseInitialized(): boolean {
  try {
    return getApps().length > 0 && !!auth && !!db;
  } catch (error) {
    console.error('Error checking Firebase initialization:', error);
    return false;
  }
}

// Default export
export default app;