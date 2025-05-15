import ProjectDetail from '../ProjectDetail';
import { ProjectService } from '@/lib/api-services';
import type { Project as ApiProject } from '@/types/api';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: { slug: string };
}

// Helper to normalize API data to ProjectDetail type
function normalizeProject(p: ApiProject) {
  return {
    title: p.title ?? '',
    description: p.description ?? '',
    technologies: p.technologies ?? [],
    imageUrl: p.imageUrl ?? '/default-project-image.png',
    gitHubUrl: p.gitHubUrl ?? '',
    liveUrl: p.liveUrl ?? '',
    challenges: p.challenges ?? [],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Fetch all projects and find by slug (or use a getBySlug API if available)
  const projects = await ProjectService.getAll();
  const project = projects.map(normalizeProject).find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );
  if (!project) return notFound();
  return <ProjectDetail project={project} />;
}
