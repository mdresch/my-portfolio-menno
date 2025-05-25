'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BlogCrossPostAnalytics from '@/components/admin/BlogCrossPostAnalytics';

export default function AnalyticsDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const adminAuth = localStorage.getItem('adminAuth');
    
    if (!adminAuth) {
      // Redirect to admin login if not authenticated
      window.location.href = '/admin';
      return;
    }
    
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/admin" className="text-blue-600 hover:underline flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Admin
        </Link>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Cross-Posting Analytics Dashboard</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            This dashboard provides analytics for your blog posts that have been cross-posted to various platforms.
            The data is fetched from the ASP.NET Core backend for enhanced performance and reliability.
          </p>
          
          <BlogCrossPostAnalytics />
        </div>
      </div>
      
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">About This Feature</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This analytics dashboard is powered by ASP.NET Core on the backend, providing:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Efficient data aggregation using SQL Server and Entity Framework Core</li>
            <li>Real-time analytics processing for up-to-date insights</li>
            <li>Secure API endpoints with JWT authentication</li>
            <li>Enhanced performance compared to JavaScript-only solutions</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300">
            To learn more about how this feature was implemented, check out my blog post:&nbsp;
            <Link href="/blog/building-full-stack-portfolio-nextjs-aspnet-core" className="text-blue-600 hover:underline">
              Building a Full-Stack Portfolio with Next.js and ASP.NET Core
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
