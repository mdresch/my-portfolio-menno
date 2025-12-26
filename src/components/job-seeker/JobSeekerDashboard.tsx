"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../../lib/auth";
import ProfileBuilder from "./ProfileBuilder";
import NetworkingHub from "./NetworkingHub";
import IndustryTrends from "./IndustryTrends";
import ProfileCompletionGuide from "./ProfileCompletionGuide";
import QuickActions from "./QuickActions";

type TabType = "profile" | "networking" | "trends" | "guide";

export default function JobSeekerDashboard() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [profileData, setProfileData] = useState(null);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    // Handle URL tab parameter
    const tab = searchParams.get('tab') as TabType;
    if (tab && ["profile", "networking", "trends", "guide"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  useEffect(() => {
    // Load user profile data
    if (isAuthenticated && user) {
      // In a real app, this would fetch from your backend
      const savedProfile = localStorage.getItem(`profile_${user.uid}`);
      if (savedProfile) {
        setProfileData(JSON.parse(savedProfile));
      }
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return (
      <div className="text-center py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Sign In Required
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Please sign in to access your job seeker dashboard and manage your professional profile.
          </p>
          <div className="space-y-3">
            <a
              href="/login"
              className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="block w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "profile" as TabType, label: "Profile Builder", icon: "👤" },
    { id: "networking" as TabType, label: "Networking Hub", icon: "🤝" },
    { id: "trends" as TabType, label: "Industry Trends", icon: "📈" },
    { id: "guide" as TabType, label: "Completion Guide", icon: "✅" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Quick Actions Bar */}
      <QuickActions profileData={profileData} />

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {activeTab === "profile" && (
          <ProfileBuilder 
            profileData={profileData} 
            onProfileUpdate={setProfileData}
            userId={user?.uid}
          />
        )}
        {activeTab === "networking" && <NetworkingHub />}
        {activeTab === "trends" && <IndustryTrends />}
        {activeTab === "guide" && (
          <ProfileCompletionGuide 
            profileData={profileData}
            onTabChange={setActiveTab}
          />
        )}
      </div>
    </div>
  );
}