'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the editor to avoid SSR issues
const MarkdownEditor = dynamic(() => import('@/components/admin/MarkdownEditor'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-md"></div>
});

export default function NewPostPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [categories, setCategories] = useState(['']);
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  
  // GitHub credentials
  const [githubToken, setGithubToken] = useState('');
  
  useEffect(() => {
    // Check if user is authenticated
    const adminAuth = localStorage.getItem('adminAuth');
    const token = localStorage.getItem('githubToken');
    
    if (!adminAuth) {
      router.push('/admin');
      return;
    }
    
    setIsAuthenticated(true);
    if (token) {
      setGithubToken(token);
    }
    setIsLoading(false);
  }, [router]);
  
  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };
  
  // Handle title change
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };
  
  // Handle category change
  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };
  
  // Add new category field
  const addCategory = () => {
    setCategories([...categories, '']);
  };
  
  // Remove category field
  const removeCategory = (index) => {
    if (categories.length > 1) {
      const newCategories = [...categories];
      newCategories.splice(index, 1);
      setCategories(newCategories);
    }
  };
  
  // Create post via GitHub API
  const createPost = async (e) => {
    e.preventDefault();
    
    if (!githubToken) {
      setError('GitHub token is required. Please add it in Settings tab.');
      return;
    }
    
    if (!title || !slug || !content) {
      setError('Title, slug, and content are required fields.');
      return;
    }
    
    setIsSaving(true);
    setError('');
    
    // Filter out empty categories
    const filteredCategories = categories.filter(cat => cat.trim() !== '');
    
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    // Create frontmatter with proper YAML formatting for categories
    let categoriesYAML;
    if (filteredCategories.length > 0) {
      // Use block style for categories (more YAML compatible)
      categoriesYAML = `categories:\n${filteredCategories.map(cat => `  - "${cat}"`).join('\n')}`;
    } else {
      // Use proper spacing for empty array
      categoriesYAML = 'categories: []';
    }

    const frontmatter = `---
title: "${title}"
date: "${date}"
author: "${author}"
excerpt: "${excerpt}"
${categoriesYAML}
---

${content}`;

    console.log("Generated Frontmatter:\n", frontmatter); // Add log for debugging

    try {
      const response = await fetch('/api/github/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: githubToken,
          content: frontmatter, // Use the updated frontmatter
          path: `content/blog/${slug}.md`,
          message: `Add blog post: ${title}`
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create post');
      }
      
      setSuccess(true);
      // Redirect after short delay
      setTimeout(() => {
        router.push('/admin');
      }, 2000);
      
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err.message || 'Failed to create post. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/admin" className="text-blue-600 hover:underline flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Admin
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
              Post created successfully! Redirecting...
            </div>
          )}
          
          <form onSubmit={createPost}>
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter post title"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="enter-post-slug"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                URL-friendly name for your post (auto-generated from title)
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Brief summary of your post"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Author name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categories
              </label>
              {categories.map((category, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => handleCategoryChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. JavaScript, React, Web Development"
                  />
                  <button
                    type="button"
                    onClick={() => removeCategory(index)}
                    className="px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                    disabled={categories.length <= 1}
                  >
                    -
                  </button>
                  {index === categories.length - 1 && (
                    <button
                      type="button"
                      onClick={addCategory}
                      className="px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-r-md"
                    >
                      +
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <MarkdownEditor 
                value={content} 
                onChange={setContent} 
                height="400px"
              />
            </div>
            
            {!githubToken && (
              <div className="mb-6">
                <label htmlFor="github-token" className="block text-sm font-medium text-gray-700 mb-1">
                  GitHub Personal Access Token
                </label>
                <input
                  type="password"
                  id="github-token"
                  value={githubToken}
                  onChange={(e) => setGithubToken(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your GitHub token"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Token needs repo permissions. You can also save this in Settings.
                </p>
              </div>
            )}
            
            <div className="flex justify-end gap-3">
              <Link
                href="/admin/dashboard"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSaving}
                className={`px-4 py-2 rounded-md font-medium ${
                  isSaving 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSaving ? 'Creating Post...' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}