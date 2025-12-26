import React from "react";

interface ResumeSectionProps {
  title: string;
  id: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function ResumeSection({
  title,
  id,
  isExpanded,
  onToggle,
  children
}: ResumeSectionProps) {
  return (
    <section id={id} className={`mb-12 print:mb-8 relative ${id === "experience" ? "mb-16 z-0" : "z-10"} ${id === "validation-scores" ? "mt-8" : ""} ${id === "skills" ? "mb-20" : ""} ${id === "education" ? "mt-8" : ""}`}>
      {/* Modern Section Header */}
      <div
        className="group flex items-center justify-between cursor-pointer mb-6 print:cursor-default p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              {title.charAt(0)}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isExpanded ? 'Click to collapse' : 'Click to expand'}
            </p>
          </div>
        </div>

        <button className="flex-shrink-0 w-10 h-10 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 print:hidden group-hover:scale-110">
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Content with Enhanced Animation */}
      <div className={`transition-all duration-500 ease-in-out ${
        isExpanded
          ? "opacity-100 max-h-none transform translate-y-0"
          : "opacity-0 max-h-0 overflow-hidden transform -translate-y-4"
      } print:opacity-100 print:max-h-full print:transform-none`}>
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 ${
          id === "experience" ? "p-6 pl-10 md:pl-12 relative z-0" : "p-6 relative z-10"
        }`}>
          {children}
        </div>
      </div>
    </section>
  );
}