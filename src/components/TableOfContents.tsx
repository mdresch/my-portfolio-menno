'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentId: string;
}

export default function TableOfContents({ contentId }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const content = document.getElementById(contentId);
    if (!content) return;

    const elements = content.querySelectorAll('h2, h3, h4');
    const headingElements = Array.from(elements).map((element) => {
      const id = element.id || element.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      if (!element.id) {
        element.id = id;
      }
      return {
        id,
        text: element.textContent || '',
        level: parseInt(element.tagName[1]),
      };
    });

    setHeadings(headingElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [contentId]);

  return (
    <nav className="space-y-2 text-sm">
      <h3 className="font-semibold mb-4">Table of Contents</h3>
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          className={`block hover:text-blue-600 transition-colors ${
            activeId === heading.id ? 'text-blue-600' : 'text-gray-600'
          } ${heading.level === 2 ? '' : 'pl-4'}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
}
