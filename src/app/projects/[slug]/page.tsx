import ProjectDetail from "../ProjectDetail";
import type { ApiProject } from "../../../types/api";
import { notFound } from "next/navigation";



// Helper to normalize API data to ProjectDetail type
function normalizeProject(p: ApiProject) {
  return {
    title: p.title ?? "",
    description: p.description ?? "",
    technologies: p.technologies ?? [],
    imageUrl: p.imageUrl ?? "/default-project-image.jpg",
    gitHubUrl: p.gitHubUrl ?? "",
    liveUrl: p.liveUrl ?? "",
  };
}

// Example implementation: fetch projects from a local JSON file or API endpoint
async function fetchProjects(): Promise<ApiProject[]> {
  // Replace the URL below with your actual API endpoint or data source
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}. ${errorMessage}`);
  }

  const data = await res.json();
  return data as ApiProject[];
}

// Define proper types for App Router
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  let projects: ApiProject[] = [];

  try {
    projects = await fetchProjects();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return <div>Error loading projects. Please try again later.</div>;
  }

  const project = projects
    .map(normalizeProject)
    .find(
      (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
