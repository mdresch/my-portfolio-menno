import { GoogleAuth } from "google-auth-library";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { cosineDistance } from "@/lib/vector-similarity";
import * as mockGemini from "@/lib/mock-gemini";
import { loadRagDocuments } from "@/lib/rag-document-loader";

// Vertex AI endpoint for Gemini
const VERTEX_AI_API_URL = process.env.VERTEX_AI_API_URL!;
const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || "my-portfolio-menno-1c10fc787618.json";

// Simple in-memory vector store for embeddings
const documentEmbeddings: Record<string, number[]> = {};

async function getAccessToken() {
  const isVercel = !!process.env.VERCEL;
  const credentials = isVercel && process.env.GOOGLE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
    : undefined;
  const keyFile = !isVercel
    ? GOOGLE_APPLICATION_CREDENTIALS
    : undefined;
  
  const auth = new GoogleAuth({
    credentials,
    keyFile,
    scopes: "https://www.googleapis.com/auth/cloud-platform",
  });
  
  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  return accessToken?.token || accessToken;
}

// Generate embeddings using Vertex AI Embeddings API
async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const accessToken = await getAccessToken();
    const embeddingEndpoint = process.env.VERTEX_AI_EMBEDDING_API_URL;
    
    if (!embeddingEndpoint) {
      console.error("Embedding API URL not configured");
      return [];
    }
    
    console.log("Generating embedding for text:", text.substring(0, 50) + "...");
    
    // Format according to Vertex AI Embeddings API expectations
    const response = await fetch(embeddingEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        instances: [
          { content: text }
        ],
        parameters: {
          dimension: 768
        }
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Error generating embedding:", error);
      return [];
    }

    const result = await response.json();
    // The response format is different for Vertex AI predictions
    if (result && result.predictions && result.predictions.length > 0) {
      return result.predictions[0].embeddings.values || [];
    } else {
      console.error("Unexpected embedding response format:", JSON.stringify(result).substring(0, 100) + "...");
      return [];
    }
  } catch (error) {
    console.error("Failed to generate embedding:", error);
    return [];
  }
}

// Initialize document embeddings - ideally this should be done once at startup
// and stored in a proper vector database like Pinecone, Weaviate, etc.
async function initializeEmbeddings() {
  if (Object.keys(documentEmbeddings).length > 0) {
    return; // Already initialized
  }
  
  console.log("Initializing document embeddings...");
  
  // In a production system, we would use a proper vector database
  // For this demo, we'll generate embeddings on demand for the first request
  
  console.log("Document embeddings initialized");
}

// Find relevant documents for a query
async function findRelevantDocuments(query: string, topK: number = 3) {
  // For development/demo purposes, we'll use a keyword-based approach instead of embeddings
  // This will avoid API calls to the embedding service during development
  const isDev = process.env.NODE_ENV === "development";
  
  if (isDev) {
    console.log("Using keyword search instead of embeddings in development mode");
    return findDocumentsByKeywords(query, topK);
  }
  
  // In production, use embeddings-based search
  try {
    // Generate embedding for the query
    const queryEmbedding = await generateEmbedding(query);
    
    if (!queryEmbedding.length) {
      console.error("Failed to generate query embedding, falling back to keyword search");
      return findDocumentsByKeywords(query, topK);
    }
    
    // Load documents from the dynamic loader
    const ragDocs = await loadRagDocuments();
    
    // Combine all document sources
    const allDocuments = [
      ...ragDocs.blog,
      ...ragDocs.project,
      ...ragDocs.risk
    ];
    
    // For each document, generate embedding if not already present
    // (In production, this should be pre-computed and stored in a vector database)
    for (const doc of allDocuments) {
      if (!documentEmbeddings[doc.id]) {
        documentEmbeddings[doc.id] = await generateEmbedding(doc.content);
      }
    }
    
    // Calculate similarity scores
    const scoredDocuments = allDocuments.map(doc => {
      const similarity = 1 - cosineDistance(queryEmbedding, documentEmbeddings[doc.id]);
      return {
        ...doc,
        similarity
      };
    });
    
    // Sort by similarity (highest first) and take topK
    return scoredDocuments
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK);
  } catch (error) {
    console.error("Error in vector search:", error);
    // Fall back to keyword search
    return findDocumentsByKeywords(query, topK);
  }
}

// A simple keyword-based search function for development/fallback
async function findDocumentsByKeywords(query: string, topK: number = 3): Promise<any[]> {
  console.log("Performing keyword search for:", query);
  
  // Simple tokenization - split into words and normalize
  const queryTokens = query
    .toLowerCase()
    .split(/\W+/)
    .filter(word => word.length > 2 && !["the", "and", "for", "with", "that", "this"].includes(word));
  
  // Load documents from the dynamic loader
  const ragDocs = await loadRagDocuments();
  
  // Combine all documents
  const allDocuments = [
    ...ragDocs.blog,
    ...ragDocs.project,
    ...ragDocs.risk
  ];
  
  // Score documents by counting query token occurrences
  const scoredDocuments = allDocuments.map(doc => {
    const content = doc.content.toLowerCase();
    const title = doc.metadata.title.toLowerCase();
    
    // Count occurrences of each token
    let score = 0;
    queryTokens.forEach(token => {
      // Count matches in content
      const contentMatches = (content.match(new RegExp(token, "g")) || []).length;
      // Title matches are weighted higher
      const titleMatches = (title.match(new RegExp(token, "g")) || []).length * 3;
      
      score += contentMatches + titleMatches;
    });
    
    // Normalize score by document length to avoid favoring long documents too much
    const normalizedScore = score / (Math.log(content.length) || 1);
    
    return {
      ...doc,
      similarity: normalizedScore
    };
  });
  
  // Sort by score and take top K
  return scoredDocuments
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK);
}

// Format the system prompt with retrieved documents
function formatSystemPrompt(relevantDocuments: any[], userQuery: string) {
  const documentContexts = relevantDocuments.map(doc => {
    return `### Document: ${doc.metadata.title}
Source: ${doc.metadata.source}
Content:
${doc.content.substring(0, 1000)}${doc.content.length > 1000 ? "..." : ""}`;
  }).join("\n\n");
  
  return `You are an AI assistant for Menno's portfolio website. Answer the user's questions based ONLY on the relevant documents provided below. 
If you don't know the answer based on these documents, be honest and say you don't know, but you can suggest looking at other sections of the portfolio.
Do not make up information. Always provide attribution to the source documents when possible.

RELEVANT DOCUMENTS:
${documentContexts}

USER QUERY: ${userQuery}`;
}

export async function POST(request: NextRequest) {
  try {
    console.log("RAG Chat API request received");
    
    // Try to parse the request body
    let messageData;
    try {
      messageData = await request.json();
    } catch (jsonError) {
      console.error("Error parsing request JSON:", jsonError);
      return NextResponse.json({ error: "Invalid JSON in request" }, { status: 400 });
    }
    
    const { message, history = [] } = messageData;
    if (!message) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }
    
    console.log("Processing message:", message.substring(0, 50) + (message.length > 50 ? "..." : ""));
    
    // Skip embedding initialization in development for faster responses
    // await initializeEmbeddings();
    
    // Find relevant documents
    let relevantDocuments;
    try {
      relevantDocuments = await findRelevantDocuments(message);
      console.log(`Found ${relevantDocuments.length} relevant documents`);
    } catch (docError) {
      console.error("Error finding relevant documents:", docError);
      // If we can't find relevant documents, just continue with empty list
      relevantDocuments = [];
    }
    
    // Format system prompt with retrieved context
    const systemPrompt = formatSystemPrompt(relevantDocuments, message);
    
    // Get OAuth2 access token for Gemini API
    let accessToken;
    try {
      accessToken = await getAccessToken();
      console.log("Access token obtained successfully");
    } catch (tokenError) {
      console.error("Error getting access token:", tokenError);
      return NextResponse.json({ error: "Failed to authenticate with Google API" }, { status: 500 });
    }
    
    // Prepare conversation history
    const conversationHistory = history.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));
    
    // Add system prompt as first message from user
    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      },
      ...conversationHistory,
      {
        role: "user",
        parts: [{ text: message }]
      }
    ];
    
    // Use mock implementation in development mode
    const isDev = process.env.NODE_ENV === "development";
    const useMock = isDev || process.env.USE_MOCK_GEMINI === "true";
    
    let vertexData;
    
    if (useMock) {
      console.log("Using mock Gemini implementation");
      
      // Create a mock response
      const mockRequest = {
        contents,
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1024,
        }
      };
      
      vertexData = mockGemini.createMockGeminiResponse(mockRequest);
    } else {
      // Call actual Vertex AI Gemini API
      console.log("Sending request to Gemini API");
      let vertexRes;
      try {
        vertexRes = await fetch(VERTEX_AI_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 1024,
            }
          }),
        });
        
        // Handle API errors
        if (!vertexRes.ok) {
          const errText = await vertexRes.text();
          console.error("Vertex AI error response:", vertexRes.status, errText);
          
          // If we get a 404 (model not found), use the mock implementation instead
          if (vertexRes.status === 404) {
            console.log("Model not found, falling back to mock implementation");
            const mockRequest = {
              contents,
              generationConfig: {
                temperature: 0.2,
                maxOutputTokens: 1024,
              }
            };
            
            vertexData = mockGemini.createMockGeminiResponse(mockRequest);
          } else {
            // For other errors, return an error response
            return NextResponse.json({ 
              response: `I apologize, but I'm having trouble accessing my knowledge base at the moment. Here's what I know about your query without context: ${message}`,
              error: `Vertex AI returned status ${vertexRes.status}: ${errText}`,
              metadata: {
                sources: relevantDocuments.map(doc => doc.metadata.source),
                sourceTitles: relevantDocuments.map(doc => doc.metadata.title),
                similarities: relevantDocuments.map(doc => doc.similarity),
              }
            });
          }
        } else {
          // Parse the successful response
          try {
            vertexData = await vertexRes.json();
            console.log("Received response from Gemini API");
          } catch (jsonError) {
            console.error("Error parsing Gemini API response:", jsonError);
            return NextResponse.json({
              response: "I received a response, but couldn't interpret it correctly. This might be due to a temporary issue with the AI service.",
              error: jsonError instanceof Error ? jsonError.message : "Invalid JSON response"
            }, { status: 500 });
          }
        }
      } catch (fetchError) {
        console.error("Fetch error when calling Gemini API:", fetchError);
        
        // Fall back to mock implementation on network errors
        console.log("Network error, falling back to mock implementation");
        const mockRequest = {
          contents,
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1024,
          }
        };
        
        vertexData = mockGemini.createMockGeminiResponse(mockRequest);
      }
    }
    
    // At this point, vertexData is either from the real API or our mock implementation
    // Extract AI response
    let aiResponse = "No response from AI.";
    const metadata = {
      sources: relevantDocuments.map(doc => doc.metadata.source),
      sourceTitles: relevantDocuments.map(doc => doc.metadata.title),
      similarities: relevantDocuments.map(doc => doc.similarity),
      isMock: useMock || false
    };
    
    if (vertexData && Array.isArray(vertexData.candidates) && vertexData.candidates[0]?.content?.parts?.[0]?.text) {
      aiResponse = vertexData.candidates[0].content.parts[0].text;
    } else if (vertexData && Array.isArray(vertexData.candidates) && vertexData.candidates[0]?.content?.parts) {
      aiResponse = vertexData.candidates[0].content.parts.map((p: any) => p.text).filter(Boolean).join("\n");
    }
    
    return NextResponse.json({ 
      response: aiResponse,
      metadata
    });
  } catch (error) {
    console.error("API /rag-chat error:", error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : "Unknown error", 
      stack: error instanceof Error ? error.stack : "" 
    }, { status: 500 });
  }
}
