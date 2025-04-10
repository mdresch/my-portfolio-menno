'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const content = document.getElementById('post-content');
      if (!content) return;

      const contentBox = content.getBoundingClientRect();
      const contentHeight = contentBox.height;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Calculate how far through the content we've scrolled
      const scrolled = (scrollY - contentBox.top + windowHeight) / (contentHeight + windowHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrolled)) * 100;
      
      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
