"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChatLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/chat", label: "Standard Chat" },
    { href: "/chat/vertex-ai-chat", label: "Vertex AI Chat" },
    { href: "/chat/rag-chat", label: "Portfolio RAG Chat" },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="py-4 flex gap-4 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-600 text-white font-medium"
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
