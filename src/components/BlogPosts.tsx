'use client';

import { useState } from 'react';
import Link from 'next/link';
import BlogSearch from './BlogSearch';
import CategoryFilter from './CategoryFilter';
import type { BlogPost } from '@/lib/markdown';

interface BlogPostsProps {
  initialPosts: Omit<BlogPost, 'content'>[];
  categories: string[];
}

export default function BlogPosts({ initialPosts, categories }: BlogPostsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search query and selected category
  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === null || post.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <BlogSearch onSearch={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-3">
              <time className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 text-sm">{post.readingTime}</span>
            </div>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="block hover:text-blue-600 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            </Link>
            
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
