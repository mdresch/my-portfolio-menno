// filepath: c:\Users\menno\CascadeProjects\personal-website\src\components\SEO\ResumeJsonLd.tsx
'use client';

import React from 'react';

interface ResumeJsonLdProps {
  name: string;
  jobTitle: string;
  description: string;
  skills: string[];
  experienceYears: number;
  education?: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  workExperience?: {
    organization: string;
    position: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }[];
}

/**
 * Resume JSON-LD component for structured data
 */
export default function ResumeJsonLd({
  name,
  jobTitle,
  description,
  skills,
  experienceYears,
  education = [],
  workExperience = []
}: ResumeJsonLdProps) {
  // Define base URL - should match the one in layout.tsx
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';
  
  const resumeJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    'name': name,
    'description': description,
    'jobTitle': jobTitle,
    'url': baseUrl,
    'sameAs': [
      'https://linkedin.com/in/mennodrescher',
      'https://github.com/mdresch',
      'https://twitter.com/mennodre'
    ],
    'knowsAbout': skills,
    'hasCredential': education.map(edu => ({
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'degree',
      'name': edu.degree,
      'recognizedBy': {
        '@type': 'Organization',
        'name': edu.institution
      },
      'startDate': edu.startDate,
      'endDate': edu.endDate
    })),
    'worksFor': workExperience.map(work => ({
      '@type': 'Organization',
      'name': work.organization,
      'member': {
        '@type': 'OrganizationRole',
        'roleName': work.position,
        'startDate': work.startDate,
        'endDate': work.endDate || 'Present'
      },
      'description': work.description
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(resumeJsonLd)
      }}
    />
  );
}