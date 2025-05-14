'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the editor to avoid SSR issues
const MarkdownEditor = dynamic(() => import('@/components/admin/MarkdownEditor'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-md"></div>
});

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EditPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [postSlug, setPostSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [categories, setCategories] = useState(['']);
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [originalContent, setOriginalContent] = useState('');

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
      // Fetch the post data
      fetchPost(slug, token);    } else {
      setError('GitHub token is required to edit posts. Please add it in Settings.');
    }
    setIsLoading(false);
  }, [slug, router]);

  // Fetch post data
  const fetchPost = async (slug, token) => {
    try {
      setIsLoading(true);
      setError('');

      const endpoint = token
        ? `/api/github-posts?slug=${slug}&token=${token}`
        : `/api/github-posts?slug=${slug}`;

      const response = await fetch(endpoint);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to fetch post: ${response.status}`);
      }

      const post = await response.json();

      // Populate form with post data
      setTitle(post.title || '');
      setPostSlug(post.slug || slug);
      setExcerpt(post.excerpt || '');
      setCategories(post.categories && post.categories.length > 0 ? post.categories : ['']);
      setContent(post.content || '');
      setDate(post.date ? new Date(post.date).toISOString().split('T')[0] : '');
      setAuthor(post.author || '');
      setOriginalContent(post.content || '');
      setPost(post); // <-- Fix: set the post state so the form renders

    } catch (err) {
      console.error('Error fetching post:', err);
      setError(err.message || 'Failed to fetch post');
    } finally {
      setIsLoading(false);
    }
  };

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

    // Only auto-update slug if it hasn't been manually edited or is the same as original
    if (postSlug === slug || postSlug === '') {
      setPostSlug(generateSlug(newTitle));
    }
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

  // Update post via GitHub API
  const updatePost = async (e) => {
    e.preventDefault();

    if (!githubToken) {
      setError('GitHub token is required. Please add it in Settings tab.');
      return;
    }

    if (!title || !postSlug || !content) {
      setError('Title, slug, and content are required fields.');
      return;
    }

    setIsSaving(true);
    setError('');

    // Filter out empty categories
    const filteredCategories = categories.filter(cat => cat.trim() !== '');

    // Create frontmatter
    const frontmatter = `---
title: ${title}
date: ${date || new Date().toISOString().split('T')[0]}
author: ${author}
excerpt: ${excerpt}
categories: [${filteredCategories.join(', ')}]
---

${content}`;

    try {
      const response = await fetch('/api/github/update-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: githubToken,
          content: frontmatter,
          oldPath: `content/blog/${slug}.md`,
          newPath: `content/blog/${postSlug}.md`,
          message: `Update blog post: ${title}`
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update post');
      }

      setSuccess(true);
      // Redirect after short delay
      setTimeout(() => {
        router.push('/admin');
      }, 2000);

    } catch (err) {
      console.error('Error updating post:', err);
      setError(err.message || 'Failed to update post. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold text-red-600 mb-4">Error</h1>
        <p>{error || 'Post not found'}</p>
        <Link href="/admin/dashboard" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Admin
        </Link>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/admin/dashboard" className="text-blue-600 hover:underline flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Admin
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Edit Blog Post</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
              Post updated successfully! Redirecting...
            </div>
          )}

          <form onSubmit={updatePost}>
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
                value={postSlug}
                onChange={(e) => setPostSlug(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="enter-post-slug"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                URL-friendly name for your post
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                height="500px"
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
                {isSaving ? 'Updating Post...' : 'Update Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}