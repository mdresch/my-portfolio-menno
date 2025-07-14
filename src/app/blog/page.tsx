import React from "react";
import { getSortedPostsData } from "../../lib/markdown";
import BlogPageClient from "../../components/BlogPageClient";
import type { Metadata } from "next";


// Add metadata for SEO
export const metadata: Metadata = {
  title: "Blog | Menno Drescher",
  description: "Articles and thoughts on technology, development, and more.",
  openGraph: {
    title: "Blog | Menno Drescher",
    description: "Articles and thoughts on technology, development, and more.",
    type: "website",
  },
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function BlogPageWrapper() {
  const posts = await getSortedPostsData();
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950 transition-colors">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-lg transition-colors">Blog</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-8"></div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl transition-colors">Insights, tutorials, and thoughts on technology, development, and more.</p>
        <BlogPageClient posts={posts} />
      </div>
      {/* Animation CSS moved to globals.css. Add the following to your global stylesheet: */}
      {/*
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(32px) scale(0.98); }
        60% { opacity: 0.7; transform: translateY(-4px) scale(1.01); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .animate-fade-in-up {
        animation-name: fade-in-up;
      }
      */}
    </div>
  );
}
