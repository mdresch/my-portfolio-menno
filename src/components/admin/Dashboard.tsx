'use client';

import { useState, useEffect, useMemo } from 'react';
import { Octokit } from '@octokit/rest';
import PostList from './PostList';
import PostEditor from './PostEditor';
import { GitHubUser, BlogPostFile } from '@/types/github';

const REPO_OWNER = 'mdresch'; // Replace with your GitHub username
const REPO_NAME = 'my-portfolio-menno'; // Replace with your repo name
const CONTENT_PATH = 'content/blog'; // Path to blog content in repo

interface DashboardProps {
  user: GitHubUser;
}

type EditorMode = 'list' | 'create' | 'edit';

export default function Dashboard({ user }: DashboardProps) {
  const [mode, setMode] = useState<EditorMode>('list');
  const [posts, setPosts] = useState<BlogPostFile[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPostFile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Initialize Octokit with the user's token using useMemo to avoid recreation on every render
  const octokit = useMemo(() => new Octokit({ auth: user.token }), [user.token]);

  // Fetch posts from GitHub repository
  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      setError('');

      try {
        // Get contents of the blog directory
        const { data: files } = await octokit.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: CONTENT_PATH,
        });

        // Filter for markdown files only
        const markdownFiles = Array.isArray(files) 
          ? files.filter(file => file.name.endsWith('.md'))
          : [];

        // Get content for each file
        const postsData = await Promise.all(
          markdownFiles.map(async (file) => {
            try {
              // Get file content
              const { data: fileData } = await octokit.repos.getContent({
                owner: REPO_OWNER,
                repo: REPO_NAME,
                path: file.path,
              });

              // Decode content from base64
              const content = Buffer.from(fileData.content, 'base64').toString();
              
              // Extract title and date from frontmatter
              const titleMatch = content.match(/title:\s*["'](.+)["']/);
              const dateMatch = content.match(/date:\s*["']?(.+)["']?/);
              
              return {
                name: file.name,
                path: file.path,
                sha: fileData.sha,
                title: titleMatch ? titleMatch[1] : file.name.replace('.md', ''),
                date: dateMatch ? dateMatch[1] : 'Unknown date',
                content
              };
            } catch (err) {
              console.error(`Error fetching ${file.path}:`, err);
              return null;
            }
          })
        );

        setPosts(postsData.filter(Boolean));
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please check your connection and permissions.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [octokit, user.token]);

  // Handle creating a new post
  const handleCreatePost = (): void => {
    setCurrentPost({
      title: '',
      content: `---
title: ""
date: "${new Date().toISOString().split('T')[0]}"
excerpt: ""
categories: []
---

`,
    });
    setMode('create');
  };

  // Handle editing an existing post
  const handleEditPost = (post: BlogPostFile): void => {
    setCurrentPost(post);
    setMode('edit');
  };

  // Handle saving post (either new or existing)
  const handleSavePost = async (post: BlogPostFile, commitMessage: string): Promise<void> => {
    try {
      if (mode === 'create') {
        // Generate filename from title
        const filename = post.title
          .toLowerCase()
          .replace(/[^\w\s]/g, '')
          .replace(/\s+/g, '-') + '.md';

        // Create a new file in the repo
        await octokit.repos.createOrUpdateFileContents({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: `${CONTENT_PATH}/${filename}`,
          message: commitMessage || `Add new post: ${post.title}`,
          content: Buffer.from(post.content).toString('base64'),
          committer: {
            name: user.name || user.login,
            email: user.email || `${user.login}@users.noreply.github.com`,
          },
        });

        alert('Post created successfully!');
      } else {
        // Update existing file
        await octokit.repos.createOrUpdateFileContents({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: currentPost.path,
          message: commitMessage || `Update post: ${post.title}`,
          content: Buffer.from(post.content).toString('base64'),
          sha: currentPost.sha,
          committer: {
            name: user.name || user.login,
            email: user.email || `${user.login}@users.noreply.github.com`,
          },
        });

        alert('Post updated successfully!');
      }

      // Return to post list and refresh
      setMode('list');
      // Re-fetch posts to get updated list
      window.location.reload();
    } catch (err) {
      console.error('Error saving post:', err);
      alert(`Error saving post: ${err.message}`);
    }
  };

  // Handle creating a pull request for review
  const handleCreatePR = async (post: BlogPostFile, title: string, body: string): Promise<void> => {
    try {
      // Create a new branch
      const branchName = `post/${Date.now()}-${post.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-')}`;
      
      // Get default branch as base
      const { data: repoData } = await octokit.repos.get({
        owner: REPO_OWNER,
        repo: REPO_NAME,
      });
      
      const baseBranch = repoData.default_branch;
      
      // Get reference to base branch
      const { data: refData } = await octokit.git.getRef({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        ref: `heads/${baseBranch}`,
      });
      
      // Create new branch from base branch
      await octokit.git.createRef({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        ref: `refs/heads/${branchName}`,
        sha: refData.object.sha,
      });
      
      // Save changes to new branch
      const filename = mode === 'create' 
        ? `${CONTENT_PATH}/${post.title
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')}.md`
        : currentPost.path;
      
      await octokit.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: filename,
        message: `Draft: ${title || post.title}`,
        content: Buffer.from(post.content).toString('base64'),
        branch: branchName,
        ...(mode === 'edit' && { sha: currentPost.sha }),
        committer: {
          name: user.name || user.login,
          email: user.email || `${user.login}@users.noreply.github.com`,
        },
      });
      
      // Create pull request
      const { data: prData } = await octokit.pulls.create({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        title: title || `New post: ${post.title}`,
        body: body || 'This post needs review before publishing.',
        head: branchName,
        base: baseBranch,
      });
      
      alert(`Pull request created! PR #${prData.number}`);
      // Return to post list
      setMode('list');
    } catch (err) {
      console.error('Error creating PR:', err);
      alert(`Error creating pull request: ${err.message}`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Welcome, {user.login}!</h2>
          <p className="text-gray-600">Manage your blog posts</p>
        </div>
        
        {mode === 'list' && (
          <button 
            onClick={handleCreatePost}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Create New Post
          </button>
        )}
        
        {mode !== 'list' && (
          <button 
            onClick={() => setMode('list')}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Posts
          </button>
        )}
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {mode === 'list' && (
        <PostList 
          posts={posts} 
          isLoading={isLoading}
          onEditPost={handleEditPost}
        />
      )}
      
      {(mode === 'create' || mode === 'edit') && (
        <PostEditor
          post={currentPost}
          mode={mode}
          onSave={handleSavePost}
          onCreatePR={handleCreatePR}
        />
      )}
    </div>
  );
}
