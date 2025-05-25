'use client';

import { useEffect, useState } from 'react';
import { recordPostRead } from '@/lib/userPreferences';

interface ReadingTrackerProps {
  postId: string;
  categories: string[];
}

/**
 * Component that tracks user reading behavior silently in the background
 * This data is used to improve content recommendations
 */
export default function ReadingTracker({ postId, categories }: ReadingTrackerProps) {
  const [startTime] = useState(Date.now());
  const [maxScrollPercentage, setMaxScrollPercentage] = useState(0);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Initial recording of article view
    recordPostRead(postId, categories, 0, 0);
    
    // Function to calculate how far down the page the user has scrolled
    const calculateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage (0-100)
      const scrollPercentage = Math.min(
        100,
        Math.floor((scrollTop / (documentHeight - windowHeight)) * 100)
      );
      
      // Update max scroll percentage if user scrolled further than before
      if (scrollPercentage > maxScrollPercentage) {
        setMaxScrollPercentage(scrollPercentage);
      }
    };
    
    // Track scrolling to determine reading progress
    window.addEventListener('scroll', calculateScrollPercentage);
    
    // Save reading data when user leaves
    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage);
      
      // Calculate reading time in seconds
      const readingTime = Math.floor((Date.now() - startTime) / 1000);
      
      // Record the reading session (only if user spent at least 5 seconds)
      if (readingTime >= 5) {
        recordPostRead(postId, categories, readingTime, maxScrollPercentage);
      }
    };
  }, [postId, categories, startTime, maxScrollPercentage]);
  
  // This component doesn't render anything visible
  return null;
}
