"use client";

import React, { useState } from "react";

export default function NetworkingHub() {
  const [activeTab, setActiveTab] = useState<"contacts" | "events" | "opportunities">("contacts");

  const tabs = [
    { id: "contacts" as const, label: "My Network", icon: "👥" },
    { id: "events" as const, label: "Networking Events", icon: "📅" },
    { id: "opportunities" as const, label: "Connection Opportunities", icon: "🎯" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Networking Hub
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Build meaningful professional connections efficiently
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Coming Soon
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          The {tabs.find(t => t.id === activeTab)?.label} feature is currently under development.
        </p>
      </div>
    </div>
  );
}