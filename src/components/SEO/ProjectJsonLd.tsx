// filepath: c:\Users\menno\CascadeProjects\personal-website\src\components\SEO\ProjectJsonLd.tsx
'use client';

import React from 'react';
import { generateProjectStructuredData, ProjectStructuredData } from '@/lib/structured-data';

interface ProjectJsonLdProps {
  project: ProjectStructuredData;
  baseUrl: string;
}

/**
 * Project JSON-LD component for structured data
 * Generates schema.org SoftwareSourceCode structured data for projects
 */
export default function ProjectJsonLd({ project, baseUrl }: ProjectJsonLdProps) {
  // Generate structured data
  const projectJsonLd = generateProjectStructuredData(project, baseUrl);

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(projectJsonLd) 
      }}
    />
  );
}