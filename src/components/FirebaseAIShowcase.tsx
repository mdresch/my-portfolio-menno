import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import React, { useState } from "react";

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

// Debug: Log Firebase env variables at runtime
console.log("FIREBASE ENV VARS:", {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

// Available models with default fallback
export const availableModels: string[] = [
  "gemini-2.0-flash-exp",
  "gemini-1.5-pro",
  "gemini-1.5-flash",
  "gemini-2.0-flash"
];

// Validate configuration
function validateFirebaseConfig() {
  const requiredEnvVars = [
    "NEXT_PUBLIC_FIREBASE_API_KEY",
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "NEXT_PUBLIC_FIREBASE_APP_ID"
  ];

  const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missing.length > 0) {
    console.error("Missing Firebase environment variables:", missing);
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
    throw new Error("Firebase configuration is incomplete");
  }

  // Initialize Firebase only if it hasn&apos;t been initialized already
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize services
  auth = getAuth(app);
  db = getFirestore(app);

} catch (error) {
  console.error("Firebase initialization error:", error);
  // Create dummy objects to prevent undefined errors
  app = {} as FirebaseApp;
  auth = {} as Auth;
  db = {} as Firestore;
}

// AI Response functions with improved error handling
export async function generateAIResponse(prompt: string, model: string = "gemini-2.0-flash-exp"): Promise<string> {
  try {
    // Validate inputs
    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      throw new Error("Invalid prompt provided");
    }

    if (!model || typeof model !== "string") {
      throw new Error("Invalid model specified");
    }

    console.log(`Generating AI response with model: ${model}`);

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        prompt: prompt.trim(), 
        model 
      }),
    });

    // Check if the response is ok
    if (!response.ok) {
      let errorMessage = "Failed to generate response";
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.response) {
      throw new Error("No response data received from AI service");
    }

    return data.response;

  } catch (error) {
    console.error("Error in generateAIResponse:", error);
    
    // Provide user-friendly error messages
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to AI service. Please check your connection and try again.");
    }
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error("An unexpected error occurred while generating the response");
  }
}

export async function generateAIResponseDirect(prompt: string, model: string = "gemini-2.0-flash-exp"): Promise<string> {
  try {
    // For now, use the API route method
    // In the future, you can implement direct Firebase AI calls here
    return await generateAIResponse(prompt, model);
  } catch (error) {
    console.error("Error in generateAIResponseDirect:", error);
    
    if (error instanceof Error) {
      throw new Error(`Direct AI generation failed: ${error.message}`);
    }
    
    throw new Error("Failed to generate AI response using direct method");
  }
}

// Export with proper error handling
export { app, auth, db };

// Helper function to check if Firebase is properly initialized
export function isFirebaseInitialized(): boolean {
  try {
    return getApps().length > 0 && !!auth && !!db;
  } catch (error) {
    console.error("Error checking Firebase initialization:", error);
    return false;
  }
}

// Example prompts for the AI playground
const examplePrompts = [
  "Summarize my portfolio in 2 sentences.",
  "What is the most impressive project in this portfolio?",
  "Suggest improvements for my portfolio website.",
  "List the technologies used in my projects.",
  "Write a short bio for the portfolio owner."
];

// Default export: export a real React component for use in pages
const FirebaseAIShowcase: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState(availableModels[0]);
  const [method, setMethod] = useState<"api" | "direct">("api");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value);
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => setModel(e.target.value);
  const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => setMethod(e.target.value as "api" | "direct");
  const handleExample = (ex: string) => setPrompt(ex);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse("");
    try {
      let aiResponse = "";
      if (method === "api") {
        aiResponse = await generateAIResponse(prompt, model);
      } else {
        aiResponse = await generateAIResponseDirect(prompt, model);
      }
      setResponse(aiResponse);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white/10 rounded-lg text-white max-w-2xl mx-auto shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Firebase AI Playground</h2>
      <p className="mb-2 text-slate-200">Test Vertex AI and Firebase integration with live prompts and model selection.</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {examplePrompts.map((ex, i) => (
          <button
            key={i}
            className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 text-xs"
            onClick={() => handleExample(ex)}
            type="button"
          >
            {ex}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm mb-1 font-semibold">Prompt</label>
          <textarea
            className="w-full p-2 rounded bg-slate-900 border border-slate-700 text-white min-h-[60px]"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Type your prompt here..."
            required
          />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <label className="block text-xs mb-1">Model</label>
            <select
              className="bg-slate-800 text-white rounded p-1"
              value={model}
              onChange={handleModelChange}
            >
              {availableModels.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs mb-1">Method</label>
            <div className="flex gap-2">
              <label className="inline-flex items-center text-xs">
                <input
                  type="radio"
                  name="method"
                  value="api"
                  checked={method === "api"}
                  onChange={handleMethodChange}
                  className="mr-1"
                />
                API
              </label>
              <label className="inline-flex items-center text-xs">
                <input
                  type="radio"
                  name="method"
                  value="direct"
                  checked={method === "direct"}
                  onChange={handleMethodChange}
                  className="mr-1"
                />
                Direct
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold disabled:opacity-50"
            disabled={loading || !prompt.trim()}
          >
            {loading ? "Generating..." : "Send"}
          </button>
        </div>
      </form>
      <div className="mt-6">
        {error && (
          <div className="bg-red-800 text-red-100 p-3 rounded mb-2">{error}</div>
        )}
        {response && !error && (
          <div className="bg-slate-800 p-4 rounded text-slate-100 whitespace-pre-line">
            <span className="block text-xs text-slate-400 mb-1">AI Response:</span>
            {response}
          </div>
        )}
        {!response && !error && !loading && (
          <div className="text-xs text-slate-400 mt-2">Enter a prompt and click Send to see the AI response.</div>
        )}
      </div>
      <div className="mt-8 text-xs text-slate-400">
        <div>Firebase initialized: <span className={isFirebaseInitialized() ? "text-green-400" : "text-red-400"}>{isFirebaseInitialized() ? "Yes" : "No"}</span></div>
        <div>Available models: {availableModels.join(", ")}</div>
        <div>Method: <span className="font-mono">{method}</span></div>
      </div>
    </div>
  );
};

export default FirebaseAIShowcase;