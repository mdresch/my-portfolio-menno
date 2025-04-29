"use client";
import React, { Suspense, useState } from 'react';
import { Metadata } from 'next';
import { fetchPostsFromGitHub } from '@/lib/github';
import Link from 'next/link';
import BlogPost from '@/components/blog/BlogPost';
import { notFound } from 'next/navigation';
import BlogSearch from '@/components/BlogSearch';
import CategoryFilter from '@/components/CategoryFilter';

export default function BlogPageWrapper() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data.filter((post: any) => post && post.title && post.slug)));
  }, []);

  // Extract unique categories and years
  const categories = Array.from(new Set(posts.flatMap((post: any) => post.categories || [])));
  const years = Array.from(new Set(posts.map((post: any) => new Date(post.date).getFullYear().toString()))).sort((a, b) => b.localeCompare(a));

  // Filtering logic
  const filteredPosts = posts.filter((post: any) => {
    const matchesQuery =
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(query.toLowerCase()) ||
      post.author?.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory ? (post.categories || []).includes(selectedCategory) : true;
    const matchesYear = selectedYear ? new Date(post.date).getFullYear().toString() === selectedYear : true;
    return matchesQuery && matchesCategory && matchesYear;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <BlogSearch onSearch={setQuery} />
        <select
          className="border rounded px-3 py-2"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          className="border rounded px-3 py-2"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      {filteredPosts.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-700">No blog posts found.</p>
        </div>
      ) : (
        <ul className="space-y-8">
          {filteredPosts.map((post: any) => (
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
      )}
    </div>
  );
}
