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
  const [isTokenAuth, setIsTokenAuth] = useState(true);

  useEffect(() => {
    // Check if we have a container
    if (!containerRef.current) {
      return;
    }

    // Remove any existing script
    const existingScript = document.getElementById('giscus');
    if (existingScript) {
      existingScript.remove();
    }

    // Get repository configuration
    const repoId = process.env.NEXT_PUBLIC_GITHUB_REPO_ID;
    const categoryId = process.env.NEXT_PUBLIC_GITHUB_CATEGORY_ID;
    const repoName = process.env.NEXT_PUBLIC_GITHUB_REPO;
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    // Validate required configuration
    if (!repoId || !categoryId || !repoName) {
      const missing = [];
      if (!repoId) missing.push('NEXT_PUBLIC_GITHUB_REPO_ID');
      if (!categoryId) missing.push('NEXT_PUBLIC_GITHUB_CATEGORY_ID');
      if (!repoName) missing.push('NEXT_PUBLIC_GITHUB_REPO');
      setError(`Missing required environment variables: ${missing.join(', ')}`);
      setIsLoading(false);
      setHasLoaded(true);
      return;
    }

    // Create new script
    const script = document.createElement('script');
    script.id = 'giscus';
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repoName);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'nl');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Add authentication configuration
    if (token) {
      script.setAttribute('data-login', 'token');
      script.setAttribute('data-service', 'github');
      script.setAttribute('data-token', token);
      script.setAttribute('data-giscus-url', window.location.href);
    } else {
      script.setAttribute('data-login', 'github');
      script.setAttribute('data-service', 'github');
    }

    // Add script to container
    containerRef.current.appendChild(script);

    // Listen for messages from Giscus
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://giscus.app') {
        if (event.data?.giscus?.resizeHeight) {
          setIsLoading(false);
          setError(null);
          setHasLoaded(true);
        } else if (event.data?.error) {
          setIsLoading(false);
          setError(event.data.error);
          setHasLoaded(true);
          
          // If we're getting an auth error, try to fix it
          if (event.data.error.includes('auth') && isTokenAuth) {
            // Remove the script and try again without token
            script.remove();
            setIsTokenAuth(false);
            
            // Create new script without token
            const fallbackScript = document.createElement('script');
            fallbackScript.id = 'giscus';
            fallbackScript.src = 'https://giscus.app/client.js';
            fallbackScript.setAttribute('data-repo', repoName);
            fallbackScript.setAttribute('data-repo-id', repoId);
            fallbackScript.setAttribute('data-category', 'Blog Comments');
            fallbackScript.setAttribute('data-category-id', categoryId);
            fallbackScript.setAttribute('data-mapping', 'pathname');
            fallbackScript.setAttribute('data-strict', '0');
            fallbackScript.setAttribute('data-reactions-enabled', '1');
            fallbackScript.setAttribute('data-emit-metadata', '0');
            fallbackScript.setAttribute('data-input-position', 'bottom');
            fallbackScript.setAttribute('data-theme', 'preferred_color_scheme');
            fallbackScript.setAttribute('data-lang', 'nl');
            fallbackScript.setAttribute('crossorigin', 'anonymous');
            fallbackScript.async = true;
            
            // Add GitHub login configuration
            fallbackScript.setAttribute('data-login', 'github');
            fallbackScript.setAttribute('data-service', 'github');
            
            // Add to container
            containerRef.current?.appendChild(fallbackScript);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      const existingScript = document.getElementById('giscus');
      if (existingScript) {
        existingScript.remove();
      }
      window.removeEventListener('message', handleMessage);
    };
  }, [term, theme]);

  return (
    <section id="comments" className="mt-12 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-8">{label}</h2>
      
      {/* Loading state */}
      {isLoading && !hasLoaded && (
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
          <p className="text-gray-500">Loading comments...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="bg-red-50 p-4 rounded-lg mb-4">
          <p className="text-red-800">{error}</p>
          <p className="text-sm text-red-600 mt-2">
            {isTokenAuth 
              ? "Please try refreshing the page or log in with GitHub."
              : "Please log in with your GitHub account to view comments."}
          </p>
        </div>
      )}

      {/* Success state */}
      {!isLoading && !error && (
        <div className="min-h-[200px]">
          <div ref={containerRef} />
        </div>
      )}

      {/* Empty state */}
      {!isLoading && !error && !hasLoaded && (
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <p className="text-gray-500">No comments yet</p>
          <p className="text-sm text-gray-400">
            Be the first to leave a comment!
          </p>
        </div>
      )}
    </section>
  );
}
