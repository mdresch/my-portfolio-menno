// scripts/modules/project-context.js
// Project context gathering and analysis

import path from 'path';
import { fileURLToPath } from 'url';
import {
  safeReadFile,
  safeWriteFile,
  getFilesByGlob,
  logError,
  logInfo
} from '../utils.js';
import { REQUIREMENTS_DIR } from '../../config/paths.js';

// ES module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Gather comprehensive project context from various sources
 * @returns {Promise<string>} Gathered project context
 */
export async function gatherProjectContext() {
  let contextBundle = '';
  
  // 1. Summarize all markdown files in docs/
  const docsDir = path.join(__dirname, '../../docs');
  const docFiles = getFilesByGlob('**/*.md', docsDir);
  if (docFiles.length) {
    const docPromises = docFiles.map(async (file) => {
      const filePath = path.join(docsDir, file);
      try {
        const content = await safeReadFile(filePath);
        if (content) return `docs/${file}: ${content.slice(0, 800)}\n`;
      } catch (error) {
        logError(`Error reading docs/${file}:`, error);
      }
      return '';
    });
    const docResults = await Promise.all(docPromises);
    contextBundle += docResults.join('');
  }
  
  // 2. Summarize all markdown files in content/blog/
  const blogDir = path.join(__dirname, '../../content/blog');
  const blogFiles = getFilesByGlob('**/*.md', blogDir);
  if (blogFiles.length) {
    const blogPromises = blogFiles.map(async (file) => {
      const filePath = path.join(blogDir, file);
      try {
        const content = await safeReadFile(filePath);
        if (content) return `blog/${file}: ${content.slice(0, 400)}\n`;
      } catch (error) {
        logError(`Error reading blog/${file}:`, error);
      }
      return '';
    });
    const blogResults = await Promise.all(blogPromises);
    contextBundle += blogResults.join('');
  }
  
  // 3. Summarize all markdown files in content/project/
  const projectDir = path.join(__dirname, '../../content/project');
  const projectFiles = getFilesByGlob('**/*.md', projectDir);
  if (projectFiles.length) {
    const projectPromises = projectFiles.map(async (file) => {
      const filePath = path.join(projectDir, file);
      try {
        const content = await safeReadFile(filePath);
        if (content) return `project/${file}: ${content.slice(0, 400)}\n`;
      } catch (error) {
        logError(`Error reading project/${file}:`, error);
      }
      return '';
    });
    const projectResults = await Promise.all(projectPromises);
    contextBundle += projectResults.join('');
  }
  
  // 4. Include key source files with broad context impact
  const keyFiles = [
    { path: 'src/app/layout.tsx', label: 'main layout' },
    { path: 'src/app/page.tsx', label: 'homepage' },
    { path: 'src/components/ui/', label: 'ui components' }
  ];
  
  for (const { path: filePath, label } of keyFiles) {
    const fullPath = path.join(__dirname, '../../', filePath);
    try {
      const content = await safeReadFile(fullPath);
      if (content) {
        contextBundle += `${label} (${filePath}): ${content.slice(0, 600)}\n`;
      }
    } catch (error) {
      logError(`Error reading ${filePath}:`, error);
    }
  }
  
  return contextBundle;
}

/**
 * Save gathered project context to file
 * @param {string} contextBundle - Project context to save
 */
export async function saveProjectContext(contextBundle) {
  const contextPath = path.join(REQUIREMENTS_DIR, 'gathered-project-context.txt');
  await safeWriteFile(contextPath, contextBundle);
  logInfo(`Gathered project context saved to ${contextPath}`);
}

/**
 * Estimate token count for a string (rough approximation)
 * @param {string} str - String to estimate tokens for
 * @returns {number} Estimated token count
 */
export function estimateTokenCount(str) {
  // Rough approximation: 1 token ≈ 4 characters
  return Math.ceil(str.length / 4);
}

/**
 * Fit context bundle to token limit by truncating if necessary
 * @param {string} contextBundle - Context to fit
 * @param {number} maxTokens - Maximum token limit
 * @returns {Promise<string>} Fitted context
 */
export async function fitContextToTokenLimit(contextBundle, maxTokens = 6000) {
  const estimatedTokens = estimateTokenCount(contextBundle);
  if (estimatedTokens <= maxTokens) {
    return contextBundle;
  }
  
  // Truncate to fit within token limit
  const maxChars = maxTokens * 4; // Rough conversion back to characters
  const truncated = contextBundle.slice(0, maxChars);
  
  // Try to end at a reasonable boundary (end of line)
  const lastNewline = truncated.lastIndexOf('\n');
  if (lastNewline > maxChars * 0.9) { // If we can find a newline in the last 10%
    return truncated.slice(0, lastNewline) + '\n[TRUNCATED FOR TOKEN LIMIT]';
  }
  
  return truncated + '[TRUNCATED FOR TOKEN LIMIT]';
}
