'use client';

import { useBlogPosts } from '@/hooks/useBlogPosts';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

// Loading Skeleton
const BlogPostSkeleton = () => (
  <div className="border rounded-lg p-6 bg-gray-50 animate-pulse">
    <div className="h-7 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
    <div className="flex flex-wrap gap-2 mb-4">
      {[1, 2].map((i) => (
        <div key={i} className="h-6 bg-gray-200 rounded w-16" />
      ))}
    </div>
  </div>
);

// Error Component
const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
    <h3 className="text-lg font-medium">Error Loading Blog Posts</h3>
    <p>{message}</p>
  </div>
);

export default function BlogPostsList() {
  const { blogPosts, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <BlogPostSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  if (blogPosts.length === 0) {
    return <p className="text-center py-10 text-gray-500">No blog posts found.</p>;
  }

  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
        >
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
          </Link>
          
          <div className="text-sm text-gray-500 mb-3">
            {post.author && <span>{post.author} • </span>}
            <time dateTime={post.published}>{formatDate(post.published)}</time>
          </div>
          
          {post.excerpt && <p className="text-gray-700 mb-4">{post.excerpt}</p>}
          
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          
          <div className="mt-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Read more →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
