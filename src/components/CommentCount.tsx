'use client';

import { useEffect, useState } from 'react';

interface CommentCountProps {
  repo: string;
  term: string;
}

export default function CommentCount({ repo, term }: CommentCountProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCommentCount = async () => {
      try {
        // Extract owner and repo name
        const [owner, repoName] = repo.split('/');
        
        // Query GitHub's GraphQL API to get discussion
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                repository(owner: "${owner}", name: "${repoName}") {
                  discussion(number: ${term}) {
                    comments {
                      totalCount
                    }
                  }
                }
              }
            `
          })
        });

        const data = await response.json();
        const commentCount = data?.data?.repository?.discussion?.comments?.totalCount ?? 0;
        setCount(commentCount);
      } catch (error) {
        console.error('Error fetching comment count:', error);
      }
    };

    fetchCommentCount();
  }, [repo, term]);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
      {count} comment{count !== 1 ? 's' : ''}
    </span>
  );
}
