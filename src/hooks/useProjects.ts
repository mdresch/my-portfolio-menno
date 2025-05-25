import { useState, useEffect } from 'react';
import { ProjectService } from '@/lib/api-services';
import { Project } from '@/types/api';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setIsLoading(true);
        const data = await ProjectService.getAll();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load projects'));
      } finally {
        setIsLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, isLoading, error };
}

export function useProject(id: number | null) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (id === null) {
      setIsLoading(false);
      return;
    }

    async function loadProject() {
      try {
        setIsLoading(true);
        const data = await ProjectService.getById(id);
        setProject(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(`Failed to load project with id ${id}`));
      } finally {
        setIsLoading(false);
      }
    }

    loadProject();
  }, [id]);

  return { project, isLoading, error };
}
