// scripts/modules/strategic-docs.js
// Strategic documentation generation using AI

import fetch from 'node-fetch';
import {
  safeWriteFile,
  logInfo,
  logError
} from '../utils.js';
import { REQUIREMENTS_DIR } from '../../config/paths.js';
import path from 'path';

const REQUIREMENTS_AGENT_API = 'http://localhost:3000/api/requirements-agent';

/**
 * Generate strategic sections (vision, mission, core values) using LLM
 * @param {string} statement - Business problem statement
 * @param {Array} stack - Technology stack
 * @param {string} contextBundle - Project context
 * @returns {Promise<Object>} Strategic sections object
 */
export async function generateStrategicSections(statement, stack, contextBundle) {
  const instructions = `Based on the business problem statement, technology stack, and project context, generate strategic sections for a developer portfolio platform. Return a JSON object with the following structure:
{
  "vision": "A compelling vision statement (1-2 sentences)",
  "mission": "A clear mission statement (2-3 sentences)", 
  "coreValues": ["Value 1 with brief explanation", "Value 2 with brief explanation", ...],
  "purpose": "A purpose statement explaining the platform's role (1-2 sentences)"
}`;

  try {
    const response = await fetch(REQUIREMENTS_AGENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        businessProblem: statement,
        technologyStack: stack,
        contextBundle,
        instructions,
        requestStrategicSections: true
      })
    });
    
    const text = await response.text();
    console.log('Raw LLM response:', text);
    
    try {
      const data = JSON.parse(text);
      console.log('LLM strategicSections data received:', data);
      return data;
    } catch (parseError) {
      console.warn('Failed to parse strategic sections response as JSON:', parseError);
      return getFallbackStrategicSections();
    }
  } catch (e) {
    console.warn('[FALLBACK] LLM API unreachable, using fallback strategic sections.');
    logInfo('Using fallback for strategic sections due to LLM API unreachability.');
    return getFallbackStrategicSections();
  }
}

/**
 * Save strategic sections to business problem markdown file
 * @param {string} statement - Business problem statement
 * @param {Object} data - Strategic sections data
 */
export async function saveStrategicSections(statement, data) {
  const content = `# Business Statement

${statement}
---

**Vision:**

${data.vision}

**Mission:**

${data.mission}

**Core Values:**

${data.coreValues.map(value => `- ${value}`).join('\n')}

**Purpose:**

${data.purpose}
`;

  console.log(`Writing business-problem.md with content: ${content.slice(0, 200)}... (truncated)`);
  
  const businessPath = path.join(REQUIREMENTS_DIR, 'business-problem.md');
  await safeWriteFile(businessPath, content);
  logInfo(`Business statement saved to ${businessPath}`);
}

/**
 * Get fallback strategic sections when AI is unavailable
 * @returns {Object} Fallback strategic sections
 */
function getFallbackStrategicSections() {
  return {
    "vision": "[FALLBACK] To empower developers to showcase their work and connect with opportunities through a modern, integrated portfolio platform.",
    "mission": "[FALLBACK] Provide a user-friendly, feature-rich platform for developers to present projects, publish blogs, and integrate with key developer services.",
    "coreValues": [
      "[FALLBACK] User empowerment",
      "[FALLBACK] Simplicity and usability", 
      "[FALLBACK] Integration and openness",
      "[FALLBACK] Data privacy and security",
      "[FALLBACK] Continuous improvement"
    ],
    "purpose": "[FALLBACK] Enable developers to build their personal brand and manage their digital presence with ease."
  };
}
