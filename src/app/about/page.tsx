"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { usePerformanceMonitoring } from "../../hooks/usePerformanceMonitoring";
import Testimonials from "../../components/Testimonials";
import Certifications from "../../components/Certifications";

// Note: metadata export is not used in client components
const aboutMetadata = {
  title: "About Menno Drescher | Full-Stack Developer & HCM Specialist",
  description: "Discover Menno Drescher's 25+ years of expertise in Full-Stack Development, Human Capital Management, Finance, and Technology. Learn how Menno drives organizational success through strategic consulting and innovative solutions.",
  keywords: ["Menno Drescher", "Full-Stack Developer", "C# Developer", ".NET Developer", "React Developer", "Azure Developer", "HCM Services", "Finance", "HR Technology", "Consultancy"],
  openGraph: {
    title: "About Menno Drescher | Full-Stack Developer & HCM Specialist",
    description: "Discover Menno Drescher's 25+ years of expertise in Full-Stack Development, Human Capital Management, Finance, and Technology.",
    type: "profile",
    images: [
      {
        url: "https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg",
        width: 1200,
        height: 630,
        alt: "Menno Drescher - Full-Stack Developer & HCM Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Menno Drescher | Full-Stack Developer & HCM Specialist",
    description: "Discover Menno Drescher's 25+ years of expertise in Full-Stack Development, Human Capital Management, Finance, and Technology.",
    images: ["https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg"],
  },
};

// Modern About Page Components
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-sky-900/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`relative z-10 max-w-5xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6 border border-blue-200/50 dark:border-blue-700/50">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Open to new opportunities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Full-Stack Developer · HCM Specialist · Innovation Catalyst
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              25+ years turning complex business challenges into elegant, high-performance
              technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Discover My Story
              </button>
              <button
                onClick={() => document.getElementById('expertise-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                View Expertise
              </button>
            </div>
          </div>

          {/* Professional Photo Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-700 overflow-hidden">
                {/* Avatar initials as placeholder for professional headshot */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <span className="text-white font-bold text-5xl">MD</span>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 font-semibold text-lg">Menno Drescher</p>
                  <p className="text-blue-500 dark:text-blue-400 text-sm">Full-Stack Developer</p>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">25+ Years</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☁️</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">Azure</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StorySection: React.FC = () => (
  <section id="story-section" className="py-24 px-6 bg-white dark:bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          25+ years of driving innovation at the intersection of technology and business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">The Professional</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m Menno Drescher, a results-driven professional with over 25 years of experience spanning Full-Stack Development, Finance, and Human Resources Consultancy. Currently, I work as a Managed HCM Services Specialist at CBA Consult, where I help organizations enhance performance through strategic HR solutions and cutting-edge technology.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
            <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">The Developer</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As a passionate Full-Stack Developer, I specialize in C#/.NET, React, TypeScript, and Azure cloud solutions. I thrive at the intersection of business and technology—where strategic goals meet practical execution, creating innovative solutions that drive real business value.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">25+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Years Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">Professional Excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">∞</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Innovation Mindset</h4>
                  <p className="text-gray-600 dark:text-gray-400">Continuous Learning</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Results Driven</h4>
                  <p className="text-gray-600 dark:text-gray-400">Measurable Impact</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">👥</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Human Resources</h4>
                  <p className="text-gray-600 dark:text-gray-400">Strategic HR Solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">💰</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Finance</h4>
                  <p className="text-gray-600 dark:text-gray-400">Financial Excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">💻</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">ICT</h4>
                  <p className="text-gray-600 dark:text-gray-400">Technology Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Career Journey Timeline
const CareerJourneySection: React.FC = () => {
  const milestones = [
    {
      year: "1999",
      title: "Career Beginnings",
      description: "Started professional career in finance and HR administration, developing a deep understanding of business operations and organizational dynamics.",
      icon: "🌱",
      color: "from-green-400 to-emerald-500",
    },
    {
      year: "2005",
      title: "Into Technology",
      description: "Transitioned into IT consulting, combining business expertise with emerging web technologies. Built first enterprise HR systems integrating business logic with technical solutions.",
      icon: "💡",
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "2012",
      title: "Full-Stack Development",
      description: "Fully embraced full-stack development with C#/.NET and modern JavaScript frameworks. Delivered large-scale ERP and HCM implementations for multinational organizations.",
      icon: "🔧",
      color: "from-blue-400 to-cyan-500",
    },
    {
      year: "2018",
      title: "Cloud & Modern Web",
      description: "Expanded expertise into Azure cloud architecture and React/TypeScript ecosystem. Led digital transformation projects combining cloud migration with modern front-end development.",
      icon: "☁️",
      color: "from-indigo-400 to-blue-500",
    },
    {
      year: "2022",
      title: "HCM Specialist & AI",
      description: "Joined CBA Consult as Managed HCM Services Specialist. Began integrating AI capabilities into portfolio applications, exploring the intersection of HR technology and machine learning.",
      icon: "🤖",
      color: "from-purple-400 to-indigo-500",
    },
    {
      year: "Now",
      title: "Innovation & Leadership",
      description: "Building next-generation solutions at the intersection of AI, cloud, and human capital management. Sharing knowledge through open source and thought leadership.",
      icon: "🚀",
      color: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <section id="journey-section" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            The story of how a passion for both people and technology shaped a unique professional path
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transform md:-translate-x-0.5" aria-hidden="true"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 transform -translate-x-4 md:-translate-x-4 flex-shrink-0 z-10">
                  <div className={`w-8 h-8 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900`}>
                    <span className="text-xs">{milestone.icon}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-[52%] md:pr-8' : 'md:ml-[52%] md:pl-8'} w-full md:w-auto`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${milestone.color} text-white text-sm font-bold rounded-full`}>
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Mission & Values Section
const bioVersions = [
  {
    label: "50 words",
    title: "Short Bio",
    text: "Menno Drescher is a Full-Stack Developer and HCM Specialist with 25+ years of experience. Specializing in C#/.NET, React, and Azure, he builds scalable solutions that bridge technology and business strategy.",
  },
  {
    label: "100 words",
    title: "Medium Bio",
    text: "Menno Drescher is a results-driven Full-Stack Developer and HCM Specialist with over 25 years of professional experience spanning software development, finance, and human resources consulting. Currently serving as a Managed HCM Services Specialist at CBA Consult, Menno helps organizations maximize performance through strategic HR technology solutions. His expertise in C#/.NET, React, TypeScript, and Azure cloud enables him to deliver high-impact applications that drive measurable business outcomes.",
  },
  {
    label: "200 words",
    title: "Full Bio",
    text: "Menno Drescher is a seasoned Full-Stack Developer and Human Capital Management (HCM) Specialist with over 25 years of experience at the intersection of technology, finance, and people. Beginning his career in finance and HR administration, Menno developed a holistic understanding of organizational dynamics before pivoting into software development and IT consulting. Today, Menno works as a Managed HCM Services Specialist at CBA Consult, where he drives organizational performance through strategic HR technology implementations and digital transformation initiatives. His technical expertise spans C#/.NET, React, TypeScript, Azure cloud architecture, and modern DevOps practices. He is passionate about building solutions that not only work technically but genuinely improve how people work. Menno is committed to continuous learning, open source contribution, and sharing knowledge to help the wider tech community grow.",
  },
];

const MissionValuesSection: React.FC = () => {
  const values = [
    {
      icon: "🎯",
      title: "Purpose-Driven",
      description: "I believe technology should solve real human problems. Every solution I build is anchored to a clear business outcome and measurable impact.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🤝",
      title: "People First",
      description: "The best systems are designed with people in mind. I prioritize user experience, stakeholder buy-in, and organizational change management in every project.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📐",
      title: "Quality & Craft",
      description: "Clean code, clear documentation, and thoughtful architecture are non-negotiable. I take pride in craftsmanship that stands the test of time.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: "🔄",
      title: "Continuous Growth",
      description: "The technology landscape evolves constantly. I embrace lifelong learning, staying current with emerging technologies while deepening core expertise.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="mission-section" className="py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Mission &amp; Values
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            My professional mission is to bridge the gap between technology and human potential —
            creating solutions that empower organizations to perform at their best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-blue-100 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Bio versions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Biography</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bioVersions.map((bio) => (
              <div key={bio.label} className="bg-white/10 rounded-2xl p-5 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-white/20 text-white text-xs font-bold rounded-full">{bio.label}</span>
                  <span className="text-white/70 text-xs">{bio.title}</span>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">{bio.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Community & Open Source Section
const CommunitySection: React.FC = () => {
  const contributions = [
    {
      icon: "💻",
      title: "Open Source Contributions",
      description: "Active contributor to open source projects, focusing on developer tools, HR technology libraries, and Azure integration utilities.",
      metric: "10+ repos",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: "✍️",
      title: "Technical Writing",
      description: "Regular articles on full-stack development patterns, cloud architecture, and HCM technology integration published on dev platforms.",
      metric: "20+ articles",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: "🎤",
      title: "Knowledge Sharing",
      description: "Sharing insights through internal tech talks, mentoring junior developers, and participating in professional HR technology communities.",
      metric: "Active mentor",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: "🌐",
      title: "Professional Network",
      description: "Connected with 500+ professionals across HR technology, software development, and business consulting on LinkedIn.",
      metric: "500+ connections",
      color: "from-[#0A66C2] to-blue-700",
    },
  ];

  return (
    <section id="community-section" className="py-24 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Community &amp; Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technology is a team sport. Beyond client work, I contribute to the broader community through
            open source, writing, and mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributions.map((item, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    {item.metric}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Activity CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/mdresch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { trackRender, endRenderTracking } = usePerformanceMonitoring('AboutPage');

  useEffect(() => {
    trackRender();
    setIsLoading(false);
    return () => endRenderTracking();
  }, [trackRender, endRenderTracking]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{aboutMetadata.title}</title>
        <meta name="description" content={aboutMetadata.description} />
        <meta name="keywords" content={aboutMetadata.keywords.join(', ')} />
      </Head>

      <main className="min-h-screen">
        <HeroSection />
        <StorySection />
        <CareerJourneySection />
        <MissionValuesSection />

        {/* Expertise Section */}
        <section id="expertise-section" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What I Bring to the Table
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My career has been built on delivering value across a wide range of domains, combining technical expertise with strategic business insight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "👥",
                  title: "Human Capital Management",
                  description: "Strategic HR solutions that drive growth and engagement",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "💼",
                  title: "Finance & HR Consulting",
                  description: "Insightful guidance to optimize people and financial performance",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: "🚀",
                  title: "Project & Change Management",
                  description: "Leading initiatives and transitions with precision and care",
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  icon: "⚡",
                  title: "Process & Data Optimization",
                  description: "Streamlining operations and ensuring data integrity",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: "🛠️",
                  title: "HR Technology & Adoption",
                  description: "Implementing tools that empower users and improve outcomes",
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  icon: "🔒",
                  title: "Security & Compliance",
                  description: "Safeguarding systems with a focus on Azure Entra and IAM",
                  color: "from-gray-500 to-gray-700"
                },
                {
                  icon: "📊",
                  title: "Analytics & Performance",
                  description: "Turning data into actionable insights for better decision-making",
                  color: "from-teal-500 to-green-500"
                },
                {
                  icon: "🤝",
                  title: "Stakeholder Collaboration",
                  description: "Building trusted relationships that fuel success",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: "🔄",
                  title: "Change Management",
                  description: "Guiding organizations through transformation with proven methodologies and stakeholder buy-in",
                  color: "from-blue-600 to-indigo-600"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Modern technologies and tools that power innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Frontend Development",
                  icon: "⚛️",
                  color: "from-blue-500 to-cyan-500",
                  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
                },
                {
                  category: "Backend Development",
                  icon: "🔧",
                  color: "from-green-500 to-emerald-500",
                  skills: ["C#/.NET", "Node.js", "Python", "SQL Server", "REST APIs"]
                },
                {
                  category: "Cloud & DevOps",
                  icon: "☁️",
                  color: "from-indigo-500 to-blue-500",
                  skills: ["Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"]
                },
                {
                  category: "Tools & Methods",
                  icon: "🛠️",
                  color: "from-orange-500 to-red-500",
                  skills: ["Git/GitHub", "VS Code", "Agile", "Testing", "Monitoring"]
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              My Approach
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100 dark:border-blue-800">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I&apos;m passionate about <span className="font-bold text-blue-600 dark:text-blue-400">innovation</span> and <span className="font-bold text-indigo-600 dark:text-indigo-400">continuous improvement</span>. I thrive at the intersection of business and technology—where strategic goals meet practical execution.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether it&apos;s optimizing HR systems, building full-stack applications, or exploring the latest in web development, I bring <span className="font-semibold">curiosity</span>, <span className="font-semibold">clarity</span>, and <span className="font-semibold">commitment</span> to every challenge.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications & Skills Section */}
        <Certifications />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Community Section */}
        <CommunitySection />

        {/* Connect Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Connect
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
              I&apos;m always open to new ideas, partnerships, and opportunities to collaborate. If you&apos;re looking to explore tech-enabled solutions or simply want to exchange insights—let&apos;s connect and create something impactful.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </a>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </Link>
              <a
                href="/resume"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </section>
      </main>
    </>
  );
}
