// filepath: c:\Users\menno\CascadeProjects\personal-website\src\components\SEO\Breadcrumbs.tsx
"use client";

import React from "react";
import Link from "next/link";
import { generateBreadcrumbStructuredData } from "../../lib/structured-data";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showStructuredData?: boolean;
}

/**
 * Breadcrumbs component for navigation and SEO
 * Includes schema.org structured data for breadcrumbs
 */
export default function Breadcrumbs({ 
  items, 
  className = "", 
  showStructuredData = true 
}: BreadcrumbsProps) {
  // Define base URL - should match the one in layout.tsx
  const baseUrl = "https://my-portfolio-menno.vercel.app/";

  // Generate structured data
  const breadcrumbJsonLd = generateBreadcrumbStructuredData(items, baseUrl);

  return (
    <>
      {showStructuredData && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(breadcrumbJsonLd)
          }}
        />
      )}

      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex flex-wrap items-center">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="text-gray-500 hover:text-blue-600"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index < items.length - 1 ? (
                <>
                  <Link
                    href={item.url}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                  <span className="mx-2 text-gray-400">/</span>
                </>
              ) : (
                <span className="text-gray-800 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}