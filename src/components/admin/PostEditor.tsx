'use client';

import { useState, useEffect } from 'react';
import { BlogPostFile } from '@/types/github';
import dynamic from 'next/dynamic';
import { marked } from 'marked';
import { FiSave, FiGitPullRequest } from 'react-icons/fi';
import DevToPublisher from './DevToPublisher';

// Dynamically import the entire CodeMirror component with extensions
// This avoids the issues with multiple instances of @codemirror/state
const CodeMirrorEditor = dynamic(() => import('./CodeMirrorEditor'), { ssr: false });

interface PostEditorProps {
  post: BlogPostFile | null;
  mode: 'create' | 'edit';
  onSave: (post: BlogPostFile, commitMessage: string) => Promise<void>;
  onCreatePR: (post: BlogPostFile, title: string, body: string) => Promise<void>;
}

export default function PostEditor({ post, mode, onSave, onCreatePR }: PostEditorProps) {
  const [content, setContent] = useState(post?.content || '');
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [commitMessage, setCommitMessage] = useState('');
  const [prTitle, setPrTitle] = useState('');
  const [prDescription, setPrDescription] = useState('');
  const [showPrForm, setShowPrForm] = useState(false);
  const [preview, setPreview] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  // Extract metadata from frontmatter
  useEffect(() => {
    if (post?.content) {
      // Extract title from frontmatter
      const titleMatch = post.content.match(/title:\s*["'](.+)["']/);
      if (titleMatch) {
        setTitle(titleMatch[1]);
      }

      // Extract excerpt
      const excerptMatch = post.content.match(/excerpt:\s*["'](.+)["']/);
      if (excerptMatch) {
        setExcerpt(excerptMatch[1]);
      }

      // Extract categories
      const categoriesMatch = post.content.match(/categories:\s*\[(.*?)\]/s);
      if (categoriesMatch && categoriesMatch[1]) {
        const cats = categoriesMatch[1]
          .split(',')
          .map((cat: string) => cat.trim().replace(/^['"]|['"]$/g, ''))
          .filter(Boolean);
        setCategories(cats);
      }
    }
  }, [post]);

  // Generate preview from markdown
  useEffect(() => {
    try {
      // Extract content without frontmatter
      const contentWithoutFrontmatter = content.replace(/---[\s\S]+?---/, '');
      const htmlContent = marked(contentWithoutFrontmatter);
      setPreview(htmlContent);
    } catch (err) {
      console.error('Error generating preview:', err);
    }
  }, [content]);

  // Update frontmatter when metadata changes
  const updateFrontmatter = () => {
    const frontmatter = `---
title: "${title}"
date: "${post?.date || new Date().toISOString().split('T')[0]}"
excerpt: "${excerpt}"
categories: [${categories.map(cat => `"${cat}"`).join(', ')}]
---`;

    // Replace existing frontmatter or add at the beginning
    const contentWithoutFrontmatter = content.replace(/---[\s\S]+?---/, '').trim();
    return `${frontmatter}\n\n${contentWithoutFrontmatter}`;
  };

  // Add a new category
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  // Remove a category
  const handleRemoveCategory = (category: string) => {
    setCategories(categories.filter(cat => cat !== category));
  };

  // Handle saving the post directly
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const updatedContent = updateFrontmatter();
      await onSave({ ...post, title, content: updatedContent }, commitMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle creating a pull request
  const handleCreatePR = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const updatedContent = updateFrontmatter();
      await onCreatePR(
        { ...post, title, content: updatedContent },
        prTitle || `${mode === 'create' ? 'Add' : 'Update'} post: ${title}`,
        prDescription
      );
    } finally {
      setIsProcessing(false);
      setShowPrForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">
          {mode === 'create' ? 'Create New Post' : 'Edit Post'}
        </h2>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter post title"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="excerpt" className="block text-sm font-medium mb-1">
            Excerpt
          </label>
          <input
            type="text"
            id="excerpt"
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Brief description of the post"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Categories
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map(category => (
              <span 
                key={category}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center"
              >
                {category}
                <button 
                  onClick={() => handleRemoveCategory(category)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-l-md"
              placeholder="Add a category"
              onKeyPress={e => e.key === 'Enter' && handleAddCategory()}
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="bg-gray-100 px-3 py-2 border border-l-0 rounded-r-md hover:bg-gray-200"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-4 py-2 ${activeTab === 'edit' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('edit')}
            >
              Edit
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'preview' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
          </div>
        </div>

        <div className="h-[500px] relative">
          {/* Editor */}
          <div className={`absolute inset-0 overflow-auto ${activeTab === 'edit' ? 'block' : 'hidden'}`}>
            {typeof window !== 'undefined' && (
              <CodeMirrorEditor
                value={content}
                onChange={(value) => setContent(value)}
              />
            )}
          </div>

          {/* Preview */}
          <div 
            className={`absolute inset-0 overflow-auto p-6 prose max-w-none ${activeTab === 'preview' ? 'block' : 'hidden'}`}
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </div>
      </div>

      <div className="flex space-x-4">
        {/* Direct Save Button */}
        <div className="flex-1">
          <form onSubmit={handleSave} className="space-y-3">
            <input
              type="text"
              value={commitMessage}
              onChange={e => setCommitMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder={`${mode === 'create' ? 'Add' : 'Update'} post: ${title}`}
            />
            <button
              type="submit"
              disabled={isProcessing || !title}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:bg-blue-400"
            >
              <FiSave />
              {isProcessing ? 'Saving...' : 'Save Directly'}
            </button>
          </form>
        </div>

        {/* Pull Request Button */}
        <div className="flex-1">
          {!showPrForm ? (
            <button
              onClick={() => setShowPrForm(true)}
              disabled={isProcessing || !title}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md disabled:bg-green-400"
            >
              <FiGitPullRequest />
              Create Pull Request
            </button>
          ) : (
            <form onSubmit={handleCreatePR} className="space-y-3">
              <input
                type="text"
                value={prTitle}
                onChange={e => setPrTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder={`${mode === 'create' ? 'Add' : 'Update'} post: ${title}`}
              />
              <textarea
                value={prDescription}
                onChange={e => setPrDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                rows={3}
                placeholder="Description of changes (optional)"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowPrForm(false)}
                  className="flex-1 px-4 py-2 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md disabled:bg-green-400"
                >
                  <FiGitPullRequest />
                  {isProcessing ? 'Creating...' : 'Submit PR'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      {/* Cross-posting integrations */}
      {post && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-medium mb-3">Cross-Platform Publishing</h3>
          <p className="text-sm text-gray-600 mb-4">
            Extend your reach by publishing this article to developer platforms.
          </p>
          
          <div className="space-y-4">
            <DevToPublisher post={post} />
            {/* Add more platforms here in the future */}
          </div>
        </div>
      )}
      
    </div>
  );
}
