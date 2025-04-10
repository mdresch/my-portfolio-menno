import { Suspense } from 'react';
import { getSortedPostsData } from '@/lib/markdown';
import BlogPosts from '@/components/BlogPosts';

export default async function BlogPage() {
  const posts = await getSortedPostsData();
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories))
  ).sort();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="max-w-4xl mx-auto">
        <Suspense fallback={<div>Loading posts...</div>}>
          <BlogPosts initialPosts={posts} categories={categories} />
        </Suspense>
      </div>
    </main>
  );
}
