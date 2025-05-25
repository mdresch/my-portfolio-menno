import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';

// Path to your project markdown files
const PROJECT_DIR = path.join(process.cwd(), 'content/project');

// Output file for formatted documents
const OUTPUT_FILE = path.join(process.cwd(), 'data/project-rag-documents.json');

interface ProjectDocument {
  id: string;
  content: string;
  metadata: {
    source: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    challenges: string[];
    category: string;
    type: 'project';
  };
}

// Helper function to extract and clean project content
function extractProjectData(frontmatter: any, content: string, filename: string): ProjectDocument {
  // Extract project slug from filename
  const slug = path.basename(filename, '.md');
  
  // Combine all textual content for searchability
  const fullContent = [
    frontmatter.title || '',
    frontmatter.description || '',
    ...(frontmatter.technologies || []),
    ...(frontmatter.challenges || []),
    content.trim()
  ].filter(Boolean).join(' ');

  // Extract tags based on technologies and content
  const tags = [];
  const contentLower = fullContent.toLowerCase();
  
  // Technology-based tags
  if (contentLower.includes('react') || contentLower.includes('next.js')) tags.push('frontend');
  if (contentLower.includes('node.js') || contentLower.includes('express')) tags.push('backend');
  if (contentLower.includes('mongodb') || contentLower.includes('database')) tags.push('database');
  if (contentLower.includes('typescript') || contentLower.includes('javascript')) tags.push('javascript');
  if (contentLower.includes('tailwind') || contentLower.includes('css')) tags.push('styling');
  if (contentLower.includes('ai') || contentLower.includes('machine learning') || contentLower.includes('ml')) tags.push('ai');
  if (contentLower.includes('dashboard') || contentLower.includes('visualization')) tags.push('data-visualization');
  if (contentLower.includes('api') || contentLower.includes('integration')) tags.push('integration');
  if (contentLower.includes('cloud') || contentLower.includes('azure') || contentLower.includes('aws')) tags.push('cloud');
  if (contentLower.includes('security') || contentLower.includes('authentication')) tags.push('security');
  if (contentLower.includes('analytics') || contentLower.includes('insights')) tags.push('analytics');

  // Domain-based tags
  if (contentLower.includes('hr') || contentLower.includes('human resources')) tags.push('hr');
  if (contentLower.includes('financial') || contentLower.includes('finance')) tags.push('finance');
  if (contentLower.includes('risk') || contentLower.includes('compliance')) tags.push('risk-management');
  if (contentLower.includes('governance') || contentLower.includes('framework')) tags.push('governance');
  if (contentLower.includes('portfolio') || contentLower.includes('personal')) tags.push('personal-project');

  return {
    id: `project-${slug}`,
    content: fullContent,
    metadata: {
      source: `content/project/${filename}`,
      title: frontmatter.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: frontmatter.description || '',
      technologies: frontmatter.technologies || [],
      link: frontmatter.link || '',
      challenges: frontmatter.challenges || [],
      category: 'project',
      type: 'project' as const
    }
  };
}

async function extractAllProjects() {
  // Find all .md files in the project directory (exclude projects.json)
  const files = await glob('*.md', { cwd: PROJECT_DIR });
  
  console.log(`Found ${files.length} project files:`);
  files.forEach(file => console.log(`  - ${file}`));

  const documents: ProjectDocument[] = files.map((file) => {
    const filePath = path.join(PROJECT_DIR, file);
    console.log(`Processing: ${file}`);
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    const document = extractProjectData(frontmatter, content, file);
    
    console.log(`  Title: ${document.metadata.title}`);
    console.log(`  Technologies: ${document.metadata.technologies.join(', ') || 'none'}`);
    console.log(`  Content length: ${document.content.length} chars`);
    console.log(`  Challenges: ${document.metadata.challenges.length} listed`);
    
    return document;
  }).filter(doc => {
    const include = doc.content.length > 50; // More lenient for project descriptions
    if (!include) {
      console.log(`  Filtered out ${doc.id} due to insufficient content (${doc.content.length} chars)`);
    }
    return include;
  });

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write the formatted documents to a JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(documents, null, 2));
  console.log(`\nExtracted ${documents.length} project documents to ${OUTPUT_FILE}`);
  
  // Log sample projects for verification
  console.log('\nExtracted projects:');
  documents.forEach(doc => {
    console.log(`- ${doc.metadata.title}`);
    console.log(`  Technologies: ${doc.metadata.technologies.join(', ')}`);
    console.log(`  Description: ${doc.metadata.description.substring(0, 100)}${doc.metadata.description.length > 100 ? '...' : ''}`);
    console.log(`  Content length: ${doc.content.length} chars`);
    console.log('');
  });

  // Summary statistics
  const allTechnologies = [...new Set(documents.flatMap(doc => doc.metadata.technologies))];
  const totalChallenges = documents.reduce((sum, doc) => sum + doc.metadata.challenges.length, 0);
  
  console.log('Summary Statistics:');
  console.log(`- Total projects: ${documents.length}`);
  console.log(`- Unique technologies: ${allTechnologies.length}`);
  console.log(`- Total challenges documented: ${totalChallenges}`);
  console.log(`- Technologies used: ${allTechnologies.join(', ')}`);
}

extractAllProjects().catch(console.error);
