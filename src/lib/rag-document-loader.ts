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
  const now = new Date();
  const isCacheStale = !ragCache.lastUpdated || 
    (now.getTime() - ragCache.lastUpdated.getTime() > CACHE_TIMEOUT);
  
  if (forceRefresh || isCacheStale) {
    try {
      console.log("Refreshing RAG document cache...");
      
      // Load blog documents
      try {
        const blogContent = await fs.promises.readFile(path.join(process.cwd(), "data/blog-rag-documents.json"), "utf8");
        ragCache.blog = parseJsonSafely(blogContent, "blog");
      } catch (error) {
        console.error("Error loading blog documents:", error);
        ragCache.blog = [];
      }
      
      // Load project documents
      try {
        const projectContent = await fs.promises.readFile(path.join(process.cwd(), "data/project-rag-documents.json"), "utf8");
        ragCache.project = parseJsonSafely(projectContent, "project");
      } catch (error) {
        console.error("Error loading project documents:", error);
        ragCache.project = [];
      }
      
      // Load risk documents
      try {
        const riskContent = await fs.promises.readFile(path.join(process.cwd(), "data/blog-rag-risk-documents.json"), "utf8");
        ragCache.risk = parseJsonSafely(riskContent, "risk");
      } catch (error) {
        console.error("Error loading risk documents:", error);
        ragCache.risk = [];
      }
      
      // Ensure all cache properties are arrays
      ragCache.blog = Array.isArray(ragCache.blog) ? ragCache.blog : [];
      ragCache.project = Array.isArray(ragCache.project) ? ragCache.project : [];
      ragCache.risk = Array.isArray(ragCache.risk) ? ragCache.risk : [];
      
      ragCache.lastUpdated = now;
      
      console.log(`RAG cache refreshed. Loaded ${ragCache.blog.length} blog, ${ragCache.project.length} project, and ${ragCache.risk.length} risk documents`);
    } catch (error) {
      console.error("Error loading RAG documents:", error);
      // Ensure all cache properties are arrays
      ragCache.blog = Array.isArray(ragCache.blog) ? ragCache.blog : [];
      ragCache.project = Array.isArray(ragCache.project) ? ragCache.project : [];
      ragCache.risk = Array.isArray(ragCache.risk) ? ragCache.risk : [];
      ragCache.lastUpdated = now;
    }
  }
  
  return {
    blog: Array.isArray(ragCache.blog) ? ragCache.blog : [],
    project: Array.isArray(ragCache.project) ? ragCache.project : [],
    risk: Array.isArray(ragCache.risk) ? ragCache.risk : [],
    lastUpdated: ragCache.lastUpdated,
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
  const docs = await loadRagDocuments();
  return [
    ...(Array.isArray(docs.blog) ? docs.blog : []),
    ...(Array.isArray(docs.project) ? docs.project : []),
    ...(Array.isArray(docs.risk) ? docs.risk : []),
  ];
}

/**
 * Get RAG documents by type
 */
export async function getRagDocumentsByType(type: "blog" | "project" | "risk") {
  const docs = await loadRagDocuments();
  // Safely access and verify the type property exists and is an array
  if (docs && type in docs) {
    const result = docs[type];
    return Array.isArray(result) ? result : [];
  }
  return [];
}
