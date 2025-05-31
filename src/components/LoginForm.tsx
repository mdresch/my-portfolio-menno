"use client";

import React, { useState } from "react";
import { useAuth } from "../lib/auth";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { login, isAuthenticated, user } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await login({ email, password });
      // Login successful, Firebase will handle state updates
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isAuthenticated) {
    return (
      <div className="p-6 max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md">
        <div className="text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold">Welcome back!</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Logged in as: {user?.displayName || user?.email}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            You can now access the admin features.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6 max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">Admin Login</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      
      <div className="mt-4 text-center space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <Link href="/forgot-password" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium">
            Forgot your password?
          </Link>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
