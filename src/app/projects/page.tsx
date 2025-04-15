import React from 'react';
import { Metadata } from 'next';
import ProjectJsonLd from '@/components/SEO/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'Projects | Menno Drescher',
  description: 'Explore my portfolio of projects spanning web development, AI, governance frameworks, and HR analytics dashboards.',
  keywords: ['projects', 'portfolio', 'web development', 'AI', 'governance', 'HR analytics', 'Menno Drescher'],
  openGraph: {
    title: 'Projects | Menno Drescher',
    description: 'Explore my portfolio of projects spanning web development, AI, governance frameworks, and HR analytics dashboards.',
    url: 'https://my-portfolio-menno.vercel.app/projects',
    type: 'website',
    images: [
      {
        url: 'https://my-portfolio-menno.vercel.app/projects-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Menno Drescher Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Menno Drescher',
    description: 'Explore my portfolio of projects spanning web development, AI, governance frameworks, and HR analytics dashboards.',
    images: ['https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg'],
  },
  alternates: {
    canonical: 'hhttps://my-portfolio-menno.vercel.app/projects',
  },
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  datePublished?: string;
  category?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "My Portfolio Menno",
    description: "Welcome to Menno's Portfolio! A curated showcase of creativity, innovation, and dedication. Explore projects that reflect a passion for problem-solving, a knack for design, and a commitment to delivering impactful results.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/users/mdresch/projects/3/",
    datePublished: "2023-06-15",
    category: "WebApplication"
  },
  {
    title: "ICT Governance Management Framework",
    description: "The ICT Governance Framework Application and the CBA Consult IT Management Framework are initiatives aimed at optimizing governance in multi-cloud environments.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://github.com/users/mdresch/projects/1",
    datePublished: "2023-03-10",
    category: "BusinessApplication"
  },
  {
    title: "CBA AI Foundry",
    description: "The CBA AI Foundry is a platform for building and deploying AI models. It seems you're diving deep into AI and machine learning frameworks.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://github.com/users/mdresch/projects/2"
  },
  {
    title: "AI Agent Life Cycle Management",
    description: "The AI Agent Life Cycle Management is a platform for building and deploying AI models. It seems you're diving deep into AI and machine learning frameworks.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/users/mdresch/projects/4/"
  },
  {
    title: "hr-insights-dashboard",
    description: "The hr-insights-dashboard is a platform for building and deploying AI models. It seems you're diving deep into AI and machine learning frameworks.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/users/mdresch/projects/5/"
  },
  {
    title: "Risk Reports",
    description: "The Risk Reports is a platform for building and deploying AI models. It seems you're diving deep into AI and machine learning frameworks.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/users/mdresch/projects/6/"
  }
];

export default function ProjectsPage() {
  // Define base URL for structured data
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';

  return (
    <>
      {/* Add JSON-LD structured data for projects */}
      {projects.map((project, index) => (
        <ProjectJsonLd key={index} project={project} baseUrl={baseUrl} />
      ))}
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
