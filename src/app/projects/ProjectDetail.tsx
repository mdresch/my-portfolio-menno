"use client";

import Image from "next/image";
import CollapsibleSection from "./CollapsibleSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    gitHubUrl?: string;
    liveUrl?: string;
    challenges?: string[];
    slug?: string;
    viewCount?: number; // <-- Add this line
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();
  const slug = project.slug || project.title?.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    // Only increment if project has an id or slug
    if (project.slug) {
      fetch(`/api/projects/${project.slug}/increment-view`, { method: "POST" });
    }
    // If you use project.id, use that instead:
    // if (project.id) {
    //   fetch(`/api/projects/${project.id}/increment-view`, { method: "POST" });
    // }
  }, [project.slug]);

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
      <div className="mb-4 flex gap-4 items-center">
        {project.gitHubUrl && (
          <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live Demo</a>
        )}
        <button
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => router.push(`/projects/${slug}/edit`)}
        >
          Edit
        </button>
        <span className="text-gray-500 text-sm flex items-center ml-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          {project.viewCount ?? 0} views
        </span>
      </div>
      <div className="mb-4">
        <strong>Technologies:</strong> {project.technologies.join(", ")}
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