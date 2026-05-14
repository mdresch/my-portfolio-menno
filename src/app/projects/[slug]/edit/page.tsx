"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ProjectService } from "../../../../lib/api-services";
import type { ApiProject } from "../../../../types/api";

/** API row + imageUrl for the edit form (first screenshot). */
type ProjectForEdit = ApiProject & {
  imageUrl?: string;
  /** Form label “GitHub”; persisted as `repoUrl`. */
  gitHubUrl?: string;
};

function apiProjectToForm(p: ApiProject): ProjectForEdit {
  return {
    ...p,
    imageUrl: p.screenshots?.[0] ?? "",
    gitHubUrl: p.repoUrl ?? "",
    liveUrl: p.liveUrl ?? "",
  };
}

interface ProjectFormProps {
  project: ProjectForEdit;
  onSubmit: (updatedProject: Partial<ProjectForEdit>) => void;
  isSaving: boolean;
  error?: string;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSubmit, isSaving, error }) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description ?? "");
  const [technologies, setTechnologies] = useState(project.technologies.join(", "));
  const [imageUrl, setImageUrl] = useState(project.imageUrl ?? "");
  const [gitHubUrl, setGitHubUrl] = useState(project.gitHubUrl ?? "");
  const [liveUrl, setLiveUrl] = useState(project.liveUrl ?? "");
  const [outcomes, setOutcomes] = useState(() => (project.outcomes ?? []).join("\n"));
  const [challenges, setChallenges] = useState(() => (project.challenges ?? []).join("\n"));
  const [caseStudy, setCaseStudy] = useState(project.caseStudy ?? "");

  useEffect(() => {
    setTitle(project.title);
    setDescription(project.description ?? "");
    setTechnologies(project.technologies.join(", "));
    setImageUrl(project.imageUrl ?? "");
    setGitHubUrl(project.gitHubUrl ?? "");
    setLiveUrl(project.liveUrl ?? "");
    setOutcomes((project.outcomes ?? []).join("\n"));
    setChallenges((project.challenges ?? []).join("\n"));
    setCaseStudy(project.caseStudy ?? "");
  }, [project]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const g = gitHubUrl.trim();
    const l = liveUrl.trim();

    onSubmit({
      title,
      description,
      technologies: technologies.split(",").map((t) => t.trim()).filter(Boolean),
      imageUrl,
      repoUrl: g || null,
      liveUrl: l || null,
      outcomes: outcomes.split("\n").map((s) => s.trim()).filter(Boolean),
      challenges: challenges.split("\n").map((s) => s.trim()).filter(Boolean),
      caseStudy: caseStudy.trim() || null,
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
        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          Repository and live/demo URLs are stored separately. You can set both, one, or neither.
        </p>
      </div>
      <div>
        <label className="block font-semibold">Outcomes</label>
        <textarea
          className="border rounded w-full p-2 font-mono text-sm"
          value={outcomes}
          onChange={(e) => setOutcomes(e.target.value)}
          rows={5}
          placeholder="One outcome per line"
        />
      </div>
      <div>
        <label className="block font-semibold">Technical challenges &amp; solutions</label>
        <textarea
          className="border rounded w-full p-2 font-mono text-sm"
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
          rows={6}
          placeholder="One challenge or solution per line (shown as a list on the project page)"
        />
      </div>
      <div>
        <label className="block font-semibold">Case study (markdown)</label>
        <textarea
          className="border rounded w-full p-2 font-mono text-sm"
          value={caseStudy}
          onChange={(e) => setCaseStudy(e.target.value)}
          rows={12}
          placeholder="Markdown body for the case study section"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
};

const normalizeSlug = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "-");

const EditProjectPage: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const [project, setProject] = useState<ProjectForEdit | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string>();

  // Load project by DB slug (URL param); GET /api/projects returns all rows when no limit.
  useEffect(() => {
    setError(undefined);
    setProject(null);
    const slug = typeof params.slug === "string" ? params.slug : "";
    ProjectService.getAll()
      .then((projects) => {
        const list = projects as ApiProject[];
        const found =
          list.find((p) => p.slug === slug) ||
          list.find((p) => p.slug === decodeURIComponent(slug)) ||
          list.find((p) => normalizeSlug(p.title) === slug);
        if (found) {
          setProject(apiProjectToForm(found));
        } else {
          setProject(null);
          setError("Project not found.");
        }
      })
      .catch(() => setError("Failed to load project."));
  }, [params.slug]);

  const handleUpdate = async (updated: Partial<ProjectForEdit>) => {
    if (!project) return;
    setIsSaving(true);
    setError(undefined);
    try {
      const saved = (await ProjectService.update(project.id, updated)) as ApiProject;
      router.push(`/projects/${encodeURIComponent(saved.slug)}`);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to update project.";
      setError(msg.length > 200 ? `${msg.slice(0, 200)}…` : msg);
    } finally {
      setIsSaving(false);
    }
  };

  if (!project && !error) {
    return <div className="text-center mt-12">Loading project details...</div>;
  }

  if (!project) {
    return (
      <div className="text-center mt-12 text-red-600 dark:text-red-400">
        {error ?? "Project not found."}
      </div>
    );
  }

  return (
    <ProjectForm
      key={project.id}
      project={project}
      onSubmit={handleUpdate}
      isSaving={isSaving}
      error={error}
    />
  );
};

export default EditProjectPage;