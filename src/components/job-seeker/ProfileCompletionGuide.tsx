"use client";

import React, { useState, useEffect } from "react";

interface ProfileData {
  personalInfo: {
    fullName: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
  };
  summary: string;
  experience: Array<any>;
  education: Array<any>;
  skills: Array<any>;
  certifications: Array<any>;
}

interface CompletionItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  importance: "high" | "medium" | "low";
  category: "profile" | "networking" | "skills" | "content";
  action: string;
  points: number;
}

interface ProfileCompletionGuideProps {
  profileData: ProfileData | null;
  onTabChange: (tab: "profile" | "networking" | "trends" | "guide") => void;
}

export default function ProfileCompletionGuide({ profileData, onTabChange }: ProfileCompletionGuideProps) {
  const [completionItems, setCompletionItems] = useState<CompletionItem[]>([]);
  const [completionScore, setCompletionScore] = useState(0);

  useEffect(() => {
    calculateCompletion();
  }, [profileData]);

  const calculateCompletion = () => {
    const items: CompletionItem[] = [
      {
        id: "basic-info",
        title: "Complete Basic Information",
        description: "Add your name, professional title, location, and contact details",
        completed: !!(profileData?.personalInfo?.fullName && profileData?.personalInfo?.title && profileData?.personalInfo?.email),
        importance: "high",
        category: "profile",
        action: "Go to Profile Builder",
        points: 15
      },
      {
        id: "professional-summary",
        title: "Write Professional Summary",
        description: "Create a compelling 2-3 sentence summary highlighting your key strengths",
        completed: !!(profileData?.summary && profileData.summary.length > 50),
        importance: "high",
        category: "profile",
        action: "Add Summary",
        points: 20
      },
      {
        id: "work-experience",
        title: "Add Work Experience",
        description: "Include at least 2 previous positions with detailed descriptions",
        completed: !!(profileData?.experience && profileData.experience.length >= 2),
        importance: "high",
        category: "profile",
        action: "Add Experience",
        points: 25
      },
      {
        id: "skills",
        title: "List Your Skills",
        description: "Add at least 8 relevant skills with proficiency levels",
        completed: !!(profileData?.skills && profileData.skills.length >= 8),
        importance: "high",
        category: "skills",
        action: "Add Skills",
        points: 20
      },
      {
        id: "linkedin-profile",
        title: "Connect LinkedIn Profile",
        description: "Add your LinkedIn profile URL to increase credibility",
        completed: !!(profileData?.personalInfo?.linkedin),
        importance: "medium",
        category: "profile",
        action: "Add LinkedIn",
        points: 10
      }
    ];

    setCompletionItems(items);
    
    const totalPoints = items.reduce((sum, item) => sum + item.points, 0);
    const earnedPoints = items.filter(item => item.completed).reduce((sum, item) => sum + item.points, 0);
    setCompletionScore(Math.round((earnedPoints / totalPoints) * 100));
  };

  const handleActionClick = (item: CompletionItem) => {
    switch (item.category) {
    case "profile":
    case "skills":
      onTabChange("profile");
      break;
    case "networking":
      onTabChange("networking");
      break;
    case "content":
      onTabChange("trends");
      break;
    }
  };

  const getImportanceColor = (importance: CompletionItem["importance"]) => {
    switch (importance) {
    case "high":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "low":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    }
  };

  const completedItems = completionItems.filter(item => item.completed).length;
  const totalItems = completionItems.length;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Profile Completion Guide
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Complete these steps to create a compelling professional presence that attracts employers
        </p>

        {/* Completion Score */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Profile Completion Score
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {completedItems} of {totalItems} items completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {completionScore}%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {completionScore >= 80 ? "Excellent!" : completionScore >= 60 ? "Good progress" : "Keep going!"}
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionScore}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Completion Items */}
      <div className="space-y-4">
        {completionItems.map((item) => (
          <div 
            key={item.id} 
            className={`rounded-lg p-6 border-2 transition-all ${
              item.completed 
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" 
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex items-center gap-2">
                  {item.completed ? (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={`text-lg font-semibold ${
                      item.completed ? "text-green-800 dark:text-green-300" : "text-gray-900 dark:text-white"
                    }`}>
                      {item.title}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(item.importance)}`}>
                      {item.importance} priority
                    </span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      +{item.points} points
                    </span>
                  </div>
                  
                  <p className={`text-sm mb-3 ${
                    item.completed ? "text-green-700 dark:text-green-300" : "text-gray-600 dark:text-gray-300"
                  }`}>
                    {item.description}
                  </p>
                  
                  {!item.completed && (
                    <button
                      onClick={() => handleActionClick(item)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      {item.action}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          💡 Pro Tips for Job Seekers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Profile Optimization</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Use keywords from job descriptions in your summary</li>
              <li>• Quantify achievements with specific numbers and metrics</li>
              <li>• Keep your profile updated with recent accomplishments</li>
              <li>• Use a professional photo and consistent branding</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Networking Strategy</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Personalize connection requests with context</li>
              <li>• Engage with others' content before reaching out</li>
              <li>• Offer value in your interactions, not just requests</li>
              <li>• Follow up consistently but not aggressively</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}