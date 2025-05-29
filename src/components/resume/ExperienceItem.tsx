import React from "react";
import { WorkExperience } from "@/data/resume";

interface ExperienceItemProps {
  experience: WorkExperience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row justify-between mb-1">
        <h3 className="font-semibold text-gray-800">{experience.position}</h3>
        <span className="text-sm text-gray-600">
          {formatDate(experience.startDate)} – {experience.endDate ? formatDate(experience.endDate) : "Present"}
        </span>
      </div>
      
      <div className="text-gray-700 mb-2">{experience.company}</div>
      
      <p className="text-gray-600 mb-3">{experience.description}</p>
      
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="mb-3">
          <h4 className="font-medium text-gray-700 mb-1">Key Achievements:</h4>
          <ul className="list-disc pl-5 text-gray-600">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    month: "short", 
    year: "numeric" 
  });
}