'use client';

import React, { useState } from 'react';

export default function RagContentRefresher() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
    timestamp?: string;
  } | null>(null);

  const refreshContent = async () => {
    if (isRefreshing) return;

    setIsRefreshing(true);
    setResult(null);

    try {
      // Get the token from somewhere secure (this is just a placeholder)
      // In a real app, you'd store this in a secure environment variable or get it from auth
      const refreshToken = process.env.NEXT_PUBLIC_REFRESH_RAG_TOKEN || prompt('Enter refresh token:');
      
      if (!refreshToken) {
        setResult({ success: false, error: 'No refresh token provided' });
        setIsRefreshing(false);
        return;
      }

      const response = await fetch('/api/refresh-rag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`
        }
      });

      const data = await response.json();
      
      if (response.ok) {
        setResult({
          success: true,
          message: data.message || 'Content refreshed successfully',
          timestamp: data.timestamp
        });
      } else {
        setResult({
          success: false,
          error: data.error || 'Unknown error refreshing content'
        });
      }
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to refresh content'
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-2">RAG Content Management</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Update the RAG system with the latest blog posts, projects, and other content.
      </p>
      
      <button
        onClick={refreshContent}
        disabled={isRefreshing}
        className={`
          px-4 py-2 rounded-md text-white font-medium
          ${isRefreshing 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'}
          transition-colors
        `}
      >
        {isRefreshing ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Refreshing...
          </span>
        ) : 'Refresh RAG Content'}
      </button>
      
      {result && (
        <div className={`mt-4 p-3 rounded ${result.success ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'}`}>
          {result.success ? (
            <>
              <p className="font-medium">{result.message}</p>
              {result.timestamp && (
                <p className="text-xs mt-1">Updated at: {new Date(result.timestamp).toLocaleString()}</p>
              )}
            </>
          ) : (
            <p className="font-medium">Error: {result.error}</p>
          )}
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Last content update: {new Date().toLocaleDateString()}</p>
        <p>This will update the RAG documents used by the chatbot with the latest content from your blog posts, projects, and other sources.</p>
      </div>
    </div>
  );
}
