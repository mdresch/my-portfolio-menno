"use client";

import React, { useState } from "react";
import { LoadingSpinner, LoadingSkeleton, LoadingCard } from "./ui/LoadingSpinner";
import { 
  DashboardSkeleton, 
  BlogPostSkeleton, 
  ContactFormSkeleton,
  GitHubActivitySkeleton 
} from "./ui/SkeletonComponents";
import { 
  ErrorDisplay, 
  NetworkError, 
  ApiError, 
  EmptyState,
  useRetry 
} from "./ui/ErrorComponents";
import { useLoading, useAsyncOperation } from "./providers/LoadingProvider";
import { usePerformanceMonitoring, useApiPerformanceMonitoring } from "../hooks/usePerformanceMonitoring";

export default function QuickWinsDemo() {
  const [demoState, setDemoState] = useState<'loading' | 'error' | 'empty' | 'success'>('success');
  const { setLoading } = useLoading();
  const { executeWithLoading } = useAsyncOperation();
  const { trackApiCall } = useApiPerformanceMonitoring();
  const { trackRender, endRenderTracking } = usePerformanceMonitoring('QuickWinsDemo');
  const { retry, isRetrying, canRetry } = useRetry();

  React.useEffect(() => {
    trackRender();
    return () => endRenderTracking();
  });

  const simulateApiCall = async (shouldFail = false) => {
    return trackApiCall('demo-api', async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (shouldFail) {
        throw new Error('Simulated API failure');
      }
      return { data: 'Success!' };
    });
  };

  const handleLoadingDemo = async () => {
    await executeWithLoading(
      () => new Promise(resolve => setTimeout(resolve, 3000)),
      "Demonstrating global loading state..."
    );
  };

  const handleRetryDemo = async () => {
    try {
      await retry(() => simulateApiCall(Math.random() > 0.5));
      setDemoState('success');
    } catch (error) {
      setDemoState('error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8" aria-label="Quick Wins Demo" tabIndex={0}>
      {/* Animated Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 animate-fade-in" aria-label="Quick Wins Implementation Demo">
          Quick Wins Implementation Demo
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Demonstrating performance, UX, accessibility, and innovation improvements
        </p>
      </div>

      {/* Project Card with Multimedia */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md" aria-label="Featured Project" role="region">
        <h2 className="text-xl font-semibold mb-4">Featured Project: Interactive Portfolio</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <video controls poster="/project-thumb.jpg" className="rounded shadow-lg w-full" aria-label="Project Demo Video">
              <source src="/demo/project-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Case Study: Portfolio Redesign</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              This project demonstrates a modern, accessible, and highly interactive portfolio site. It features real-time chat, user feedback, and AR/VR showcase capabilities.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Atomic design for reusable components</li>
              <li>Progressive disclosure for complex features</li>
              <li>Role-based UI for admins and guests</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accessibility & Color Contrast Example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md" aria-label="Accessibility Demo" role="region">
        <h2 className="text-xl font-semibold mb-4">Accessibility & Color Contrast</h2>
        <button className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-700 text-white hover:bg-blue-800 transition-colors" aria-label="Accessible Button Example">
          Accessible Button Example
        </button>
        <p className="mt-2 text-gray-700 dark:text-gray-300">This button demonstrates proper color contrast and keyboard focus styling.</p>
      </div>

      {/* Interactivity: Comments & Chat */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md" aria-label="Interactivity Demo" role="region">
        <h2 className="text-xl font-semibold mb-4">User Comments & Real-Time Chat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Comments (Giscus)</h3>
            {/* Comments widget example */}
            <div className="border rounded p-2 bg-gray-50 dark:bg-gray-900">
              {/* @ts-ignore-next-line */}
              <>{require('./comments/Giscus').default({ slug: 'quick-wins-demo', repositoryId: 'R_kgDOOXNvaw', category: 'Blog Comments', categoryId: 'DIC_kwDOOXNva84CpA64' })}</>
            </div>
          </div>

        </div>
      </div>

      {/* AR/VR Showcase Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md" aria-label="Innovation Demo" role="region">
        <h2 className="text-xl font-semibold mb-4">AR/VR Project Showcase (Demo)</h2>
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-white text-2xl font-bold">AR/VR</span>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300">Imagine immersive project demos here! (Coming soon)</p>
          </div>
        </div>
      </div>

      {/* Performance Monitoring & Analytics */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md" aria-label="Performance Monitoring" role="region">
        <h2 className="text-xl font-semibold mb-4">Performance Monitoring & Analytics</h2>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>✅ Component render time tracking</p>
          <p>✅ API call performance monitoring</p>
          <p>✅ User interaction tracking</p>
          <p>✅ Web Vitals measurement</p>
          <p>✅ Error reporting to Sentry</p>
          <p>✅ Analytics: <span className="inline-block align-middle">{require('./ClientAnalytics').default({})}</span></p>
          <p className="text-xs mt-2">Check browser console for performance logs</p>
        </div>
      </div>

      {/* Maintenance & Process Info */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md" aria-label="Maintenance Info" role="region">
        <h2 className="text-xl font-semibold mb-4">Maintenance & Process</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>Automated testing and error scenario checks</li>
          <li>Dependencies and error/loading components kept up to date</li>
          <li>Regular backup and restore procedure tests</li>
        </ul>
        <p className="text-xs mt-2">See project documentation for more details.</p>
      </div>

      {/* ...existing demo controls and states below... */}
      {/* Demo Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Demo Controls</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setDemoState('loading')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Show Loading States
          </button>
          <button
            onClick={() => setDemoState('error')}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Show Error States
          </button>
          <button
            onClick={() => setDemoState('empty')}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Show Empty States
          </button>
          <button
            onClick={handleLoadingDemo}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Global Loading Demo
          </button>
          <button
            onClick={handleRetryDemo}
            disabled={isRetrying}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {isRetrying ? 'Retrying...' : 'Retry Demo'}
          </button>
        </div>
      </div>

      {/* Loading States Demo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">1. Enhanced Loading States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Spinner Components</h3>
            <div className="space-y-4">
              <LoadingSpinner size="sm" text="Small spinner" />
              <LoadingSpinner size="md" text="Medium spinner" />
              <LoadingSpinner size="lg" text="Large spinner" />
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Skeleton Loading</h3>
            <LoadingSkeleton lines={4} />
          </div>
          <div>
            <h3 className="font-medium mb-2">Card Skeleton</h3>
            <LoadingCard className="h-64" />
          </div>
        </div>
      </div>

      {/* Skeleton Screens Demo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">2. Skeleton Screens</h2>
        {demoState === 'loading' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Dashboard Skeleton</h3>
              <DashboardSkeleton />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Blog Post Skeleton</h3>
                <BlogPostSkeleton />
              </div>
              <div>
                <h3 className="font-medium mb-2">GitHub Activity Skeleton</h3>
                <GitHubActivitySkeleton />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Click "Show Loading States" to see skeleton screens in action
          </p>
        )}
      </div>

      {/* Error Handling Demo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">3. Error Handling & Retry</h2>
        {demoState === 'error' ? (
          <div className="space-y-4">
            <ErrorDisplay
              title="Generic Error"
              message="This is a generic error message with retry functionality"
              onRetry={() => setDemoState('success')}
            />
            <NetworkError onRetry={() => setDemoState('success')} />
            <ApiError
              error={new Error('API endpoint returned 500 Internal Server Error')}
              onRetry={() => setDemoState('success')}
            />
          </div>
        ) : (
          <div className="text-green-600 dark:text-green-400 p-4 bg-green-50 dark:bg-green-900/20 rounded">
            ✅ All systems operational. Click "Show Error States" to see error handling.
          </div>
        )}
      </div>

      {/* Empty States Demo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">4. Empty States</h2>
        {demoState === 'empty' ? (
          <EmptyState
            title="No Data Available"
            message="There's nothing to show here yet. Try adding some content."
            actionText="Add Content"
            onAction={() => setDemoState('success')}
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Click "Show Empty States" to see empty state handling
          </p>
        )}
      </div>
    </div>
  );
}
