"use client";

import { useEffect } from "react";
import { useAuth } from "../../lib/auth";
import { useRouter } from "next/navigation";
import LoginForm from "../../components/LoginForm";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // If not authenticated and not loading, redirect to admin login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/admin/login");
    }
  }, [isLoading, isAuthenticated, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If authenticated, show admin content
  if (isAuthenticated) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
          {children}
        </div>
      </div>
    );
  }

  // This should not normally be visible due to the redirect,
  // but serves as a fallback
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Access Required</h1>
      <LoginForm />
    </div>
  );
}
