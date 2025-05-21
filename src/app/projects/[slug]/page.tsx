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
  const projects: ApiProject[] = []; // Example: fetch from API or import

  const project = projects
    .map(normalizeProject)
    .find(
      (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
    );

  if (!project) return notFound();

  // Ensure project.viewCount is present
  return <ProjectDetail project={project} />;
}
