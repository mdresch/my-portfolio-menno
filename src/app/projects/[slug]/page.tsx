import ProjectDetail from "../ProjectDetail";

// import the correct type from '@/types/api'
import type { ApiProject } from '@/types/api';
// If 'ApiProject' is not exported, update this line to import the correct type name as exported from '@/types/api'
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

// Example implementation: fetch projects from a local JSON file or API endpoint
async function fetchProjects(): Promise<ApiProject[]> {
  // Replace the URL below with your actual API endpoint or data source
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/projects`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await res.json();
  return data as ApiProject[];
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  let projects: ApiProject[] = [];

  try {
    projects = await fetchProjects();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return <div>Error loading projects. Please try again later.</div>;
  }

  const project = projects
    .map(normalizeProject)
    .find(
      (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
    );

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}

