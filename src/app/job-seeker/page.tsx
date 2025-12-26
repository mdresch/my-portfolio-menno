import React from "react";
import { Metadata } from "next";
import JobSeekerDashboard from "../../components/job-seeker/JobSeekerDashboard";

export const metadata: Metadata = {
  title: "Job Seeker Dashboard | Professional Profile Management",
  description: "Create and manage your professional online presence. Build your profile, connect with industry professionals, and stay updated with industry trends.",
  keywords: ["job seeker", "professional profile", "career development", "networking", "industry trends"],
  openGraph: {
    title: "Job Seeker Dashboard | Professional Profile Management",
    description: "Create and manage your professional online presence. Build your profile, connect with industry professionals, and stay updated with industry trends.",
    type: "website",
  },
};

export default function JobSeekerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Professional Journey Starts Here
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create a compelling professional profile, connect with industry leaders, and stay ahead with the latest trends in your field.
          </p>
        </div>

        <JobSeekerDashboard />
      </div>
    </div>
  );
}