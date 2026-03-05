"use client";

import React, { useState } from "react";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: number;
  expiryYear?: number;
  category: "cloud" | "development" | "management" | "finance" | "hr";
  icon: string;
  credentialUrl?: string;
  description: string;
  status: "active" | "in-progress" | "completed";
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    year: 2023,
    expiryYear: 2025,
    category: "cloud",
    icon: "☁️",
    description:
      "Demonstrates expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
    status: "active",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: 2022,
    category: "cloud",
    icon: "☁️",
    description:
      "Foundational knowledge of cloud concepts and Azure services, including security, privacy, compliance, and trust.",
    status: "completed",
  },
  {
    id: 3,
    name: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    year: 2021,
    category: "management",
    icon: "🔄",
    description:
      "Validates understanding of the Scrum framework and the ability to apply Scrum in real-world scenarios as a Scrum Master.",
    status: "completed",
  },
  {
    id: 4,
    name: "SAP SuccessFactors Employee Central",
    issuer: "SAP",
    year: 2020,
    category: "hr",
    icon: "👥",
    description:
      "Certification in implementing and configuring SAP SuccessFactors Employee Central for HCM solutions.",
    status: "completed",
  },
  {
    id: 5,
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: 2024,
    category: "cloud",
    icon: "🤖",
    description:
      "Demonstrates foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.",
    status: "active",
  },
  {
    id: 6,
    name: "ITIL® 4 Foundation",
    issuer: "AXELOS",
    year: 2019,
    category: "management",
    icon: "📋",
    description:
      "Foundation-level certification in IT service management practices that align IT services with business needs.",
    status: "completed",
  },
];

interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: { name: string; level: number; yearsExp: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React / Next.js", level: 90, yearsExp: 5 },
      { name: "TypeScript", level: 85, yearsExp: 4 },
      { name: "Tailwind CSS", level: 88, yearsExp: 3 },
      { name: "Vue.js", level: 70, yearsExp: 2 },
    ],
  },
  {
    name: "Backend",
    icon: "🔧",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "C# / .NET", level: 92, yearsExp: 8 },
      { name: "Node.js", level: 80, yearsExp: 4 },
      { name: "REST APIs", level: 90, yearsExp: 7 },
      { name: "SQL Server", level: 85, yearsExp: 10 },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Azure", level: 85, yearsExp: 4 },
      { name: "Docker", level: 75, yearsExp: 3 },
      { name: "CI/CD Pipelines", level: 80, yearsExp: 3 },
      { name: "Terraform", level: 65, yearsExp: 2 },
    ],
  },
  {
    name: "HCM & Business",
    icon: "👥",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "SAP SuccessFactors", level: 88, yearsExp: 6 },
      { name: "HR Consulting", level: 95, yearsExp: 15 },
      { name: "Change Management", level: 90, yearsExp: 12 },
      { name: "Financial Analysis", level: 85, yearsExp: 10 },
    ],
  },
];

const categoryColors: Record<Certification["category"], string> = {
  cloud: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  development:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
  management:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  finance:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
  hr: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800",
};

const statusConfig = {
  active: { label: "Active", className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
  "in-progress": {
    label: "In Progress",
    className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  },
  completed: {
    label: "Completed",
    className: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
  },
};

const SkillBar = ({ skill }: { skill: SkillCategory["skills"][0] }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.yearsExp}y exp</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
        style={{ width: `${skill.level}%` }}
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency: ${skill.level}%`}
      />
    </div>
  </div>
);

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<"certifications" | "skills">("certifications");
  const [activeCertCategory, setActiveCertCategory] = useState<Certification["category"] | "all">(
    "all"
  );

  const filteredCerts =
    activeCertCategory === "all"
      ? certifications
      : certifications.filter((c) => c.category === activeCertCategory);

  const certCategories: Array<{ value: Certification["category"] | "all"; label: string }> = [
    { value: "all", label: "All" },
    { value: "cloud", label: "Cloud" },
    { value: "management", label: "Management" },
    { value: "hr", label: "HR & HCM" },
    { value: "development", label: "Development" },
    { value: "finance", label: "Finance" },
  ];

  return (
    <section
      id="certifications-section"
      className="py-24 px-6 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-6 border border-indigo-200/50 dark:border-indigo-700/50">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Credentials &amp; Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Skills &amp; Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Validated expertise backed by industry-recognized certifications and hands-on experience
            across 25+ years.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-700 p-1">
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "certifications"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              🏆 Certifications
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "skills"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              📊 Skills Matrix
            </button>
          </div>
        </div>

        {activeTab === "certifications" && (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {certCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCertCategory(cat.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCertCategory === cat.value
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[cert.category]}`}
                      >
                        {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[cert.status].className}`}
                      >
                        {statusConfig[cert.status].label}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                    {cert.issuer} · {cert.year}
                    {cert.expiryYear ? ` – ${cert.expiryYear}` : ""}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      View Credential
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-xl`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    {category.name}
                  </h3>
                </div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Continuous Learning */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              📚
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Committed to Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technology never stands still, and neither do I. Currently pursuing advanced Azure
                certifications and exploring AI/ML integration patterns to stay at the forefront of
                innovation.
              </p>
            </div>
            <a
              href="/resume"
              className="flex-shrink-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
