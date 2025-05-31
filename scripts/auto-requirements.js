// scripts/auto-requirements.js
// This script automates project review, problem statement generation, requirements agent call, and documentation update.

const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const utils = require('./utils');

// Import configuration file
const config = require('../config/paths.js');

const DOCS_DIR = config.DOCS_DIR;
const REQUIREMENTS_DIR = config.REQUIREMENTS_DIR;
const PROBLEM_STATEMENT_PATH = config.PROBLEM_STATEMENT_PATH;
const REQUIREMENTS_OUTPUT_PATH = config.REQUIREMENTS_OUTPUT_PATH;
const TECHNOLOGY_STACK_PATH = config.TECHNOLOGY_STACK_PATH;
const PROCESS_FLOWS_PATH = config.PROCESS_FLOWS_PATH;
const DATA_MODEL_PATH = config.DATA_MODEL_PATH;

// Define the Requirements Agent API endpoint
const REQUIREMENTS_AGENT_API = 'http://localhost:3000/api/requirements-agent';

// Ensure requirements directory exists
try {
  utils.ensureDirExists(REQUIREMENTS_DIR);
} catch (error) {
  utils.logError('Error creating requirements directory:', error);
  process.exit(1);
}

// 1. Analyze project and generate a problem statement (simple heuristic, can be replaced with LLM call)
let lastStatement = '';

async function generateBusinessProblemLLM(stack, contextBundle) {
  const instructions = `You are an expert requirements analyst. Given the technology stack and project context, generate a concise, specific, and actionable business problem statement for a modern developer portfolio platform. Avoid generic or vague language. Use details from the context. Return only the business problem statement as a plain string.`;
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
  try {
    return text.replace(/^"|"$/g, ''); // Remove quotes if returned as JSON string
  } catch (e) {
    console.error('Error parsing LLM business problem statement:', e);
    throw e;
  }
}

function analyzeProject() {
  // 1. Prefer docs/business-problem-statement.md if it exists and is non-empty
  const statementPath = path.join(__dirname, '../docs/business-problem-statement.md');
  if (utils.safeReadFile(statementPath)) {
    try {
      const content = utils.safeReadFile(statementPath).replace(/#.*/g, '').trim();
      if (content && content.length > 0) {
        // Remove markdown comments and headers, return first non-empty paragraph
        return utils.extractFirstParagraph(content);
      }
    } catch (error) {
      utils.logError('Error reading business-problem-statement.md:', error);
    }
  }
  // 2. Otherwise, try README.md
  const readmePath = path.join(__dirname, '../README.md');
  if (utils.safeReadFile(readmePath)) {
    try {
      const readme = utils.safeReadFile(readmePath);
      const firstParagraph = utils.extractFirstParagraph(readme);
      if (firstParagraph && firstParagraph.trim().length > 0) return firstParagraph.trim();
    } catch (error) {
      utils.logError('Error reading README.md:', error);
    }
  }
  // 3. Otherwise, try to summarize package.json description
  const pkgPath = path.join(__dirname, '../package.json');
  if (utils.safeReadFile(pkgPath)) {
    try {
      const pkg = utils.safeParseJSON(utils.safeReadFile(pkgPath));
      if (pkg && pkg.description && pkg.description.trim().length > 0) return pkg.description.trim();
    } catch (error) {
      utils.logError('Error reading package.json:', error);
    }
  }
  // 4. Fallback
  return 'Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.';
}

// 2. Save the business statement and strategic sections
async function saveBusinessStatementWithLLM() {
  const stack = getTechnologyStack();
  const contextBundle = await gatherProjectContext();
  const businessProblem = await generateBusinessProblemLLM(stack, contextBundle);
  const strategicSections = await generateStrategicSections(businessProblem, stack, contextBundle);
  await saveStrategicSections(businessProblem, strategicSections);
}

async function gatherProjectContext() {
  let contextBundle = '';
  // 1. Summarize all markdown files in docs/
  const docsDir = path.join(__dirname, '../docs');
  if (utils.getFilesByGlob('**/*.md', docsDir).length) {
    const docFiles = utils.getFilesByGlob('**/*.md', docsDir);
    for (const file of docFiles) {
      const filePath = path.join(docsDir, file);
      try {
        const content = utils.safeReadFile(filePath);
        if (content) contextBundle += `docs/${file}: ${content.slice(0, 800)}\n`;
      } catch (error) {
        utils.logError(`Error reading docs/${file}:`, error);
      }
    }
  }
  // 2. Summarize all markdown files in content/blog/
  const blogDir = path.join(__dirname, '../content/blog');
  if (utils.getFilesByGlob('**/*.md', blogDir).length) {
    const blogFiles = utils.getFilesByGlob('**/*.md', blogDir);
    for (const file of blogFiles) {
      const filePath = path.join(blogDir, file);
      try {
        const content = utils.safeReadFile(filePath);
        if (content) contextBundle += `blog/${file}: ${content.slice(0, 500)}\n`;
      } catch (error) {
        utils.logError(`Error reading blog/${file}:`, error);
      }
    }
  }
  // 3. Summarize all markdown files in content/project/
  const projectDir = path.join(__dirname, '../content/project');
  if (utils.getFilesByGlob('**/*.md', projectDir).length) {
    const projectFiles = utils.getFilesByGlob('**/*.md', projectDir);
    for (const file of projectFiles) {
      const filePath = path.join(projectDir, file);
      try {
        const content = utils.safeReadFile(filePath);
        if (content) contextBundle += `project/${file}: ${content.slice(0, 500)}\n`;
      } catch (error) {
        utils.logError(`Error reading project/${file}:`, error);
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
    if (utils.safeReadFile(filePath)) {
      try {
        const content = utils.safeReadFile(filePath);
        if (file.key === 'package.json description') {
          try {
            const pkg = utils.safeParseJSON(content);
            if (pkg && pkg.description) contextBundle += `${file.key}: ${pkg.description}\n`;
          } catch (error) {
            utils.logError('Error parsing package.json:', error);
          }
        } else {
          if (content) contextBundle += `${file.key}: ${content.slice(0, 800)}\n`;
        }
      } catch (error) {
        utils.logError(`Error reading ${file.key}:`, error);
      }
    }
  }
  return contextBundle;
}

async function generateStrategicSections(statement, stack, contextBundle) {
  const instructions = `
You are an expert product strategist and requirements analyst. Given the business problem, technology stack, and project context, generate the following for a modern developer portfolio platform:
- Vision: A clear, aspirational statement of the platform's long-term impact and purpose.
- Mission: A concise summary of what the platform does and for whom.
- Core Values: 3-7 guiding principles or beliefs that shape the platform's culture and priorities.
- Purpose: A short, actionable statement of why the platform exists and the value it delivers.
Be specific, actionable, and use language appropriate for a professional software product. Avoid generic or vague statements. Tailor the output to a portfolio platform for developers, with features like project showcases, blog publishing, analytics, and integrations.
Return a JSON object with keys: vision, mission, coreValues (array), and purpose.`;
  console.log('Sending to LLM (requirements agent):', {
    businessProblem: statement,
    technologyStack: stack,
    requestStrategicSections: true,
    contextBundle: contextBundle && contextBundle.slice(0, 200) + (contextBundle.length > 200 ? '...' : ''),
    instructions: instructions.slice(0, 200) + (instructions.length > 200 ? '...' : '')
  });
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
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error('Error parsing LLM response as JSON:', e);
    throw e;
  }
}

async function saveStrategicSections(statement, data) {
  console.log('LLM strategicSections data received:', JSON.stringify(data, null, 2));
  const { vision, mission, coreValues, purpose } = data;
  const coreValuesSection = coreValues && coreValues.length > 0 ? coreValues.map(v => `- ${v}`).join('\n') : '';

  const content = `# Business Statement\n\n${statement}\n---\n\n**Vision:**\n\n${vision || ''}\n\n**Mission:**\n\n${mission || ''}\n\n**Core Values:**\n\n${coreValuesSection}\n\n**Purpose:**\n\n${purpose || ''}\n`;
  console.log('Writing business-problem.md with content:', content.slice(0, 500) + (content.length > 500 ? '... (truncated)' : ''));
  utils.safeWriteFile(PROBLEM_STATEMENT_PATH, content, 'utf-8');
  console.log('Business statement saved to', PROBLEM_STATEMENT_PATH);
}

// Generate a vision statement from the business statement
function generateVisionFromStatement(statement) {
  // TODO: Implement a configuration file or database to store vision statements
  // For now, we'll use a simple object to demonstrate the concept
  const visionStatements = {
    portfolio: 'To be the leading platform for individuals to showcase their work, connect with opportunities, and inspire others through their digital presence.',
    blog: 'To empower users to share their stories and knowledge with a global audience in an engaging and accessible way.',
    default: 'To create a positive impact by enabling users to achieve their goals through innovative digital solutions.'
  };

  if (statement.toLowerCase().includes('portfolio')) {
    return visionStatements.portfolio;
  }
  if (statement.toLowerCase().includes('blog')) {
    return visionStatements.blog;
  }
  return visionStatements.default;
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
  const stack = getTechnologyStack();
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
    utils.logError('Error calling requirements agent:', error);
    return [];
  }
}

// 4. Save requirements agent output
function saveRequirementsOutput(roles) {
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
  utils.safeWriteFile(REQUIREMENTS_OUTPUT_PATH, md, 'utf-8');
  console.log('Requirements agent output saved.');
}

function getTechnologyStack() {
  const pkgPath = path.join(__dirname, '../package.json');
  if (!utils.safeReadFile(pkgPath)) return [];
  const pkg = utils.safeParseJSON(utils.safeReadFile(pkgPath));
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

function saveTechnologyStack() {
  const stack = getTechnologyStack();
  let md = '# Technology Stack\n\n';
  if (stack.length === 0) {
    md += 'No technology stack detected.';
  } else {
    stack.forEach(tech => {
      md += `- ${tech}\n`;
    });
  }
  utils.safeWriteFile(TECHNOLOGY_STACK_PATH, md, 'utf-8');
  console.log('Technology stack documentation saved.');
}

function saveProcessFlows() {
  const flows = `# Concept Process Flows for Requirements Agent Output\n\n## Portfolio Owner\n\n### Project and blog content management\n1. User logs in.\n2. User creates/edits/deletes a project or blog post.\n3. System validates input and saves content.\n4. Content is published or updated in the portfolio.\n5. User receives confirmation or error notification.\n\n### External service integration management\n1. User selects an external service to integrate (e.g., GitHub).\n2. System initiates OAuth or API key authentication.\n3. User authorizes access.\n4. System syncs data and confirms integration.\n5. System monitors integration health and notifies user of issues.\n\n### User authentication and authorization\n1. User accesses login/register page.\n2. User submits credentials or uses SSO.\n3. System verifies identity.\n4. User is granted access based on role/permissions.\n\n### Analytics data retrieval and display\n1. User requests analytics dashboard.\n2. System fetches engagement data from database or analytics service.\n3. Data is processed and visualized.\n4. User views charts and insights.\n\n### Media file management\n1. User uploads, edits, or deletes media files.\n2. System validates file type/size.\n3. Media is stored and linked to relevant content.\n4. User can preview or remove media.\n\n### Profile customization\n1. User accesses profile settings.\n2. User updates appearance, layout, or personal info.\n3. System saves changes and updates portfolio view.\n\n### Notification management\n1. System detects relevant event (e.g., new comment, integration error).\n2. Notification is generated and sent to user (in-app or email).\n3. User views and manages notifications.\n\n## Portfolio Visitor\n\n### Portfolio and blog content rendering\n1. Visitor accesses portfolio URL.\n2. System fetches and renders projects and blog posts.\n3. Visitor browses content.\n\n### External link and integration access\n1. Visitor clicks external link (e.g., GitHub).\n2. System verifies link and redirects visitor.\n\n### Visitor interaction management\n1. Visitor submits comment or contact form (if enabled).\n2. System validates and stores interaction.\n3. Portfolio owner is notified.\n\n### Content loading and navigation\n1. Visitor navigates between pages or sections.\n2. System loads content dynamically for fast experience.\n\n## Platform Administrator\n\n### User and account management\n1. Admin logs in to admin dashboard.\n2. Admin views, edits, or deletes user accounts.\n3. System updates user records and permissions.\n\n### System monitoring and logging\n1. System collects performance and activity logs.\n2. Admin reviews logs and system health metrics.\n3. Admin takes action if anomalies are detected.\n\n### Security and compliance management\n1. System runs security checks and compliance audits.\n2. Admin reviews reports and addresses issues.\n\n### Integration status monitoring\n1. System checks health of external integrations.\n2. Admin is alerted to failures or issues.\n3. Admin investigates and resolves problems.\n\n### Support ticketing and resolution\n1. User submits support request.\n2. System logs ticket and notifies admin.\n3. Admin reviews, responds, and resolves the issue.\n4. User is notified of resolution.\n\n## Content Editor\n\n### Collaborative content editing\n1. Editor and owner access shared draft.\n2. Both make edits in real time or asynchronously.\n3. System tracks changes and resolves conflicts.\n\n### Draft management and version control\n1. Editor creates or updates a draft.\n2. System saves versions and allows rollback.\n3. Final draft is published upon approval.\n\n### Media asset management\n1. Editor uploads or organizes media assets.\n2. System links assets to content and manages storage.\n`;
  const processPath = path.join(DOCS_DIR, 'process-flows.md');
  utils.safeWriteFile(PROCESS_FLOWS_PATH, flows, 'utf-8');
  console.log('Process flows documentation saved.');
}

function saveDataModel() {
  const dataModel = `# Data Model for Portfolio Platform\n\n## Users\n- id (PK)\n- username\n- email\n- password_hash\n- role (owner, visitor, admin, editor)\n- profile_info (JSON or separate fields)\n- created_at\n- updated_at\n\n## Projects\n- id (PK)\n- user_id (FK to Users)\n- title\n- description\n- repo_url\n- tags\n- created_at\n- updated_at\n\n## BlogPosts\n- id (PK)\n- user_id (FK to Users)\n- title\n- content (Markdown/HTML)\n- status (draft/published)\n- created_at\n- updated_at\n\n## MediaFiles\n- id (PK)\n- user_id (FK to Users)\n- file_url\n- file_type\n- linked_project_id (nullable, FK to Projects)\n- linked_blogpost_id (nullable, FK to BlogPosts)\n- uploaded_at\n\n## Integrations\n- id (PK)\n- user_id (FK to Users)\n- service_name (GitHub, Dev.to, etc.)\n- access_token (encrypted)\n- status\n- last_synced_at\n\n## Analytics\n- id (PK)\n- user_id (FK to Users)\n- type (project_view, blog_view, etc.)\n- target_id (FK to Projects or BlogPosts)\n- count\n- date\n\n## Notifications\n- id (PK)\n- user_id (FK to Users)\n- type\n- message\n- is_read\n- created_at\n\n## Comments\n- id (PK)\n- blogpost_id (FK to BlogPosts)\n- user_id (FK to Users, nullable for anonymous)\n- content\n- created_at\n\n## SupportTickets\n- id (PK)\n- user_id (FK to Users)\n- subject\n- description\n- status (open, closed, pending)\n- created_at\n- updated_at\n\n## Drafts\n- id (PK)\n- user_id (FK to Users)\n- type (project, blogpost)\n- content\n- version\n- created_at\n- updated_at\n`;
  utils.safeWriteFile(DATA_MODEL_PATH, dataModel, 'utf-8');
  console.log('Data model documentation saved.');
}

// Main automation flow
(async function main() {
  try {
    await saveBusinessStatementWithLLM();
  } catch (error) {
    utils.logError('Error saving business statement with LLM:', error);
  }

  try {
    saveTechnologyStack();
  } catch (error) {
    utils.logError('Error saving technology stack documentation:', error);
  }

  try {
    saveProcessFlows();
  } catch (error) {
    utils.logError('Error saving process flows documentation:', error);
  }

  try {
    saveDataModel();
  } catch (error) {
    utils.logError('Error saving data model documentation:', error);
  }

  // Always use the latest LLM-generated business problem for requirements agent
  try {
    const stack = getTechnologyStack();
    const contextBundle = await gatherProjectContext();
    const businessProblem = await generateBusinessProblemLLM(stack, contextBundle);
    if (shouldRunRequirementsAgent(businessProblem)) {
      const roles = await callRequirementsAgent(businessProblem);
      try {
        saveRequirementsOutput(roles);
      } catch (error) {
        utils.logError('Error saving requirements agent output:', error);
      }
    } else {
      console.log('Requirements agent output not updated because the business problem statement did not change.');
    }
  } catch (error) {
    utils.logError('Error running requirements agent or saving output:', error);
  }
})();
