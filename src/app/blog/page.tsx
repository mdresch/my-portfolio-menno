import { getSortedPostsData } from '@/lib/markdown';
import BlogPageClient from '@/components/BlogPageClient';
import type { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Blog | Menno Drescher',
  description: 'Articles and thoughts on technology, development, and more.',
  openGraph: {
    title: 'Blog | Menno Drescher',
    description: 'Articles and thoughts on technology, development, and more.',
    type: 'website',
  },
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function BlogPageWrapper() {
  const posts = await getSortedPostsData();
  return <BlogPageClient posts={posts} />;
}
