'use client';

import { useState } from 'react';
import { BlogPostFile } from '@/types/github';
import { FiExternalLink } from 'react-icons/fi';

interface DevToPublisherProps {
  post: BlogPostFile;
}

export default function DevToPublisher({ post }: DevToPublisherProps) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [error, setError] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [showApiForm, setShowApiForm] = useState(false);

  // Get the site's domain for canonical URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  
  const handlePublish = async () => {
    if (!apiKey) {
      setShowApiForm(true);
      return;
    }

    setIsPublishing(true);
    setError('');
    
    try {
      // Extract front matter for tags
      const categories = post.categories || [];
      
      // Format date for DEV.to
      const publishDate = new Date(post.date).toISOString();
      
      // Create the payload for DEV.to API
      const devToArticle = {
        article: {
          title: post.title,
          body_markdown: post.content,
          published: true,
          tags: categories,
          canonical_url: `${baseUrl}/blog/${post.path.split('/').pop()?.replace('.md', '')}`,
          series: null,
          main_image: null,
          description: post.excerpt || '',
          organization_id: null
        }
      };
      
      // Send to DEV.to API
      const response = await fetch('https://dev.to/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey
        },
        body: JSON.stringify(devToArticle)
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${await response.text()}`);
      }
      
      const result = await response.json();
      setPublishedUrl(result.url);
    } catch (err: any) {
      console.error('Error publishing to DEV.to:', err);
      setError(err.message || 'Error publishing to DEV.to');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleSaveApiKey = () => {
    if (apiKey) {
      sessionStorage.setItem('devto_api_key', apiKey);
      setShowApiForm(false);
      handlePublish();
    }
  };

  return (
    <div className="mt-4">
      {!showApiForm ? (
        <div>
          <button
            onClick={handlePublish}
            disabled={isPublishing}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md disabled:opacity-50"
          >
            {isPublishing ? 'Publishing...' : 'Publish to DEV.to'}
            <FiExternalLink />
          </button>
          
          {error && (
            <div className="mt-2 text-sm text-red-600">
              {error}
            </div>
          )}
          
          {publishedUrl && (
            <div className="mt-2 text-sm">
              Published to{' '}
              <a 
                href={publishedUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                DEV.to
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-4 p-4 border border-gray-200 rounded-md">
          <h3 className="text-md font-medium mb-2">DEV.to API Key</h3>
          <p className="text-sm text-gray-500 mb-2">
            To publish to DEV.to, you need an API key. Get one from your{' '}
            <a 
              href="https://dev.to/settings/extensions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              DEV.to settings
            </a>.
          </p>
          
          <div className="flex gap-2">
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your DEV.to API key"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            />
            
            <button
              onClick={handleSaveApiKey}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md"
            >
              Save & Publish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
