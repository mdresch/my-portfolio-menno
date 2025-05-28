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
  const content = `# Business Problem Statement\n\n${statement}\n`;
  fs.writeFileSync(PROBLEM_STATEMENT_PATH, content, 'utf-8');
  console.log('Business problem statement saved.');
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

// Main automation flow
(async function main() {
  try {
    const statement = analyzeProject();
    saveProblemStatement(statement);
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
