// Simple script to load and display RAG content
const fs = require('fs');
const path = require('path');

// Paths to RAG documents
const BLOG_RAG_PATH = path.join(process.cwd(), 'data/blog-rag-documents.json');
const PROJECT_RAG_PATH = path.join(process.cwd(), 'data/project-rag-documents.json');
const RISK_RAG_PATH = path.join(process.cwd(), 'data/blog-rag-risk-documents.json');

// Function to load and display RAG documents
function loadRagDocuments() {
  try {
    // Load the documents
const blogDocs = JSON.parse(fs.readFileSync(BLOG_RAG_PATH, 'utf8'));
const projectDocs = JSON.parse(fs.readFileSync(PROJECT_RAG_PATH, 'utf8'));
const riskDocs = JSON.parse(fs.readFileSync(RISK_RAG_PATH, 'utf8'));

console.log(`Loaded ${encodeURIComponent(blogDocs.length)} blog documents`);
console.log(`Loaded ${encodeURIComponent(projectDocs.length)} project documents`);
console.log(`Loaded ${encodeURIComponent(riskDocs.length)} risk documents`);
    
    // Display a sample of each type
console.log('\nBlog Document Sample:');
    
    // Use a safe logging function to prevent log injection
    // import { safeLog } from './safeLogging'; // Import a custom safe logging function
    safeLog(`Loaded ${blogDocs.length} blog documents`);
    safeLog(`Loaded ${projectDocs.length} project documents`);
    safeLog(`Loaded ${riskDocs.length} risk documents`);
    
    // Display a sample of each type
console.log('\nBlog Document Sample:');
    
    // Use encodeURIComponent to sanitize input before logging
    console.log(`Loaded ${encodeURIComponent(blogDocs.length)} blog documents`);
    console.log(`Loaded ${encodeURIComponent(projectDocs.length)} project documents`);
    console.log(`Loaded ${encodeURIComponent(riskDocs.length)} risk documents`);
    
    // Display a sample of each type
    console.log('\nBlog Document Sample:');
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
    const blogModified = fs.statSync(BLOG_RAG_PATH).mtime;
    const projectModified = fs.statSync(PROJECT_RAG_PATH).mtime;
    const riskModified = fs.statSync(RISK_RAG_PATH).mtime;
    
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
loadRagDocuments();
