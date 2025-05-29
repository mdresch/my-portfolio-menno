"use client";
import React, { useState, useMemo, useEffect } from "react";
import BlogSearch from "./BlogSearch";
import BlogPosts from "./BlogPosts";
import { BlogPost } from "../lib/markdown";
import SearchWidget from "./SearchWidget";

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

export default function BlogPageClient({ posts }: { posts: Omit<BlogPost, "content">[] }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState("");
  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 10; // Number of posts per page

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

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / pageSize);
  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredPosts.slice(start, start + pageSize);
  }, [filteredPosts, page, pageSize]);

  // Reset to first page when filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery, selectedCategory, selectedYear]);

  // Handler for clicking a category badge on a blog card
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      
      <div className="flex flex-row items-center gap-4 mb-6">
        <div className="h-12 flex-1">
          <BlogSearch onSearch={setQuery} />
        </div>
        <div className="h-12">
          <label htmlFor="category-select" className="sr-only">Filter by category</label>
          <select
            id="category-select"
            className="h-full border rounded px-3 py-2 min-w-[160px]"
            value={selectedCategory || ""}
            onChange={e => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="h-12">
          <label htmlFor="year-select" className="sr-only">Filter by year</label>
          <select
            id="year-select"
            className="h-full border rounded px-3 py-2 min-w-[120px]"
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
      <BlogPosts posts={paginatedPosts as BlogPost[]} onCategoryClick={handleCategoryClick} />
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            className="px-3 py-1 rounded border bg-gray-50 disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            &larr; Prev
          </button>
          <span className="mx-2">Page {page} of {totalPages}</span>
          <button
            className="px-3 py-1 rounded border bg-gray-50 disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
