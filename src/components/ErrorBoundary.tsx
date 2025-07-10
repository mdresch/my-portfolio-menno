"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Report to error tracking service (Sentry is already configured)
    if (typeof window !== 'undefined' && window.Sentry) {
      window.Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack,
          },
        },
      });
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Check if the error is a chunk load error
      const isChunkError = 
        this.state.error?.message?.includes("ChunkLoadError") || 
        this.state.error?.message?.includes("Loading chunk") ||
        this.state.error?.stack?.includes("ChunkLoadError");

      if (isChunkError) {
        return (
          <div className="p-8 flex flex-col items-center justify-center min-h-[300px] bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Error</h2>
              <p className="text-gray-600 mb-4">
                We encountered an issue while loading this page. This might be due to a network issue or an outdated cache.
              </p>
              <button
                onClick={() => {
                  // Clear cache and reload the page
                  window.location.reload();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        );
      }

      // For other types of errors, use the provided fallback or a default
      return this.props.fallback || (
        <div className="p-8 text-center bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h2 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">Something went wrong</h2>
            <p className="text-red-600 dark:text-red-300 mb-4">We encountered an unexpected error</p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: undefined });
                window.location.reload();
              }}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;