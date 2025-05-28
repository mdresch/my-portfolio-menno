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
export async function loadRagDocuments(forceRefresh = false) {
  const now = new Date();
  const isCacheStale = !ragCache.lastUpdated || 
    (now.getTime() - ragCache.lastUpdated.getTime() > CACHE_TIMEOUT);
  
  if (forceRefresh || isCacheStale) {
    try {
      console.log('Refreshing RAG document cache...');
      
      // Load all documents concurrently for better performance
      const [blogContent, projectContent, riskContent] = await Promise.all([
        fs.promises.readFile(path.join(process.cwd(), 'data/blog-rag-documents.json'), 'utf8'),
        fs.promises.readFile(path.join(process.cwd(), 'data/project-rag-documents.json'), 'utf8'),
        fs.promises.readFile(path.join(process.cwd(), 'data/blog-rag-risk-documents.json'), 'utf8')
      ]);
      
      ragCache.blog = JSON.parse(blogContent);
      ragCache.project = JSON.parse(projectContent);
      ragCache.risk = JSON.parse(riskContent);
      
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
export async function refreshRagDocuments() {
  return await loadRagDocuments(true);
}

/**
 * Get all RAG documents combined into a single array
 */
export async function getAllRagDocuments() {
  const docs = await loadRagDocuments();
  return [
    ...docs.blog,
    ...docs.project,
    ...docs.risk,
  ];
}

/**
 * Get RAG documents by type
 */
export async function getRagDocumentsByType(type: 'blog' | 'project' | 'risk') {
  const docs = await loadRagDocuments();
  if (type === 'blog' || type === 'project' || type === 'risk') {
    return docs[type];
  } else {
    throw new Error(`Invalid document type: ${type}`);
  }
}
