/**
 * Mock implementation of Gemini API for development purposes
 * Used when the real Gemini API is unavailable or unnecessary for testing
 */

interface MockRequest {
  contents: {
    role: string;
    parts: { text: string }[];
  }[];
  generationConfig?: {
    temperature?: number;
    maxOutputTokens?: number;
  };
}

interface MockResponse {
  candidates: {
    content: {
      role: string;
      parts: { text: string }[];
    };
  }[];
}

const SYSTEM_PROMPT_MARKER = "You are an AI assistant for Menno's portfolio website. Answer the user's questions based ONLY on the relevant documents provided below.";

/**
 * Create a simple mock response for development purposes
 * This simulates Gemini API responses when the actual API isn't available
 */
export function createMockGeminiResponse(request: MockRequest): MockResponse {
  // Extract the user message and context
  const userMessages = request.contents.filter(content => content.role === 'user');
  
  if (userMessages.length === 0) {
    return mockError("No user message found in request");
  }
  
  // Check if we have a system prompt (first user message)
  let systemPrompt = "";
  let userQuery = "";
  let sources: string[] = [];
  
  // The first message is usually our system prompt with retrieved context
  if (userMessages[0].parts[0].text.includes(SYSTEM_PROMPT_MARKER)) {
    systemPrompt = userMessages[0].parts[0].text;
    
    // Extract sources from the prompt if present
    const sourceMatches = systemPrompt.match(/Source: ([^\n]+)/g);
    if (sourceMatches) {
      sources = sourceMatches.map(match => match.replace('Source: ', '').trim());
    }
    
    // Get the actual user query (usually the last user message)
    if (userMessages.length > 1) {
      userQuery = userMessages[userMessages.length - 1].parts[0].text;
    }
  } else {
    // If no system prompt, just use the last user message
    userQuery = userMessages[userMessages.length - 1].parts[0].text;
  }
  
  return {
    candidates: [
      {
        content: {
          role: "model",
          parts: [
            {
              text: generateMockResponse(userQuery, sources)
            }
          ]
        }
      }
    ]
  };
}

function generateMockResponse(userQuery: string, sources: string[]): string {
  // Create a basic mock response based on the query
  const lowercaseQuery = userQuery.toLowerCase();
  
  if (lowercaseQuery.includes("project") || lowercaseQuery.includes("work")) {
    return `Based on Menno's portfolio, he has worked on several interesting projects. ${
      sources.length > 0 
        ? `According to the sources [${sources.join(", ")}], `
        : ""
    }he specializes in web development and has experience with various technologies including React, Next.js, and cloud services.`;
  }
  
  if (lowercaseQuery.includes("skill") || lowercaseQuery.includes("technolog") || lowercaseQuery.includes("stack")) {
    return `Menno is skilled in various technologies. ${
      sources.length > 0 
        ? `According to the sources [${sources.join(", ")}], `
        : ""
    }his tech stack includes JavaScript/TypeScript, React, Next.js, Node.js, and he has experience with cloud platforms like Azure and Google Cloud.`;
  }
  
  if (lowercaseQuery.includes("blog") || lowercaseQuery.includes("article") || lowercaseQuery.includes("post")) {
    return `Menno has written several blog posts on his portfolio website. ${
      sources.length > 0 
        ? `According to the sources [${sources.join(", ")}], `
        : ""
    }topics include web development, technology trends, and best practices.`;
  }
  
  // Default response for other queries
  return `I'm a mock version of the RAG chatbot for Menno's portfolio. ${
    sources.length > 0 
      ? `I found some potentially relevant sources [${sources.join(", ")}], but `
      : ""
  }since we're in development mode and don't have access to the actual Gemini API, I'm providing this simulated response. In production, you would receive an AI-generated answer based on the content in Menno's portfolio.`;
}

function mockError(message: string): MockResponse {
  return {
    candidates: [
      {
        content: {
          role: "model",
          parts: [
            {
              text: `[MOCK API ERROR: ${message}]`
            }
          ]
        }
      }
    ]
  };
}
