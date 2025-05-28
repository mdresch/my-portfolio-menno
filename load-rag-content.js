// Simple script to load and display RAG content
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');

// Paths to RAG documents
const BLOG_RAG_PATH = path.join(process.cwd(), 'data/blog-rag-documents.json');
const PROJECT_RAG_PATH = path.join(process.cwd(), 'data/project-rag-documents.json');
const RISK_RAG_PATH = path.join(process.cwd(), 'data/blog-rag-risk-documents.json');

// Function to load and display RAG documents
async function loadRagDocuments() {
  try {
    // Load the documents
    const [blogContent, projectContent, riskContent] = await Promise.all([
      fs.readFile(BLOG_RAG_PATH, 'utf8'),
      fs.readFile(PROJECT_RAG_PATH, 'utf8'),
      fs.readFile(RISK_RAG_PATH, 'utf8')
    ]);
    
    const blogDocs = JSON.parse(blogContent);
    const projectDocs = JSON.parse(projectContent);
    const riskDocs = JSON.parse(riskContent);
    
    console.log(`Loaded ${blogDocs.length} blog documents`);
    console.log(`Loaded ${projectDocs.length} project documents`);
    console.log(`Loaded ${riskDocs.length} risk documents`);
    
    // Display a sample of each type
    console.log('\nBlog Document Sample:');
    console.log(JSON.stringify(blogDocs[0], null, 2).substring(0, 500) + '...');
    
    console.log('\nProject Document Sample:');
    console.log(JSON.stringify(projectDocs[0], null, 2).substring(0, 500) + '...');
    
    console.log('\nRisk Document Sample:');
    console.log(JSON.stringify(riskDocs[0], null, 2).substring(0, 500) + '...');
    
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
    const blogAge = Math.floor((now - blogModified) / (1000 * 60 * 60 * 24)); // days
    const projectAge = Math.floor((now - projectModified) / (1000 * 60 * 60 * 24)); // days
    const riskAge = Math.floor((now - riskModified) / (1000 * 60 * 60 * 24)); // days
    
    console.log('\nFile Age (days):');
    console.log(`Blog documents: ${blogAge} days old`);
    console.log(`Project documents: ${projectAge} days old`);
    console.log(`Risk documents: ${riskAge} days old`);
    
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
