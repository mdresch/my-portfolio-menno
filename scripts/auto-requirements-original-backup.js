// scripts/auto-requirements.js
// This script automates project review, problem statement generation, requirements agent call, and documentation update.
console.log('SCRIPT_TOP: auto-requirements.js starting'); // Diagnostic

import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

// ES module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import {
  DOCS_DIR,
  REQUIREMENTS_DIR,
  PROBLEM_STATEMENT_PATH,
  REQUIREMENTS_OUTPUT_PATH,
  TECHNOLOGY_STACK_PATH,
  PROCESS_FLOWS_PATH,
  DATA_MODEL_PATH
} from '../config/paths.js'; // Ensure this path is correct and file is valid
import {
  safeReadFile,
  safeWriteFile,
  pathExists,
  ensureDirectory,
  safeParseJson,
  safeStringifyJson,
  loadJsonFile,
  logInfo,
  logWarning,
  logError,
  getFilesByGlob,
  getFilesByGlobSync,
  extractFirstParagraph,
  truncateString
} from './utils.js';

console.log('SCRIPT_INFO: REQUIREMENTS_DIR is:', REQUIREMENTS_DIR); // Diagnostic

// Define the Requirements Agent API endpoint
const REQUIREMENTS_AGENT_API = 'http://localhost:3000/api/requirements-agent';

// Security function to sanitize content for logging
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

// 1. Analyze project and generate a problem statement (simple heuristic, can be replaced with LLM call)
let lastStatement = '';

async function generateBusinessProblemLLM(stack, contextBundle) {
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
    console.log('Raw LLM business problem response:', text);
    // Try to parse error response
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (error) {
      console.warn('Failed to parse LLM response as JSON:', error);
    }
    if (parsed && parsed.error) {
      console.warn('[FALLBACK] LLM API returned error, using fallback business problem statement.');
      logInfo('Using fallback for business problem statement due to LLM API error.');
      return '[FALLBACK] Automated fallback: Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.';
    }
    return text.replace(/^"|"$/g, ''); // Remove quotes if returned as JSON string
  } catch (e) {
    console.warn('[FALLBACK] LLM API unreachable, using fallback business problem statement.');
    logInfo('Using fallback for business problem statement due to LLM API unreachability.');
    return '[FALLBACK] Automated fallback: Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.';
  }
}

async function analyzeProject() {
  // 1. Prefer docs/business-problem-statement.md if it exists and is non-empty
  const statementPath = path.join(__dirname, '../docs/business-problem-statement.md');
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
  const readmePath = path.join(__dirname, '../README.md');
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
  const pkgPath = path.join(__dirname, '../package.json');
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
  return '[FALLBACK] Automated fallback: Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.';
}

// 2. Save the business statement and strategic sections
async function saveBusinessStatementWithLLM() {
  const stack = await getTechnologyStack();
  const contextBundle = await gatherProjectContext();
  const businessProblem = await generateBusinessProblemLLM(stack, contextBundle);
  const strategicSections = await generateStrategicSections(businessProblem, stack, contextBundle);
  await saveStrategicSections(businessProblem, strategicSections);
}

async function gatherProjectContext() {
  let contextBundle = '';
  // 1. Summarize all markdown files in docs/
  const docsDir = path.join(__dirname, '../docs');
  const docFiles = getFilesByGlob('**/*.md', docsDir);
  if (docFiles.length) {
    const docPromises = docFiles.map(async (file) => {
      const filePath = path.join(docsDir, file);
      try {
        const content = await safeReadFile(filePath);
        if (content) return `docs/${file}: ${content.slice(0, 800)}
`;
      } catch (error) {
        logError(`Error reading docs/${file}:`, error);
      }
      return '';
    });
    const docResults = await Promise.all(docPromises);
    contextBundle += docResults.join('');
  }
  // 2. Summarize all markdown files in content/blog/
  const blogDir = path.join(__dirname, '../content/blog');
  const blogFiles = getFilesByGlob('**/*.md', blogDir);
  if (blogFiles.length) {
    for (const file of blogFiles) {
      const filePath = path.join(blogDir, file);
      try {
        const content = await safeReadFile(filePath);
        if (content) contextBundle += `blog/${file}: ${content.slice(0, 500)}\n`;
      } catch (error) {
        logError(`Error reading blog/${file}:`, error);
      }
    }
  }
  // 3. Summarize all markdown files in content/project/
  const projectDir = path.join(__dirname, '../content/project');
  const projectFiles = getFilesByGlob('**/*.md', projectDir);
  if (projectFiles.length) {
    for (const file of projectFiles) {
      const filePath = path.join(projectDir, file);
      try {
        const content = await safeReadFile(filePath);
        if (content) contextBundle += `project/${file}: ${content.slice(0, 500)}\n`;
      } catch (error) {
        logError(`Error reading project/${file}:`, error);
      }
    }
  }
  // 4. Add summaries of key config files
  const configFiles = [
    { path: '../README.md', key: 'README.md' },
    { path: '../package.json', key: 'package.json description' },
    { path: '../next.config.js', key: 'next.config.js' },
    { path: '../tsconfig.json', key: 'tsconfig.json' }
  ];
  for (const file of configFiles) {
    const filePath = path.join(__dirname, file.path);
    const content = await safeReadFile(filePath);
    if (content) {
      if (file.key === 'package.json description') {
        try {
          const pkg = safeParseJson(content);
          if (pkg && pkg.description) contextBundle += `${file.key}: ${pkg.description}\n`;
        } catch (error) {
          logError('Error parsing package.json:', error);
        }
      } else {
        contextBundle += `${file.key}: ${content.slice(0, 800)}\n`;
      }
    }
  }
  // Save the gathered context to a file for traceability
  const gatheredContextPath = path.join(REQUIREMENTS_DIR, 'gathered-project-context.txt');
  try {
    await safeWriteFile(gatheredContextPath, contextBundle);
    logInfo(`Gathered project context saved to ${gatheredContextPath}`);
  } catch (err) {
    logError('Failed to save gathered project context:', err);
  }
  // Summarize/truncate to fit LLM token limit
  const fittedContext = await fitContextToTokenLimit(contextBundle, 6000); // 6000 tokens default
  return fittedContext;
}

// Utility to estimate token count (roughly 4 chars per token for English)
function estimateTokenCount(str) {
  return Math.ceil(str.length / 4);
}

// Summarize or truncate context to fit within a token limit
async function fitContextToTokenLimit(contextBundle, maxTokens = 6000) {
  // If already fits, return as is
  if (estimateTokenCount(contextBundle) <= maxTokens) return contextBundle;

  // Split by section (file: ...\n) and prioritize docs/requirements, README, and project summaries
  const lines = contextBundle.split(/(?=^\w+\/|^README|^project\/|^blog\/|^docs\/)/m);
  let result = '';
  let tokens = 0;
  for (const line of lines) {
    const lineTokens = estimateTokenCount(line);
    if (tokens + lineTokens > maxTokens) break;
    result += line;
    tokens += lineTokens;
  }
  // If still too large, truncate
  if (estimateTokenCount(result) > maxTokens) {
    result = result.slice(0, maxTokens * 4); // crude char-based cut
  }
  // Add a marker if truncated
  if (estimateTokenCount(contextBundle) > maxTokens) {
    result += '\n[FALLBACK] Context truncated to fit LLM token limit.';
  }
  return result;
}

async function generateStrategicSections(statement, stack, contextBundle) {
  const instructions = `\nYou are an expert product strategist and requirements analyst. Given the business problem, technology stack, and project context, generate the following for a modern developer portfolio platform:\n- Vision: A clear, aspirational statement of the platform's long-term impact and purpose.\n- Mission: A concise summary of what the platform does and for whom.\n- Core Values: 3-7 guiding principles or beliefs that shape the platform's culture and priorities.\n- Purpose: A short, actionable statement of why the platform exists and the value it delivers.\nBe specific, actionable, and use language appropriate for a professional software product. Avoid generic or vague statements. Tailor the output to a portfolio platform for developers, with features like project showcases, blog publishing, analytics, and integrations.\nReturn a JSON object with keys: vision, mission, coreValues (array), and purpose.`;
  try {
    const response = await fetch(REQUIREMENTS_AGENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        businessProblem: statement,
        technologyStack: stack,
        requestStrategicSections: true,
        contextBundle,
        instructions
      })
    });
    const json = await response.text();
    console.log('Raw LLM response:', json.slice(0, 500) + (json.length > 500 ? '...' : ''));
    let parsed;
    try {
      parsed = JSON.parse(json);
    } catch (error) {
      console.error('Error parsing JSON response:', error);
      parsed = null;
    }
    if (parsed && parsed.error) {
      console.warn('[FALLBACK] LLM API returned error, using fallback strategic sections.');
      logInfo('Using fallback for strategic sections due to LLM API error.');
      try {
        parsed = JSON.parse(json);
      } catch (e) {
        parsed = null;
      }
    }
    if (parsed && parsed.error) {
      console.warn('[FALLBACK] LLM API returned error, using fallback strategic sections.');
      logInfo('Using fallback for strategic sections due to LLM API error.');
      return {
        vision: '[FALLBACK] To empower developers to showcase their work and connect with opportunities through a modern, integrated portfolio platform.',
        mission: '[FALLBACK] Provide a user-friendly, feature-rich platform for developers to present projects, publish blogs, and integrate with key developer services.',
        coreValues: [
          '[FALLBACK] User empowerment',
          '[FALLBACK] Simplicity and usability',
          '[FALLBACK] Integration and openness',
          '[FALLBACK] Data privacy and security',
          '[FALLBACK] Continuous improvement'
        ],
        purpose: '[FALLBACK] Enable developers to build their personal brand and manage their digital presence with ease.'
      };
    }
    return parsed || {};
  } catch (e) {
    console.warn('[FALLBACK] LLM API unreachable, using fallback strategic sections.');
    logInfo('Using fallback for strategic sections due to LLM API unreachability.');
    return {
      vision: '[FALLBACK] To empower developers to showcase their work and connect with opportunities through a modern, integrated portfolio platform.',
      mission: '[FALLBACK] Provide a user-friendly, feature-rich platform for developers to present projects, publish blogs, and integrate with key developer services.',
      coreValues: [
        '[FALLBACK] User empowerment',
        '[FALLBACK] Simplicity and usability',
        '[FALLBACK] Integration and openness',
        '[FALLBACK] Data privacy and security',
        '[FALLBACK] Continuous improvement'
      ],
      purpose: '[FALLBACK] Enable developers to build their personal brand and manage their digital presence with ease.'
    };
  }
}

async function saveStrategicSections(statement, data) {
  console.log('LLM strategicSections data received:', JSON.stringify(data, null, 2));
  const { vision, mission, coreValues, purpose } = data;
  const coreValuesSection = coreValues && coreValues.length > 0 ? coreValues.map(v => `- ${v}`).join('\n') : '';

  const content = `# Business Statement\n\n${statement}\n---\n\n**Vision:**\n\n${vision || ''}\n\n**Mission:**\n\n${mission || ''}\n\n**Core Values:**\n\n${coreValuesSection}\n\n**Purpose:**\n\n${purpose || ''}\n`;
  
  // Sanitize content before logging to prevent log injection
  const sanitizedPreview = sanitizeForLogging(content.slice(0, 500) + (content.length > 500 ? '... (truncated)' : ''));
  console.log('Writing business-problem.md with content:', sanitizedPreview);
  
  await safeWriteFile(PROBLEM_STATEMENT_PATH, content);
  logInfo(`Business statement saved to ${PROBLEM_STATEMENT_PATH}`);
}

function shouldRunRequirementsAgent(statement) {
  // Only run if the statement has changed
  if (lastStatement === statement) {
    console.log('Business problem statement unchanged. Skipping requirements agent output.');
    return false;
  }
  lastStatement = statement;
  return true;
}

// 3. Call requirements agent API
async function callRequirementsAgent(statement) {
  const stack = await getTechnologyStack(); // Added await
  console.log('Sending to requirements agent:', { businessProblem: statement, technologyStack: stack });
  try {
    const response = await fetch(REQUIREMENTS_AGENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ businessProblem: statement, technologyStack: stack })
    });
    const text = await response.text();
    console.log('Raw requirements agent response:', text.slice(0, 500) + (text.length > 500 ? '...' : ''));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = JSON.parse(text);
    return data.roles || [];
  } catch (error) {
    logError('Error calling requirements agent:', error);
    return [];
  }
}

// 4. Save requirements agent output
async function saveRequirementsOutput(roles) {
  let md = '# Requirements Agent Output: Roles, Needs, and Processes\n\n';
  roles.forEach(roleObj => {
    md += `## ${roleObj.role}\n`;
    if (roleObj.needs) {
      md += '**Needs:**\n';
      roleObj.needs.forEach(need => { md += `- ${need}\n`; });
    }
    if (roleObj.processes) {
      md += '**Processes:**\n';
      roleObj.processes.forEach(proc => { md += `- ${proc}\n`; });
    }
    md += '\n';
  });
  await safeWriteFile(REQUIREMENTS_OUTPUT_PATH, md);
  logInfo('Requirements agent output saved.');
}

async function getTechnologyStack() {
  const pkgPath = path.join(__dirname, '../package.json');
  const pkgContent = await safeReadFile(pkgPath);
  if (!pkgContent) return [];
  const pkg = safeParseJson(pkgContent);
  if (!pkg) return [];
  const deps = Object.keys(pkg.dependencies || {});
  const devDeps = Object.keys(pkg.devDependencies || {});
  // Group by category
  const stack = [];
  if (deps.includes('next')) stack.push('Next.js');
  if (deps.includes('react')) stack.push('React');
  if (deps.includes('tailwindcss') || devDeps.includes('tailwindcss')) stack.push('Tailwind CSS');
  if (deps.includes('firebase')) stack.push('Firebase');
  if (deps.some(d => d.startsWith('@genkit-ai'))) stack.push('Genkit AI');
  if (deps.includes('@azure-rest/ai-inference')) stack.push('Azure AI Inference');
  if (deps.includes('@google-cloud/vertexai')) stack.push('Google Vertex AI');
  if (deps.includes('chart.js')) stack.push('Chart.js');
  if (deps.includes('recharts')) stack.push('Recharts');
  if (deps.includes('framer-motion')) stack.push('Framer Motion');
  if (deps.includes('@sentry/nextjs')) stack.push('Sentry');
  if (deps.includes('@hotjar/browser')) stack.push('Hotjar');
  if (deps.includes('@toast-ui/react-editor')) stack.push('Toast UI Editor');
  if (deps.includes('marked') || deps.includes('remark')) stack.push('Markdown/Remark/Marked');
  if (deps.includes('rehype-highlight')) stack.push('Rehype Highlight');
  if (deps.includes('clsx')) stack.push('clsx');
  if (deps.includes('dotenv')) stack.push('dotenv');
  if (devDeps.includes('typescript')) stack.push('TypeScript');
  if (devDeps.includes('eslint')) stack.push('ESLint');
  return stack;
}

async function saveTechnologyStack() {
  const stack = await getTechnologyStack();
  let md = '# Technology Stack\n\n';
  if (stack.length === 0) {
    md += 'No technology stack detected.';
  } else {
    stack.forEach(tech => {
      md += `- ${tech}\n`;
    });
  }
  await safeWriteFile(TECHNOLOGY_STACK_PATH, md);
  logInfo('Technology stack documentation saved.');
}

async function saveProcessFlows() {
  const flows = `# Concept Process Flows for Requirements Agent Output\n\n## Portfolio Owner\n\n### Project and blog content management\n1. User logs in.\n2. User creates/edits/deletes a project or blog post.\n3. System validates input and saves content.\n4. Content is published or updated in the portfolio.\n5. User receives confirmation or error notification.\n\n### External service integration management\n1. User selects an external service to integrate (e.g., GitHub).\n2. System initiates OAuth or API key authentication.\n3. User authorizes access.\n4. System syncs data and confirms integration.\n5. System monitors integration health and notifies user of issues.\n\n### User authentication and authorization\n1. User accesses login/register page.\n2. User submits credentials or uses SSO.\n3. System verifies identity.\n4. User is granted access based on role/permissions.\n\n### Analytics data retrieval and display\n1. User requests analytics dashboard.\n2. System fetches engagement data from database or analytics service.\n3. Data is processed and visualized.\n4. User views charts and insights.\n\n### Media file management\n1. User uploads, edits, or deletes media files.\n2. System validates file type/size.\n3. Media is stored and linked to relevant content.\n4. User can preview or remove media.\n\n### Profile customization\n1. User accesses profile settings.\n2. User updates appearance, layout, or personal info.\n3. System saves changes and updates portfolio view.\n\n### Notification management\n1. System detects relevant event (e.g., new comment, integration error).\n2. Notification is generated and sent to user (in-app or email).\n3. User views and manages notifications.\n\n## Portfolio Visitor\n\n### Portfolio and blog content rendering\n1. Visitor accesses portfolio URL.\n2. System fetches and renders projects and blog posts.\n3. Visitor browses content.\n\n### External link and integration access\n1. Visitor clicks external link (e.g., GitHub).\n2. System verifies link and redirects visitor.\n\n### Visitor interaction management\n1. Visitor submits comment or contact form (if enabled).\n2. System validates and stores interaction.\n3. Portfolio owner is notified.\n\n### Content loading and navigation\n1. Visitor navigates between pages or sections.\n2. System loads content dynamically for fast experience.\n\n## Platform Administrator\n\n### User and account management\n1. Admin logs in to admin dashboard.\n2. Admin views, edits, or deletes user accounts.\n3. System updates user records and permissions.\n\n### System monitoring and logging\n1. System collects performance and activity logs.\n2. Admin reviews logs and system health metrics.\n3. Admin takes action if anomalies are detected.\n\n### Security and compliance management\n1. System runs security checks and compliance audits.\n2. Admin reviews reports and addresses issues.\n\n### Integration status monitoring\n1. System checks health of external integrations.\n2. Admin is alerted to failures or issues.\n3. Admin investigates and resolves problems.\n\n### Support ticketing and resolution\n1. User submits support request.\n2. System logs ticket and notifies admin.\n3. Admin reviews, responds, and resolves the issue.\n4. User is notified of resolution.\n\n## Content Editor\n\n### Collaborative content editing\n1. Editor and owner access shared draft.\n2. Both make edits in real time or asynchronously.\n3. System tracks changes and resolves conflicts.\n\n### Draft management and version control\n1. Editor creates or updates a draft.\n2. System saves versions and allows rollback.\n3. Final draft is published upon approval.\n\n### Media asset management\n1. Editor uploads or organizes media assets.\n2. System links assets to content and manages storage.\n`;
  await safeWriteFile(PROCESS_FLOWS_PATH, flows);
  logInfo('Process flows documentation saved.');
}

async function saveDataModel() {
  const dataModel = `# Data Model for Portfolio Platform\n\n## Users\n- id (PK)\n- username\n- email\n- password_hash\n- role (owner, visitor, admin, editor)\n- profile_info (JSON or separate fields)\n- created_at\n- updated_at\n\n## Projects\n- id (PK)\n- user_id (FK to Users)\n- title\n- description\n- repo_url\n- tags\n- created_at\n- updated_at\n\n## BlogPosts\n- id (PK)\n- user_id (FK to Users)\n- title\n- content (Markdown/HTML)\n- status (draft/published)\n- created_at\n- updated_at\n\n## MediaFiles\n- id (PK)\n- user_id (FK to Users)\n- file_url\n- file_type\n- linked_project_id (nullable, FK to Projects)\n- linked_blogpost_id (nullable, FK to BlogPosts)\n- uploaded_at\n\n## Integrations\n- id (PK)\n- user_id (FK to Users)\n- service_name (GitHub, Dev.to, etc.)\n- access_token (encrypted)\n- status\n- last_synced_at\n\n## Analytics\n- id (PK)\n- user_id (FK to Users)\n- type (project_view, blog_view, etc.)\n- target_id (FK to Projects or BlogPosts)\n- count\n- date\n\n## Notifications\n- id (PK)\n- user_id (FK to Users)\n- type\n- message\n- is_read\n- created_at\n\n## Comments\n- id (PK)\n- blogpost_id (FK to BlogPosts)\n- user_id (FK to Users, nullable for anonymous)\n- content\n- created_at\n\n## SupportTickets\n- id (PK)\n- user_id (FK to Users)\n- subject\n- description\n- status (open, closed, pending)\n- created_at\n- updated_at\n\n## Drafts\n- id (PK)\n- user_id (FK to Users)\n- type (project, blogpost)\n- content\n- version\n- created_at\n- updated_at\n`;
  await safeWriteFile(DATA_MODEL_PATH, dataModel);
  logInfo('Data model documentation saved.');
}

// Main automation flow
(async function main() {
  console.log('MAIN_IIFE_START: Main execution block started.'); // Diagnostic

  // Ensure requirements directory exists (async)
  try {
    await ensureDirectory(REQUIREMENTS_DIR);
    logInfo(`Ensured requirements directory exists: ${REQUIREMENTS_DIR}`);
    console.log('MAIN_IIFE_DEBUG: Requirements directory ensured.'); // Diagnostic
  } catch (error) {
    logError('Error during critical setup (e.g., creating requirements directory):', error);
    console.error('MAIN_IIFE_ERROR: The script encountered an unrecoverable error during setup and will now exit.'); // Diagnostic
    process.exit(1);
  }

  // The script will now use the globally defined helper functions.
  // The global `lastStatement` variable will be used by `shouldRunRequirementsAgent`.

  try {
    console.log('MAIN_IIFE_DEBUG: Calling saveBusinessStatementWithLLM...'); // Diagnostic
    await saveBusinessStatementWithLLM();
    console.log('MAIN_IIFE_DEBUG: saveBusinessStatementWithLLM completed.'); // Diagnostic
  } catch (error) {
    logError('Error saving business statement with LLM:', error);
    console.error('MAIN_IIFE_ERROR: Error from saveBusinessStatementWithLLM:', error); // Diagnostic
  }

  try {
    console.log('MAIN_IIFE_DEBUG: Calling saveTechnologyStack...'); // Diagnostic
    await saveTechnologyStack();
    console.log('MAIN_IIFE_DEBUG: saveTechnologyStack completed.'); // Diagnostic
  } catch (error) {
    logError('Error saving technology stack documentation:', error);
    console.error('MAIN_IIFE_ERROR: Error from saveTechnologyStack:', error); // Diagnostic
  }

  try {
    console.log('MAIN_IIFE_DEBUG: Calling saveProcessFlows...'); // Diagnostic
    await saveProcessFlows();
    console.log('MAIN_IIFE_DEBUG: saveProcessFlows completed.'); // Diagnostic
  } catch (error) {
    logError('Error saving process flows documentation:', error);
    console.error('MAIN_IIFE_ERROR: Error from saveProcessFlows:', error); // Diagnostic
  }

  try {
    console.log('MAIN_IIFE_DEBUG: Calling saveDataModel...'); // Diagnostic
    await saveDataModel();
    console.log('MAIN_IIFE_DEBUG: saveDataModel completed.'); // Diagnostic
  } catch (error) {
    logError('Error saving data model documentation:', error);
    console.error('MAIN_IIFE_ERROR: Error from saveDataModel:', error); // Diagnostic
  }

  // Always use the latest LLM-generated business problem for requirements agent
  try {
    console.log('MAIN_IIFE_DEBUG: Preparing for requirements agent call...'); // Diagnostic
    const stack = await getTechnologyStack();
    const contextBundle = await gatherProjectContext();
    const businessProblemForAgent = await generateBusinessProblemLLM(stack, contextBundle);
    console.log('MAIN_IIFE_DEBUG: Business problem for agent (first 100 chars):', businessProblemForAgent ? businessProblemForAgent.slice(0,100) : 'N/A'); // Diagnostic

    if (shouldRunRequirementsAgent(businessProblemForAgent)) {
      console.log('MAIN_IIFE_DEBUG: Running requirements agent...'); // Diagnostic
      const roles = await callRequirementsAgent(businessProblemForAgent);
      console.log('MAIN_IIFE_DEBUG: Requirements agent call completed. Roles:', roles); // Diagnostic
      await saveRequirementsOutput(roles);
      console.log('MAIN_IIFE_DEBUG: Requirements output saved.'); // Diagnostic
    } else {
      console.log('MAIN_IIFE_DEBUG: Skipping requirements agent as statement unchanged or invalid.'); // Diagnostic
    }
  } catch (error) {
    logError('Error during requirements agent processing:', error);
    console.error('MAIN_IIFE_ERROR: Error from requirements agent processing:', error); // Diagnostic
  }
  console.log('MAIN_IIFE_END: Main execution block finished.'); // Diagnostic
})();
console.log('SCRIPT_BOTTOM: auto-requirements.js finished defining IIFE.'); // Diagnostic