import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of your first project and its impact.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project-one"
  },
  {
    title: "Project Two",
    description: "Description of your second project highlighting key features.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-two"
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
