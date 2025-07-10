"use client";
import React from "react";
import ResumeContainer from "../../components/resume/ResumeContainer";
import Head from "next/head";

// Note: metadata export is not used in client components
const resumeMetadata = {
  title: "Professional Resume | Menno Drescher - Full-Stack Developer",
  description: "Explore my professional journey as a Full-Stack Developer specializing in C#/.NET, React, and Azure. Interactive resume with modern design and comprehensive experience overview.",
  keywords: ["resume", "CV", "professional experience", "skills", "Menno Drescher", "full-stack developer", "C# developer", ".NET developer", "React developer", "Azure developer", "software engineer", "HCM specialist", "HR consultant"],
  openGraph: {
    title: "Professional Resume | Menno Drescher - Full-Stack Developer",
    description: "Explore my professional journey as a Full-Stack Developer specializing in C#/.NET, React, and Azure.",
    type: "profile",
    images: [
      {
        url: "https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg",
        width: 1200,
        height: 630,
        alt: "Menno Drescher - Professional Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Resume | Menno Drescher - Full-Stack Developer",
    description: "Explore my professional journey as a Full-Stack Developer specializing in C#/.NET, React, and Azure.",
    images: ["https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg"],
  },
  alternates: {
    canonical: "https://my-portfolio-menno.vercel.app/resume",
  },
};

export default function ResumePage() {
  const handleScrollToResume = () => {
    const element = document.getElementById('resume-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      <Head>
        <title>{resumeMetadata.title}</title>
        <meta name="description" content={resumeMetadata.description} />
        <meta name="keywords" content={resumeMetadata.keywords.join(', ')} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-6 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Professional Resume
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Full-Stack Developer • C#/.NET Specialist • Azure Expert
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleScrollToResume}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Resume
                </button>
                <button
                  onClick={handlePrint}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Resume Content */}
        <div className="container mx-auto px-6 py-16" id="resume-content">
          <ResumeContainer />
        </div>
      </div>
    </>
  );
}