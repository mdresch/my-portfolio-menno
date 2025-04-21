'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/lib/markdown';

interface BlogPostsProps {
  posts: BlogPost[];
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {post.coverImage && (
            <div className="relative aspect-video">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              {post.categories?.map((category) => (
                <Link
                  key={category}
                  href={`/blog/category/${category.toLowerCase()}`}
                  className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2 line-clamp-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author && <span>{post.author}</span>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}