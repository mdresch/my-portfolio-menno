"use client";

import { useProjects } from "@/hooks/useProjects";
import Link from "next/link";
import Image from "next/image";

// Loading Skeleton
const ProjectSkeleton = () => (
  <div className="border rounded-lg p-6 bg-gray-50 animate-pulse">
    <div className="h-48 bg-gray-200 rounded-md mb-4" />
    <div className="h-7 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-full mb-4" />
    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
    <div className="h-4 bg-gray-200 rounded w-full mb-4" />
    <div className="flex flex-wrap gap-2 mb-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-6 bg-gray-200 rounded w-16" />
      ))}
    </div>
    <div className="flex justify-between">
      <div className="h-10 bg-gray-200 rounded w-24" />
      <div className="h-10 bg-gray-200 rounded w-24" />
    </div>
  </div>
);

// Error Component
const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
    <h3 className="text-lg font-medium">Error Loading Projects</h3>
    <p>{message}</p>
  </div>
);

export default function ProjectsGrid() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ProjectSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          {project.imageUrl && (
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between pt-2">
              {project.gitHubUrl && (
                <a
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700"
                >
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
