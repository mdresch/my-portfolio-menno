'use client';

import { useEffect, useState } from 'react';

interface CommentCountProps {
  repo: string;
  term: string;
}

export default function CommentCount({ repo, term }: CommentCountProps) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch comment count from GitHub Discussions API
    const fetchCommentCount = async () => {
      try {
        setIsLoading(true);
        
        // Get necessary environment variables
        const repoId = process.env.NEXT_PUBLIC_GITHUB_REPO_ID;
        const categoryId = process.env.NEXT_PUBLIC_GITHUB_CATEGORY_ID;
        
        if (!repoId || !categoryId) {
          console.error('Missing required environment variables for comment count');
          setIsLoading(false);
          return;
        }
        
        // Listen for messages from Giscus when it loads
        const handleGiscusMessage = (event: MessageEvent) => {
          if (event.origin !== 'https://giscus.app') return;
          
          // Check if this message contains discussion data
          if (event.data?.giscus?.discussion) {
            const totalCount = event.data.giscus.discussion.comments.totalCount;
            setCount(totalCount);
            setIsLoading(false);
            // Remove listener after getting data
            window.removeEventListener('message', handleGiscusMessage);
          }
        };
        
        window.addEventListener('message', handleGiscusMessage);
        
        // Fallback timer in case we don't get data from Giscus
        const timeout = setTimeout(() => {
          if (isLoading) {
            setIsLoading(false);
            window.removeEventListener('message', handleGiscusMessage);
          }
        }, 5000);
        
        return () => {
          clearTimeout(timeout);
          window.removeEventListener('message', handleGiscusMessage);
        };
      } catch (error) {
        console.error('Error fetching comment count:', error);
        setIsLoading(false);
      }
    };

    fetchCommentCount();
  }, [term, repo, isLoading]);

  useEffect(() => {
    const handleNewComment = (event: MessageEvent) => {
      if (event.origin !== 'https://giscus.app') return;
      
      if (event.data?.giscus?.discussion?.comments?.totalCount) {
        // Force reload of comment counts
        const commentCountElements = document.querySelectorAll('.comment-count');
        commentCountElements.forEach(el => {
          el.classList.add('reload-count');
          setTimeout(() => el.classList.remove('reload-count'), 100);
        });
      }
    };
    
    window.addEventListener('message', handleNewComment);
    return () => window.removeEventListener('message', handleNewComment);
  }, []);

  // Format the comment count with proper Dutch pluralization
  const formatCommentCount = (count: number) => {
    if (count === 1) {
      return '1 reactie';
    }
    return `${count} reacties`;
  };

  if (isLoading) {
    return <span className="text-gray-400 animate-pulse">...</span>;
  }

  if (count === null) {
    return <span className="text-gray-400">0 reacties</span>;
  }

  return <span>{formatCommentCount(count)}</span>;
}
