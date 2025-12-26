"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface TrendArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  industry: string[];
  publishedDate: string;
  readTime: string;
  source: string;
  url: string;
  relevanceScore: number;
  trending: boolean;
}

interface SkillTrend {
  skill: string;
  growth: number;
  demand: "high" | "medium" | "low";
  category: string;
  description: string;
}

interface JobMarketInsight {
  title: string;
  metric: string;
  change: number;
  period: string;
  description: string;
  positive: boolean;
}

export default function IndustryTrends() {
  const [activeTab, setActiveTab] = useState<"articles" | "skills" | "market">("articles");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [articles, setArticles] = useState<TrendArticle[]>([]);
  const [skillTrends, setSkillTrends] = useState<SkillTrend[]>([]);
  const [marketInsights, setMarketInsights] = useState<JobMarketInsight[]>([]);

  useEffect(() => {
    loadTrendsData();
  }, []);

  const loadTrendsData = () => {
    // Sample data - in a real app, this would come from your API or external sources
    const sampleArticles: TrendArticle[] = [
      {
        id: "1",
        title: "The Rise of AI in Software Development: What Developers Need to Know",
        summary: "Artificial Intelligence is transforming how we write, test, and deploy code. Learn about the latest AI tools and how they're changing the development landscape.",
        category: "Technology",
        industry: ["Software", "AI", "Development"],
        publishedDate: "2024-01-20",
        readTime: "5 min",
        source: "TechCrunch",
        url: "#",
        relevanceScore: 95,
        trending: true
      },
      {
        id: "2",
        title: "Remote Work Trends: The Future of Distributed Teams",
        summary: "How companies are adapting to permanent remote work and what skills are most valuable for remote professionals.",
        category: "Workplace",
        industry: ["General", "Management", "HR"],
        publishedDate: "2024-01-18",
        readTime: "7 min",
        source: "Harvard Business Review",
        url: "#",
        relevanceScore: 88,
        trending: true
      },
      {
        id: "3",
        title: "Cybersecurity Skills Gap: Opportunities for Career Changers",
        summary: "The growing demand for cybersecurity professionals creates opportunities for those looking to transition into the field.",
        category: "Security",
        industry: ["Cybersecurity", "Technology"],
        publishedDate: "2024-01-15",
        readTime: "6 min",
        source: "InfoSec Magazine",
        url: "#",
        relevanceScore: 82,
        trending: false
      },
      {
        id: "4",
        title: "Green Technology Jobs: The Next Big Career Opportunity",
        summary: "Sustainability initiatives are creating new job categories and transforming traditional roles across industries.",
        category: "Sustainability",
        industry: ["Green Tech", "Energy", "Engineering"],
        publishedDate: "2024-01-12",
        readTime: "8 min",
        source: "Environmental Tech",
        url: "#",
        relevanceScore: 75,
        trending: false
      }
    ];

    const sampleSkillTrends: SkillTrend[] = [
      {
        skill: "Artificial Intelligence/Machine Learning",
        growth: 45,
        demand: "high",
        category: "Technical",
        description: "AI and ML skills are in extremely high demand across all industries"
      },
      {
        skill: "Cloud Computing (AWS, Azure, GCP)",
        growth: 38,
        demand: "high",
        category: "Technical",
        description: "Cloud infrastructure skills continue to be essential for modern development"
      },
      {
        skill: "Data Analysis & Visualization",
        growth: 32,
        demand: "high",
        category: "Technical",
        description: "Data-driven decision making increases demand for analytical skills"
      },
      {
        skill: "Cybersecurity",
        growth: 28,
        demand: "high",
        category: "Technical",
        description: "Growing security threats drive demand for cybersecurity expertise"
      },
      {
        skill: "Digital Marketing",
        growth: 25,
        demand: "medium",
        category: "Marketing",
        description: "Digital transformation continues to drive marketing skill demand"
      },
      {
        skill: "Project Management",
        growth: 22,
        demand: "medium",
        category: "Management",
        description: "Agile and remote work environments increase PM skill value"
      }
    ];

    const sampleMarketInsights: JobMarketInsight[] = [
      {
        title: "Tech Job Openings",
        metric: "2.3M",
        change: 15,
        period: "vs last quarter",
        description: "Technology sector continues strong hiring growth",
        positive: true
      },
      {
        title: "Remote Job Postings",
        metric: "42%",
        change: 8,
        period: "of all postings",
        description: "Remote work options remain prevalent",
        positive: true
      },
      {
        title: "Average Salary Growth",
        metric: "6.2%",
        change: 6.2,
        period: "year over year",
        description: "Salaries continue to rise across most sectors",
        positive: true
      },
      {
        title: "Time to Hire",
        metric: "23 days",
        change: -12,
        period: "vs last year",
        description: "Companies are hiring faster in competitive market",
        positive: true
      }
    ];

    setArticles(sampleArticles);
    setSkillTrends(sampleSkillTrends);
    setMarketInsights(sampleMarketInsights);
  };

  const filteredArticles = selectedIndustry === "all" 
    ? articles 
    : articles.filter(article => 
        article.industry.some(ind => ind.toLowerCase().includes(selectedIndustry.toLowerCase()))
      );

  const industries = ["all", "technology", "healthcare", "finance", "marketing", "engineering", "design"];

  const tabs = [
    { id: "articles" as const, label: "Industry News", icon: "📰" },
    { id: "skills" as const, label: "Skill Trends", icon: "📊" },
    { id: "market" as const, label: "Job Market", icon: "💼" },
  ];

  const getDemandColor = (demand: SkillTrend["demand"]) => {
    switch (demand) {
    case "high":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "low":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Industry Trends & Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Stay ahead with the latest industry developments and market insights
          </p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry === "all" ? "All Industries" : industry.charAt(0).toUpperCase() + industry.slice(1)}
              </option>
            ))}
          </select>
        </div>
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

      {/* Articles Tab */}
      {activeTab === "articles" && (
        <div className="space-y-6">
          {/* Trending Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              🔥 Trending Now
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredArticles.filter(article => article.trending).map((article) => (
                <div key={article.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {article.source} • {new Date(article.publishedDate).toLocaleDateString()}
                    </span>
                    <a
                      href={article.url}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Latest Industry News
            </h3>
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      {article.trending && (
                        <span className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 px-2 py-1 rounded text-xs font-medium">
                          Trending
                        </span>
                      )}
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Relevance: {article.relevanceScore}%
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {article.summary}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {article.source}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(article.publishedDate).toLocaleDateString()}
                      </span>
                      <div className="flex gap-1">
                        {article.industry.map((ind) => (
                          <span key={ind} className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 px-2 py-1 rounded text-xs">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={article.url}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Skills Tab */}
      {activeTab === "skills" && (
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4">
              📈 Fastest Growing Skills
            </h3>
            <p className="text-green-800 dark:text-green-200 mb-4">
              These skills are experiencing the highest demand growth. Consider adding them to your profile to stay competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillTrends.map((skill, index) => (
              <div key={skill.skill} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      #{index + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.skill}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(skill.demand)}`}>
                    {skill.demand} demand
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Growth Rate
                    </span>
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">
                      +{skill.growth}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(skill.growth, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
              💡 Skill Development Tips
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-medium text-blue-800 dark:text-blue-200">For Technical Skills:</h5>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Take online courses and get certified</li>
                  <li>• Build projects to demonstrate proficiency</li>
                  <li>• Contribute to open source projects</li>
                  <li>• Join professional communities</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-blue-800 dark:text-blue-200">For Soft Skills:</h5>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Seek leadership opportunities</li>
                  <li>• Practice public speaking</li>
                  <li>• Get feedback from colleagues</li>
                  <li>• Take on cross-functional projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Market Tab */}
      {activeTab === "market" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight) => (
              <div key={insight.title} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  {insight.title}
                </h4>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {insight.metric}
                </div>
                <div className={`flex items-center text-sm ${
                  insight.positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}>
                  <span className="mr-1">
                    {insight.positive ? "↗" : "↘"}
                  </span>
                  {Math.abs(insight.change)}% {insight.period}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🎯 Hot Job Categories
              </h4>
              <div className="space-y-3">
                {[
                  { category: "Software Engineering", growth: "+23%", openings: "145K" },
                  { category: "Data Science", growth: "+19%", openings: "89K" },
                  { category: "Cybersecurity", growth: "+31%", openings: "67K" },
                  { category: "Product Management", growth: "+15%", openings: "45K" },
                  { category: "UX/UI Design", growth: "+12%", openings: "38K" },
                ].map((job) => (
                  <div key={job.category} className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{job.category}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{job.openings} openings</div>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-medium">{job.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                💰 Salary Trends
              </h4>
              <div className="space-y-3">
                {[
                  { role: "Senior Software Engineer", salary: "$145K", change: "+8%" },
                  { role: "Data Scientist", salary: "$132K", change: "+12%" },
                  { role: "Product Manager", salary: "$128K", change: "+6%" },
                  { role: "DevOps Engineer", salary: "$125K", change: "+10%" },
                  { role: "UX Designer", salary: "$95K", change: "+7%" },
                ].map((salary) => (
                  <div key={salary.role} className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{salary.role}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Average salary</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900 dark:text-white">{salary.salary}</div>
                      <div className="text-sm text-green-600 dark:text-green-400">{salary.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-4">
              📊 Market Predictions for 2024
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-3">Growing Sectors</h5>
                <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>• AI and Machine Learning continue explosive growth</li>
                  <li>• Green technology and sustainability roles expand</li>
                  <li>• Healthcare technology sees increased investment</li>
                  <li>• Remote work tools and platforms mature</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-3">Key Trends</h5>
                <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>• Hybrid work becomes the standard</li>
                  <li>• Skills-based hiring over degree requirements</li>
                  <li>• Increased focus on diversity and inclusion</li>
                  <li>• Shorter hiring cycles and faster decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}