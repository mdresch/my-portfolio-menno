'use client';

import { useEffect, useState } from 'react';

interface CommentCountProps {
  repo: string;
  term: string;
}

export default function CommentCount({ repo, term }: CommentCountProps) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommentCount = async () => {
      try {
        // Extract owner and repo name
        const [owner, repoName] = repo.split('/');
        
        // Get GitHub token from environment
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        
        if (!token) {
          throw new Error('GitHub token is not configured');
        }

        // Query GitHub's GraphQL API to get discussion
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            query: `
              query GetDiscussionComments($owner: String!, $repoName: String!, $term: String!) {
                repository(owner: $owner, name: $repoName) {
                  discussions(first: 1, filter: {term: $term}) {
                    nodes {
                      comments {
                        totalCount
                      }
                    }
                  }
                }
              }
            `,
            variables: {
              owner,
              repoName,
              term
            }
          })
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        const discussions = data?.data?.repository?.discussions?.nodes;
        const commentCount = discussions?.[0]?.comments?.totalCount ?? 0;
        setCount(commentCount);
        setError(null);
      } catch (error) {
        console.error('Error fetching comment count:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch comment count');
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommentCount();
  }, [repo, term]);

  if (isLoading) {
    return <span className="text-gray-500">Loading comments...</span>;
  }

  if (error) {
    return <span className="text-red-500">{error}</span>;
  }

  return (
    <span className="text-gray-600">
      {count} {count === 1 ? 'comment' : 'comments'}
    </span>
  );
}
