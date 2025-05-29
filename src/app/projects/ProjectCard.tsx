import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Helper to generate a slug from the project title
function normalizeSlug(title: string) {
  return title?.toLowerCase().replace(/\s+/g, "-");
}

interface Project {
  id: number;
  slug?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  image?: string;
  technologies?: string[];
  viewCount?: number;
}

interface ProjectCardProps {
  project: Project;
  onEdit?: () => void;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const slug =
    project.slug ||
    (project.title ? normalizeSlug(project.title) : project.id?.toString() || "");

  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
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
        className="rounded-lg object-cover mb-4"
      />
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
        <button
          className="text-blue-600 hover:underline"
          onClick={() => router.push(`/projects/${slug}/edit`)}
        >
          Edit
        </button>
        <span className="text-gray-500 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          {project.viewCount ?? 0} views
        </span>
      </div>
    </div>
  );
}