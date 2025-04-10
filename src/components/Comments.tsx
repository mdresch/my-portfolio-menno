'use client';

import { useEffect, useRef } from 'react';

interface CommentsProps {
  repo: string;
  term: string;
  label: string;
  theme?: 'light' | 'dark';
}

export default function Comments({ repo, term, label, theme = 'light' }: CommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing script
    const existingScript = document.getElementById('giscus');
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script
    const script = document.createElement('script');
    script.id = 'giscus';
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', 'R_kgDOOXNvaw'); // You'll need to replace this
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOOXNva84Co9mE'); // You'll need to replace this
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', term);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Add script to container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [repo, term, theme]);

  return (
    <section className="mt-12 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-8">{label}</h2>
      <div ref={containerRef} />
    </section>
  );
}
