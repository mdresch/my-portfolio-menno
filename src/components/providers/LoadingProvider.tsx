"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LoadingSpinner } from "../ui/LoadingSpinner";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingText: string;
  setLoadingText: (text: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const setLoadingTextValue = (text: string) => {
    setLoadingText(text);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        loadingText,
        setLoadingText: setLoadingTextValue,
      }}
    >
      {children}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
            <LoadingSpinner text={loadingText} />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}

// Hook for async operations with loading state
export function useAsyncOperation() {
  const { setLoading, setLoadingText } = useLoading();

  const executeWithLoading = async <T,>(
    operation: () => Promise<T>,
    loadingMessage = "Loading..."
  ): Promise<T> => {
    try {
      setLoadingText(loadingMessage);
      setLoading(true);
      return await operation();
    } finally {
      setLoading(false);
    }
  };

  return { executeWithLoading };
}
