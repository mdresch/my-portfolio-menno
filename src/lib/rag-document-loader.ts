import fs from 'fs';
import path from 'path';

// Cache for RAG documents
let ragCache: {
  blog: any[];
  project: any[];
  risk: any[];
  lastUpdated: Date | null;
} = {
  blog: [],
  project: [],
  risk: [],
  lastUpdated: null,
};

// Cache timeout in milliseconds (e.g., 1 hour)
const CACHE_TIMEOUT = 60 * 60 * 1000;

/**
 * Load RAG documents from disk
 * If the cache is fresh, returns cached documents
 * Otherwise reloads from disk
 */
export function loadRagDocuments(forceRefresh = false) {
  const now = new Date();
  const isCacheStale = !ragCache.lastUpdated || 
    (now.getTime() - ragCache.lastUpdated.getTime() > CACHE_TIMEOUT);
  
  if (forceRefresh || isCacheStale) {
    try {
      console.log('Refreshing RAG document cache...');
      
      ragCache.blog = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data/blog-rag-documents.json'), 'utf8')
      );
      
      ragCache.project = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data/project-rag-documents.json'), 'utf8')
      );
      
      ragCache.risk = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data/blog-rag-risk-documents.json'), 'utf8')
      );
      
      ragCache.lastUpdated = now;
      
      console.log(`RAG cache refreshed. Loaded ${ragCache.blog.length} blog, ${ragCache.project.length} project, and ${ragCache.risk.length} risk documents`);
    } catch (error) {
      console.error('Error loading RAG documents:', error);
      // If we have a cache, use it even if stale
      if (!ragCache.lastUpdated) {
        throw error; // No cache available, must propagate error
      }
      console.warn('Using stale RAG cache due to load error');
    }
  }
  
  return {
    blog: ragCache.blog,
    project: ragCache.project,
    risk: ragCache.risk,
    lastUpdated: ragCache.lastUpdated,
  };
}

/**
 * Force reload of RAG documents from disk
 */
export function refreshRagDocuments() {
  return loadRagDocuments(true);
}

/**
 * Get all RAG documents combined into a single array
 */
export function getAllRagDocuments() {
  const docs = loadRagDocuments();
  return [
    ...docs.blog,
    ...docs.project,
    ...docs.risk,
  ];
}

/**
 * Get RAG documents by type
 */
export function getRagDocumentsByType(type: 'blog' | 'project' | 'risk') {
  const docs = loadRagDocuments();
  return docs[type] || [];
}
