'use client';

import { useEffect, useState } from 'react';

interface Reaction {
  content: string;
  label: string;
  count: number;
}

interface PostReactionsProps {
  repo: string;
  term: string;
}

export default function PostReactions({ repo, term }: PostReactionsProps) {
  const [reactions, setReactions] = useState<Reaction[]>([
    { content: '👍', label: 'Like', count: 0 },
    { content: '❤️', label: 'Love', count: 0 },
    { content: '🎉', label: 'Celebrate', count: 0 },
  ]);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  useEffect(() => {
    // Load user's previous reaction from localStorage
    const savedReaction = localStorage.getItem(`reaction-${repo}-${term}`);
    if (savedReaction) {
      setSelectedReaction(savedReaction);
    }
  }, [repo, term]);

  const handleReaction = async (content: string) => {
    // Toggle reaction
    if (selectedReaction === content) {
      setSelectedReaction(null);
      localStorage.removeItem(`reaction-${repo}-${term}`);
      setReactions(prev => 
        prev.map(r => 
          r.content === content 
            ? { ...r, count: Math.max(0, r.count - 1) }
            : r
        )
      );
    } else {
      // Remove previous reaction if exists
      if (selectedReaction) {
        setReactions(prev => 
          prev.map(r => 
            r.content === selectedReaction 
              ? { ...r, count: Math.max(0, r.count - 1) }
              : r
          )
        );
      }
      
      setSelectedReaction(content);
      localStorage.setItem(`reaction-${repo}-${term}`, content);
      setReactions(prev => 
        prev.map(r => 
          r.content === content 
            ? { ...r, count: r.count + 1 }
            : r
        )
      );
    }
  };

  return (
    <div className="flex items-center gap-2">
      {reactions.map((reaction) => (
        <button
          key={reaction.content}
          onClick={() => handleReaction(reaction.content)}
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border transition-all ${
            selectedReaction === reaction.content
              ? 'border-blue-600 bg-blue-50 text-blue-600'
              : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
          }`}
          aria-label={reaction.label}
        >
          <span>{reaction.content}</span>
          {reaction.count > 0 && (
            <span className="text-sm font-medium">{reaction.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
