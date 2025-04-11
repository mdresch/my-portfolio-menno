'use client';

import { useEffect, useState } from 'react';

interface WebMentionStats {
  count: number;
  type: 'like-of' | 'repost-of' | 'mention-of' | 'in-reply-to';
}

interface WebMention {
  id: number;
  author: {
    name: string;
    photo: string;
    url: string;
  };
  url: string;
  'wm-property': 'in-reply-to' | 'like-of' | 'repost-of' | 'mention-of';
  published: string;
  content?: {
    text: string;
  };
}

interface WebMentionsProps {
  url: string;
}

export default function WebMentions({ url }: WebMentionsProps) {
  const [mentions, setMentions] = useState<WebMention[]>([]);
  const [stats, setStats] = useState<WebMentionStats[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWebMentions() {
      try {
        const encodedUrl = encodeURIComponent(url);
        const response = await fetch(
          `https://webmention.io/api/mentions.jf2?target=${encodedUrl}`
        );
        const data = await response.json();
        const allMentions = data.children || [];
        setMentions(allMentions);

        // Calculate stats
        const stats: WebMentionStats[] = [
          { type: 'like-of', count: 0 },
          { type: 'repost-of', count: 0 },
          { type: 'mention-of', count: 0 },
          { type: 'in-reply-to', count: 0 }
        ];

        allMentions.forEach((mention: WebMention) => {
          const statItem = stats.find(s => s.type === mention['wm-property']);
          if (statItem) statItem.count++;
        });

        setStats(stats);
      } catch (error) {
        console.error('Error fetching webmentions:', error);
      } finally {
        setLoading(false);
      }
    }

    if (url) {
      fetchWebMentions();
    }
  }, [url]);

  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
      </div>
    );
  }

  const filteredMentions = mentions.filter(mention => 
    activeFilter === 'all' ? true : mention['wm-property'] === activeFilter
  );

  if (mentions.length === 0 && !loading) {
    return null;
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Mentions & Reactions</h3>
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="px-3 py-1 border rounded-md text-sm"
        >
          <option value="all">All Interactions</option>
          <option value="like-of">Likes</option>
          <option value="repost-of">Reposts</option>
          <option value="mention-of">Mentions</option>
          <option value="in-reply-to">Replies</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <button
            key={stat.type}
            onClick={() => setActiveFilter(stat.type)}
            className={`p-4 rounded-lg text-center transition-colors ${activeFilter === stat.type ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <div className="text-2xl font-bold text-blue-600">{stat.count}</div>
            <div className="text-sm text-gray-600">
              {stat.type.split('-')[0].charAt(0).toUpperCase() + stat.type.split('-')[0].slice(1)}s
            </div>
          </button>
        ))}
      </div>
      <div className="space-y-4 border-t pt-4">
        {filteredMentions.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No {activeFilter !== 'all' ? activeFilter.split('-')[0] : ''} interactions found</p>
        ) : (
          filteredMentions.map((mention) => (

          <div key={mention.id} className="flex items-start gap-3">
            <img
              src={mention.author.photo}
              alt={mention.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <a
                  href={mention.author.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  {mention.author.name}
                </a>
                <span className="text-gray-500 text-sm">
                  {formatDate(mention.published)}
                </span>
              </div>
              {mention.content && (
                <p className="text-gray-700 mt-1">{mention.content.text}</p>
              )}
              <div className="mt-1">
                <a
                  href={mention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  View {mention['wm-property'].replace('-of', '')}
                </a>
              </div>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
}
