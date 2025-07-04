// Simple script to load and display RAG content
const fs = require('fs').promises;
const path = require('path');

// Paths to RAG documents
const BLOG_RAG_PATH = path.join(process.cwd(), 'data/blog-rag-documents.json');
const PROJECT_RAG_PATH = path.join(process.cwd(), 'data/project-rag-documents.json');
const RISK_RAG_PATH = path.join(process.cwd(), 'data/blog-rag-risk-documents.json');

// Define global variables for documents
let blogDocs = [];
let projectDocs = [];
let riskDocs = [];

// Hardened error handling for JSON parsing and array validation
async function loadRagDocuments() {
  try {
    // Load the documents
    const [blogContent, projectContent, riskContent] = await Promise.all([
      fs.readFile(BLOG_RAG_PATH, 'utf8'),
      fs.readFile(PROJECT_RAG_PATH, 'utf8'),
      fs.readFile(RISK_RAG_PATH, 'utf8')
    ]);

    const parseJsonSafely = (content, type) => {
      try {
        console.log(`Raw ${type} content:`, content.substring(0, 500));
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          console.log(`Loaded ${parsed.length} ${type} documents`);
          parsed.forEach((entry, index) => {
            if (typeof entry !== 'object' || entry === null) {
              console.warn(`${type} document at index ${index} is not a valid object:`, entry);
            }
          });
          return parsed;
        } else {
          console.warn(`${type} documents are not an array`);
          return [];
        }
      } catch (error) {
        console.error(`Error parsing ${type} documents:`, error);
        return [];
      }
    };

    blogDocs = parseJsonSafely(blogContent, 'blog');
    projectDocs = parseJsonSafely(projectContent, 'project');
    riskDocs = parseJsonSafely(riskContent, 'risk');

    // Display a sample of each type
    const displaySample = (docs, type) => {
      if (docs.length > 0) {
        console.log(`\n${type} Document Sample:`);
        console.log(JSON.stringify(docs[0], null, 2).substring(0, 500) + '...');
      } else {
        console.log(`\nNo ${type} documents available to display.`);
      }
    };

    displaySample(blogDocs, 'Blog');
    displaySample(projectDocs, 'Project');
    displaySample(riskDocs, 'Risk');

    // Get file modification times
    const [blogStats, projectStats, riskStats] = await Promise.all([
      fs.stat(BLOG_RAG_PATH),
      fs.stat(PROJECT_RAG_PATH),
      fs.stat(RISK_RAG_PATH)
    ]);

    const blogModified = blogStats.mtime;
    const projectModified = projectStats.mtime;
    const riskModified = riskStats.mtime;

    console.log('\nFile Last Modified:');
    console.log(`Blog documents: ${blogModified}`);
    console.log(`Project documents: ${projectModified}`);
    console.log(`Risk documents: ${riskModified}`);

    // Calculate age of the files
    const now = new Date();
    const calculateAge = (modifiedTime) => Math.floor((now - modifiedTime) / (1000 * 60 * 60 * 24));

    console.log('\nFile Age (days):');
    console.log(`Blog documents: ${calculateAge(blogModified)} days old`);
    console.log(`Project documents: ${calculateAge(projectModified)} days old`);
    console.log(`Risk documents: ${calculateAge(riskModified)} days old`);

    return true;
  } catch (error) {
    console.error('Error loading RAG documents:', error);
    return false;
  }
}

// Execute
loadRagDocuments().catch(err => {
  console.error('Failed to load RAG documents:', err);
  process.exit(1);
});
