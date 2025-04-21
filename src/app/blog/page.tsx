import { Suspense } from 'react';
import { Metadata } from 'next';
import { fetchPostsFromGitHub } from '@/lib/github';
import Link from 'next/link';
import BlogPost from '@/components/blog/BlogPost';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Blog | Menno Drescher",
  description: "Articles and insights about web development, technology, and more.",
};

export default async function BlogPage() {
  const posts = await fetchPostsFromGitHub();
  const validPosts = posts.filter((post) => post && post.title && post.slug);

  if (validPosts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-700">No valid blog posts found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-8">
        {validPosts.map((post) => (
          <li key={post.slug} className="flex gap-6 items-start">
            {post.coverImage && (
              <div className="flex-shrink-0 w-40 h-28 relative rounded overflow-hidden bg-gray-100 border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            )}
            <div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl text-blue-700 hover:underline font-semibold"
              >
                {post.title}
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                {post.author && <span>By {post.author}</span>}
                {post.readingTime && <span>• {post.readingTime}</span>}
              </div>
              {post.excerpt && (
                <p className="text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
