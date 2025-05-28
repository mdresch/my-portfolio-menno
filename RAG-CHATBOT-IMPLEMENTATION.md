# RAG Chatbot Implementation

This document summarizes the implementation of the Retrieval Augmented Generation (RAG) chatbot using Google's Gemini model for the portfolio website.

## Implemented Components

### 1. RAG API Endpoint
- Created a new API endpoint at `/api/rag-chat/route.ts` that:
  - Loads RAG documents from JSON files
  - Generates embeddings for user queries using Vertex AI Embeddings API
  - Performs vector search to find relevant documents
  - Formats a system prompt with retrieved content
  - Communicates with Google's Gemini model via Vertex AI
  - Returns AI responses with metadata about sources

### 2. RAG Chat Interface
- Created a dedicated chat interface at `/app/chat/rag-chat/page.tsx` that:
  - Provides a clean, user-friendly interface
  - Shows source attribution for AI responses
  - Displays similarity scores for retrieved documents
  - Maintains conversation history

### 3. Navigation
- Added a navigation layout for the chat section to switch between different chat interfaces

### 4. Vector Similarity
- Implemented vector similarity functions in `/lib/vector-similarity.ts` for:
  - Cosine similarity
  - Euclidean distance
  - Dot product calculations

### 5. Documentation & Setup
- Updated README with instructions
- Created `.env.local.example` with required environment variables
- Added content extraction scripts to package.json

## Testing the Implementation

1. Create a `.env.local` file with your Vertex AI credentials:
   ```
   VERTEX_AI_API_URL=https://us-central1-aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/publishers/google/models/gemini-pro:generateContent
   VERTEX_AI_EMBEDDING_API_URL=https://us-central1-aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/publishers/google/models/textembedding-gecko:predict
   GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account-key.json
   ```

2. Run the content extraction scripts to ensure RAG documents are up-to-date:
   ```bash
   npm run extract-all-content
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Navigate to `http://localhost:3000/chat/rag-chat` to test the RAG chatbot.

5. Ask questions about the portfolio content, such as:
   - "Tell me about Menno's most recent project"
   - "What technologies does Menno work with?"
   - "Summarize Menno's blog posts about web development"

## Production Considerations

For a production deployment, consider:

1. **Pre-generating Embeddings**: Rather than generating embeddings on-the-fly, pre-compute them during the build process.

2. **Vector Database**: Use a proper vector database like Pinecone, Weaviate, or Vertex AI Vector Search instead of in-memory storage.

3. **Caching**: Implement caching for common queries to reduce API costs.

4. **Rate Limiting**: Add rate limiting to prevent abuse of the Vertex AI APIs.

5. **Error Handling**: Enhance error handling for edge cases when APIs are unavailable.

6. **Monitoring**: Add logging and monitoring for the RAG system to track usage and quality.
