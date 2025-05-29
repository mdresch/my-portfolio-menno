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
        <div className="p-8 text-center bg-red-50 rounded-lg border border-red-200">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Something went wrong</h2>
          <p className="text-red-600">Please try again later</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;