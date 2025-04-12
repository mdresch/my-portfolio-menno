import matter from 'gray-matter';
import { BlogPost } from './markdown';

const GITHUB_API_URL = 'https://api.github.com';
const OWNER = 'mdresch';
const REPO = 'my-portfolio-menno';
const BLOG_PATH = 'content/blog';

interface GitHubContent {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content?: string;
  encoding?: string;
}

export async function fetchPostsFromGitHub(token?: string): Promise<BlogPost[]> {
  try {
    // Set up headers for GitHub API
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
    };
    
    // Add token if provided
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }
    
    // Fetch directory listing of blog posts
    const contentsUrl = `${GITHUB_API_URL}/repos/${OWNER}/${REPO}/contents/${BLOG_PATH}`;
    const response = await fetch(contentsUrl, { headers });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    
    const contents: GitHubContent[] = await response.json();
    
    // Filter for markdown files only
    const markdownFiles = contents.filter(file => 
      file.type === 'file' && file.name.endsWith('.md')
    );
    
    // Fetch and process each markdown file - with error handling
    const postsPromises = markdownFiles.map(async file => {
      try {
        const fileResponse = await fetch(file.download_url);
        if (!fileResponse.ok) {
          console.error(`Failed to fetch file: ${file.path}`);
          return null; // Skip this file instead of failing completely
        }
        
        const markdown = await fileResponse.text();
        
        try {
          const { data, content } = matter(markdown);
          
          // Extract file name without extension as slug
          const slug = file.name.replace(/\.md$/, '');
          
          // Create post object
          const post: BlogPost = {
            id: file.sha,
            slug,
            title: data.title || 'Untitled',
            date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
            excerpt: data.excerpt || '',
            content: content,
            categories: data.categories || [],
            readingTime: calculateReadingTime(content),
            author: data.author || 'Anonymous'
          };
          
          return post;
        } catch (yamlError) {
          // Handle YAML parsing errors
          console.error(`YAML parsing error in file ${file.path}:`, yamlError);
          console.log(`Problem file URL: ${file.html_url}`);
          
          // Create a partial post object with error information
          return {
            id: file.sha,
            slug: file.name.replace(/\.md$/, ''),
            title: `⚠️ YAML Error: ${file.name}`,
            date: new Date().toISOString(),
            excerpt: `This post has a frontmatter error: ${yamlError.message}`,
            content: `# Error in Frontmatter\n\nThere was an error parsing the frontmatter in this file.\n\n\`\`\`\n${yamlError.message}\n\`\`\`\n\nYou can view and fix the file at: ${file.html_url}`,
            categories: ['error'],
            readingTime: '1 min read',
            hasError: true,
            errorMessage: yamlError.message
          };
        }
      } catch (fileError) {
        console.error(`Error processing file ${file.path}:`, fileError);
        return null;
      }
    });
    
    const postsWithPossibleNulls = await Promise.all(postsPromises);
    
    // Filter out nulls (failed posts)
    const posts = postsWithPossibleNulls.filter(post => post !== null);
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
  } catch (error) {
    console.error('Error fetching posts from GitHub:', error);
    throw error;
  }
}

// Helper function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

// Function to fetch a single post by slug
export async function fetchPostFromGitHub(slug: string, token?: string): Promise<BlogPost | null> {
  try {
    const posts = await fetchPostsFromGitHub(token);
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching post '${slug}' from GitHub:`, error);
    throw error;
  }
}