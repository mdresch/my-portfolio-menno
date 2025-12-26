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

  const handleDownloadPDF = async () => {
    try {
      // Dynamically import html2pdf to avoid SSR issues
      // Use a more robust import with retry logic for chunk loading errors
      let html2pdf;
      let retries = 3;
      let lastError: Error | null = null;
      
      while (retries > 0) {
        try {
          // Try standard dynamic import first
          const module = await import("html2pdf.js");
          html2pdf = module.default || module;
          
          // Verify the function exists
          if (typeof html2pdf === 'function' || (html2pdf && typeof html2pdf.set === 'function')) {
            break;
          } else {
            throw new Error("html2pdf library loaded but is not a valid function");
          }
        } catch (importError) {
          lastError = importError as Error;
          console.warn(`html2pdf import attempt ${4 - retries} failed:`, importError);
          retries--;
          
          if (retries > 0) {
            // Wait before retrying with exponential backoff
            const delay = Math.pow(2, 3 - retries) * 500; // 500ms, 1000ms, 2000ms
            await new Promise(resolve => setTimeout(resolve, delay));
            
            // Force reload the chunk by clearing cache
            if (typeof window !== 'undefined' && 'caches' in window) {
              try {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(name => caches.delete(name)));
              } catch (cacheError) {
                console.warn("Cache clearing failed:", cacheError);
              }
            }
          }
        }
      }
      
      if (!html2pdf) {
        alert(
          lastError?.message || 
          "Failed to load PDF library after multiple attempts. Please refresh the page and try again, or use the Print button."
        );
        return;
      }
      
      // Find the resume content element
      const element = document.getElementById("resume-content");
      
      if (!element) {
        // Scroll to resume first, then try again
        const resumeContainer = document.querySelector('[id="resume-content"]');
        if (resumeContainer) {
          resumeContainer.scrollIntoView({ behavior: 'smooth' });
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          alert("Resume content not found. Please refresh the page and try again.");
          return;
        }
      }

      const finalElement = document.getElementById("resume-content");
      if (!finalElement) {
        alert("Resume content not found. Please refresh the page and try again.");
        return;
      }

      // Ensure all sections are expanded for PDF
      const collapsibleSections = finalElement.querySelectorAll('[class*="max-h-0"], [class*="opacity-0"]');
      collapsibleSections.forEach((section: Element) => {
        const htmlSection = section as HTMLElement;
        htmlSection.style.maxHeight = 'none';
        htmlSection.style.opacity = '1';
        htmlSection.style.display = 'block';
      });

      // Convert oklch colors to rgb for html2canvas compatibility
      // html2canvas doesn't support oklch, so we need to convert CSS variables
      const style = document.createElement('style');
      style.id = 'pdf-color-fix';
      const isDark = document.documentElement.classList.contains('dark');
      style.textContent = `
        #resume-content * {
          color-scheme: light !important;
        }
        :root, .dark {
          --background: ${isDark ? 'rgb(36, 36, 36)' : 'rgb(255, 255, 255)'};
          --foreground: ${isDark ? 'rgb(251, 251, 251)' : 'rgb(36, 36, 36)'};
          --card: ${isDark ? 'rgb(54, 54, 54)' : 'rgb(255, 255, 255)'};
          --card-foreground: ${isDark ? 'rgb(251, 251, 251)' : 'rgb(36, 36, 36)'};
          --popover: ${isDark ? 'rgb(54, 54, 54)' : 'rgb(255, 255, 255)'};
          --popover-foreground: ${isDark ? 'rgb(251, 251, 251)' : 'rgb(36, 36, 36)'};
          --primary: ${isDark ? 'rgb(234, 234, 234)' : 'rgb(54, 54, 54)'};
          --primary-foreground: ${isDark ? 'rgb(54, 54, 54)' : 'rgb(251, 251, 251)'};
          --secondary: ${isDark ? 'rgb(70, 70, 70)' : 'rgb(247, 247, 247)'};
          --secondary-foreground: ${isDark ? 'rgb(251, 251, 251)' : 'rgb(54, 54, 54)'};
          --muted: ${isDark ? 'rgb(70, 70, 70)' : 'rgb(247, 247, 247)'};
          --muted-foreground: ${isDark ? 'rgb(180, 180, 180)' : 'rgb(141, 141, 141)'};
          --accent: ${isDark ? 'rgb(70, 70, 70)' : 'rgb(247, 247, 247)'};
          --accent-foreground: ${isDark ? 'rgb(251, 251, 251)' : 'rgb(54, 54, 54)'};
          --destructive: ${isDark ? 'rgb(239, 68, 68)' : 'rgb(220, 38, 38)'};
          --border: ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgb(234, 234, 234)'};
          --input: ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgb(234, 234, 234)'};
          --ring: ${isDark ? 'rgb(141, 141, 141)' : 'rgb(180, 180, 180)'};
        }
      `;
      document.head.appendChild(style);

      // Wait for DOM and styles to update
      await new Promise(resolve => setTimeout(resolve, 300));

      const opt = {
        margin: [10, 10, 10, 10],
        filename: `menno-drescher-resume-${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          logging: false, // Set to true for debugging
          letterRendering: true,
          allowTaint: false,
          backgroundColor: document.documentElement.classList.contains('dark') ? '#242424' : '#ffffff',
          removeContainer: true,
          width: finalElement.scrollWidth,
          height: finalElement.scrollHeight,
          x: 0,
          y: 0,
        },
        jsPDF: { 
          unit: "mm", 
          format: "a4", 
          orientation: "portrait",
          compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      // Add class for PDF-specific styling
      document.body.classList.add("generating-pdf");
      
      // Generate PDF
      await html2pdf().set(opt).from(finalElement).save();
      
      // Cleanup
      document.body.classList.remove("generating-pdf");
      const colorFix = document.getElementById('pdf-color-fix');
      if (colorFix) {
        colorFix.remove();
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      
      // Cleanup on error
      document.body.classList.remove("generating-pdf");
      const colorFix = document.getElementById('pdf-color-fix');
      if (colorFix) {
        colorFix.remove();
      }
      
      // Provide more specific error messages
      let errorMessage = "Failed to generate PDF. Please try again or use the Print button.";
      if (error instanceof Error) {
        if (error.message.includes("chunk") || error.message.includes("Loading chunk") || error.message.includes("Failed to load")) {
          errorMessage = "Library loading failed. Please refresh the page and try again, or use the Print button.";
        } else if (error.message.includes("oklch") || error.message.includes("color")) {
          errorMessage = "Color format issue detected. Please try the Print button instead.";
        } else if (error.message.includes("canvas")) {
          errorMessage = "PDF rendering issue. Please try refreshing the page and try again.";
        } else {
          errorMessage = error.message || errorMessage;
        }
      }
      
      alert(errorMessage);
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
                  onClick={handleDownloadPDF}
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
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <ResumeContainer />
        </div>
      </div>
    </>
  );
}