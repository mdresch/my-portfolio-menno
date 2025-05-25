import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Path to your risk page files
const RISK_DIR = path.join(process.cwd(), 'src/app/risk');

// Output file for formatted documents
const OUTPUT_FILE = path.join(process.cwd(), 'data/blog-rag-risk-documents.json');

interface RiskDocument {
  id: string;
  content: string;
  metadata: {
    source: string;
    title: string;
    date: string;
    tags: string[];
    category: string;
    type: 'risk-analysis';
  };
}

// Helper function to extract text content from React components
function extractTextFromReactComponent(content: string): { title: string; textContent: string; metadata: any } {
  // Extract title from h1 tags or component title patterns
  const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/i) || 
                    content.match(/title.*?=.*?["']([^"']+)["']/i) ||
                    content.match(/\btitle:\s*["']([^"']+)["']/i) ||
                    content.match(/className="[^"]*"[^>]*>([^<]{10,})<\/h1>/i);
  
  let title = titleMatch ? titleMatch[1].replace(/[{}]/g, '').trim() : 'Untitled Risk Analysis';
  
  // Try to extract title from the file path if not found
  if (title === 'Untitled Risk Analysis') {
    const pathMatch = content.match(/\/risk\/([^\/]+)\/page\.tsx/);
    if (pathMatch) {
      title = pathMatch[1].split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ') + ' Risk Analysis';
    }
  }

  // Extract date information
  const dateMatch = content.match(/(\w+\s+\d{1,2},\s+\d{4})/) ||
                   content.match(/\d{4}-\d{2}-\d{2}/) ||
                   content.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
  
  const date = dateMatch ? dateMatch[0] : '';

  // Extract text content from various patterns
  let textContent = '';
  
  // Extract content from template literals (backticks)
  const templateLiterals = content.match(/`([^`]{50,})`/gs) || [];
  templateLiterals.forEach(match => {
    const cleanMatch = match.slice(1, -1) // Remove backticks
      .replace(/\$\{[^}]+\}/g, '') // Remove template literal variables
      .replace(/\\n/g, ' ') // Replace newlines
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    if (cleanMatch.length > 30) {
      textContent += cleanMatch + ' ';
    }
  });

  // Extract content from const variable assignments with strings
  const constStringMatches = content.match(/const\s+\w+\s*=\s*`([^`]+)`/gs) || [];
  constStringMatches.forEach(match => {
    const stringMatch = match.match(/`([^`]+)`/);
    if (stringMatch) {
      const cleanMatch = stringMatch[1]
        .replace(/\$\{[^}]+\}/g, '')
        .replace(/\\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      if (cleanMatch.length > 30) {
        textContent += cleanMatch + ' ';
      }
    }
  });

  // Extract content from arrays (like key findings)
  const arrayMatches = content.match(/\[[\s\S]*?\]/g) || [];
  arrayMatches.forEach(match => {
    const stringElements = match.match(/'([^']{20,})'/g) || match.match(/"([^"]{20,})"/g) || [];
    stringElements.forEach(element => {
      const cleanElement = element.slice(1, -1).trim();
      if (!cleanElement.includes('className') && !cleanElement.includes('href')) {
        textContent += cleanElement + ' ';
      }
    });
  });

  // Extract JSX text content
  const jsxTextMatches = content.match(/>([^<>{]{30,})</g) || [];
  jsxTextMatches.forEach(match => {
    const cleanMatch = match.slice(1, -1).trim();
    if (!cleanMatch.includes('{') && !cleanMatch.includes('className') && !cleanMatch.includes('style')) {
      textContent += cleanMatch + ' ';
    }
  });

  // Extract content from p tags and other text elements
  const pTagMatches = content.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
  pTagMatches.forEach(match => {
    const textMatch = match.match(/>([^<]+)</);
    if (textMatch && textMatch[1].length > 20) {
      textContent += textMatch[1].trim() + ' ';
    }
  });

  // Clean up the extracted content
  textContent = textContent
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/[{}]/g, '') // Remove curly braces
    .replace(/\\\\/g, '') // Remove escaped characters
    .replace(/&[a-z]+;/gi, '') // Remove HTML entities
    .trim();

  // Extract tags based on content
  const tags = [];
  const contentLower = (title + ' ' + textContent).toLowerCase();
  
  if (contentLower.includes('tariff') || contentLower.includes('trade')) tags.push('trade');
  if (contentLower.includes('climate') || contentLower.includes('environmental')) tags.push('climate');
  if (contentLower.includes('supply chain')) tags.push('supply-chain');
  if (contentLower.includes('cyber') || contentLower.includes('security')) tags.push('cybersecurity');
  if (contentLower.includes('financial') || contentLower.includes('banking')) tags.push('financial');
  if (contentLower.includes('geopolitical') || contentLower.includes('political')) tags.push('geopolitical');
  if (contentLower.includes('regulation') || contentLower.includes('compliance')) tags.push('regulatory');
  if (contentLower.includes('economic') || contentLower.includes('gdp')) tags.push('economic');
  if (contentLower.includes('canada') || contentLower.includes('canadian')) tags.push('canada');
  if (contentLower.includes('crypto') || contentLower.includes('blockchain')) tags.push('cryptocurrency');

  return {
    title,
    textContent,
    metadata: {
      date,
      tags
    }
  };
}

async function extractRiskContent() {
  // Find all page.tsx files in risk subdirectories
  const files = await glob('*/page.tsx', { cwd: RISK_DIR });
  
  console.log(`Found ${files.length} risk page files:`);
  files.forEach(file => console.log(`  - ${file}`));

  const documents: RiskDocument[] = files.map((file) => {
    const filePath = path.join(RISK_DIR, file);
    console.log(`Processing: ${file}`);
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const { title, textContent, metadata } = extractTextFromReactComponent(fileContent);
    
    console.log(`  Title: ${title}`);
    console.log(`  Content length: ${textContent.length} chars`);
    console.log(`  Tags: ${metadata.tags.join(', ') || 'none'}`);
    
    // Get the directory name as the slug
    const slug = path.dirname(file);
    
    return {
      id: `risk-${slug}`,
      content: textContent,
      metadata: {
        source: `src/app/risk/${file}`,
        title: title,
        date: metadata.date,
        tags: metadata.tags,
        category: 'risk-analysis',
        type: 'risk-analysis' as const
      }
    };
  }).filter(doc => {
    const include = doc.content.length > 100;
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
  console.log(`Extracted ${documents.length} risk analysis documents to ${OUTPUT_FILE}`);
  
  // Log some sample titles for verification
  console.log('\nExtracted documents:');
  documents.slice(0, 5).forEach(doc => {
    console.log(`- ${doc.metadata.title} (${doc.content.length} chars)`);
    console.log(`  Preview: ${doc.content.substring(0, 100)}...`);
  });
}

extractRiskContent().catch(console.error);
