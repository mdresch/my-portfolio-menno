"use client";

import { useState, useEffect, RefObject } from "react";

export default function ReadingProgress({ targetRef }: { targetRef: RefObject<HTMLElement> }) {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const scrollListener = () => {
      if (!targetRef.current) return;
      
      const element = targetRef.current;
      const totalHeight = element.clientHeight - window.innerHeight;
      const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      if (windowScrollTop === 0) {
        setReadingProgress(0);
        return;
      }
      
      if (windowScrollTop > totalHeight) {
        setReadingProgress(100);
        return;
      }
      
      setReadingProgress((windowScrollTop / totalHeight) * 100);
    };
    
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [targetRef]);
  
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1 bg-gray-200">
      <div 
        className="h-full bg-blue-600 transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}
