"use client";
import React, { useState, useMemo, useEffect } from 'react';
import BlogSearch from '@/components/BlogSearch';
import { BlogPosts } from '@/components/blog/BlogPost';
import { BlogPost } from '@/lib/markdown';

// Helper for debouncing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

export default function BlogPageClient({ posts }: { posts: Omit<BlogPost, 'content'>[] }) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Debounce search query to avoid excessive re-renders
  const debouncedQuery = useDebounce(query, 300);
  
  // Memoize expensive computations
  const categories = useMemo(() => 
    Array.from(new Set(posts.flatMap(post => post.categories || []))),
    [posts]
  );
  
  const years = useMemo(() => 
    Array.from(new Set(posts.map(post => 
      new Date(post.date).getFullYear().toString())
    )).sort((a, b) => b.localeCompare(a)),
    [posts]
  );
  
  // Show loading state briefly when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [debouncedQuery, selectedCategory, selectedYear]);
  
  // Memoize filtered posts to avoid recalculation on every render
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        post.author?.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchesCategory = selectedCategory ? (post.categories || []).includes(selectedCategory) : true;
      const matchesYear = selectedYear ? new Date(post.date).getFullYear().toString() === selectedYear : true;
      return matchesQuery && matchesCategory && matchesYear;
    });
  }, [posts, debouncedQuery, selectedCategory, selectedYear]);

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
      <BlogPosts posts={filteredPosts} isLoading={isLoading} />
    </div>
  );
}
