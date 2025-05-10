"use client";
import React, { useState, useMemo, useEffect } from 'react';
import BlogSearch from '@/components/BlogSearch';
import BlogPosts from '@/components/BlogPosts';
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState('');
  
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
  // (removed isLoading logic as it's no longer used)
  useEffect(() => {
    // No loading state needed
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

  // Handler for clicking a category badge on a blog card
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 gap-4 mb-6">
        <div className="flex-1">
          <BlogSearch onSearch={setQuery} />
        </div>
        <div>
          <label htmlFor="category-select" className="sr-only">Filter by category</label>
          <select
            id="category-select"
            className="border rounded px-3 py-2 min-w-[160px]"
            value={selectedCategory || ''}
            onChange={e => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year-select" className="sr-only">Filter by year</label>
          <select
            id="year-select"
            className="border rounded px-3 py-2 min-w-[120px]"
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <BlogPosts posts={filteredPosts as BlogPost[]} onCategoryClick={handleCategoryClick} />
    </div>
  );
}
