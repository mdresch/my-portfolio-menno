'use client';

import { useSkills } from '@/hooks/useSkills';
import { useState } from 'react';

// Skill level indicator
const SkillLevel = ({ level }: { level: number }) => {
  const maxLevel = 5;
  const dots = [];
  
  for (let i = 1; i <= maxLevel; i++) {
    dots.push(
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i <= level ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      />
    );
  }
  
  return <div className="flex space-x-1 mt-1">{dots}</div>;
};

// Loading Skeleton
const SkillsSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-48 mb-6" />
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-32" />
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div key={dot} className="w-3 h-3 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="h-8 bg-gray-200 rounded w-48 mt-10 mb-6" />
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-32" />
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div key={dot} className="w-3 h-3 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Error Component
const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
    <h3 className="text-lg font-medium">Error Loading Skills</h3>
    <p>{message}</p>
  </div>
);

export default function SkillsDisplay() {
  const { skills, categories, isLoading, error } = useSkills();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  if (isLoading) {
    return <SkillsSkeleton />;
  }
  
  if (error) {
    return <ErrorDisplay message={error.message} />;
  }
  
  // Get all categories from the skills or use the ones from the API
  const uniqueCategories = categories.length > 0 
    ? categories 
    : [...new Set(skills.map((skill) => skill.category || 'Uncategorized'))];
  
  // Filter skills by active category or show all if none selected
  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;
  
  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          All Skills
        </button>
        
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </div>
              
              {skill.iconUrl && (
                <div className="w-8 h-8">
                  <img
                    src={skill.iconUrl}
                    alt={`${skill.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
            
            <SkillLevel level={skill.proficiencyLevel} />
          </div>
        ))}
      </div>
      
      {filteredSkills.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No skills found for this category.
        </p>
      )}
    </div>
  );
}
