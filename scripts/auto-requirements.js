// scripts/auto-requirements.js
// This script automates project review, problem statement generation, requirements agent call, and documentation update.

const fs = require('fs');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const DOCS_DIR = path.join(__dirname, '../docs');
const PROBLEM_STATEMENT_PATH = path.join(DOCS_DIR, 'business-problem-statement.md');
const REQUIREMENTS_OUTPUT_PATH = path.join(DOCS_DIR, 'requirements-agent-output.md');
const REQUIREMENTS_AGENT_API = 'http://localhost:3000/api/requirements-agent';

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

// 2. Save the problem statement
function saveProblemStatement(statement) {
  const content = `# Business Statement\n\n${statement}\n\n---\n\n**Vision:**\n\nEmpower every developer and creator to present their work, ideas, and achievements to the world through a seamless, engaging, and professional online presence.\n\n**Mission:**\n\nTo provide an intuitive, feature-rich platform that enables users to easily build, manage, and share their personal portfolios and content, while integrating with leading developer services and ensuring data security and scalability.\n\n**Core Values:**\n\n- User empowerment and creativity\n- Simplicity and usability\n- Openness and integration\n- Data privacy and security\n- Continuous improvement and innovation\n\n**Purpose:**\n\nTo help individuals and professionals effectively showcase their skills, projects, and stories, fostering opportunities for collaboration, recognition, and personal growth in the digital world.\n`;
  fs.writeFileSync(PROBLEM_STATEMENT_PATH, content, 'utf-8');
  console.log('Business statement saved.');
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
  return fetch(REQUIREMENTS_AGENT_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ businessProblem: statement })
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
  const techPath = path.join(DOCS_DIR, 'technology-stack.md');
  fs.writeFileSync(techPath, md, 'utf-8');
  console.log('Technology stack documentation saved.');
}

function saveProcessFlows() {
  const flows = `# Concept Process Flows for Requirements Agent Output\n\n## Portfolio Owner\n\n### Project and blog content management\n1. User logs in.\n2. User creates/edits/deletes a project or blog post.\n3. System validates input and saves content.\n4. Content is published or updated in the portfolio.\n5. User receives confirmation or error notification.\n\n### External service integration management\n1. User selects an external service to integrate (e.g., GitHub).\n2. System initiates OAuth or API key authentication.\n3. User authorizes access.\n4. System syncs data and confirms integration.\n5. System monitors integration health and notifies user of issues.\n\n### User authentication and authorization\n1. User accesses login/register page.\n2. User submits credentials or uses SSO.\n3. System verifies identity.\n4. User is granted access based on role/permissions.\n\n### Analytics data retrieval and display\n1. User requests analytics dashboard.\n2. System fetches engagement data from database or analytics service.\n3. Data is processed and visualized.\n4. User views charts and insights.\n\n### Media file management\n1. User uploads, edits, or deletes media files.\n2. System validates file type/size.\n3. Media is stored and linked to relevant content.\n4. User can preview or remove media.\n\n### Profile customization\n1. User accesses profile settings.\n2. User updates appearance, layout, or personal info.\n3. System saves changes and updates portfolio view.\n\n### Notification management\n1. System detects relevant event (e.g., new comment, integration error).\n2. Notification is generated and sent to user (in-app or email).\n3. User views and manages notifications.\n\n## Portfolio Visitor\n\n### Portfolio and blog content rendering\n1. Visitor accesses portfolio URL.\n2. System fetches and renders projects and blog posts.\n3. Visitor browses content.\n\n### External link and integration access\n1. Visitor clicks external link (e.g., GitHub).\n2. System verifies link and redirects visitor.\n\n### Visitor interaction management\n1. Visitor submits comment or contact form (if enabled).\n2. System validates and stores interaction.\n3. Portfolio owner is notified.\n\n### Content loading and navigation\n1. Visitor navigates between pages or sections.\n2. System loads content dynamically for fast experience.\n\n## Platform Administrator\n\n### User and account management\n1. Admin logs in to admin dashboard.\n2. Admin views, edits, or deletes user accounts.\n3. System updates user records and permissions.\n\n### System monitoring and logging\n1. System collects performance and activity logs.\n2. Admin reviews logs and system health metrics.\n3. Admin takes action if anomalies are detected.\n\n### Security and compliance management\n1. System runs security checks and compliance audits.\n2. Admin reviews reports and addresses issues.\n\n### Integration status monitoring\n1. System checks health of external integrations.\n2. Admin is alerted to failures or issues.\n3. Admin investigates and resolves problems.\n\n### Support ticketing and resolution\n1. User submits support request.\n2. System logs ticket and notifies admin.\n3. Admin reviews, responds, and resolves the issue.\n4. User is notified of resolution.\n\n## Content Editor\n\n### Collaborative content editing\n1. Editor and owner access shared draft.\n2. Both make edits in real time or asynchronously.\n3. System tracks changes and resolves conflicts.\n\n### Draft management and version control\n1. Editor creates or updates a draft.\n2. System saves versions and allows rollback.\n3. Final draft is published upon approval.\n\n### Media asset management\n1. Editor uploads or organizes media assets.\n2. System links assets to content and manages storage.\n`;
  const processPath = path.join(DOCS_DIR, 'process-flows.md');
  fs.writeFileSync(processPath, flows, 'utf-8');
  console.log('Process flows documentation saved.');
}

// Main automation flow
(async function main() {
  try {
    const statement = analyzeProject();
    saveProblemStatement(statement);
    saveTechnologyStack();
    saveProcessFlows();
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
