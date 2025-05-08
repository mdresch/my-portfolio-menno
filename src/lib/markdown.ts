import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight'; 
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

// In your layout.tsx or a component that wraps your blog posts
import 'highlight.js/styles/github.css'; // Or another style like vs2015, atom-one-dark, etc.

const postsDirectory = path.join(process.cwd(), 'content/blog');
const projectsDirectory = path.join(process.cwd(), 'content/project');

export interface PostParams {
  params: {
    slug: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
  categories: string[];
  readingTime: string;
  author?: string;
  hasError?: boolean;
  errorMessage?: string;
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  datePublished?: string;
  category?: string;
  image?: string;
  caseStudy?: string;
  screenshots?: string[];
  outcomes?: string[];
}

export interface ProjectMarkdown {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

// SERVER-SIDE FUNCTIONS (for static generation)
export async function getAllPostIdsFromFiles(): Promise<PostParams[]> {
  try {
    const fileNames = await readdir(postsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => ({
        params: {
          slug: fileName.replace(/\.md$/, '')
        }
      }));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// This is the function used by Next.js static generation
export async function getAllPostIds(): Promise<PostParams[]> {
  return getAllPostIdsFromFiles();
}

// SERVER-SIDE function to get post data directly from files
export async function getPostDataFromFile(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await readFile(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    let matterResult;
    try {
      matterResult = matter(fileContents);
    } catch (yamlError) {
      console.error(`YAML parsing error in ${slug}.md:`, yamlError);
      // Return a post with error information
      return {
        id: slug,
        slug,
        title: `⚠️ YAML Error: ${slug}`,
        date: new Date().toISOString(),
        excerpt: `This post has a frontmatter error: ${yamlError.message}`,
        content: `# Error in Frontmatter\n\nThere was an error parsing the frontmatter in this file.\n\n\`\`\`\n${yamlError.message}\n\`\`\`\n\nPlease check the YAML formatting in the frontmatter section.`,
        categories: ['error'],
        readingTime: '1 min read',
        author: 'Unknown',
        hasError: true,
        errorMessage: yamlError.message
      };
    }
    
    // Use remark to convert markdown into HTML string
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm) 
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(matterResult.content);
      
    const contentHtml = processedContent.toString();
    
    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = matterResult.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    // Ensure categories is always an array
    let categories = matterResult.data.categories || [];
    
    // Handle if categories is a string rather than an array
    if (typeof categories === 'string') {
      categories = [categories];
    }
    
    return {
      id: slug,
      slug,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : '',
      excerpt: matterResult.data.excerpt || '',
      content: contentHtml,
      categories: categories,
      readingTime: `${readingTime} min read`,
      author: matterResult.data.author || 'Anonymous'
    };
  } catch (error) {
    console.error(`Error getting post data for ${slug}:`, error);
    return null;
  }
}

// CLIENT-SIDE FETCH FUNCTIONS
// These are only used in client components, not during static generation

// Client-side equivalent of getAllPostIds - not used for static generation
export async function getSortedPostsData(): Promise<Omit<BlogPost, 'content'>[]> {
  if (typeof window === 'undefined') {
    // We're on the server during SSR (not static generation)
    // Read directly from files instead of making API call
    try {
      const fileNames = await readdir(postsDirectory);
      const allPostsData = await Promise.all(
        fileNames
          .filter(fileName => fileName.endsWith('.md'))
          .map(async fileName => {
            try {
              const slug = fileName.replace(/\.md$/, '');
              const fullPath = path.join(postsDirectory, fileName);
              const fileContents = await readFile(fullPath, 'utf8');
              
              try {
                const matterResult = matter(fileContents);
                
                // Ensure categories is always an array
                let categories = matterResult.data.categories || [];
                
                // Handle if categories is a string rather than an array
                if (typeof categories === 'string') {
                  categories = [categories];
                }
                
                return {
                  id: slug,
                  slug,
                  title: matterResult.data.title || 'Untitled',
                  date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : '',
                  excerpt: matterResult.data.excerpt || '',
                  categories: categories,
                  readingTime: '3 min read', // Simple placeholder
                  author: matterResult.data.author || 'Anonymous'
                };
              } catch (yamlError) {
                console.error(`YAML parsing error in ${fileName}:`, yamlError);
                // Return a post with error information so the UI can still render
                return {
                  id: slug,
                  slug,
                  title: `⚠️ Error: ${slug}`,
                  date: new Date().toISOString(),
                  excerpt: `This post has a frontmatter error: ${yamlError.message}`,
                  categories: ['error'],
                  readingTime: '1 min read',
                  author: 'Unknown',
                  hasError: true,
                  errorMessage: yamlError.message
                };
              }
            } catch (fileError) {
              console.error(`Error processing file ${fileName}:`, fileError);
              return null;
            }
          })
      );
      
      // Filter out null entries and sort posts by date
      return allPostsData
        .filter(Boolean)
        .sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          } else {
            return -1;
          }
        });
    } catch (error) {
      console.error('Error reading posts from files:', error);
      return [];
    }
  } else {
    // We're on the client
    const response = await fetch('/api/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  }
}

// Client-side function to get a single post
export async function getPostData(slug: string): Promise<BlogPost | null> {
  if (typeof window === 'undefined') {
    // Server-side - read from file
    return getPostDataFromFile(slug);
  } else {
    // Client-side - use API
    const response = await fetch(`/api/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return response.json();
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const fileNames = await readdir(projectsDirectory);
    return fileNames.filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading project directory:', error);
    return [];
  }
}

export async function getProjectData(slug: string): Promise<ProjectMarkdown | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = await readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug,
      frontmatter: matterResult.data as ProjectFrontmatter,
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`Error getting project data for ${slug}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<ProjectMarkdown[]> {
  const slugs = await getAllProjectSlugs();
  const projects = await Promise.all(slugs.map(getProjectData));
  return projects.filter(Boolean) as ProjectMarkdown[];
}
