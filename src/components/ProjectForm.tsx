import React, { useState, FormEvent } from "react";
import ImageLibraryField from "@/components/image-library/ImageLibraryField";
import ImageLibraryPicker from "@/components/image-library/ImageLibraryPicker";
import type { PublicImageAssetDto } from "@/lib/image-library-serialize";

export interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  datePublished?: string;
  category?: string;
  image?: string;
  caseStudy?: string;
  screenshots?: string[];
  outcomes?: string[];
  /** Repository URL (GitHub, GitLab, …). Sent to API as `repoUrl` or `gitHubUrl`. */
  repoUrl?: string;
  liveUrl?: string;
}

interface ProjectFormProps {
  initialProject?: Project;
  onSubmit: (project: Project) => Promise<void>;
  onCancel?: () => void;
}

const techOptions = [
  "React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Tailwind CSS", "Material UI"
];

const categoryOptions = [
  "WebApplication", "BusinessApplication", "AI", "Dashboard", "Other"
];

export default function ProjectForm({ initialProject, onSubmit, onCancel }: ProjectFormProps) {
  const [screenshotPickerOpen, setScreenshotPickerOpen] = useState(false);
  const [project, setProject] = useState<Project>(
    initialProject || {
      // id is optional for new projects
      // when editing, initialProject will supply the numeric id
      title: "",
      description: "",
      technologies: [],
      datePublished: "",
      category: "",
      image: "",
      caseStudy: "",
      screenshots: [],
      outcomes: [],
      repoUrl: "",
      liveUrl: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProject(prev => ({ ...prev, [name]: value }));
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setProject(prev => ({ ...prev, technologies: selected }));
  };

  const handleScreenshotsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject(prev => ({ ...prev, screenshots: e.target.value.split(",").map(s => s.trim()) }));
  };

  const handleOutcomesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProject(prev => ({ ...prev, outcomes: e.target.value.split("\n").map(s => s.trim()).filter(Boolean) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(project);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{initialProject ? "Edit Project" : "New Project"}</h2>
      <div>
        <label className="block font-semibold">Title</label>
        <input name="title" value={project.title} onChange={handleChange} className="border rounded px-3 py-2 w-full" required placeholder="Enter project title" />
      </div>
      <div>
        <label className="block font-semibold">Description</label>
        <textarea name="description" value={project.description} onChange={handleChange} className="border rounded px-3 py-2 w-full" required placeholder="Enter project description" />
      </div>
      <div>
        <label className="block font-semibold">Technologies</label>
        <select name="technologies" multiple value={project.technologies} onChange={handleTechChange} className="border rounded px-3 py-2 w-full" title="Select technologies">
          {techOptions.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
        <small className="text-gray-500">Hold Ctrl (Windows) or Cmd (Mac) to select multiple</small>
      </div>
      <div>
        <label className="block font-semibold">Category</label>
        <select name="category" value={project.category} onChange={handleChange} className="border rounded px-3 py-2 w-full" title="Select category">
          <option value="">Select category</option>
          {categoryOptions.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold">Date Published</label>
        <input name="datePublished" type="date" value={project.datePublished || ""} onChange={handleChange} className="border rounded px-3 py-2 w-full" title="Select publication date" />
      </div>
      <ImageLibraryField
        label="Project image"
        value={project.image || ""}
        onChange={(url) => setProject((prev) => ({ ...prev, image: url }))}
        pickerTitle="Choose project image"
      />
      <div>
        <label className="block font-semibold">Case Study</label>
        <textarea name="caseStudy" value={project.caseStudy || ""} onChange={handleChange} className="border rounded px-3 py-2 w-full" placeholder="Case study content" />
      </div>
      <div>
        <label className="block font-semibold">Screenshots (comma separated URLs)</label>
        <div className="flex flex-wrap gap-2">
          <input
            name="screenshots"
            value={project.screenshots?.join(", ") || ""}
            onChange={handleScreenshotsChange}
            className="min-w-[200px] flex-1 border rounded px-3 py-2"
            placeholder="Screenshot URLs (comma separated)"
          />
          <button
            type="button"
            onClick={() => setScreenshotPickerOpen(true)}
            className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
          >
            Add from library
          </button>
        </div>
        <ImageLibraryPicker
          open={screenshotPickerOpen}
          onClose={() => setScreenshotPickerOpen(false)}
          title="Add screenshot"
          onSelect={(image: PublicImageAssetDto) => {
            const existing = project.screenshots?.filter(Boolean) ?? [];
            setProject((prev) => ({
              ...prev,
              screenshots: [...existing, image.mediaUrl],
            }));
          }}
        />
      </div>
      <div>
        <label className="block font-semibold">Outcomes (one per line)</label>
        <textarea name="outcomes" value={project.outcomes?.join("\n") || ""} onChange={handleOutcomesChange} className="border rounded px-3 py-2 w-full" placeholder="Project outcomes (one per line)" />
      </div>
      <div>
        <label className="block font-semibold">Repository URL</label>
        <input name="repoUrl" value={project.repoUrl || ""} onChange={handleChange} className="border rounded px-3 py-2 w-full" placeholder="https://github.com/…" />
      </div>
      <div>
        <label className="block font-semibold">Live / demo URL</label>
        <input name="liveUrl" value={project.liveUrl || ""} onChange={handleChange} className="border rounded px-3 py-2 w-full" placeholder="https://…" />
      </div>
      <div className="flex gap-4 mt-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{initialProject ? "Update" : "Create"}</button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
        )}
      </div>
    </form>
  );
}
