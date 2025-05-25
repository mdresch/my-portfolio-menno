// Example script showing how to use Firebase AI with the same pattern as provided
import { initializeApp } from "firebase/app";
import { getAI, getGenerativeModel, VertexAIBackend } from "firebase/ai";

// Firebase configuration - replace with your actual config
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

// Create a `GenerativeModel` instance with a model that supports your use case
const model = getGenerativeModel(ai, { model: "gemini-2.0-flash" });

// Wrap in an async function so you can use await
async function run() {
  // Provide a prompt that contains text
  const prompt = "Write a story about a magic backpack."

  // To generate text output, call generateContent with the text input
  const result = await model.generateContent(prompt);

  const response = result.response;
  const text = response.text();
  console.log(text);
}

// Export for use in other modules
export { firebaseApp, ai, model, run };

// Example usage:
// run().catch(console.error);
