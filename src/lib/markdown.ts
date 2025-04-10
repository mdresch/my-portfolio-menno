import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
  categories: string[];
  readingTime: string;
}

export async function getAllPostIds() {
  const fileNames = await readdir(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getSortedPostsData(): Promise<Omit<BlogPost, 'content'>[]> {
  const fileNames = await readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await readFile(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const wordCount = matterResult.content.split(/\s+/).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        id: slug,
        slug,
        readingTime,
        ...(matterResult.data as { title: string; date: string; excerpt: string; categories: string[] }),
      };
    })
  );

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();
  const wordCount = matterResult.content.split(/\s+/).length;
  const readingTime = `${Math.ceil(wordCount / 200)} min read`;

  return {
    id: slug,
    content,
    slug,
    readingTime,
    ...(matterResult.data as { title: string; date: string; excerpt: string; categories: string[] }),
  };
}
