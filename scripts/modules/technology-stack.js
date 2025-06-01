// scripts/modules/technology-stack.js
// Technology stack analysis and documentation

import path from 'path';
import { fileURLToPath } from 'url';
import {
  safeReadFile,
  safeWriteFile,
  safeParseJson,
  logInfo,
  logError
} from '../utils.js';
import { REQUIREMENTS_DIR } from '../../config/paths.js';

// ES module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Analyze and extract technology stack from package.json
 * @returns {Promise<Array>} Array of technologies
 */
export async function getTechnologyStack() {
  const pkgPath = path.join(__dirname, '../../package.json');
  const pkgContent = await safeReadFile(pkgPath);
  
  if (!pkgContent) {
    logError('Could not read package.json');
    return [];
  }
  
  const pkg = safeParseJson(pkgContent);
  if (!pkg) {
    logError('Could not parse package.json');
    return [];
  }
  
  const technologies = new Set();
  
  // Add dependencies
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  
  // Map package names to readable technology names
  const techMapping = {
    'next': 'Next.js',
    'react': 'React',
    '@genkit-ai/core': 'Genkit AI',
    '@azure-rest/ai-inference': 'Azure AI Inference',
    '@google-cloud/vertexai': 'Google Vertex AI',
    'chart.js': 'Chart.js',
    'recharts': 'Recharts',
    'framer-motion': 'Framer Motion',
    '@sentry/nextjs': 'Sentry',
    'tailwindcss': 'Tailwind CSS',
    'firebase': 'Firebase',
    '@tui/editor': 'Toast UI Editor',
    'marked': 'Markdown/Remark/Marked',
    'remark': 'Markdown/Remark/Marked',
    'rehype-highlight': 'Rehype Highlight',
    'clsx': 'clsx',
    'dotenv': 'dotenv',
    'typescript': 'TypeScript',
    'eslint': 'ESLint'
  };
  
  // Check for technologies in dependencies
  Object.keys(deps).forEach(dep => {
    // Direct mapping
    if (techMapping[dep]) {
      technologies.add(techMapping[dep]);
    }
    // Pattern matching for related packages
    else if (dep.includes('next')) technologies.add('Next.js');
    else if (dep.includes('react')) technologies.add('React');
    else if (dep.includes('tailwind')) technologies.add('Tailwind CSS');
    else if (dep.includes('firebase')) technologies.add('Firebase');
    else if (dep.includes('genkit')) technologies.add('Genkit AI');
    else if (dep.includes('azure') && dep.includes('ai')) technologies.add('Azure AI Inference');
    else if (dep.includes('vertex') || dep.includes('google-cloud')) technologies.add('Google Vertex AI');
    else if (dep.includes('chart')) technologies.add('Chart.js');
    else if (dep.includes('sentry')) technologies.add('Sentry');
    else if (dep.includes('hotjar')) technologies.add('Hotjar');
    else if (dep.includes('markdown') || dep.includes('remark') || dep.includes('marked')) {
      technologies.add('Markdown/Remark/Marked');
    }
  });
  
  return Array.from(technologies).sort();
}

/**
 * Save technology stack documentation
 * @param {Array} stack - Technology stack array
 */
export async function saveTechnologyStack(stack = null) {
  const technologies = stack || await getTechnologyStack();
  
  const content = `# Technology Stack

${technologies.map(tech => `- ${tech}`).join('\n')}
`;

  const stackPath = path.join(REQUIREMENTS_DIR, 'technology-stack.md');
  await safeWriteFile(stackPath, content);
  logInfo('Technology stack documentation saved.');
}
