"use client";

import React from "react";

interface ErrorDisplayProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  retryText?: string;
  className?: string;
}

export function ErrorDisplay({ 
  title = "Something went wrong",
  message, 
  onRetry, 
  retryText = "Try again",
  className = ""
}: ErrorDisplayProps) {
  return (
    <div className={`bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-md p-4 ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="mt-1 text-sm">{message}</p>
          {onRetry && (
            <div className="mt-3">
              <button
                onClick={onRetry}
                className="bg-red-100 dark:bg-red-800/30 hover:bg-red-200 dark:hover:bg-red-800/50 text-red-800 dark:text-red-200 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                {retryText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface NetworkErrorProps {
  onRetry?: () => void;
  className?: string;
}

export function NetworkError({ onRetry, className = "" }: NetworkErrorProps) {
  return (
    <ErrorDisplay
      title="Network Error"
      message="Unable to connect to the server. Please check your internet connection and try again."
      onRetry={onRetry}
      retryText="Retry"
      className={className}
    />
  );
}

interface ApiErrorProps {
  error: Error;
  onRetry?: () => void;
  className?: string;
}

export function ApiError({ error, onRetry, className = "" }: ApiErrorProps) {
  const isNetworkError = error.message.includes('fetch') || 
                        error.message.includes('network') ||
                        error.message.includes('Failed to fetch');
  
  if (isNetworkError) {
    return <NetworkError onRetry={onRetry} className={className} />;
  }

  return (
    <ErrorDisplay
      title="Error Loading Data"
      message={error.message || "An unexpected error occurred"}
      onRetry={onRetry}
      className={className}
    />
  );
}

interface EmptyStateProps {
  title?: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({ 
  title = "No data found",
  message, 
  actionText,
  onAction,
  icon,
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      {icon && (
        <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        {message}
      </p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

// Hook for retry logic
export function useRetry(maxRetries = 3, delay = 1000) {
  const [retryCount, setRetryCount] = React.useState(0);
  const [isRetrying, setIsRetrying] = React.useState(false);

  const retry = React.useCallback(async (fn: () => Promise<any>) => {
    if (retryCount >= maxRetries) {
      throw new Error(`Max retries (${maxRetries}) exceeded`);
    }

    setIsRetrying(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, retryCount)));
      const result = await fn();
      setRetryCount(0); // Reset on success
      return result;
    } catch (error) {
      setRetryCount(prev => prev + 1);
      throw error;
    } finally {
      setIsRetrying(false);
    }
  }, [retryCount, maxRetries, delay]);

  const reset = React.useCallback(() => {
    setRetryCount(0);
    setIsRetrying(false);
  }, []);

  return { retry, retryCount, isRetrying, canRetry: retryCount < maxRetries, reset };
}
