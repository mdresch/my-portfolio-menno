import Image from "next/image";
import CollapsibleSection from "./CollapsibleSection";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    gitHubUrl?: string;
    liveUrl?: string;
    challenges?: string[];
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <Image
        src={project.imageUrl || "/default-project-image.png"}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg mb-4"
      />
      <p className="mb-4 text-cyan-700 dark:text-cyan-200">{project.description}</p>
      <div className="mb-4">
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </div>
      <div className="mb-4 flex gap-4">
        {project.gitHubUrl && (
          <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live Demo</a>
        )}
      </div>
      {project.challenges && project.challenges.length > 0 && (
        <CollapsibleSection title="Technical Challenges & Solutions">
          <ul className="list-disc pl-6">
            {project.challenges.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </CollapsibleSection>
      )}
    </div>
  );
}
