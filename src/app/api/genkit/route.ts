import { NextRequest, NextResponse } from "next/server";
import { genkit } from "genkit";
import { enableFirebaseTelemetry } from "@genkit-ai/firebase";
import { gemini15Flash, googleAI } from "@genkit-ai/googleai";

enableFirebaseTelemetry();




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