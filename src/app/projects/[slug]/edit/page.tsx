'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ProjectService } from '../../../../lib/api-services';
import type { Project } from '../../../../types/api';

interface ProjectFormProps {
  project: Project;
  onSubmit: (updatedProject: Partial<Project>) => void;
  isSaving: boolean;
  error?: string;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSubmit, isSaving, error }) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description ?? '');
  const [technologies, setTechnologies] = useState(project.technologies.join(', '));
  const [imageUrl, setImageUrl] = useState(project.imageUrl ?? '');
  const [gitHubUrl, setGitHubUrl] = useState(project.gitHubUrl ?? '');
  const [liveUrl, setLiveUrl] = useState(project.liveUrl ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      technologies: technologies.split(',').map((t) => t.trim()).filter(Boolean),
      imageUrl,
      gitHubUrl,
      liveUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold">Edit Project</h2>
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label className="block font-semibold">Title</label>
        <input
          className="border rounded w-full p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Description</label>
        <textarea
          className="border rounded w-full p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>
      <div>
        <label className="block font-semibold">Technologies (comma separated)</label>
        <input
          className="border rounded w-full p-2"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold">Image URL</label>
        <input
          className="border rounded w-full p-2"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold">GitHub URL</label>
        <input
          className="border rounded w-full p-2"
          value={gitHubUrl}
          onChange={(e) => setGitHubUrl(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold">Live URL</label>
        <input
          className="border rounded w-full p-2"
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2"
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
};

const normalizeSlug = (title: string) =>
  title.toLowerCase().replace(/\s+/g, '-');

const EditProjectPage: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string>();

  // Load original project by slug
  useEffect(() => {
    ProjectService.getAll()
      .then((projects) => {
        const found = projects.find(
          (p) => normalizeSlug(p.title) === params.slug
        );
        setProject(found ?? null);
        if (!found) setError('Project not found.');
      })
      .catch(() => setError('Failed to load project.'));
  }, [params.slug]);

  const handleUpdate = async (updated: Partial<Project>) => {
    if (!project) return;
    setIsSaving(true);
    setError(undefined);
    try {
      await ProjectService.update(project.id, updated);
      router.push(`/projects/${params.slug}`);
    } catch (e: any) {
      setError(e.message || 'Failed to update project.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!project) {
    return <div className="text-center mt-12">Loading project details...</div>;
  }

  return (
    <ProjectForm
      project={project}
      onSubmit={handleUpdate}
      isSaving={isSaving}
      error={error}
    />
  );
};

export default EditProjectPage;