"use client";
import GitHubActivity from "../components/GitHubActivity";
import { generatePersonStructuredData, generateWebsiteStructuredData } from "@/lib/structured-data";
import Image from "next/image";
import Link from "next/link";
import { app, isFirebaseInitialized } from "@/lib/firebase";
import { useEffect } from "react";
import { getAnalytics } from "firebase/analytics";

// Firebase app is now imported from centralized config

// Mission, Values, and UVP Section
const MissionSection = () => (
  <section className="bg-white dark:bg-neutral-900/80 py-12 px-6 text-center rounded-lg shadow-md border border-cyan-50 dark:border-cyan-900 mb-12 font-sans">
    <h2 className="text-3xl font-bold text-indigo-700 dark:text-cyan-200 mb-4">Our Mission</h2>
    <p className="text-lg text-gray-600 dark:text-cyan-300 max-w-2xl mx-auto">
      Empowering creators and innovators through intuitive design and impactful digital experiences.
    </p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-cyan-300">Integrity</h3>
        <p className="text-gray-500 dark:text-cyan-400">We build with honesty and transparency.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-cyan-300">Innovation</h3>
        <p className="text-gray-500 dark:text-cyan-400">We embrace change and challenge norms.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-cyan-300">Impact</h3>
        <p className="text-gray-500 dark:text-cyan-400">We aim to make a difference with every project.</p>
      </div>
    </div>
  </section>
);

// Project Card and Case Studies Section
const projects = [
  {
    title: "AI-Powered Portfolio",
    description: "A modern portfolio site with dynamic content, analytics, and Azure integration.",
    image: "/images/showcase-aiassist.jpg",
  },
  {
    title: "HR AI Insights Dashboard",
    description: "A scalable dashboard for managing HR data and analytics.",
    image: "/images/showcase-cloudbackup.jpg",
  },
  {
    title: "Community Forum Application",
    description: "Active contributions to open source React and .NET projects.",
    image: "/images/showcase-cloudscale.jpg",
  },
];

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => (
  <div className="bg-white dark:bg-neutral-900/80 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-cyan-50 dark:border-cyan-900">
    <Image src={image} alt={title} width={400} height={192} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-cyan-200">{title}</h4>
      <p className="text-gray-600 dark:text-cyan-300 mt-2">{description}</p>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section className="py-12 px-4 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-cyan-200 mb-8 font-sans">Case Studies & Achievements</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="bg-indigo-600 dark:bg-cyan-800 text-white py-12 text-center rounded-lg shadow-md mt-16 mb-8 font-sans">
    <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
    <p className="text-lg mb-6">Let's build something amazing together.</p>
    <a href="/contact" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition inline-block">
      Get in Touch
    </a>
  </section>
);

export default function Home() {
  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined" && isFirebaseInitialized()) {
      try {
        getAnalytics(app);
      } catch (err) {
        console.error("Analytics initialization failed:", err);
      }
    }
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 py-16 min-h-screen bg-cyan-50/50 dark:bg-neutral-950 transition-colors font-sans">
        <div className="max-w-4xl mx-auto">
          <MissionSection />
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold mb-2 text-cyan-800 dark:text-cyan-200 transition-colors">
                    Menno Drescher&apos;s Full-Stack Development Portfolio
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300 transition-colors">
                    Building scalable, high-performance applications with C#, .NET, React, and Azure
            </h2>
            <p className="text-lg text-cyan-600 dark:text-cyan-300 mb-6 transition-colors">
                    Welcome to my portfolio—a space where innovation meets robust web solutions. As a 
              <strong>Full-Stack Developer</strong>, I specialize in crafting efficient, scalable applications 
                    using technologies like <strong>C#/.NET</strong>, <strong>React</strong>, and <strong>Azure</strong>. 
                    Explore my projects, discover my approach to modern software development, and let's build 
                    something extraordinary together.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 homepage-links">
            <a href="https://github.com/mdresch" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                View on GitHub
            </a>
            <a href="https://www.linkedin.com/in/mennodrescher" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c1.1 0 2-.9 2-2v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                Connect on LinkedIn
            </a>
            <a href="https://iq4fun.gitbook.io/my-portfolio-menno" className="inline-flex items-center gap-2 bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-semibold px-5 py-2 rounded-lg shadow transition-colors" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H8V4h11v16zM6 6H4v16c0 1.1.9 2 2 2h12v-2H6V6z"/></svg>
                Technical Documentation
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-neutral-900/80 backdrop-blur-md p-6 rounded-lg shadow-md border border-cyan-50 dark:border-cyan-900 transition-colors">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">What I Do</h2>
            <p className="text-cyan-600 dark:text-cyan-300">
                I specialize in building modern web applications using cutting-edge technologies.
                My focus is on creating clean, efficient, and user-friendly solutions.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-900/80 backdrop-blur-md p-6 rounded-lg shadow-md border border-cyan-50 dark:border-cyan-900 transition-colors">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">Featured Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "C#", ".NET", "Azure"].map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-50 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-100 dark:border-cyan-800 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block bg-cyan-500 dark:bg-cyan-700 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 dark:hover:bg-cyan-800 transition-colors shadow-md"
          >
              View My Projects
          </Link>
        </div>
        <ProjectsSection />
        <section className="py-12 bg-white dark:bg-neutral-900/80 backdrop-blur-md transition-colors mt-16 rounded-lg shadow-md border border-cyan-50 dark:border-cyan-900">
          <div className="container mx-auto px-4">
            <GitHubActivity />
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
