import { NextRequest, NextResponse } from "next/server";
import { genkit } from "genkit";
import { enableFirebaseTelemetry } from "@genkit-ai/firebase";
import { gemini15Flash, googleAI } from "@genkit-ai/googleai";

// Only enable telemetry if Google Cloud Project ID is configured
// This prevents build-time errors when the project ID is not set
if (process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.GCLOUD_PROJECT) {
  try {
    enableFirebaseTelemetry();
  } catch (error) {
    // Silently fail if telemetry can't be enabled (e.g., missing credentials)
    // This is expected in development or when Google Cloud is not configured
  }
}




// Initialize Genkit with GoogleAI plugin
// The plugin automatically reads GOOGLE_GENAI_API_KEY from environment variables
const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
    }),
  ],
  model: gemini15Flash,
});


export async function POST(req: NextRequest) {
  try {
    const { theme } = await req.json();
    const prompt = `Suggest an item for the menu of a ${theme} themed restaurant`;
    const { text } = await ai.generate({
      prompt,
      model: gemini15Flash,
      config: { temperature: 1 }
    });
    return NextResponse.json({ suggestion: text });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Genkit POST error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}