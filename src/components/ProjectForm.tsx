import React, { useState, FormEvent } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  datePublished?: string;
  category?: string;
  image?: string;
  caseStudy?: string;
  screenshots?: string[];
  outcomes?: string[];
  gitHubUrl?: string; // Added for backend compatibility
  liveUrl?: string;   // Added for backend compatibility
}

interface ProjectFormProps {
  initialProject?: Project;
  onSubmit: (project: Project) => void;
  onCancel?: () => void;
}

const techOptions = [
  'React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Material UI'
];

const categoryOptions = [
  'WebApplication', 'BusinessApplication', 'AI', 'Dashboard', 'Other'
];

export default function ProjectForm({ initialProject, onSubmit, onCancel }: ProjectFormProps) {
  const [project, setProject] = useState<Project>(
    initialProject || {
      title: '',
      description: '',
      technologies: [],
      link: '',
      datePublished: '',
      category: '',
      image: '',
      caseStudy: '',
      screenshots: [],
      outcomes: [],
      gitHubUrl: '', // Added
      liveUrl: '',   // Added
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
    setProject(prev => ({ ...prev, screenshots: e.target.value.split(',').map(s => s.trim()) }));
  };

  const handleOutcomesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProject(prev => ({ ...prev, outcomes: e.target.value.split('\n').map(s => s.trim()).filter(Boolean) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(project);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{initialProject ? 'Edit Project' : 'New Project'}</h2>
      <div>
        <label className="block font-semibold">Title</label>
        <input name="title" value={project.title} onChange={handleChange} className="border rounded px-3 py-2 w-full" required />
      </div>
      <div>
        <label className="block font-semibold">Description</label>
        <textarea name="description" value={project.description} onChange={handleChange} className="border rounded px-3 py-2 w-full" required />
      </div>
      <div>
        <label className="block font-semibold">Technologies</label>
        <select name="technologies" multiple value={project.technologies} onChange={handleTechChange} className="border rounded px-3 py-2 w-full">
          {techOptions.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
        <small className="text-gray-500">Hold Ctrl (Windows) or Cmd (Mac) to select multiple</small>
      </div>
      <div>
        <label className="block font-semibold">Category</label>
        <select name="category" value={project.category} onChange={handleChange} className="border rounded px-3 py-2 w-full">
          <option value="">Select category</option>
          {categoryOptions.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold">Link</label>
        <input name="link" value={project.link || ''} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold">Date Published</label>
        <input name="datePublished" type="date" value={project.datePublished || ''} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold">Image URL</label>
        <input name="image" value={project.image || ''} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold">Case Study</label>
        <textarea name="caseStudy" value={project.caseStudy || ''} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold">Screenshots (comma separated URLs)</label>
        <input name="screenshots" value={project.screenshots?.join(', ') || ''} onChange={handleScreenshotsChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold">Outcomes (one per line)</label>
        <textarea name="outcomes" value={project.outcomes?.join('\n') || ''} onChange={handleOutcomesChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold">GitHub URL</label>
        <input name="gitHubUrl" value={project.gitHubUrl || ''} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold">Live URL</label>
        <input name="liveUrl" value={project.liveUrl || ''} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
      </div>
      <div className="flex gap-4 mt-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{initialProject ? 'Update' : 'Create'}</button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
        )}
      </div>
    </form>
  );
}
