import { Suspense } from 'react';
import { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/markdown';
import BlogPosts from '@/components/BlogPosts';

export const metadata: Metadata = {
  title: "Blog | Menno Drescher",
  description: "Explore articles on web development, technology, and software engineering by Menno Drescher.",
  keywords: ["blog", "web development", "programming", "tech articles", "Menno Drescher"],
  openGraph: {
    title: "Blog | Menno Drescher",
    description: "Explore articles on web development, technology, and software engineering.",
    type: "website",
    images: [
      {
        url: "https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "Menno Drescher's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Menno Drescher",
    description: "Explore articles on web development, technology, and software engineering.",
    images: ["https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg"], // Create this image
  },
};

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
