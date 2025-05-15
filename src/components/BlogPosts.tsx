'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/lib/markdown';

interface BlogPostsProps {
  posts: BlogPost[];
  onCategoryClick?: (category: string) => void;
}

export default function BlogPosts({ posts, onCategoryClick }: BlogPostsProps) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-cyan-100 dark:border-cyan-800 flex flex-col"
        >
          {post.coverImage && (
            <div className="relative aspect-video">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          )}
          <div className="p-6 flex flex-col h-full">
            <div className="flex gap-2 mb-3 flex-wrap">
              {post.categories?.map((category) => (
                onCategoryClick ? (
                  <button
                    key={category}
                    type="button"
                    onClick={() => onCategoryClick(category)}
                    className="text-xs px-2 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    {category}
                  </button>
                ) : (
                  <Link
                    key={category}
                    href={`/blog/category/${category.toLowerCase()}`}
                    className="text-xs px-2 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    {category}
                  </Link>
                )
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-900 dark:text-white">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-label="Reading time" title="Reading time">• {post.readingTime}</span>
                {/* Example: Replace with actual times read if available */}
                {/* <span aria-label="Times read" title="Times read">• {post.timesRead} reads</span> */}
              </div>
              {post.author && <span>{post.author}</span>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}