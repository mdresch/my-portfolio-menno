import { getAllProjects } from '@/lib/markdown';
import ProjectsClient from './ProjectsClient';

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return <ProjectsClient projects={projects} />;
}
