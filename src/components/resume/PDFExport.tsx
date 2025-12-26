"use client";

import React, { useState } from "react";

export default function PDFExport() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePDF = async () => {
    try {
      setIsGenerating(true);
      setError(null);

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
        throw new Error(
          lastError?.message || 
          "Failed to load PDF library after multiple attempts. Please refresh the page and try again, or use the Print button."
        );
      }
      
      // Find the resume content element
      const element = document.getElementById("resume-content");
      
      if (!element) {
        throw new Error("Resume content not found. Please refresh the page and try again.");
      }

      // Ensure all sections are expanded for PDF
      const collapsibleSections = element.querySelectorAll('[class*="max-h-0"], [class*="opacity-0"]');
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

      // Wait a moment for DOM and styles to update
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
          width: element.scrollWidth,
          height: element.scrollHeight,
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
      await html2pdf().set(opt).from(element).save();
      
      // Cleanup
      document.body.classList.remove("generating-pdf");
      const colorFix = document.getElementById('pdf-color-fix');
      if (colorFix) {
        colorFix.remove();
      }
      
    } catch (err) {
      console.error("Error generating PDF:", err);
      
      // Cleanup on error
      document.body.classList.remove("generating-pdf");
      const colorFix = document.getElementById('pdf-color-fix');
      if (colorFix) {
        colorFix.remove();
      }
      
      // Provide more specific error messages
      let errorMessage = "Failed to generate PDF. Please try again or use the Print button.";
      if (err instanceof Error) {
        if (err.message.includes("chunk") || err.message.includes("Loading chunk") || err.message.includes("Failed to load")) {
          errorMessage = "Library loading failed. Please refresh the page and try again, or use the Print button.";
        } else if (err.message.includes("oklch") || err.message.includes("color")) {
          errorMessage = "Color format issue detected. Please try the Print button instead.";
        } else if (err.message.includes("canvas")) {
          errorMessage = "PDF rendering issue. Please try refreshing the page and try again.";
        } else {
          errorMessage = err.message || errorMessage;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Export or print this resume
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          The PDF version includes all expanded sections
        </p>
        {error && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
            {error}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => window.print()}
          disabled={isGenerating}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" />
          </svg>
          Print
        </button>
        <button
          onClick={generatePDF}
          disabled={isGenerating}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" />
              </svg>
              Download PDF
            </>
          )}
        </button>
      </div>
    </div>
  );
}