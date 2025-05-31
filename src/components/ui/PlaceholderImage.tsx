import React from "react";

interface PlaceholderImageProps {
  title?: string;
  category?: string;
  className?: string;
  height?: string;
}

export default function PlaceholderImage({ 
  title = "Report Image", 
  category = "Risk Analysis",
  className = "", 
  height = "h-48" 
}: PlaceholderImageProps) {
  // Generate a deterministic color based on the category
  const getColorClass = (category: string) => {
    const categories: {[key: string]: string} = {
      "Financial Risk": "from-blue-200 to-blue-300 dark:from-blue-900/40 dark:to-blue-800/40",
      "Geopolitical Risk": "from-red-200 to-red-300 dark:from-red-900/40 dark:to-red-800/40",
      "Environmental Risk": "from-green-200 to-green-300 dark:from-green-900/40 dark:to-green-800/40",
      "Regulatory Risk": "from-purple-200 to-purple-300 dark:from-purple-900/40 dark:to-purple-800/40",
      "Cybersecurity Risk": "from-yellow-200 to-yellow-300 dark:from-yellow-900/40 dark:to-yellow-800/40",
      "default": "from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
    };
    
    return categories[category] || categories["default"];
  };
  
  const colorClass = getColorClass(category);
  
  return (
    <div className={`bg-gradient-to-br ${colorClass} flex items-center justify-center ${height} w-full relative overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="text-center z-10 px-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 mx-auto text-gray-500 dark:text-gray-400 mb-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
          />
        </svg>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{category}</p>
      </div>
    </div>
  );
}