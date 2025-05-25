import React from 'react';
import { getSortedPostsData } from '../../lib/markdown';
import BlogPageClient from '../../components/BlogPageClient';
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
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      

      
      <BlogPageClient posts={posts} />
    </div>
  );
}
