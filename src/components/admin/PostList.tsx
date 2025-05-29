"use client";

import { useState } from "react";
import { BlogPostFile } from "@/types/github";

interface PostListProps {
  posts: BlogPostFile[];
  isLoading: boolean;
  onEditPost: (post: BlogPostFile) => void;
}

export default function PostList({ posts, isLoading, onEditPost }: PostListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="animate-pulse flex items-center p-4 border rounded-md">
            <div className="flex-1">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-1/3"></div>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Search posts..."
        />
      </div>
      
      {sortedPosts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {searchTerm ? "No posts match your search" : "No posts found"}
        </div>
      ) : (
        <div className="space-y-4">
          {sortedPosts.map(post => (
            <div 
              key={post.path} 
              className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-medium text-lg">{post.title}</h3>
                <div className="text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.name}</span>
                </div>
              </div>
              <button
                onClick={() => onEditPost(post)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
