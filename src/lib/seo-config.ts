// filepath: c:\Users\menno\CascadeProjects\personal-website\src\lib\seo-config.ts
/**
 * Central configuration file for SEO-related constants
 * Update these values to match your website and personal information
 */

export const SEO_CONFIG = {
  // Base website information
  baseUrl: 'https://my-portfolio-menno.vercel.app/',
  siteName: 'Menno Drescher',
  siteDescription: 'Personal portfolio and blog of Menno Drescher, HCM Services Specialist',
  
  // Default meta tags
  defaultTitle: 'Menno Drescher | HCM Services Specialist',
  defaultDescription: 'Personal portfolio and blog of Menno Drescher, an experienced HCM Services Specialist with expertise in finance and human resources consultancy.',
  defaultKeywords: ['Menno Drescher', 'HCM Services', 'Human Resources', 'HR Consultant', 'Finance', 'Portfolio'],
  
  // Open Graph defaults
  defaultOgImage: '/images/og-default-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  
  // Social media accounts
  socialMedia: {
    twitter: 'https://twitter.com/mennodre',
    github: 'https://github.com/mdresch',
    linkedin: 'https://linkedin.com/in/menno.drescher',
  },
  
  // Contact information
  contactEmail: 'menno.drescher@gmail.com',
  location: 'Amsterdam, Netherlands',
  
  // Author information
  author: {
    name: 'Menno Drescher',
    jobTitle: 'HCM Services Specialist',
    company: 'CBA Consult',
    bio: 'A passionate professional with over 25 years of experience in Finance and Human Resources Consultancy.',
  }
};