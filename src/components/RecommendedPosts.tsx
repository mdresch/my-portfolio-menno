"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { initializeUserPreferences, recordPostRead } from "@/lib/userPreferences";
import { getRecommendations } from "@/lib/recommendationEngine";
import type { BlogPost } from "@/lib/markdown";

interface RecommendedPostsProps {
  currentPostId?: string;
  allPosts: Omit<BlogPost, "content">[];
}

export default function RecommendedPosts({ currentPostId, allPosts }: RecommendedPostsProps) {
  const [recommendations, setRecommendations] = useState<Omit<BlogPost, "content">[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;
    
    // Generate recommendations based on user preferences
    const userPrefs = initializeUserPreferences();
    const recommendedPosts = getRecommendations(userPrefs, allPosts, currentPostId, 3);
    
    setRecommendations(recommendedPosts);
    setIsLoading(false);
  }, [currentPostId, allPosts]);

  // If no recommendations yet, or still loading, show placeholder
  if (isLoading) {
    return (
      <div className="mt-8 animate-pulse">
        <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-24 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>
    );
  }

  // Don&apos;t show the section if we don&apos;t have recommendations
  if (recommendations.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
      <div className="grid gap-4">
        {recommendations.map(post => (
          <div 
            key={post.slug} 
            className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors"
            onClick={() => {
              // Record this click for improving future recommendations
              recordPostRead(post.id, post.categories);
            }}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h4 className="font-medium mb-1 hover:text-blue-600 transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
