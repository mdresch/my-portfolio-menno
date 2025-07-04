// MINIMAL APPROACH FOR CI/CD ENVIRONMENT
// This simplified loader returns empty arrays to avoid TypeErrors

/**
 * Load RAG documents from disk
 * This version is simplified for CI/CD to avoid file system access
 */
export async function loadRagDocuments(_forceRefresh = false) {
  return {
    blog: [],
    project: [],
    risk: [],
    lastUpdated: new Date(),
  };
}

/**
 * Force reload of RAG documents from disk
 */
export async function refreshRagDocuments() {
  return loadRagDocuments(true);
}

/**
 * Get all RAG documents combined into a single array
 */
export async function getAllRagDocuments() {
  return [];
}

/**
 * Get RAG documents by type
 */
export async function getRagDocumentsByType(_type: "blog" | "project" | "risk") {
  return [];
}
