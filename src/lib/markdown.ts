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
    const matterResult = matter(fileContents);
    
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
    
    return {
      id: slug,
      slug,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : '',
      excerpt: matterResult.data.excerpt || '',
      content: contentHtml,
      categories: matterResult.data.categories || [],
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
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = await readFile(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            
            return {
              id: slug,
              slug,
              title: matterResult.data.title || 'Untitled',
              date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : '',
              excerpt: matterResult.data.excerpt || '',
              categories: matterResult.data.categories || [],
              readingTime: '3 min read', // Simple placeholder
              author: matterResult.data.author || 'Anonymous'
            };
          })
      );
      
      // Sort posts by date
      return allPostsData.sort((a, b) => {
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
