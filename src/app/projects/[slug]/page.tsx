import ProjectDetail from "../ProjectDetail";

import type { Project as ApiProject } from '@/types/api';
import { notFound } from 'next/navigation';


// Helper to normalize API data to ProjectDetail type
function normalizeProject(p: ApiProject) {
  return {
    title: p.title ?? '',
    description: p.description ?? '',
    technologies: p.technologies ?? [],
    imageUrl: p.imageUrl ?? '/default-project-image.png',
    gitHubUrl: p.gitHubUrl ?? '',
    liveUrl: p.liveUrl ?? '',
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Await params if needed (for Next.js 14+)
  // const { slug } = await params;


  // TODO: Replace this with your actual data fetching logic
// Await params if needed (for Next.js 14+)
  // const { slug } = await params;

  let projects: ApiProject[] = [];

  try {
    // TODO: Replace this with your actual data fetching logic
    projects = await fetchProjects(); // Example: fetch from API
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Handle the error appropriately (e.g., show an error message to the user)
    return <div>Error loading projects. Please try again later.</div>;
  }

  const project = projects
    .map(normalizeProject)

  const project = projects
    .map(normalizeProject)
    .find(
      (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
    );

  if (!project) return notFound();

  // Ensure project.viewCount is present
  return <ProjectDetail project={project} />;
}
