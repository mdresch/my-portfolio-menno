import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

// Keep all your existing logic but rename the file to make it clear it's server-only
const postsDirectory = path.join(process.cwd(), "content/blog");

// Export your existing functions
export async function getAllPostIds() { /* existing code */ }
export async function getSortedPostsData() { /* existing code */ }
export async function getPostData(slug) { /* existing code */ }