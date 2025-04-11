'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { BlogPost } from '@/lib/markdown';

// Dynamically import client components
const RecommendedPosts = dynamic(() => import('@/components/RecommendedPosts'), { ssr: false });
const ReadingTracker = dynamic(() => import('@/components/ReadingTracker'), { ssr: false });

interface BlogPostClientProps {
  post: BlogPost;
  allPosts: Omit<BlogPost, 'content'>[];
}

export default function BlogPostClient({ post, allPosts }: BlogPostClientProps) {
  // Client-side initialization
  useEffect(() => {
    // Client-side initialization if needed
  }, []);
  


  return (
    <>
      {/* AI-powered content recommendations */}
      <RecommendedPosts
        currentPostId={post.id}
        allPosts={allPosts}
      />

      {/* Silent reading behavior tracker */}
      <ReadingTracker
        postId={post.id}
        categories={post.categories}
      />
    </>
  );
}
