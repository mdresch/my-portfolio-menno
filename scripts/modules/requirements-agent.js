// scripts/modules/requirements-agent.js
// Requirements agent interaction and role-based requirements generation

import fetch from 'node-fetch';
import {
  safeWriteFile,
  logInfo,
  logError,
  sanitizeForLogging
} from '../utils.js';
import { REQUIREMENTS_DIR } from '../../config/paths.js';
import path from 'path';

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
 * Determine if requirements agent should be called based on business statement
 * @param {string} statement - Business problem statement
 * @returns {boolean} Whether to call requirements agent
 */
export function shouldRunRequirementsAgent(statement) {
  if (!statement || statement.trim().length === 0) return false;
  
  // Don't run for fallback statements unless they're very detailed
  if (statement.includes('[FALLBACK]') && statement.length < 200) {
    return false;
  }
  
  return true;
}

/**
 * Call the requirements agent to generate role-based requirements
 * @param {string} statement - Business problem statement
 * @param {Array} technologyStack - Technology stack array
 * @returns {Promise<Array>} Array of role objects with needs and processes
 */
export async function callRequirementsAgent(statement, technologyStack) {
  try {
    console.log('Sending to requirements agent:', {
      businessProblem: statement,
      technologyStack
    });

    const response = await fetch(REQUIREMENTS_AGENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        businessProblem: statement,
        technologyStack
      })
    });

    const responseText = await response.text();
    
    // Sanitize response before logging to prevent log injection
    const sanitizedResponse = sanitizeForLogging(responseText.slice(0, 200) + '...');
    console.log('Raw requirements agent response:', sanitizedResponse);
    
    const data = JSON.parse(responseText);
    return data.roles || [];
  } catch (error) {
    logError('Error calling requirements agent:', error);
    return [];
  }
}

/**
 * Save requirements agent output to markdown file
 * @param {Array} roles - Array of role objects
 */
export async function saveRequirementsOutput(roles) {
  let content = '# Requirements Agent Output: Roles, Needs, and Processes\n\n';
  
  roles.forEach(role => {
    content += `## ${role.role}\n`;
    content += `**Needs:**\n`;
    role.needs.forEach(need => {
      content += `- ${need}\n`;
    });
    content += `**Processes:**\n`;
    role.processes.forEach(process => {
      content += `- ${process}\n`;
    });
    content += '\n';
  });
  
  const outputPath = path.join(REQUIREMENTS_DIR, 'requirements-agent-output.md');
  await safeWriteFile(outputPath, content);
  logInfo('Requirements agent output saved.');
}
