// scripts/auto-requirements.js
// This script automates project review, problem statement generation, requirements agent call, and documentation update.
// Refactored into small, specialized functions for better maintainability.

const fs = require('fs');
const path = require('path');

// Import configuration file
const config = require('../config/paths.js');

// ===== CONFIGURATION =====
const DOCS_DIR = config.DOCS_DIR;
const REQUIREMENTS_DIR = config.REQUIREMENTS_DIR;
const PROBLEM_STATEMENT_PATH = config.PROBLEM_STATEMENT_PATH;
const REQUIREMENTS_OUTPUT_PATH = config.REQUIREMENTS_OUTPUT_PATH;
const TECHNOLOGY_STACK_PATH = config.TECHNOLOGY_STACK_PATH;
const PROCESS_FLOWS_PATH = config.PROCESS_FLOWS_PATH;
const DATA_MODEL_PATH = config.DATA_MODEL_PATH;
const REQUIREMENTS_AGENT_API = 'http://localhost:3001/api/requirements-agent';

// ===== UTILITY FUNCTIONS =====

/**
 * Ensures the requirements directory exists
 */
function ensureRequirementsDirectory() {
  try {
    if (!fs.existsSync(REQUIREMENTS_DIR)) {
      fs.mkdirSync(REQUIREMENTS_DIR, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating requirements directory:', error);
    process.exit(1);
  }
}

/**
 * Safely reads a file and returns its content, or null if it fails
 */
function safeReadFile(filePath, encoding = 'utf-8') {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, encoding);
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
  }
  return null;
}

/**
 * Safely writes content to a file
 */
function safeWriteFile(filePath, content, encoding = 'utf-8') {
  try {
    fs.writeFileSync(filePath, content, encoding);
    return true;
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    return false;
  }
}

/**
 * Ensures a directory exists, creating it recursively if needed
 */
function ensureDirectoryExists(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      return true;
    }
    return true;
  } catch (error) {
    console.error(`Error creating directory ${dirPath}:`, error);
    return false;
  }
}

/**
 * Checks if a file exists and is readable
 */
function isFileReadable(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK | fs.constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Checks if a directory exists and is accessible
 */
function isDirectoryAccessible(dirPath) {
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  } catch (error) {
    return false;
  }
}

/**
 * Gets file size in bytes, returns -1 if file doesn't exist
 */
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return -1;
  }
}

/**
 * Gets file modification time, returns null if file doesn't exist
 */
function getFileModificationTime(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (error) {
    return null;
  }
}

/**
 * Copies a file from source to destination safely
 */
function safeFileCopy(sourcePath, destPath) {
  try {
    const content = safeReadFile(sourcePath);
    if (content === null) return false;
    return safeWriteFile(destPath, content);
  } catch (error) {
    console.error(`Error copying file from ${sourcePath} to ${destPath}:`, error);
    return false;
  }
}

/**
 * Deletes a file safely
 */
function safeFileDelete(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return true; // File doesn't exist, consider it deleted
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error);
    return false;
  }
}

/**
 * Lists files in a directory with optional filter
 */
function listDirectoryFiles(dirPath, filter = null) {
  try {
    if (!isDirectoryAccessible(dirPath)) return [];
    
    const files = fs.readdirSync(dirPath);
    
    if (filter) {
      return files.filter(filter);
    }
    
    return files;
  } catch (error) {
    console.error(`Error listing files in directory ${dirPath}:`, error);
    return [];
  }
}

/**
 * Validates that a string is not empty and meets minimum length
 */
function isValidString(str, minLength = 1) {
  return typeof str === 'string' && str.trim().length >= minLength;
}

/**
 * Validates that an array is not empty and contains valid elements
 */
function isValidArray(arr, validator = null) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  
  if (validator && typeof validator === 'function') {
    return arr.every(validator);
  }
  
  return true;
}

/**
 * Validates email format using basic regex
 */
function isValidEmail(email) {
  if (!isValidString(email)) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates URL format
 */
function isValidUrl(url) {
  if (!isValidString(url)) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sanitizes a string for safe filename usage
 */
function sanitizeFilename(filename) {
  if (!isValidString(filename)) return 'untitled';
  
  return filename
    .replace(/[<>:"/\\|?*]/g, '-')  // Replace invalid chars with dash
    .replace(/\s+/g, '-')           // Replace spaces with dash
    .replace(/-+/g, '-')            // Replace multiple dashes with single
    .replace(/^-|-$/g, '')          // Remove leading/trailing dashes
    .toLowerCase();
}

/**
 * Truncates text to specified length with ellipsis
 */
function truncateText(text, maxLength = 100, suffix = '...') {
  if (!isValidString(text)) return '';
  
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Debounces a function call
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Creates a retry mechanism for async operations
 */
async function retryAsync(operation, maxRetries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) {
        console.error(`Operation failed after ${maxRetries} attempts:`, error);
        throw error;
      }
      console.warn(`Attempt ${attempt} failed, retrying in ${delay}ms:`, error.message);
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2; // Exponential backoff
    }
  }
}

/**
 * Merges objects deeply, with later objects taking precedence
 */
function deepMerge(...objects) {
  if (objects.length === 0) return {};
  if (objects.length === 1) return objects[0];
  
  const result = {};
  
  for (const obj of objects) {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            result[key] = deepMerge(result[key] || {}, obj[key]);
          } else {
            result[key] = obj[key];
          }
        }
      }
    }
  }
  
  return result;
}

/**
 * Formats bytes to human readable format
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Creates a unique identifier string
 */
function generateId(prefix = '', length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return prefix ? `${prefix}-${result}` : result;
}

/**
 * Formats a timestamp to readable string
 */
function formatTimestamp(date = new Date(), format = 'ISO') {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  
  switch (format) {
    case 'ISO':
      return date.toISOString();
    case 'local':
      return date.toLocaleString();
    case 'date':
      return date.toLocaleDateString();
    case 'time':
      return date.toLocaleTimeString();
    default:
      return date.toString();
  }
}

/**
 * Extracts the first meaningful paragraph from text content
 */
function extractFirstParagraph(content) {
  if (!content || typeof content !== 'string') return null;
  
  const cleanContent = content.replace(/#.*/g, '').trim();
  if (!cleanContent) return null;
  
  const paragraphs = cleanContent.split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean);
  
  return paragraphs.length > 0 ? paragraphs[0] : null;
}

/**
 * Parses package.json safely and returns the parsed object
 */
function parsePackageJson(packagePath) {
  const content = safeReadFile(packagePath);
  if (!content) return null;
  
  try {
    return JSON.parse(content);
  } catch (error) {
    console.error('Error parsing package.json:', error);
    return null;
  }
}

// ===== BUSINESS STATEMENT ANALYSIS =====

/**
 * Reads business statement from existing documentation file
 */
function readExistingBusinessStatement() {
  const statementPath = path.join(__dirname, '../docs/business-problem-statement.md');
  const content = safeReadFile(statementPath);
  if (!content) return null;
  
  return extractFirstParagraph(content);
}

/**
 * Reads business statement from README.md
 */
function readBusinessStatementFromReadme() {
  const readmePath = path.join(__dirname, '../README.md');
  const content = safeReadFile(readmePath);
  if (!content) return null;
  
  return extractFirstParagraph(content);
}

/**
 * Reads business statement from package.json description
 */
function readBusinessStatementFromPackage() {
  const pkgPath = path.join(__dirname, '../package.json');
  const pkg = parsePackageJson(pkgPath);
  
  if (pkg && pkg.description && pkg.description.trim().length > 0) {
    return pkg.description.trim();
  }
  return null;
}

/**
 * Generates a comprehensive fallback business statement
 */
function generateFallbackBusinessStatement() {
  return `Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.

Key business objectives include:
- Creating an engaging personal brand presence online
- Demonstrating technical expertise through project showcases
- Building thought leadership through blogging capabilities
- Integrating with popular developer platforms for content syndication
- Providing analytics insights on user engagement and reach
- Ensuring responsive design for optimal mobile and desktop experiences
- Maintaining high performance and SEO optimization for discoverability`;
}

/**
 * Analyzes project and generates business problem statement using priority order
 */
function analyzeProject() {
  // Priority 1: Existing business statement documentation
  let statement = readExistingBusinessStatement();
  if (statement) return statement;
  
  // Priority 2: README.md content
  statement = readBusinessStatementFromReadme();
  if (statement) return statement;
  
  // Priority 3: Package.json description
  statement = readBusinessStatementFromPackage();
  if (statement) return statement;
  
  // Priority 4: Fallback statement
  return generateFallbackBusinessStatement();
}

// ===== PROJECT CONTEXT GATHERING =====

/**
 * Reads and processes a single context file
 */
function readContextFile(filePath, key) {
  const content = safeReadFile(filePath);
  if (!content) return '';
  
  if (key === 'package.json description') {
    const pkg = parsePackageJson(filePath);
    return pkg && pkg.description ? `${key}: ${pkg.description}\n` : '';
  }
  
  return `${key}: ${content.slice(0, 1000)}\n`;
}

/**
 * Gathers context from project documentation files
 */
function gatherDocumentationContext() {
  const files = [
    { path: '../README.md', key: 'README.md' },
    { path: '../package.json', key: 'package.json description' },
    { path: '../docs/next-steps.md', key: 'next-steps.md' },
    { path: '../docs/business-problem-statement.md', key: 'business-problem-statement.md' }
  ];

  let contextBundle = '';
  for (const file of files) {
    const filePath = path.join(__dirname, file.path);
    contextBundle += readContextFile(filePath, file.key);
  }
  
  return contextBundle;
}

/**
 * Gathers context from blog content
 */
function gatherBlogContext() {
  const blogDir = path.join(__dirname, '../content/blog');
  if (!fs.existsSync(blogDir)) return '';
  
  try {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    if (blogFiles.length === 0) return '';
    
    const blogContent = safeReadFile(path.join(blogDir, blogFiles[0]));
    return blogContent ? `blog/${blogFiles[0]}: ${blogContent.slice(0, 1000)}\n` : '';
  } catch (error) {
    console.error('Error reading blog files:', error);
    return '';
  }
}

/**
 * Gathers comprehensive project context from various sources
 */
async function gatherProjectContext() {
  const documentationContext = gatherDocumentationContext();
  const blogContext = gatherBlogContext();
  
  return documentationContext + blogContext;
}

// ===== API COMMUNICATION =====

/**
 * Makes an API call to the requirements agent
 */
async function callRequirementsAgentAPI(payload) {
  try {
    const response = await fetch(REQUIREMENTS_AGENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

/**
 * Calls requirements agent API to generate strategic sections
 */
async function generateStrategicSections(statement, stack, contextBundle) {
  try {
    const payload = {
      businessProblem: statement,
      technologyStack: stack,
      requestStrategicSections: true,
      contextBundle
    };
    
    return await callRequirementsAgentAPI(payload);
  } catch (error) {
    console.error('Error generating strategic sections from API, using fallback data:', error);
    return generateFallbackStrategicSections(statement, stack);
  }
}

/**
 * Calls requirements agent API to generate user roles and requirements
 */
async function callRequirementsAgent(statement) {
  const stack = getTechnologyStack();
  
  try {
    const payload = {
      businessProblem: statement,
      technologyStack: stack
    };
    
    const data = await callRequirementsAgentAPI(payload);
    return data.roles || [];
  } catch (error) {
    console.error('Error calling requirements agent, using fallback data:', error);
    return generateFallbackRequirements(statement, stack);
  }
}

// ===== BUSINESS STATEMENT PROCESSING =====

/**
 * Formats core values for markdown output
 */
function formatCoreValues(coreValues) {
  if (!coreValues || !Array.isArray(coreValues) || coreValues.length === 0) {
    return '';
  }
  return coreValues.map(v => `- ${v}`).join('\n');
}

/**
 * Creates formatted business statement content
 */
function formatBusinessStatementContent(statement, strategicSections) {
  const { vision, mission, coreValues, purpose } = strategicSections;
  const coreValuesSection = formatCoreValues(coreValues);

  return `# Business Statement

${statement}
---

**Vision:**

${vision || ''}

**Mission:**

${mission || ''}

**Core Values:**

${coreValuesSection}

**Purpose:**

${purpose || ''}
`;
}

/**
 * Saves strategic sections to documentation file
 */
async function saveStrategicSections(statement, strategicSections) {
  const content = formatBusinessStatementContent(statement, strategicSections);
  
  if (safeWriteFile(PROBLEM_STATEMENT_PATH, content)) {
    console.log('Business statement saved.');
  } else {
    console.error('Failed to save business statement.');
  }
}

/**
 * Orchestrates business statement processing with LLM
 */
async function saveBusinessStatementWithLLM(statement) {
  const stack = getTechnologyStack();
  const contextBundle = await gatherProjectContext();
  const strategicSections = await generateStrategicSections(statement, stack, contextBundle);
  
  await saveStrategicSections(statement, strategicSections);
}

// ===== REQUIREMENTS OUTPUT PROCESSING =====

/**
 * Formats a single role's needs section
 */
function formatRoleNeeds(needs) {
  if (!needs || !Array.isArray(needs) || needs.length === 0) return '';
  
  let section = '**Needs:**\n';
  needs.forEach(need => {
    section += `- ${need}\n`;
  });
  return section;
}

/**
 * Formats a single role's processes section
 */
function formatRoleProcesses(processes) {
  if (!processes || !Array.isArray(processes) || processes.length === 0) return '';
  
  let section = '**Processes:**\n';
  processes.forEach(proc => {
    section += `- ${proc}\n`;
  });
  return section;
}

/**
 * Formats a single role object for markdown output
 */
function formatRole(roleObj) {
  let roleSection = `## ${roleObj.role}\n`;
  roleSection += formatRoleNeeds(roleObj.needs);
  roleSection += formatRoleProcesses(roleObj.processes);
  roleSection += '\n';
  return roleSection;
}

/**
 * Formats all roles into complete markdown content
 */
function formatRequirementsContent(roles) {
  let content = '# Requirements Agent Output: Roles, Needs, and Processes\n\n';
  
  if (!roles || !Array.isArray(roles) || roles.length === 0) {
    content += 'No roles generated.\n';
    return content;
  }
  
  roles.forEach(roleObj => {
    content += formatRole(roleObj);
  });
  
  return content;
}

/**
 * Saves requirements agent output to documentation
 */
function saveRequirementsOutput(roles) {
  const content = formatRequirementsContent(roles);
  
  if (safeWriteFile(REQUIREMENTS_OUTPUT_PATH, content)) {
    console.log('Requirements agent output saved.');
  } else {
    console.error('Failed to save requirements output.');
  }
}

/**
 * Checks if requirements agent should run based on statement changes
 */
let lastStatement = '';
function shouldRunRequirementsAgent(statement) {
  if (lastStatement === statement) {
    console.log('Business problem statement unchanged. Skipping requirements agent output.');
    return false;
  }
  lastStatement = statement;
  return true;
}

// ===== TECHNOLOGY STACK DETECTION =====

/**
 * Maps dependency names to human-readable technology names
 */
function mapDependencyToTechnology(deps, devDeps) {
  const stack = [];
  const techMappings = [
    { condition: () => deps.includes('next'), name: 'Next.js' },
    { condition: () => deps.includes('react'), name: 'React' },
    { condition: () => deps.includes('tailwindcss') || devDeps.includes('tailwindcss'), name: 'Tailwind CSS' },
    { condition: () => deps.includes('firebase'), name: 'Firebase' },
    { condition: () => deps.some(d => d.startsWith('@genkit-ai')), name: 'Genkit AI' },
    { condition: () => deps.includes('@azure-rest/ai-inference'), name: 'Azure AI Inference' },
    { condition: () => deps.includes('@google-cloud/vertexai'), name: 'Google Vertex AI' },
    { condition: () => deps.includes('chart.js'), name: 'Chart.js' },
    { condition: () => deps.includes('recharts'), name: 'Recharts' },
    { condition: () => deps.includes('framer-motion'), name: 'Framer Motion' },
    { condition: () => deps.includes('@sentry/nextjs'), name: 'Sentry' },
    { condition: () => deps.includes('@hotjar/browser'), name: 'Hotjar' },
    { condition: () => deps.includes('@toast-ui/react-editor'), name: 'Toast UI Editor' },
    { condition: () => deps.includes('marked') || deps.includes('remark'), name: 'Markdown/Remark/Marked' },
    { condition: () => deps.includes('rehype-highlight'), name: 'Rehype Highlight' },
    { condition: () => deps.includes('clsx'), name: 'clsx' },
    { condition: () => deps.includes('dotenv'), name: 'dotenv' },
    { condition: () => devDeps.includes('typescript'), name: 'TypeScript' },
    { condition: () => devDeps.includes('eslint'), name: 'ESLint' }
  ];
  
  techMappings.forEach(mapping => {
    if (mapping.condition()) {
      stack.push(mapping.name);
    }
  });
  
  return stack;
}

/**
 * Detects technology stack from package.json dependencies
 */
function getTechnologyStack() {
  const pkgPath = path.join(__dirname, '../package.json');
  const pkg = parsePackageJson(pkgPath);
  
  if (!pkg) return [];
  
  const deps = Object.keys(pkg.dependencies || {});
  const devDeps = Object.keys(pkg.devDependencies || {});
  
  return mapDependencyToTechnology(deps, devDeps);
}

// ===== DOCUMENTATION GENERATION =====

/**
 * Generates and saves technology stack documentation
 */
function saveTechnologyStack() {
  const stack = getTechnologyStack();
  
  let content = '# Technology Stack\n\n';
  if (stack.length === 0) {
    content += 'No technology stack detected.';
  } else {
    stack.forEach(tech => {
      content += `- ${tech}\n`;
    });
  }
  
  if (safeWriteFile(TECHNOLOGY_STACK_PATH, content)) {
    console.log('Technology stack documentation saved.');
  } else {
    console.error('Failed to save technology stack documentation.');
  }
}

/**
 * Generates process flows content
 */
function generateProcessFlowsContent() {
  return `# Concept Process Flows for Requirements Agent Output

## Portfolio Owner

### Project and blog content management
1. User logs in.
2. User creates/edits/deletes a project or blog post.
3. System validates input and saves content.
4. Content is published or updated in the portfolio.
5. User receives confirmation or error notification.

### External service integration management
1. User selects an external service to integrate (e.g., GitHub).
2. System initiates OAuth or API key authentication.
3. User authorizes access.
4. System syncs data and confirms integration.
5. System monitors integration health and notifies user of issues.

### User authentication and authorization
1. User accesses login/register page.
2. User submits credentials or uses SSO.
3. System verifies identity.
4. User is granted access based on role/permissions.

### Analytics data retrieval and display
1. User requests analytics dashboard.
2. System fetches engagement data from database or analytics service.
3. Data is processed and visualized.
4. User views charts and insights.

### Media file management
1. User uploads, edits, or deletes media files.
2. System validates file type/size.
3. Media is stored and linked to relevant content.
4. User can preview or remove media.

### Profile customization
1. User accesses profile settings.
2. User updates appearance, layout, or personal info.
3. System saves changes and updates portfolio view.

### Notification management
1. System detects relevant event (e.g., new comment, integration error).
2. Notification is generated and sent to user (in-app or email).
3. User views and manages notifications.

## Portfolio Visitor

### Portfolio and blog content rendering
1. Visitor accesses portfolio URL.
2. System fetches and renders projects and blog posts.
3. Visitor browses content.

### External link and integration access
1. Visitor clicks external link (e.g., GitHub).
2. System verifies link and redirects visitor.

### Visitor interaction management
1. Visitor submits comment or contact form (if enabled).
2. System validates and stores interaction.
3. Portfolio owner is notified.

### Content loading and navigation
1. Visitor navigates between pages or sections.
2. System loads content dynamically for fast experience.

## Platform Administrator

### User and account management
1. Admin logs in to admin dashboard.
2. Admin views, edits, or deletes user accounts.
3. System updates user records and permissions.

### System monitoring and logging
1. System collects performance and activity logs.
2. Admin reviews logs and system health metrics.
3. Admin takes action if anomalies are detected.

### Security and compliance management
1. System runs security checks and compliance audits.
2. Admin reviews reports and addresses issues.

### Integration status monitoring
1. System checks health of external integrations.
2. Admin is alerted to failures or issues.
3. Admin investigates and resolves problems.

### Support ticketing and resolution
1. User submits support request.
2. System logs ticket and notifies admin.
3. Admin reviews, responds, and resolves the issue.
4. User is notified of resolution.

## Content Editor

### Collaborative content editing
1. Editor and owner access shared draft.
2. Both make edits in real time or asynchronously.
3. System tracks changes and resolves conflicts.

### Draft management and version control
1. Editor creates or updates a draft.
2. System saves versions and allows rollback.
3. Final draft is published upon approval.

### Media asset management
1. Editor uploads or organizes media assets.
2. System links assets to content and manages storage.
`;
}

/**
 * Saves process flows documentation
 */
function saveProcessFlows() {
  const content = generateProcessFlowsContent();
  
  if (safeWriteFile(PROCESS_FLOWS_PATH, content)) {
    console.log('Process flows documentation saved.');
  } else {
    console.error('Failed to save process flows documentation.');
  }
}

function saveDataModel() {
  // Step 2f: Write data model documentation
  const dataModel = `# Data Model for Portfolio Platform\n\n## Users\n- id (PK)\n- username\n- email\n- password_hash\n- role (owner, visitor, admin, editor)\n- profile_info (JSON or separate fields)\n- created_at\n- updated_at\n\n## Projects\n- id (PK)\n- user_id (FK to Users)\n- title\n- description\n- repo_url\n- tags\n- created_at\n- updated_at\n\n## BlogPosts\n- id (PK)\n- user_id (FK to Users)\n- title\n- content (Markdown/HTML)\n- status (draft/published)\n- created_at\n- updated_at\n\n## MediaFiles\n- id (PK)\n- user_id (FK to Users)\n- file_url\n- file_type\n- linked_project_id (nullable, FK to Projects)\n- linked_blogpost_id (nullable, FK to BlogPosts)\n- uploaded_at\n\n## Integrations\n- id (PK)\n- user_id (FK to Users)\n- service_name (GitHub, Dev.to, etc.)\n- access_token (encrypted)\n- status\n- last_synced_at\n\n## Analytics\n- id (PK)\n- user_id (FK to Users)\n- type (project_view, blog_view, etc.)\n- target_id (FK to Projects or BlogPosts)\n- count\n- date\n\n## Notifications\n- id (PK)\n- user_id (FK to Users)\n- type\n- message\n- is_read\n- created_at\n\n## Comments\n- id (PK)\n- blogpost_id (FK to BlogPosts)\n- user_id (FK to Users, nullable for anonymous)\n- content\n- created_at\n\n## SupportTickets\n- id (PK)\n- user_id (FK to Users)\n- subject\n- description\n- status (open, closed, pending)\n- created_at\n- updated_at\n\n## Drafts\n- id (PK)\n- user_id (FK to Users)\n- type (project, blogpost)\n- content\n- version\n- created_at\n- updated_at\n`;
  fs.writeFileSync(DATA_MODEL_PATH, dataModel, 'utf-8');
  console.log('Data model documentation saved.');
}

function generateFallbackStrategicSections(statement, stack) {
  // Generate strategic sections based on statement analysis
  const isPortfolio = statement.toLowerCase().includes('portfolio');
  const isBlog = statement.toLowerCase().includes('blog');
  const isPersonal = statement.toLowerCase().includes('personal');
  
  let vision, mission, purpose;
  let coreValues = [];
  
  if (isPortfolio && isPersonal) {
    vision = "To be the leading platform for individuals to showcase their work, connect with opportunities, and inspire others through their digital presence.";
    mission = "We empower individuals to create compelling digital portfolios that effectively communicate their skills, experience, and achievements to potential employers, clients, and collaborators.";
    purpose = "To bridge the gap between talent and opportunity by providing a comprehensive platform that makes professional networking and career advancement accessible to everyone.";
    coreValues = [
      "Professional Excellence - Maintaining high standards in design and functionality",
      "User Empowerment - Giving users complete control over their digital narrative",
      "Innovation - Continuously improving the platform with cutting-edge technology",
      "Accessibility - Ensuring the platform is usable by people of all backgrounds and abilities",
      "Privacy & Security - Protecting user data and maintaining trust"
    ];
  } else if (isBlog) {
    vision = "To empower users to share their stories and knowledge with a global audience in an engaging and accessible way.";
    mission = "We provide a robust blogging platform that combines ease of use with powerful features to help content creators build their audience and share meaningful content.";
    purpose = "To democratize content creation and help voices from all backgrounds reach their intended audience through intuitive and powerful blogging tools.";
    coreValues = [
      "Content Quality - Supporting creators in producing high-quality, engaging content",
      "Community Building - Fostering connections between creators and their audiences",
      "Creative Freedom - Providing flexible tools that don't limit artistic expression",
      "Performance - Ensuring fast, reliable content delivery worldwide",
      "Monetization Support - Helping creators turn their passion into sustainable income"
    ];
  } else {
    vision = "To create a positive impact by enabling users to achieve their goals through innovative digital solutions.";
    mission = "We develop user-centric digital products that solve real-world problems and enhance the way people work, learn, and connect online.";
    purpose = "To leverage technology as a force for good, creating tools that make life easier, more productive, and more connected for users worldwide.";
    coreValues = [
      "User-Centric Design - Putting user needs at the center of every decision",
      "Technical Excellence - Building robust, scalable, and maintainable solutions",
      "Continuous Learning - Staying current with technology trends and best practices",
      "Ethical Development - Creating responsible technology that respects user privacy",
      "Collaboration - Working transparently with users and stakeholders"
    ];
  }
  
  return { vision, mission, coreValues, purpose };
}

function generateFallbackRequirements(statement, stack) {
  // Generate comprehensive user roles and requirements based on the business statement
  const isPortfolio = statement.toLowerCase().includes('portfolio');
  const isBlog = statement.toLowerCase().includes('blog');
  const isPersonal = statement.toLowerCase().includes('personal');
  
  let roles = [];
  
  if (isPortfolio && isPersonal) {
    roles = [
      {
        role: "Portfolio Owner/Professional",
        needs: [
          "Create and maintain an attractive, professional online presence",
          "Showcase projects with detailed descriptions, images, and live demos",
          "Display skills, experience, and achievements effectively",
          "Integrate with GitHub to automatically showcase code repositories",
          "SEO optimization to improve discoverability by recruiters",
          "Mobile-responsive design for viewing on all devices",
          "Analytics to track portfolio visits and engagement",
          "Contact form integration for potential opportunities",
          "Customizable themes and layouts to match personal brand",
          "Export capabilities for offline presentation materials"
        ],
        processes: [
          "Portfolio creation and customization workflow",
          "Project addition and management process",
          "Content updating and version control",
          "Analytics review and optimization cycle",
          "Contact inquiry handling and response workflow"
        ]
      },
      {
        role: "Recruiter/Hiring Manager",
        needs: [
          "Quick assessment of candidate's technical skills and experience",
          "Easy navigation through candidate's project portfolio",
          "Access to live demos and code samples",
          "Contact information and professional summary",
          "Mobile-friendly viewing for on-the-go candidate review",
          "Integration with professional networks (LinkedIn, GitHub)",
          "Filtering and search capabilities for specific skills",
          "Bookmark or save functionality for candidate tracking",
          "Print-friendly formats for offline review",
          "Social proof through testimonials and recommendations"
        ],
        processes: [
          "Candidate discovery and initial screening process",
          "Portfolio review and technical assessment workflow",
          "Contact initiation and interview scheduling",
          "Candidate comparison and evaluation process",
          "Feedback collection and decision-making workflow"
        ]
      },
      {
        role: "Client/Potential Customer",
        needs: [
          "Clear understanding of services offered",
          "Examples of relevant past work and case studies",
          "Transparent pricing or rate information",
          "Easy way to request quotes or consultations",
          "Client testimonials and success stories",
          "Clear project timelines and delivery expectations",
          "Communication preferences and availability",
          "Technical expertise validation through project examples",
          "Industry-specific experience demonstration",
          "Professional credibility through certifications and achievements"
        ],
        processes: [
          "Service discovery and requirement understanding",
          "Project inquiry and consultation request workflow",
          "Proposal review and negotiation process",
          "Project onboarding and communication setup",
          "Project delivery and feedback collection cycle"
        ]
      }
    ];
  } else if (isBlog) {
    roles = [
      {
        role: "Content Creator/Blogger",
        needs: [
          "Rich text editor with markdown support",
          "Media upload and management capabilities",
          "SEO optimization tools and meta tag management",
          "Draft saving and version control",
          "Publishing scheduling and automation",
          "Content categorization and tagging system",
          "Analytics dashboard for post performance",
          "Comment moderation and engagement tools",
          "Social media integration for content sharing",
          "Email newsletter integration for subscriber notifications"
        ],
        processes: [
          "Content planning and editorial calendar management",
          "Writing, editing, and review workflow",
          "Publishing and promotion process",
          "Reader engagement and community building",
          "Performance analysis and content optimization cycle"
        ]
      },
      {
        role: "Reader/Subscriber",
        needs: [
          "Easy-to-read, well-formatted content",
          "Fast loading times and responsive design",
          "Search functionality to find specific topics",
          "Comment system for community engagement",
          "Subscription options for new content notifications",
          "Social sharing capabilities",
          "Related content suggestions and recommendations",
          "Offline reading capabilities",
          "Bookmark and save functionality",
          "Accessibility features for inclusive reading experience"
        ],
        processes: [
          "Content discovery and navigation workflow",
          "Reading and engagement process",
          "Subscription and notification management",
          "Community participation and discussion",
          "Content sharing and recommendation workflow"
        ]
      }
    ];
  } else {
    // Generic application roles
    roles = [
      {
        role: "End User",
        needs: [
          "Intuitive and user-friendly interface",
          "Fast, responsive performance across devices",
          "Reliable functionality and minimal downtime",
          "Clear navigation and information architecture",
          "Accessible design for users with disabilities",
          "Data security and privacy protection",
          "Help documentation and support resources",
          "Customization options for personal preferences",
          "Integration with commonly used tools and services",
          "Regular updates and feature improvements"
        ],
        processes: [
          "User onboarding and account setup",
          "Daily usage and feature utilization",
          "Help-seeking and support interaction",
          "Feedback provision and feature requests",
          "Account management and data export"
        ]
      },
      {
        role: "Administrator",
        needs: [
          "User management and access control",
          "System monitoring and performance analytics",
          "Content moderation and quality control",
          "Backup and data recovery capabilities",
          "Security audit trails and compliance reporting",
          "Integration management and API access",
          "Scalability planning and resource optimization",
          "Bug tracking and issue resolution tools",
          "Update deployment and version control",
          "Customer support tools and ticket management"
        ],
        processes: [
          "System administration and maintenance workflow",
          "User support and issue resolution process",
          "Security monitoring and incident response",
          "Performance optimization and scaling decisions",
          "Feature deployment and rollback procedures"
        ]
      }
    ];
  }
  
  return roles;
}

// Main automation flow
(async function main() {
  // Step 0: Orchestrate all documentation generation steps in order
  let statement;
  try {
    // Step 1: Analyze project and generate business problem statement
    statement = analyzeProject();
  } catch (error) {
    console.error('Error analyzing project for business statement:', error);
    process.exit(1);
  }

  try {
    // Step 2: Save business statement and strategic sections
    await saveBusinessStatementWithLLM(statement);
  } catch (error) {
    console.error('Error saving business statement with LLM:', error);
  }

  try {
    // Step 2d: Save technology stack documentation
    saveTechnologyStack();
  } catch (error) {
    console.error('Error saving technology stack documentation:', error);
  }

  try {
    // Step 2e: Save process flows documentation
    saveProcessFlows();
  } catch (error) {
    console.error('Error saving process flows documentation:', error);
  }

  try {
    // Step 2f: Save data model documentation
    saveDataModel();
  } catch (error) {
    console.error('Error saving data model documentation:', error);
  }

  try {
    // Step 5: Generate and save requirements agent output if needed
    if (shouldRunRequirementsAgent(statement)) {
      // Step 5b: Call requirements agent and save output
      const roles = await callRequirementsAgent(statement);
      try {
        saveRequirementsOutput(roles);
      } catch (error) {
        console.error('Error saving requirements agent output:', error);
      }
    } else {
      console.log('Requirements agent output not updated because the business problem statement did not change.');
    }
  } catch (error) {
    console.error('Error running requirements agent or saving output:', error);
  }
})();
