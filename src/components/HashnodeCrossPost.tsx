'use client';

import { useState } from 'react';
import { BlogPost } from '@/lib/markdown';

interface HashnodeCrossPostProps {
  post: BlogPost;
}

export default function HashnodeCrossPost({ post }: HashnodeCrossPostProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    url?: string;
    error?: string;
  }>({});
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [token, setToken] = useState('');

  const handleCrossPost = async () => {
    if (!token) {
      setShowTokenInput(true);
      return;
    }
    
    setIsLoading(true);
    setResult({});
    
    try {
      // Call our server-side API route instead of directly calling Hashnode
      const response = await fetch('/api/hashnode-crosspost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post,
          token
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error cross-posting:', error);
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to cross-post'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 border rounded-lg p-4 bg-white">
      <h3 className="text-xl font-semibold mb-3">Cross-Post to Hashnode</h3>
      
      {showTokenInput && !result.success && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hashnode Personal Access Token
          </label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Hashnode token"
          />
          <p className="text-xs mt-1 text-gray-500">
            Your token is never stored and only used for this request. 
            <a 
              href="https://hashnode.com/settings/developer" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Get your token here
            </a>
          </p>
        </div>
      )}
      
      {result.success ? (
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <p className="text-green-800 font-medium">Successfully cross-posted to Hashnode!</p>
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View on Hashnode →
          </a>
        </div>
      ) : result.error ? (
        <div className="bg-red-50 p-3 rounded border border-red-200">
          <p className="text-red-800 font-medium">Error cross-posting to Hashnode</p>
          <p className="text-red-600 mt-1">{result.error}</p>
          <button
            onClick={handleCrossPost}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            Try again
          </button>
        </div>
      ) : null}
      
      <button
        onClick={handleCrossPost}
        disabled={isLoading}
        className={`mt-3 px-4 py-2 rounded font-medium ${
          isLoading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-purple-600 text-white hover:bg-purple-700'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Cross-posting...
          </span>
        ) : (
          'Cross-Post to Hashnode'
        )}
      </button>
      
      <p className="mt-4 text-sm text-gray-600">
        Cross-posting will publish this article to your Hashnode blog with a canonical link back to your original post.
      </p>
    </div>
  );
}