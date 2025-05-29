"use client";

import React, { useEffect } from "react";
import Script from "next/script";

// Add type declaration for the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gen-search-widget": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        configId: string;
        triggerId: string;
      };
    }
  }
}

export default function SearchWidget() {
  useEffect(() => {
    // The widget will be initialized automatically by the script
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="search-widget-container">
      <Script
        src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_GB"
        strategy="afterInteractive"
      />
      
      <gen-search-widget
        configId="47f1e619-27a3-40cd-ac45-3850ca797d42"
        triggerId="searchWidgetTrigger"
      />
      
      <input
        type="text"
        placeholder="Search here"
        id="searchWidgetTrigger"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
} 