import { defineFlow } from "@genkit-ai/flow";
import { generate } from "@genkit-ai/ai"; // Make sure to import generate
import { Registry } from "@genkit-ai/core/registry";
import { gemini10Pro } from "@genkit-ai/googleai"; // Assuming gemini10Pro is correctly imported
import * as z from "zod";

/**
 * Input schema for chat messages.
 */
export const chatPromptSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
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
    name: "chatFlow",
    inputSchema: chatPromptSchema,
    outputSchema: chatResponseSchema,
    // Optionally add OpenAPI spec for Genkit UI
  },
  async (input) => {
    try {
      const registry = new Registry();
      const aiResult = await generate(
        registry,
        {
          model: gemini10Pro,
          prompt: input.message,
        }
      );

      return { response: aiResult.text };
    } catch (error) {
      console.error("Error in chatFlow:", error);
      // You might want to throw a more specific error or return a
      // structured error response that matches your outputSchema or a different one.
      // For now, re-throwing or returning a generic error message:
      return { response: "An error occurred while processing your request." };
    }
  }
);