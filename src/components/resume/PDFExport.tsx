'use client';

import React from 'react';

export default function PDFExport() {
  const generatePDF = async () => {
    // Dynamically import html2pdf to avoid SSR issues
    const html2pdf = (await import('html2pdf.js')).default;
    
    const element = document.getElementById('resume-content');
    const opt = {
      margin: [10, 10],
      filename: 'menno-drescher-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Add class for PDF-specific styling
    document.body.classList.add('generating-pdf');
    
    // Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
      document.body.classList.remove('generating-pdf');
    });
  };
  
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-sm font-medium text-gray-700">
          Export or print this resume
        </h3>
        <p className="text-xs text-gray-500">
          The PDF version includes all expanded sections
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" />
          </svg>
          Print
        </button>
        <button
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" />
          </svg>
          Download PDF
        </button>
      </div>
    </div>
  );
}