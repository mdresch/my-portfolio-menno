import { defineFlow } from '@genkit-ai/flow';
import { geminiPro } from '@genkit-ai/vertexai';
import * as z from 'zod';

/**
 * Input schema for chat messages.
 */
export const chatPromptSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});

/**
 * Output schema for AI response.
 */
export const chatResponseSchema = z.object({
  response: z.string(),
});

/**
 * Genkit flow for AI chat.
 */
export const chatFlow = defineFlow(
  {
    name: 'chatFlow',
    inputSchema: chatPromptSchema,
    outputSchema: chatResponseSchema,
    // Optionally add OpenAPI spec for Genkit UI
  },
  async (input) => {
    const aiResult = await geminiPro.generate({
      prompt: input.message,
    });
    return { response: aiResult.text() };
  }
);