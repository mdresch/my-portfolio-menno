"use client";
import GitHubActivity from "../components/GitHubActivity";
import { generatePersonStructuredData, generateWebsiteStructuredData } from "@/lib/structured-data";
import Image from "next/image";
import Link from "next/link";
import { app, isFirebaseInitialized } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { getAnalytics } from "firebase/analytics";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { usePerformanceMonitoring } from "../hooks/usePerformanceMonitoring";

// Modern Hero Section with animated elements
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
          Menno Drescher
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Full-Stack Developer crafting
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"> scalable solutions </span>
          with modern technologies
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Specializing in <strong className="text-gray-800 dark:text-gray-200">C#/.NET</strong>,
          <strong className="text-gray-800 dark:text-gray-200"> React</strong>, and
          <strong className="text-gray-800 dark:text-gray-200"> Azure</strong> to build
          high-performance applications that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
          >
            Let's Connect
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/mdresch"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/mennodrescher"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c1.1 0 2-.9 2-2v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Modern Skills Section
const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: "🎨",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: "⚙️",
      technologies: ["C#", ".NET", "Node.js", "Python", "SQL Server"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      technologies: ["Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Tools & Methods",
      icon: "🛠️",
      technologies: ["Git", "Agile", "Testing", "Monitoring", "Security"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building modern applications with cutting-edge technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Modern Project Showcase
const projects = [
  {
    title: "AI-Powered Portfolio",
    description: "A modern portfolio site with dynamic content, analytics, and Azure integration featuring real-time data visualization.",
    image: "/images/showcase-aiassist.jpg",
    tags: ["React", "TypeScript", "Azure", "AI"],
    link: "/projects/ai-portfolio"
  },
  {
    title: "HR AI Insights Dashboard",
    description: "A scalable dashboard for managing HR data and analytics with machine learning insights and predictive modeling.",
    image: "/images/showcase-cloudbackup.jpg",
    tags: ["C#", ".NET", "SQL Server", "ML"],
    link: "/projects/hr-dashboard"
  },
  {
    title: "Community Forum Application",
    description: "Active contributions to open source React and .NET projects with modern architecture and best practices.",
    image: "/images/showcase-cloudscale.jpg",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    link: "/projects/community-forum"
  },
];

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => (
  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
    {/* Image Container */}
    <div className="relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Overlay Link */}
      <Link
        href={link}
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          View Project
        </span>
      </Link>
    </div>

    {/* Content */}
    <div className="p-6">
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800/50 relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Showcasing innovative solutions built with modern technologies and best practices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          View All Projects
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

// Modern Stats Section
const StatsSection = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "5+", label: "Years Experience", icon: "⏱️" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Commitment", icon: "💪" }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Modern CTA Section
const CTASection = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

    {/* Floating Elements */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Build Something Amazing?
      </h2>
      <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
        Let's collaborate to create innovative solutions that drive your business forward.
        From concept to deployment, I'm here to help.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link
          href="/contact"
          className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-blue-50"
        >
          <span className="flex items-center gap-2">
            Start a Project
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>

        <Link
          href="/quick-wins-demo"
          className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
        >
          View Demo
        </Link>
      </div>

      {/* Contact Info */}
      <div className="mt-16 pt-8 border-t border-white/20">
        <p className="text-blue-100 mb-4">Prefer to reach out directly?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
          <a href="mailto:menno.drescher@gmail.com" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            menno.drescher@gmail.com
          </a>
          <span className="hidden sm:block text-blue-200">•</span>
          <a href="https://www.linkedin.com/in/mennodrescher" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { trackRender, endRenderTracking } = usePerformanceMonitoring('HomePage');

  useEffect(() => {
    trackRender();

    // Initialize Firebase Analytics
    if (typeof window !== "undefined" && isFirebaseInitialized()) {
      try {
        getAnalytics(app);
      } catch (err) {
        console.error("Analytics initialization failed:", err);
      }
    }

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      endRenderTracking();
    };
  }, [trackRender, endRenderTracking]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="text-center">
          <LoadingSpinner size="lg" text="Loading portfolio..." />
          <p className="mt-4 text-gray-600 dark:text-gray-400">Preparing an amazing experience...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generatePersonStructuredData(),
            generateWebsiteStructuredData()
          ])
        }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* GitHub Activity Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Recent Activity
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Stay updated with my latest contributions and projects
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <GitHubActivity />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
