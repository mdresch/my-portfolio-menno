import React from "react";
import Image from "next/image";

export interface Project {
  id: number;
  slug?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  image?: string;
  technologies?: string[];
  viewCount?: number;
  gitHubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

function normalizeSlug(title?: string, id?: number) {
  if (title) return title.toLowerCase().replace(/\s+/g, "-");
  return id ? String(id) : "";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const slug = project.slug || normalizeSlug(project.title, project.id);

  return (
    <article className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <Image
          src={
            project.imageUrl && project.imageUrl.startsWith("http")
              ? project.imageUrl
              : project.image && project.image.startsWith("http")
              ? project.image
              : "/images/default-project-image.jpg"
          }
          alt={project.title}
          width={400}
          height={250}
          className="rounded-lg object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {(project.technologies || []).map((tech: string, idx: number) => (
          <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-2">
        {project.liveUrl ? (
          <a href={project.liveUrl} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Live</a>
        ) : null}
        {project.gitHubUrl ? (
          <a href={project.gitHubUrl} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Source</a>
        ) : null}
        <a href={`/projects/${slug}`} className="text-sm text-gray-500">View</a>
      </div>
    </article>
  );
}
