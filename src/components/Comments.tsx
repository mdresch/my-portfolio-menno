'use client';

import { useEffect, useRef, useState } from 'react';

interface CommentsProps {
  repo: string;
  term: string;
  label: string;
  theme?: 'light' | 'dark';
}

export default function Comments({ repo, term, label, theme = 'light' }: CommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [commentsExist, setCommentsExist] = useState(false);

  const retryLoading = () => {
    setIsLoading(true);
    setHasLoaded(false);
    setError(null);
  };

  useEffect(() => {
    // Get environment variables
    const repoId = process.env.NEXT_PUBLIC_GITHUB_REPO_ID;
    const categoryId = process.env.NEXT_PUBLIC_GITHUB_CATEGORY_ID;
    
    // Validate required environment variables
    if (!repoId || !categoryId || !repo) {
      setError('Comments configuration is incomplete. Please check your environment variables.');
      setIsLoading(false);
      return;
    }

    // Check if we have a container
    if (!containerRef.current) {
      return;
    }

    // Remove any existing script
    const existingScript = document.getElementById('giscus');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Clear container
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Create new script
    const script = document.createElement('script');
    script.id = 'giscus';
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', term);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', navigator.language || 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Handle message events from giscus iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://giscus.app') return;
      
      // Reset error state when ANY messages come from giscus
      // This ensures errors are cleared if widget appears
      if (error) {
        setError(null);
      }
      
      // Check for different indications that giscus has loaded
      if (
        event.data?.giscus?.discussion || 
        event.data?.giscus?.loading === false ||
        event.data?.giscus?.mounted === true
      ) {
        setIsLoading(false);
        setHasLoaded(true);
        // Check if comments exist (if that data is available)
        if (event.data?.giscus?.discussion) {
          setCommentsExist(event.data.giscus.discussion.comments.totalCount > 0);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Add script to container
    containerRef.current.appendChild(script);
    
    // Increase timeout to 15 seconds
    const timeout = setTimeout(() => {
      if (isLoading && !hasLoaded) {
        // Check if iframe exists despite no message events
        const iframe = containerRef.current?.querySelector('iframe');
        if (iframe) {
          // If iframe exists, assume it loaded successfully
          setIsLoading(false);
          setHasLoaded(true);
        } else {
          setError('Comments failed to load. Please refresh the page or check your connection.');
          setIsLoading(false);
        }
      }
    }, 15000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('message', handleMessage);
      const existingScript = document.getElementById('giscus');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [repo, term, theme, isLoading, hasLoaded]);

  return (
    <section id="comments" key={term} className="mt-12 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-8">{label}</h2>
      
      {/* Loading state */}
      {isLoading && !hasLoaded && (
        <div 
          className="flex flex-col items-center justify-center py-8 space-y-4"
          aria-live="polite"
        >
          <div
            className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
            aria-label="Loading comments"
          />
          <p className="text-gray-500">Loading comments...</p>
        </div>
      )}

      {/* Error state - only show if container is empty */}
      {error && !(containerRef.current?.querySelector('iframe')) && (
        <div className="bg-red-50 p-4 rounded-lg mb-4">
          <p className="text-red-800">{error}</p>
          <p className="text-sm text-red-600 mt-2">
            Please try refreshing the page or check if GitHub is accessible.
          </p>
          <button
            onClick={retryLoading}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      )}

      {/* No comments state - only show if explicitly detected */}
      {hasLoaded && !isLoading && !error && !commentsExist && (
        <div className="py-6 text-center border border-gray-100 rounded-lg">
          <p className="text-gray-500">No comments yet. Be the first to start the discussion!</p>
        </div>
      )}

      {/* Comments container */}
      <div ref={containerRef} className="giscus-comments"></div>

      <noscript>
        <p className="text-amber-700 bg-amber-50 p-4 rounded-lg">
          Comments require JavaScript to be enabled.
        </p>
      </noscript>
    </section>
  );
}
