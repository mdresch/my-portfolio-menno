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
    }

    // Add script to container
    containerRef.current.appendChild(script);

    // Listen for messages from Giscus
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://giscus.app') {
        if (event.data?.giscus?.resizeHeight) {
          setIsLoading(false);
          setError(null);
        } else if (event.data?.error) {
          setIsLoading(false);
          setError(event.data.error);
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
      {error && (
        <div className="bg-red-50 p-4 rounded-lg mb-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-4" />
          <span className="text-gray-500">Loading comments...</span>
        </div>
      ) : (
        <div className="min-h-[200px]">
          <div ref={containerRef} />
        </div>
      )}
    </section>
  );
}
