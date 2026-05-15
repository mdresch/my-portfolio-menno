"use client";

import React, { useEffect } from "react";
import { useAuth } from "../../lib/auth";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname() || "";
  const isLoginRoute = pathname === "/admin/login" || pathname.endsWith("/admin/login");

  useEffect(() => {
    if (!loading && !isAuthenticated && !isLoginRoute) {
      router.replace("/admin/login");
    }
  }, [loading, isAuthenticated, isLoginRoute, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (isLoginRoute) {
    return <>{children}</>;
  }

  if (isAuthenticated) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">{children}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[40vh] text-neutral-600 dark:text-neutral-400">
      Redirecting to sign in…
    </div>
  );
}
