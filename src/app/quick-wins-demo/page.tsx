import React from "react";
import type { Metadata } from "next";
import QuickWinsDemo from "../../components/QuickWinsDemo";

export const metadata: Metadata = {
  title: "Quick Wins Demo | Frontend Improvements",
  description: "Demonstration of implemented quick wins including loading states, skeleton screens, error handling, retry mechanisms, and performance optimizations.",
  keywords: ["quick wins", "performance", "loading states", "error handling", "UX improvements", "frontend optimization"],
  openGraph: {
    title: "Quick Wins Demo | Frontend Improvements",
    description: "Demonstration of implemented quick wins including loading states, skeleton screens, error handling, and performance optimizations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Wins Demo | Frontend Improvements",
    description: "See the implemented frontend performance and UX improvements in action.",
  },
};

export default function QuickWinsDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <QuickWinsDemo />
    </div>
  );
}
