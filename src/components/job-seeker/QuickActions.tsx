"use client";

import React, { useState } from "react";
import Link from "next/link";

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

interface QuickActionsProps {
  profileData: ProfileData | null;
}

export default function QuickActions({ profileData }: QuickActionsProps) {
  const [showExportOptions, setShowExportOptions] = useState(false);

  const calculateProfileCompleteness = () => {
    if (!profileData?.personalInfo) return 0;
    
    let score = 0;
    const maxScore = 100;
    
    // Basic info (30 points) - safely access properties
    if (profileData.personalInfo?.fullName) score += 5;
    if (profileData.personalInfo?.title) score += 5;
    if (profileData.personalInfo?.email) score += 5;
    if (profileData.personalInfo?.location) score += 5;
    if (profileData.personalInfo?.linkedin) score += 5;
    if (profileData.personalInfo?.phone) score += 5;
    
    // Summary (20 points)
    if (profileData.summary && profileData.summary.length > 50) score += 20;
    
    // Experience (25 points)
    if (profileData.experience?.length >= 1) score += 10;
    if (profileData.experience?.length >= 2) score += 15;
    
    // Education (10 points)
    if (profileData.education?.length >= 1) score += 10;
    
    // Skills (15 points)
    if (profileData.skills?.length >= 5) score += 10;
    if (profileData.skills?.length >= 10) score += 5;
    
    return Math.min(score, maxScore);
  };

  const exportToJSON = () => {
    if (!profileData) return;
    
    const dataStr = JSON.stringify(profileData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${profileData.personalInfo.fullName.replace(/\s+/g, '_')}_profile.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const generateResumeText = () => {
    if (!profileData) return "";
    
    let resume = `${profileData.personalInfo.fullName}\n`;
    resume += `${profileData.personalInfo.title}\n`;
    resume += `${profileData.personalInfo.location} | ${profileData.personalInfo.email}`;
    if (profileData.personalInfo.phone) resume += ` | ${profileData.personalInfo.phone}`;
    if (profileData.personalInfo.linkedin) resume += `\nLinkedIn: ${profileData.personalInfo.linkedin}`;
    resume += `\n\n`;
    
    if (profileData.summary) {
      resume += `PROFESSIONAL SUMMARY\n${profileData.summary}\n\n`;
    }
    
    if (profileData.experience.length > 0) {
      resume += `WORK EXPERIENCE\n`;
      profileData.experience.forEach((exp: any) => {
        resume += `${exp.position} at ${exp.company}\n`;
        resume += `${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}\n`;
        if (exp.description) resume += `${exp.description}\n`;
        resume += `\n`;
      });
    }
    
    if (profileData.skills.length > 0) {
      resume += `SKILLS\n`;
      const skillsByCategory = profileData.skills.reduce((acc: any, skill: any) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill.name);
        return acc;
      }, {});
      
      Object.entries(skillsByCategory).forEach(([category, skills]: [string, any]) => {
        resume += `${category.charAt(0).toUpperCase() + category.slice(1)}: ${skills.join(', ')}\n`;
      });
    }
    
    return resume;
  };

  const exportToText = () => {
    if (!profileData?.personalInfo?.fullName) return;
    
    const resumeText = generateResumeText();
    const dataUri = 'data:text/plain;charset=utf-8,'+ encodeURIComponent(resumeText);
    
    const exportFileDefaultName = `${profileData.personalInfo.fullName.replace(/\s+/g, '_')}_resume.txt`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const shareProfile = async () => {
    if (navigator.share && profileData) {
      try {
        await navigator.share({
          title: `${profileData.personalInfo.fullName} - Professional Profile`,
          text: profileData.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
        copyProfileLink();
      }
    } else {
      copyProfileLink();
    }
  };

  const copyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Replace alert with a proper toast notification system
      console.log('Profile link copied to clipboard!');
      // TODO: Implement proper toast notification
    } catch (err) {
      console.error('Failed to copy profile link:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        console.log('Profile link copied to clipboard!');
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const completeness = calculateProfileCompleteness();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Profile Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-200 dark:text-gray-700"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${completeness}, 100`}
                  className="text-blue-600 dark:text-blue-400"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {completeness}%
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Profile Strength
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {completeness >= 80 ? "Excellent profile!" : 
                 completeness >= 60 ? "Good progress" : 
                 completeness >= 40 ? "Getting there" : "Just getting started"}
              </p>
            </div>
          </div>

          {profileData && (
            <div className="hidden md:block h-12 w-px bg-gray-200 dark:bg-gray-700"></div>
          )}

          {profileData && (
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {profileData.skills.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Skills Listed</div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Resume
          </Link>

          <div className="relative">
            <button
              onClick={() => setShowExportOptions(!showExportOptions)}
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>

            {showExportOptions && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                <div className="py-2">
                  <button
                    onClick={() => {
                      exportToJSON();
                      setShowExportOptions(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Export as JSON
                  </button>
                  <button
                    onClick={() => {
                      exportToText();
                      setShowExportOptions(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Export as Text
                  </button>
                  <button
                    onClick={() => {
                      window.print();
                      setShowExportOptions(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Print Resume
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={shareProfile}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Share
          </button>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Portfolio
          </Link>
        </div>
      </div>

      {/* Quick Tips */}
      {completeness < 80 && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">
            💡 Quick Tip to Improve Your Profile
          </h4>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {completeness < 40 ? "Start by completing your basic information and adding a professional summary." :
             completeness < 60 ? "Add more work experience details and expand your skills list." :
             "Include certifications and optimize your summary with industry keywords."}
          </p>
        </div>
      )}
    </div>
  );
}