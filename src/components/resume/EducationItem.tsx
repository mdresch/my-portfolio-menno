import React from "react";
import { Education } from "@/data/resume";

interface EducationItemProps {
  education: Education;
}

export default function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row justify-between mb-1">
        <h3 className="font-semibold text-gray-800">{education.degree}</h3>
        <span className="text-sm text-gray-600">
          {formatDate(education.startDate)} – {formatDate(education.endDate)}
        </span>
      </div>
      
      <div className="text-gray-700 mb-1">{education.institution}</div>
      <div className="text-gray-600 mb-2">{education.field}</div>
      
      {education.description && (
        <p className="text-gray-600 mb-3">{education.description}</p>
      )}
      
      {education.achievements && education.achievements.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-700 mb-1">Achievements:</h4>
          <ul className="list-disc pl-5 text-gray-600">
            {education.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
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