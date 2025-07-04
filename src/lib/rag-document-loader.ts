import fs from "fs";
import path from "path";

// Cache for RAG documents
const ragCache: {
  blog: any[];
  project: any[];
  risk: any[];
  lastUpdated: Date | null;
} = {
  blog: [],
  project: [],
  risk: [],
  lastUpdated: new Date(), // Initialize with current date to avoid stale cache checks
};

// Cache timeout in milliseconds (e.g., 1 hour)
const CACHE_TIMEOUT = 60 * 60 * 1000;

/**
 * Parse JSON safely and ensure it's an array
 */
function parseJsonSafely(content: string, type: string): any[] {
  try {
    if (!content || typeof content !== "string" || content.trim() === "") {
      console.warn(`Empty ${type} content, returning empty array`);
      return [];
    }
    
    const parsed = JSON.parse(content);
    
    if (!parsed) {
      console.warn(`Null ${type} parsed result, returning empty array`);
      return [];
    }
    
    if (Array.isArray(parsed)) {
      return parsed;
    } else {
      console.warn(`${type} documents are not an array, using empty array instead`);
      return [];
    }
  } catch (error) {
    console.error(`Error parsing ${type} documents:`, error);
    return [];
  }
}

/**
 * Load RAG documents from disk
 * If the cache is fresh, returns cached documents
 * Otherwise reloads from disk
 */
export async function loadRagDocuments(forceRefresh = false) {
  // IMPORTANT: Initialize with empty arrays to prevent "length" of undefined errors
  if (!ragCache.blog) ragCache.blog = [];
  if (!ragCache.project) ragCache.project = [];
  if (!ragCache.risk) ragCache.risk = [];
  
  const now = new Date();
  const isCacheStale = !ragCache.lastUpdated || 
    (now.getTime() - (ragCache.lastUpdated?.getTime() || 0) > CACHE_TIMEOUT);
  
  // For CI/CD environments, just use empty arrays to avoid file system issues
  const isCIEnvironment = process.env.CI === 'true';
  
  if ((forceRefresh || isCacheStale) && !isCIEnvironment) {
    try {
      console.log("Refreshing RAG document cache...");
      
      // Always initialize with empty arrays before attempting to load
      ragCache.blog = [];
      ragCache.project = [];
      ragCache.risk = [];
      
      // Load blog documents
      try {
        const blogContent = await fs.promises.readFile(path.join(process.cwd(), "data/blog-rag-documents.json"), "utf8");
        const parsed = parseJsonSafely(blogContent, "blog");
        ragCache.blog = parsed;
      } catch (error) {
        console.error("Error loading blog documents:", error);
        ragCache.blog = [];
      }
      
      // Load project documents
      try {
        const projectContent = await fs.promises.readFile(path.join(process.cwd(), "data/project-rag-documents.json"), "utf8");
        const parsed = parseJsonSafely(projectContent, "project");
        ragCache.project = parsed;
      } catch (error) {
        console.error("Error loading project documents:", error);
        ragCache.project = [];
      }
      
      // Load risk documents
      try {
        const riskContent = await fs.promises.readFile(path.join(process.cwd(), "data/blog-rag-risk-documents.json"), "utf8");
        const parsed = parseJsonSafely(riskContent, "risk");
        ragCache.risk = parsed;
      } catch (error) {
        console.error("Error loading risk documents:", error);
        ragCache.risk = [];
      }
      
      // Triple-check that all cache properties are arrays
      ragCache.blog = Array.isArray(ragCache.blog) ? ragCache.blog : [];
      ragCache.project = Array.isArray(ragCache.project) ? ragCache.project : [];
      ragCache.risk = Array.isArray(ragCache.risk) ? ragCache.risk : [];
      
      ragCache.lastUpdated = now;
      
      // Use optional chaining to be extra safe when logging
      console.log(`RAG cache refreshed. Loaded ${ragCache.blog?.length || 0} blog, ${ragCache.project?.length || 0} project, and ${ragCache.risk?.length || 0} risk documents`);
    } catch (error) {
      console.error("Error loading RAG documents:", error);
      // Reset to empty arrays in case of any error
      ragCache.blog = [];
      ragCache.project = [];
      ragCache.risk = [];
      ragCache.lastUpdated = now;
    }
  } else if (isCIEnvironment) {
    console.log("CI environment detected, using empty RAG arrays");
    ragCache.blog = [];
    ragCache.project = [];
    ragCache.risk = [];
    ragCache.lastUpdated = now;
  }
  
  // Always ensure we return valid arrays, even if ragCache becomes corrupted
  const blog = Array.isArray(ragCache?.blog) ? ragCache.blog : [];
  const project = Array.isArray(ragCache?.project) ? ragCache.project : [];
  const risk = Array.isArray(ragCache?.risk) ? ragCache.risk : [];
  
  return {
    blog,
    project,
    risk,
    lastUpdated: ragCache?.lastUpdated || new Date(),
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
  try {
    const docs = await loadRagDocuments();
    if (!docs) return [];
    
    const blog = Array.isArray(docs?.blog) ? docs.blog : [];
    const project = Array.isArray(docs?.project) ? docs.project : [];
    const risk = Array.isArray(docs?.risk) ? docs.risk : [];
    
    return [...blog, ...project, ...risk];
  } catch (error) {
    console.error("Error in getAllRagDocuments:", error);
    return [];
  }
}

/**
 * Get RAG documents by type
 */
export async function getRagDocumentsByType(type: "blog" | "project" | "risk") {
  try {
    const docs = await loadRagDocuments();
    
    // Guard against docs being undefined or null
    if (!docs) return [];
    
    // Safely access the property using optional chaining
    if (type === "blog") {
      return Array.isArray(docs?.blog) ? docs.blog : [];
    } else if (type === "project") {
      return Array.isArray(docs?.project) ? docs.project : [];
    } else if (type === "risk") {
      return Array.isArray(docs?.risk) ? docs.risk : [];
    }
    
    return [];
  } catch (error) {
    console.error(`Error getting RAG documents for type ${type}:`, error);
    return [];
  }
}
