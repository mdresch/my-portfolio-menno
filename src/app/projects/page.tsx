import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "My Portfolio Menno",
    description: "Welcome to Menno's Portfolio! A curated showcase of creativity, innovation, and dedication. Explore projects that reflect a passion for problem-solving, a knack for design, and a commitment to delivering impactful results. Here, every piece tells a story of growth, skill, and vision. Let’s build the future together!",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/users/mdresch/projects/3/"
  },
  {
    title: "ICT Governance Management Framework",
    description: "The ICT Governance Framework Application and the CBA Consult IT Management Framework are initiatives aimed at optimizing governance in multi-cloud environments. It seems you're diving deep into governance frameworks and their integration with Infrastructure as Code (IaC) practices.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://github.com/users/mdresch/projects/1"
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
  return (
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
  );
}
