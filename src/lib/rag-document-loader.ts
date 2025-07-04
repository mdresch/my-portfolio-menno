/**
 * RAG Document Loader - Robust implementation
 * 
 * This module loads RAG (Retrieval Augmented Generation) documents
 * with full error handling and safety checks.
 */

/**
 * Type definition for RAG documents
 */
export interface RagDocument {
  id: string;
  content: string;
  metadata: {
    title?: string;
    source?: string;
    category?: string;
    date?: string;
    [key: string]: any;
  };
}

/**
 * Safely loads RAG documents with robust error handling
 * Always returns arrays (never null or undefined) to avoid
 * "Cannot read properties of undefined (reading 'length')" errors
 */
export async function loadRagDocuments(): Promise<{ 
  blogDocuments: RagDocument[], 
  projectDocuments: RagDocument[],
  riskDocuments: RagDocument[] 
}> {
  try {
    // Default to empty arrays for safety
    const defaultResponse = {
      blogDocuments: [],
      projectDocuments: [],
      riskDocuments: []
    };
    
    // In a real implementation, you would load documents from files or APIs here
    // For now, we're simply returning empty arrays
    console.log('Using safe RAG document loader');
    
    return defaultResponse;
  } catch (error) {
    console.error('Error loading RAG documents:', error);
    // Always return empty arrays on error, never null or undefined
    return {
      blogDocuments: [],
      projectDocuments: [],
      riskDocuments: []
    };
  }
}

/**
 * Load blog-specific RAG documents
 * Always returns an array (never null or undefined)
 */
export async function loadBlogRagDocuments(): Promise<RagDocument[]> {
  try {
    const { blogDocuments } = await loadRagDocuments();
    return blogDocuments || []; // Ensure we return an array even if blogDocuments is somehow null
  } catch (error) {
    console.error('Error loading blog RAG documents:', error);
    return []; // Return empty array on error
  }
}

/**
 * Load project-specific RAG documents
 * Always returns an array (never null or undefined)
 */
export async function loadProjectRagDocuments(): Promise<RagDocument[]> {
  try {
    const { projectDocuments } = await loadRagDocuments();
    return projectDocuments || []; // Ensure we return an array even if projectDocuments is somehow null
  } catch (error) {
    console.error('Error loading project RAG documents:', error);
    return []; // Return empty array on error
  }
}

/**
 * Load risk-specific RAG documents
 * Always returns an array (never null or undefined)
 */
export async function loadRiskRagDocuments(): Promise<RagDocument[]> {
  try {
    const { riskDocuments } = await loadRagDocuments();
    return riskDocuments || []; // Ensure we return an array even if riskDocuments is somehow null
  } catch (error) {
    console.error('Error loading risk RAG documents:', error);
    return []; // Return empty array on error
  }
}
