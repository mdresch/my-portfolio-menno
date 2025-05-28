// scripts/auto-requirements.js
// This script automates project review, problem statement generation, requirements agent call, and documentation update.

const fs = require('fs');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const DOCS_DIR = path.join(__dirname, '../docs');
const REQUIREMENTS_DIR = path.join(DOCS_DIR, 'requirements');
const PROBLEM_STATEMENT_PATH = path.join(REQUIREMENTS_DIR, 'business-problem.md');
const REQUIREMENTS_OUTPUT_PATH = path.join(REQUIREMENTS_DIR, 'requirements-agent-output.md');
const TECHNOLOGY_STACK_PATH = path.join(REQUIREMENTS_DIR, 'technology-stack.md');
const PROCESS_FLOWS_PATH = path.join(REQUIREMENTS_DIR, 'process-flows.md');
const DATA_MODEL_PATH = path.join(REQUIREMENTS_DIR, 'data-model.md');

// Define the Requirements Agent API endpoint
const REQUIREMENTS_AGENT_API = 'http://localhost:3000/api/requirements-agent';

// Ensure requirements directory exists
if (!fs.existsSync(REQUIREMENTS_DIR)) {
  fs.mkdirSync(REQUIREMENTS_DIR, { recursive: true });
}

// 1. Analyze project and generate a problem statement (simple heuristic, can be replaced with LLM call)
let lastStatement = '';

function analyzeProject() {
  // 1. Prefer docs/business-problem-statement.md if it exists and is non-empty
  const statementPath = path.join(__dirname, '../docs/business-problem-statement.md');
  if (fs.existsSync(statementPath)) {
    const content = fs.readFileSync(statementPath, 'utf-8').replace(/#.*/g, '').trim();
    if (content && content.length > 0) {
      // Remove markdown comments and headers, return first non-empty paragraph
      const paragraphs = content.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
      if (paragraphs.length > 0) return paragraphs[0];
    }
  }
  // 2. Otherwise, try README.md
  const readmePath = path.join(__dirname, '../README.md');
  if (fs.existsSync(readmePath)) {
    const readme = fs.readFileSync(readmePath, 'utf-8');
    const firstParagraph = readme.split(/\n\s*\n/)[0];
    if (firstParagraph && firstParagraph.trim().length > 0) return firstParagraph.trim();
  }
  // 3. Otherwise, try to summarize package.json description
  const pkgPath = path.join(__dirname, '../package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    if (pkg.description && pkg.description.trim().length > 0) return pkg.description.trim();
  }
  // 4. Fallback
  return 'Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.';
}

// 2. Save the business statement and strategic sections
async function saveBusinessStatementWithLLM(statement) {
  const stack = getTechnologyStack();

  // Gather additional project context for LLM grounding
  let contextBundle = '';
  // Add README.md summary
  const readmePath = path.join(__dirname, '../README.md');
  if (fs.existsSync(readmePath)) {
    const readme = fs.readFileSync(readmePath, 'utf-8');
    contextBundle += `README.md: ${readme.slice(0, 1000)}\n`;
  }
  // Add package.json description
  const pkgPath = path.join(__dirname, '../package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    if (pkg.description) contextBundle += `package.json description: ${pkg.description}\n`;
  }
  // Add next-steps.md if available
  const nextStepsPath = path.join(__dirname, '../docs/next-steps.md');
  if (fs.existsSync(nextStepsPath)) {
    const nextSteps = fs.readFileSync(nextStepsPath, 'utf-8');
    contextBundle += `next-steps.md: ${nextSteps.slice(0, 1000)}\n`;
  }
  // Add business-problem-statement.md if available
  const bpsPath = path.join(__dirname, '../docs/business-problem-statement.md');
  if (fs.existsSync(bpsPath)) {
    const bps = fs.readFileSync(bpsPath, 'utf-8');
    contextBundle += `business-problem-statement.md: ${bps.slice(0, 1000)}\n`;
  }
  // Add up to 1000 chars from the first blog post
  const blogDir = path.join(__dirname, '../content/blog');
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    if (blogFiles.length > 0) {
      const blog = fs.readFileSync(path.join(blogDir, blogFiles[0]), 'utf-8');
      contextBundle += `blog/${blogFiles[0]}: ${blog.slice(0, 1000)}\n`;
    }
  }

  // Call LLM to generate vision, mission, and core values
  const response = await fetch(REQUIREMENTS_AGENT_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      businessProblem: statement,
      technologyStack: stack,
      requestStrategicSections: true,
      contextBundle
    })
  });
  const data = await response.json();
  const vision = data.vision || '';
  const mission = data.mission || '';
  const coreValues = data.coreValues || [];
  const purpose = data.purpose || '';

  let coreValuesSection = '';
  if (coreValues.length > 0) {
    coreValuesSection = coreValues.map(v => `- ${v}`).join('\n');
  }

  const content = `# Business Statement\n\n${statement}\n---\n\n**Vision:**\n\n${vision}\n\n**Mission:**\n\n${mission}\n\n**Core Values:**\n\n${coreValuesSection}\n\n**Purpose:**\n\n${purpose}\n`;
  fs.writeFileSync(PROBLEM_STATEMENT_PATH, content, 'utf-8');
  console.log('Business statement saved.');
}

// Generate a vision statement from the business statement
function generateVisionFromStatement(statement) {
  // Simple heuristic: extract key themes and project a future-oriented goal
  if (statement.toLowerCase().includes('portfolio')) {
    return 'To be the leading platform for individuals to showcase their work, connect with opportunities, and inspire others through their digital presence.';
  }
  if (statement.toLowerCase().includes('blog')) {
    return 'To empower users to share their stories and knowledge with a global audience in an engaging and accessible way.';
  }
  // Default fallback
  return 'To create a positive impact by enabling users to achieve their goals through innovative digital solutions.';
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
function callRequirementsAgent(statement) {
  const stack = getTechnologyStack();
  return fetch(REQUIREMENTS_AGENT_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ businessProblem: statement, technologyStack: stack })
  })
    .then(res => res.json())
    .then(data => data.roles || []);
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
  fs.writeFileSync(REQUIREMENTS_OUTPUT_PATH, md, 'utf-8');
  console.log('Requirements agent output saved.');
}

function getTechnologyStack() {
  const pkgPath = path.join(__dirname, '../package.json');
  if (!fs.existsSync(pkgPath)) return [];
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
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
  fs.writeFileSync(TECHNOLOGY_STACK_PATH, md, 'utf-8');
  console.log('Technology stack documentation saved.');
}

function saveProcessFlows() {
  const flows = `# Concept Process Flows for Requirements Agent Output\n\n## Portfolio Owner\n\n### Project and blog content management\n1. User logs in.\n2. User creates/edits/deletes a project or blog post.\n3. System validates input and saves content.\n4. Content is published or updated in the portfolio.\n5. User receives confirmation or error notification.\n\n### External service integration management\n1. User selects an external service to integrate (e.g., GitHub).\n2. System initiates OAuth or API key authentication.\n3. User authorizes access.\n4. System syncs data and confirms integration.\n5. System monitors integration health and notifies user of issues.\n\n### User authentication and authorization\n1. User accesses login/register page.\n2. User submits credentials or uses SSO.\n3. System verifies identity.\n4. User is granted access based on role/permissions.\n\n### Analytics data retrieval and display\n1. User requests analytics dashboard.\n2. System fetches engagement data from database or analytics service.\n3. Data is processed and visualized.\n4. User views charts and insights.\n\n### Media file management\n1. User uploads, edits, or deletes media files.\n2. System validates file type/size.\n3. Media is stored and linked to relevant content.\n4. User can preview or remove media.\n\n### Profile customization\n1. User accesses profile settings.\n2. User updates appearance, layout, or personal info.\n3. System saves changes and updates portfolio view.\n\n### Notification management\n1. System detects relevant event (e.g., new comment, integration error).\n2. Notification is generated and sent to user (in-app or email).\n3. User views and manages notifications.\n\n## Portfolio Visitor\n\n### Portfolio and blog content rendering\n1. Visitor accesses portfolio URL.\n2. System fetches and renders projects and blog posts.\n3. Visitor browses content.\n\n### External link and integration access\n1. Visitor clicks external link (e.g., GitHub).\n2. System verifies link and redirects visitor.\n\n### Visitor interaction management\n1. Visitor submits comment or contact form (if enabled).\n2. System validates and stores interaction.\n3. Portfolio owner is notified.\n\n### Content loading and navigation\n1. Visitor navigates between pages or sections.\n2. System loads content dynamically for fast experience.\n\n## Platform Administrator\n\n### User and account management\n1. Admin logs in to admin dashboard.\n2. Admin views, edits, or deletes user accounts.\n3. System updates user records and permissions.\n\n### System monitoring and logging\n1. System collects performance and activity logs.\n2. Admin reviews logs and system health metrics.\n3. Admin takes action if anomalies are detected.\n\n### Security and compliance management\n1. System runs security checks and compliance audits.\n2. Admin reviews reports and addresses issues.\n\n### Integration status monitoring\n1. System checks health of external integrations.\n2. Admin is alerted to failures or issues.\n3. Admin investigates and resolves problems.\n\n### Support ticketing and resolution\n1. User submits support request.\n2. System logs ticket and notifies admin.\n3. Admin reviews, responds, and resolves the issue.\n4. User is notified of resolution.\n\n## Content Editor\n\n### Collaborative content editing\n1. Editor and owner access shared draft.\n2. Both make edits in real time or asynchronously.\n3. System tracks changes and resolves conflicts.\n\n### Draft management and version control\n1. Editor creates or updates a draft.\n2. System saves versions and allows rollback.\n3. Final draft is published upon approval.\n\n### Media asset management\n1. Editor uploads or organizes media assets.\n2. System links assets to content and manages storage.\n`;
  fs.writeFileSync(PROCESS_FLOWS_PATH, 'utf-8');
  console.log('Process flows documentation saved.');
}

function saveDataModel() {
  const dataModel = `# Data Model for Portfolio Platform\n\n## Users\n- id (PK)\n- username\n- email\n- password_hash\n- role (owner, visitor, admin, editor)\n- profile_info (JSON or separate fields)\n- created_at\n- updated_at\n\n## Projects\n- id (PK)\n- user_id (FK to Users)\n- title\n- description\n- repo_url\n- tags\n- created_at\n- updated_at\n\n## BlogPosts\n- id (PK)\n- user_id (FK to Users)\n- title\n- content (Markdown/HTML)\n- status (draft/published)\n- created_at\n- updated_at\n\n## MediaFiles\n- id (PK)\n- user_id (FK to Users)\n- file_url\n- file_type\n- linked_project_id (nullable, FK to Projects)\n- linked_blogpost_id (nullable, FK to BlogPosts)\n- uploaded_at\n\n## Integrations\n- id (PK)\n- user_id (FK to Users)\n- service_name (GitHub, Dev.to, etc.)\n- access_token (encrypted)\n- status\n- last_synced_at\n\n## Analytics\n- id (PK)\n- user_id (FK to Users)\n- type (project_view, blog_view, etc.)\n- target_id (FK to Projects or BlogPosts)\n- count\n- date\n\n## Notifications\n- id (PK)\n- user_id (FK to Users)\n- type\n- message\n- is_read\n- created_at\n\n## Comments\n- id (PK)\n- blogpost_id (FK to BlogPosts)\n- user_id (FK to Users, nullable for anonymous)\n- content\n- created_at\n\n## SupportTickets\n- id (PK)\n- user_id (FK to Users)\n- subject\n- description\n- status (open, closed, pending)\n- created_at\n- updated_at\n\n## Drafts\n- id (PK)\n- user_id (FK to Users)\n- type (project, blogpost)\n- content\n- version\n- created_at\n- updated_at\n`;
  fs.writeFileSync(DATA_MODEL_PATH, dataModel, 'utf-8');
  console.log('Data model documentation saved.');
}

// Main automation flow
(async function main() {
  try {
    const statement = analyzeProject();
    await saveBusinessStatementWithLLM(statement);
    saveTechnologyStack();
    saveProcessFlows();
    saveDataModel();
    if (shouldRunRequirementsAgent(statement)) {
      const roles = await callRequirementsAgent(statement);
      saveRequirementsOutput(roles);
    } else {
      console.log('Requirements agent output not updated because the business problem statement did not change.');
    }
  } catch (error) {
    console.error('An error occurred in the requirements automation script:', error);
    process.exit(1);
  }
})();
