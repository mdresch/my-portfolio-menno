import ProjectsClient from './ProjectsClient';
import { ProjectService } from '@/lib/api-services';
import type { ApiProject } from '@/types/api';


// Helper to normalize API data to ProjectClient type
function normalizeProject(p: ApiProject) {
  return {
    title: p.title ?? '',
    description: p.description ?? '',
    technologies: p.technologies ?? [],
    link: '',
    datePublished: '',
    category: '',
    image: p.imageUrl ?? '',
    caseStudy: '',
    screenshots: [],
    outcomes: [],
    gitHubUrl: p.gitHubUrl ?? '',
    liveUrl: p.liveUrl ?? '',
  };
}

export default async function ProjectsPage() {
  try {
    const apiProjects = await ProjectService.getAll();
    const projects = apiProjects.map(normalizeProject);
    return <ProjectsClient projects={projects} />;
  } catch (err) {
    // Optionally log the error
    return <div>Failed to load projects. Please try again later.</div>;
  }
}

// Add an Edit button for each project (to be rendered in ProjectsClient)
// Example usage in ProjectsClient:
// <button onClick={() => router.push(`/projects/${project.id}/edit`)} className="text-blue-600 hover:underline">Edit</button>


