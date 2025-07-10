"use client";

import React, { useState, useEffect } from "react";
import resumeData from "../../data/resume";
import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";
import SkillsVisualization from "./SkillsVisualization";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import PDFExport from "./PDFExport";
import ResumeJsonLd from "../../components/SEO/ResumeJsonLd";
import { usePerformanceMonitoring } from "../../hooks/usePerformanceMonitoring";

export default function ResumeContainer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["summary", "experience", "skills"])
  );
  const [isVisible, setIsVisible] = useState(false);
  const { trackRender, endRenderTracking } = usePerformanceMonitoring('ResumeContainer');

  useEffect(() => {
    trackRender();
    setIsVisible(true);
    return () => endRenderTracking();
  }, [trackRender, endRenderTracking]);

  const toggleSection = (section: string) => {
    const newExpandedSections = new Set(expandedSections);
    if (expandedSections.has(section)) {
      newExpandedSections.delete(section);
    } else {
      newExpandedSections.add(section);
    }
    setExpandedSections(newExpandedSections);
  };

  // Extract skills as string array for structured data - fixing the structure to match resume.ts
  const skillsList = resumeData.skills.map(skill => skill.name);

  // Extract education data for structured data
  const educationData = resumeData.education.map(edu => ({
    institution: edu.institution,
    degree: edu.degree,
    startDate: edu.startDate,
    endDate: edu.endDate
  }));

  // Extract experience data for structured data
  const experienceData = resumeData.workExperience.map(exp => ({
    organization: exp.company,
    position: exp.position,
    startDate: exp.startDate,
    endDate: exp.endDate ?? undefined,  // Convert null to undefined to match expected type
    description: exp.description
  }));

  return (
    <>
      {/* Add structured data for SEO */}
      <ResumeJsonLd
        name={resumeData.name}
        jobTitle={resumeData.title}
        description={resumeData.summary}
        skills={skillsList}
        experienceYears={25} // You can calculate this dynamically if needed
        education={educationData}
        workExperience={experienceData}
      />

      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Modern Resume Card */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
          <div className="p-8 md:p-12 print:p-0" id="resume-content">
          <ResumeHeader 
            name={resumeData.name} 
            title={resumeData.title} 
            contact={resumeData.contact} 
          />
          
          <ResumeSection 
            title="Summary" 
            id="summary"
            isExpanded={expandedSections.has("summary")}
            onToggle={() => toggleSection("summary")}
          >
            <p className="text-gray-700">{resumeData.summary}</p>
          </ResumeSection>
          
          <ResumeSection 
            title="Skills" 
            id="skills"
            isExpanded={expandedSections.has("skills")}
            onToggle={() => toggleSection("skills")}
          >
            <SkillsVisualization skills={resumeData.skills} />
          </ResumeSection>
          
          <ResumeSection 
            title="Experience" 
            id="experience"
            isExpanded={expandedSections.has("experience")}
            onToggle={() => toggleSection("experience")}
          >
            {resumeData.workExperience.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} />
            ))}
          </ResumeSection>
          
          <ResumeSection 
            title="Education" 
            id="education"
            isExpanded={expandedSections.has("education")}
            onToggle={() => toggleSection("education")}
          >
            {resumeData.education.map((education, index) => (
              <EducationItem key={index} education={education} />
            ))}
          </ResumeSection>
          
          {/* Add other sections as needed */}
          </div>

          {/* Modern Action Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 px-8 py-6 print:hidden border-t border-gray-100 dark:border-gray-600">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>
              <PDFExport />
            </div>
          </div>
        </div>

        {/* Floating Action Button for Mobile */}
        <div className="fixed bottom-6 right-6 sm:hidden print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            aria-label="Download PDF"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}