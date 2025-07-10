import React, { useState, useEffect } from "react";
import { Skill } from "../../data/resume";

interface SkillsVisualizationProps {
  skills: Skill[];
}

export default function SkillsVisualization({ skills }: SkillsVisualizationProps) {
  const [activeCategory, setActiveCategory] = useState<string>("soft");
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  
  const categories = ["all", ...Array.from(new Set(skills.map(skill => skill.category)))];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  // Animate skill levels when component mounts or category changes
  useEffect(() => {
    const newAnimatedLevels: { [key: string]: number } = {};
    filteredSkills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedLevels(prev => ({
          ...prev,
          [skill.name]: skill.level
        }));
      }, index * 100);
    });
  }, [filteredSkills]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return '⚡';
      case 'soft': return '🤝';
      case 'language': return '🌍';
      case 'tool': return '🛠️';
      default: return '📊';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical': return 'from-blue-500 to-cyan-500';
      case 'soft': return 'from-green-500 to-emerald-500';
      case 'language': return 'from-purple-500 to-pink-500';
      case 'tool': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Modern Category Filter */}
      <div className="mb-8 print:hidden">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg`
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{getCategoryIcon(category)}</span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              {activeCategory === category && (
                <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Modern Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="group p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(skill.category)} rounded-xl flex items-center justify-center shadow-md`}>
                  <span className="text-white font-bold text-sm">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {skill.category}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {animatedLevels[skill.name] || 0}%
                </span>
              </div>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="relative">
              <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Skill level indicators */}
              <div className="flex justify-between mt-2 text-xs text-gray-400 dark:text-gray-500">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Expert</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {filteredSkills.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Skills</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {Math.round(filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Level</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {filteredSkills.filter(skill => skill.level >= 80).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Expert Level</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {categories.length - 1}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
}