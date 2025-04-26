'use client';
import React, { useState } from 'react';
import ProjectJsonLd from '@/components/SEO/ProjectJsonLd';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  datePublished?: string;
  category?: string;
  image?: string;
  caseStudy?: string;
  screenshots?: string[];
  outcomes?: string[];
}

const projects: Project[] = [
  {
    title: "My Portfolio Menno",
    description: "Welcome to Menno's Portfolio! A curated showcase of creativity, innovation, and dedication. Explore projects that reflect a passion for problem-solving, a knack for design, and a commitment to delivering impactful results.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/users/mdresch/projects/3/",
    datePublished: "2023-06-15",
    category: "WebApplication",
    caseStudy: "This portfolio was built to showcase my work and technical skills, featuring a modern stack and interactive dashboards.",
    screenshots: ["/images/showcase-dataviz.jpg"],
    outcomes: [
      "Increased professional visibility and engagement.",
      "Demonstrated full-stack and data visualization skills."
    ]
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
  },
  {
    title: "Money Market and Foereign Exchange",
    description: "The Money Market and Foreign Exchange an Introduction to Supply Demand Interst Rates Inflation and 6 Trilion a day Market.",
    technologies: ["React", "Node.js", "Material UI, Next JS"],
    link: "https://github.com/users/mdresch/projects/7/"
  }
];

export default function ProjectsPage() {
  // Define base URL for structured data
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';

  const [query, setQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique techs and categories
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.technologies)));
  const allCategories = Array.from(new Set(projects.map((p) => p.category).filter(Boolean)));

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    const matchesQuery =
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase());
    const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    return matchesQuery && matchesTech && matchesCategory;
  });

  return (
    <>
      {/* Add JSON-LD structured data for projects */}
      {projects.map((project, index) => (
        <ProjectJsonLd key={index} project={project} baseUrl={baseUrl} />
      ))}
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            className="border rounded px-3 py-2"
            placeholder="Search projects..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <select
            className="border rounded px-3 py-2"
            value={selectedTech}
            onChange={e => setSelectedTech(e.target.value)}
          >
            <option value="">All Technologies</option>
            {allTechs.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          <select
            className="border rounded px-3 py-2"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {allCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.length === 0 ? (
            <div className="col-span-2 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-700">No projects found.</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.caseStudy && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-1">Case Study</h3>
                    <p className="text-gray-700 text-sm">{project.caseStudy}</p>
                  </div>
                )}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-1">Screenshots</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.screenshots.map((src, i) => (
                        <img key={i} src={src} alt={project.title + ' screenshot'} className="w-32 h-20 object-cover rounded border" />
                      ))}
                    </div>
                  </div>
                )}
                {project.outcomes && project.outcomes.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-1">Outcomes & Impact</h3>
                    <ul className="list-disc pl-5 text-gray-700 text-sm">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
            ))
          )}
        </div>
      </main>
    </>
  );
}
