import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

interface RiskReportCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl?: string; // Make optional
  href: string;
  isActive?: boolean;
  isComingSoon?: boolean;
  downloadLinks?: { format: string; url: string }[];
  usePlaceholder?: boolean; // Add this prop to force placeholder
}

export default function RiskReportCard({
  title,
  description,
  date,
  category,
  tags,
  imageUrl,
  href,
  isActive = false,
  isComingSoon = false,
  downloadLinks = [],
  usePlaceholder = true, // Default to true until images are ready
}: RiskReportCardProps) {
  return (
    <div className={`bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md border ${
      isActive 
        ? 'border-blue-300 dark:border-blue-600' 
        : 'border-gray-200 dark:border-gray-700'
    } hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
      <Link href={!isComingSoon ? href : "#"} className={isComingSoon ? 'cursor-default' : ''}>
        <div className="relative h-48">
          {!usePlaceholder && imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
              {isActive && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded-md">
                  Current
                </div>
              )}
              {isComingSoon && (
                <div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center">
                  <span className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                    Coming Soon
                  </span>
                </div>
              )}
            </>
          ) : (
            <div className="relative w-full h-full">
              <PlaceholderImage title={title} category={category} />
              {isActive && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded-md">
                  Current
                </div>
              )}
              {isComingSoon && (
                <div className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center">
                  <span className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{category}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
        </div>
        {!isComingSoon ? (
          <Link href={href}>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
        )}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {downloadLinks.length > 0 && !isComingSoon && (
          <div className="mt-2">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Available data formats:</p>
            <div className="flex gap-2">
              {downloadLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  download
                  className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                >
                  {link.format}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}