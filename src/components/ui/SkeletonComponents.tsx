"use client";

import React from "react";

// Base skeleton component
interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = "", width = "w-full", height = "h-4" }: SkeletonProps) {
  return (
    <div 
      className={`${width} ${height} bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}
      role="status"
      aria-label="Loading content"
    />
  );
}

// Dashboard skeleton
export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="space-y-2">
        <Skeleton height="h-8" width="w-64" />
        <Skeleton height="h-4" width="w-96" />
      </div>
      
      {/* KPI cards skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg border animate-pulse">
            <Skeleton height="h-4" width="w-20" className="mb-2" />
            <Skeleton height="h-8" width="w-16" className="mb-1" />
            <Skeleton height="h-3" width="w-12" />
          </div>
        ))}
      </div>
      
      {/* Charts skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg border animate-pulse">
            <Skeleton height="h-6" width="w-48" className="mb-4" />
            <Skeleton height="h-64" width="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Navigation skeleton
export function NavigationSkeleton() {
  return (
    <div className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg animate-pulse">
      <div className="hidden md:block">
        <div className="flex justify-center mx-auto py-2">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl px-2 py-1 shadow-2xl border border-gray-200/30 dark:border-gray-700/30 flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} height="h-10" width="w-20" className="rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog post skeleton
export function BlogPostSkeleton() {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
      <div className="space-y-4">
        <Skeleton height="h-8" width="w-3/4" />
        <div className="flex items-center space-x-4">
          <Skeleton height="h-4" width="w-24" />
          <Skeleton height="h-4" width="w-32" />
        </div>
        <div className="space-y-2">
          <Skeleton height="h-4" width="w-full" />
          <Skeleton height="h-4" width="w-full" />
          <Skeleton height="h-4" width="w-2/3" />
        </div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} height="h-6" width="w-16" className="rounded-full" />
          ))}
        </div>
      </div>
    </article>
  );
}

// Contact form skeleton
export function ContactFormSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
      <div className="space-y-6">
        <Skeleton height="h-8" width="w-48" />
        <div className="space-y-4">
          <div>
            <Skeleton height="h-4" width="w-20" className="mb-2" />
            <Skeleton height="h-10" width="w-full" />
          </div>
          <div>
            <Skeleton height="h-4" width="w-16" className="mb-2" />
            <Skeleton height="h-10" width="w-full" />
          </div>
          <div>
            <Skeleton height="h-4" width="w-24" className="mb-2" />
            <Skeleton height="h-32" width="w-full" />
          </div>
          <Skeleton height="h-10" width="w-32" />
        </div>
      </div>
    </div>
  );
}

// GitHub activity skeleton
export function GitHubActivitySkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <Skeleton height="h-6" width="w-48" />
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton height="h-8" width="w-8" className="rounded-full" />
            <div className="flex-1 space-y-1">
              <Skeleton height="h-4" width="w-3/4" />
              <Skeleton height="h-3" width="w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
