import ProjectsClient from './ProjectsClient';
import { ProjectService } from '@/lib/api-services';
import type { Project as ApiProject } from '@/types/api';


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
  // Fetch projects from the live API endpoint
  const apiProjects = await ProjectService.getAll();
  const projects = apiProjects.map(normalizeProject);
  return <ProjectsClient projects={projects} />;
}


