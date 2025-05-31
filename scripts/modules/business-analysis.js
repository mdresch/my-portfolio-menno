// scripts/modules/business-analysis.js
// Business problem analysis and generation

import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  safeReadFile,
  safeParseJson,
  extractFirstParagraph,
  logInfo,
  logError,
  sanitizeForLogging
} from '../utils.js';

// ES module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REQUIREMENTS_AGENT_API = 'http://localhost:3000/api/requirements-agent';

/**
 * Security function to sanitize content for logging
 * @param {string} content - Content to sanitize
 * @returns {string} Sanitized content safe for logging
 */
function sanitizeForLogging(content) {
  if (typeof content !== 'string') {
    content = String(content);
  }
  // Remove or escape potentially dangerous characters for log injection
  return content
    .replace(/[\r\n]/g, ' ') // Replace newlines with spaces
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/[<>'"&]/g, (char) => { // Escape HTML/XML chars
      const escapeMap = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '&': '&amp;' };
      return escapeMap[char] || char;
    });
}

/**
 * Generate a business problem statement using LLM
 * @param {Array} stack - Technology stack
 * @param {string} contextBundle - Project context
 * @returns {Promise<string>} Business problem statement
 */
export async function generateBusinessProblemLLM(stack, contextBundle) {
  const instructions = `You are an expert requirements analyst. Given the technology stack and project context, generate a concise, specific, and actionable business problem statement for a modern developer portfolio platform. Avoid generic or vague language. Use details from the context. Return only the business problem statement as a plain string.`;
  
  try {
    const response = await fetch(REQUIREMENTS_AGENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        technologyStack: stack,
        contextBundle,
        instructions,
        requestBusinessProblem: true
      })
    });
    
    const text = await response.text();
    
    // Sanitize response before logging to prevent log injection
    const sanitizedResponse = sanitizeForLogging(text.slice(0, 200) + (text.length > 200 ? '...' : ''));
    console.log('Raw LLM business problem response:', sanitizedResponse);
    
    // Check if response looks like JSON (starts with { or [)
    if (text.trim().startsWith('{') || text.trim().startsWith('[')) {
      try {
        const parsed = JSON.parse(text);
        if (parsed && parsed.error) {
          console.warn('[FALLBACK] LLM API returned error, using fallback business problem statement.');
          logInfo('Using fallback for business problem statement due to LLM API error.');
          return getFallbackBusinessProblem();
        }
        // If it's valid JSON but not an error, it might be a quoted string
        return typeof parsed === 'string' ? parsed : text.replace(/^"|"$/g, '');
      } catch (error) {
        console.warn('Response looks like JSON but failed to parse:', error);
        // Fall through to treat as plain text
      }
    }
    
    // Treat as plain text response (which is expected for business problem statements)
    return text.replace(/^"|"$/g, '').trim();
  } catch (e) {
    console.warn('[FALLBACK] LLM API unreachable, using fallback business problem statement.');
    logInfo('Using fallback for business problem statement due to LLM API unreachability.');
    return getFallbackBusinessProblem();
  }
}

/**
 * Analyze project structure to generate business problem statement
 * @returns {Promise<string>} Business problem statement
 */
export async function analyzeProject() {
  // 1. Prefer docs/business-problem-statement.md if it exists and is non-empty
  const statementPath = path.join(__dirname, '../../docs/business-problem-statement.md');
  const statementContent = await safeReadFile(statementPath);
  if (statementContent) {
    try {
      const content = statementContent.replace(/#.*/g, '').trim();
      if (content && content.length > 0) {
        // Remove markdown comments and headers, return first non-empty paragraph
        return extractFirstParagraph(content);
      }
    } catch (error) {
      logError('Error reading business-problem-statement.md:', error);
    }
  }
  
  // 2. Otherwise, try README.md
  const readmePath = path.join(__dirname, '../../README.md');
  const readmeContent = await safeReadFile(readmePath);
  if (readmeContent) {
    try {
      const firstParagraph = extractFirstParagraph(readmeContent);
      if (firstParagraph && firstParagraph.trim().length > 0) return firstParagraph.trim();
    } catch (error) {
      logError('Error reading README.md:', error);
    }
  }
  
  // 3. Otherwise, try to summarize package.json description
  const pkgPath = path.join(__dirname, '../../package.json');
  const pkgContent = await safeReadFile(pkgPath);
  if (pkgContent) {
    try {
      const pkg = safeParseJson(pkgContent);
      if (pkg && pkg.description && pkg.description.trim().length > 0) return pkg.description.trim();
    } catch (error) {
      logError('Error reading package.json:', error);
    }
  }
  
  // 4. Fallback
  logInfo('Using fallback for business problem statement in analyzeProject after checking local files.');
  return getFallbackBusinessProblem();
}

/**
 * Get fallback business problem statement
 * @returns {string} Fallback business problem
 */
function getFallbackBusinessProblem() {
  return '[FALLBACK] Automated fallback: Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.';
}
