'use client';

import React, { useState } from 'react';
import resumeData from '@/data/resume';
import ResumeHeader from './ResumeHeader';
import ResumeSection from './ResumeSection';
import SkillsVisualization from './SkillsVisualization';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import PDFExport from './PDFExport';

export default function ResumeContainer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['summary', 'experience', 'skills'])
  );

  const toggleSection = (section: string) => {
    const newExpandedSections = new Set(expandedSections);
    if (expandedSections.has(section)) {
      newExpandedSections.delete(section);
    } else {
      newExpandedSections.add(section);
    }
    setExpandedSections(newExpandedSections);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 print:p-0" id="resume-content">
        <ResumeHeader 
          name={resumeData.name} 
          title={resumeData.title} 
          contact={resumeData.contact} 
        />
        
        <ResumeSection 
          title="Summary" 
          id="summary"
          isExpanded={expandedSections.has('summary')}
          onToggle={() => toggleSection('summary')}
        >
          <p className="text-gray-700">{resumeData.summary}</p>
        </ResumeSection>
        
        <ResumeSection 
          title="Skills" 
          id="skills"
          isExpanded={expandedSections.has('skills')}
          onToggle={() => toggleSection('skills')}
        >
          <SkillsVisualization skills={resumeData.skills} />
        </ResumeSection>
        
        <ResumeSection 
          title="Experience" 
          id="experience"
          isExpanded={expandedSections.has('experience')}
          onToggle={() => toggleSection('experience')}
        >
          {resumeData.workExperience.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </ResumeSection>
        
        <ResumeSection 
          title="Education" 
          id="education"
          isExpanded={expandedSections.has('education')}
          onToggle={() => toggleSection('education')}
        >
          {resumeData.education.map((education, index) => (
            <EducationItem key={index} education={education} />
          ))}
        </ResumeSection>
        
        {/* Add other sections as needed */}
      </div>
      
      <div className="bg-gray-50 px-6 py-4 print:hidden">
        <PDFExport />
      </div>
    </div>
  );
}