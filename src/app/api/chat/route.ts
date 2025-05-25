import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';
import { NextRequest, NextResponse } from 'next/server';

const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash,
});

export async function POST(req: NextRequest) {
  try {
    const { message, systemPrompt } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }
    // Combine systemPrompt and message if systemPrompt is provided
    const prompt = systemPrompt ? `${systemPrompt}\n${message}` : message;
    const { text } = await ai.generate(prompt);
    return NextResponse.json({ response: text });
  } catch (err) {
    console.error('AI generation failed:', err);
    return NextResponse.json({ error: 'AI generation failed' }, { status: 500 });
  }
}