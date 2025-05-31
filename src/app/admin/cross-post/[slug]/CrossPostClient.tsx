"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  excerpt?: string;
  categories?: string[];
}

interface CrossPostResult {
  error?: string;
  url?: string;
  [key: string]: any;
}

interface CrossPostClientProps {
  slug: string;
}

export default function CrossPostClient({ slug }: CrossPostClientProps) {
  const [platform, setPlatform] = useState("hashnode");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [hashnodeToken, setHashnodeToken] = useState("");
  const [devtoKey, setDevtoKey] = useState("");
  const [isCrossPosting, setIsCrossPosting] = useState(false);
  const [result, setResult] = useState<CrossPostResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("githubToken");
        const endpoint = token
          ? `/api/github-posts?slug=${slug}&token=${token}`
          : `/api/posts/${slug}`;
        const response = await fetch(endpoint);
        if (!response.ok) {
          setError(`Failed to fetch post: ${response.status}`);
          return;
        }
        const postData = await response.json();
        setPost(postData);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        setError(msg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  // Cross-posting logic (unchanged) ...
  // ... omitted for brevity, include the full handleCrossPost and rendering code from page.tsx ...
  return (
    <div>
      {/* Render UI: loading, error, form, result, etc. */}
      {/* Copy the JSX from page.tsx's return blocks here */}
    </div>
  );
}
