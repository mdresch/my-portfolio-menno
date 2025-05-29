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
    <section id={id} className="mb-8 print:mb-6">
      <div 
        className="flex items-center justify-between cursor-pointer mb-4 print:cursor-default"
        onClick={onToggle}
      >
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none print:hidden">
          {isExpanded ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      <div className={`transition-all duration-300 ${isExpanded ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"} print:opacity-100 print:max-h-full`}>
        {children}
      </div>
    </section>
  );
}