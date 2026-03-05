// filepath: c:\Users\menno\CascadeProjects\personal-website\src\lib\seo-config.ts
/**
 * Central configuration file for SEO-related constants
 * Update these values to match your website and personal information
 */

export const SEO_CONFIG = {
  // Base website information
  baseUrl: "https://my-portfolio-menno.vercel.app/",
  siteName: "Menno Drescher",
  siteDescription: "Portfolio of Menno Drescher – Full-Stack Developer & HCM Specialist with 25+ years of experience in technology and consultancy.",
  
  // Default meta tags
  defaultTitle: "Menno Drescher | Full-Stack Developer & HCM Specialist",
  defaultDescription: "Portfolio of Menno Drescher – 25+ years of expertise in Full-Stack Development (C#/.NET, React, Azure) and Human Capital Management. Building scalable applications and strategic HCM solutions.",
  defaultKeywords: ["Menno Drescher", "Full-Stack Developer", "HCM Specialist", "Human Resources", "HR Technology", "C# Developer", ".NET Developer", "React Developer", "Azure Developer", "Finance", "Portfolio"],
  
  // Open Graph defaults
  defaultOgImage: "/images/og-default-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  
  // Social media accounts
  socialMedia: {
    twitter: "https://twitter.com/mennodre",
    github: "https://github.com/mdresch",
    linkedin: "https://www.linkedin.com/in/mennodrescher",
  },
  
  // Contact information
  contactEmail: "menno.drescher@gmail.com",
  location: "Amsterdam, Netherlands",
  
  // Author information
  author: {
    name: "Menno Drescher",
    jobTitle: "Full-Stack Developer & HCM Specialist",
    company: "CBA Consult",
    bio: "A passionate professional with over 25 years of experience in Full-Stack Development, Finance, and Human Resources Consultancy.",
  }
};