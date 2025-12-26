"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { usePerformanceMonitoring } from "../../hooks/usePerformanceMonitoring";

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

      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-Stack Developer • HCM Specialist • Innovation Catalyst
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              I'm Menno Drescher, a results-driven professional with over 25 years of experience spanning Full-Stack Development, Finance, and Human Resources Consultancy. Currently, I work as a Managed HCM Services Specialist at CBA Consult, where I help organizations enhance performance through strategic HR solutions and cutting-edge technology.
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
                I'm passionate about <span className="font-bold text-blue-600 dark:text-blue-400">innovation</span> and <span className="font-bold text-indigo-600 dark:text-indigo-400">continuous improvement</span>. I thrive at the intersection of business and technology—where strategic goals meet practical execution.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether it's optimizing HR systems, building full-stack applications, or exploring the latest in web development, I bring <span className="font-semibold">curiosity</span>, <span className="font-semibold">clarity</span>, and <span className="font-semibold">commitment</span> to every challenge.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Connect
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
              I'm always open to new ideas, partnerships, and opportunities to collaborate. If you're looking to explore tech-enabled solutions or simply want to exchange insights—let's connect and create something impactful.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </a>
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
