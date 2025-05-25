import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';

// Path to your blog markdown files
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// Output file for formatted documents
const OUTPUT_FILE = path.join(process.cwd(), 'data/blog-rag-documents.json');

async function extractBlogContent() {
  // Find all .md files in the blog directory
  const files = await glob('*.md', { cwd: BLOG_DIR });

  const documents = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);

    // Clean and format the content (e.g., remove extra whitespace)
    const cleanContent = content.trim();

    return {
      id: `blog-${path.basename(file, '.md')}`,
      content: cleanContent,
      metadata: {
        source: `content/blog/${file}`,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || '',
        tags: frontmatter.tags || [],
        author: frontmatter.author || 'Unknown'
      }
    };
  });

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write the formatted documents to a JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(documents, null, 2));
  console.log(`Extracted ${documents.length} blog posts to ${OUTPUT_FILE}`);
}

extractBlogContent().catch(console.error);
