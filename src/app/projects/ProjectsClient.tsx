"use client";
import React, { useState, useEffect } from 'react';
import ProjectForm from '../../components/ProjectForm';
import { ProjectService } from '../../lib/api-services';
// Define ApiProject type locally (copied from src/types/api.ts)
interface ApiProject {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string | null;
  gitHubUrl: string | null;
  liveUrl: string | null;
  created: string;
  technologies: string[];
  viewCount?: number;
  caseStudy?: string | null;
  screenshots?: string[];
  outcomes?: string[];
  challenges?: string[];
}
import ProjectCard from './ProjectCard';

interface ProjectsClientProps {
  projects: Project[];
}

export interface Project {
  id: number;
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
  gitHubUrl?: string;
  liveUrl?: string;
  challenges?: string[];
}

// Helper to normalize API data to Project type
function normalizeProject(p: ApiProject): Project {
  return {
    id: p.id,
    title: p.title ?? '',
    description: p.description ?? '',
    technologies: p.technologies ?? [],
    link: '', // Not present in API, fallback to empty string
    datePublished: '', // Not present in API, fallback to empty string
    category: '', // Not present in API, fallback to empty string
    image: p.imageUrl ?? '/default-project-image.png',
    caseStudy: p.caseStudy ?? '',
    screenshots: p.screenshots ?? [],
    outcomes: p.outcomes ?? [],
    gitHubUrl: p.gitHubUrl ?? '',
    liveUrl: p.liveUrl ?? '',
    challenges: p.challenges ?? [],
  };
}

export default function ProjectsClient({ projects: initialProjects }: ProjectsClientProps) {
  const [query, setQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [projectList, setProjectList] = useState<Project[]>(initialProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from API on mount
  useEffect(() => {
    setLoading(true);
    ProjectService.getAll()
      .then(apiProjects => {
        setProjectList(apiProjects.map(normalizeProject));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load projects from Azure SQL.');
        setLoading(false);
      });
  }, []);

  const allTechs = Array.from(new Set(projectList.flatMap((p) => p.technologies)));
  const allCategories = Array.from(new Set(projectList.map((p) => p.category).filter(Boolean)));

  const filteredProjects = projectList.filter((project) => {
    const title = typeof project.title === 'string' ? project.title : '';
    const description = typeof project.description === 'string' ? project.description : '';
    const technologies = Array.isArray(project.technologies) ? project.technologies : [];
    const category = typeof project.category === 'string' ? project.category : '';
    const matchesQuery =
      title.toLowerCase().includes(query.toLowerCase()) ||
      description.toLowerCase().includes(query.toLowerCase());
    const matchesTech = selectedTech ? technologies.includes(selectedTech) : true;
    const matchesCategory = selectedCategory ? category === selectedCategory : true;
    return matchesQuery && matchesTech && matchesCategory;
  });

  const handleFormSubmit = async (project: Project) => {
    setLoading(true);
    try {
      if (editIndex !== null) {
        // TODO: Implement update logic if needed
        setProjectList(prev => prev.map((p, i) => (i === editIndex ? project : p)));
      } else {
        // Map frontend Project to backend API fields
        const apiProject = {
          title: project.title,
          description: project.description,
          technologies: project.technologies ?? [],
          imageUrl: project.image || '',
          gitHubUrl: project.gitHubUrl || '',
          liveUrl: project.liveUrl || '',
          created: new Date().toISOString(),
          link: project.link || '',
          datePublished: project.datePublished || '',
          category: project.category || '',
          caseStudy: project.caseStudy || '',
          screenshots: project.screenshots ?? [],
          outcomes: project.outcomes ?? [],
          challenges: project.challenges ?? [],
        };
        await ProjectService.create(apiProject);
        // Refresh from API
        const apiProjects = await ProjectService.getAll();
        setProjectList(apiProjects.map(normalizeProject));
      }
      setShowForm(false);
      setEditIndex(null);
    } catch {
      setError('Failed to save project.');
    } finally {
      setLoading(false);
    }
  };


  const handleNew = () => {
    setEditIndex(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditIndex(null);
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <button
          className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleNew}
        >
          + New Project
        </button>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            className="border rounded px-3 py-2"
            placeholder="Search projects..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <select
            className="border rounded px-3 py-2"
            value={selectedTech}
            onChange={e => setSelectedTech(e.target.value)}
            title="Filter by technology"
          >
            <option key="all-tech" value="">All Technologies</option>
            {allTechs.map((tech, idx) => (
              <option key={`tech-${tech}-${idx}`} value={tech}>{tech}</option>
            ))}
          </select>
          <select
            className="border rounded px-3 py-2"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            title="Filter by category"
          >
            <option key="all-cat" value="">All Categories</option>
            {allCategories.map((cat, idx) => (
              <option key={`cat-${cat}-${idx}`} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6 max-w-xl w-full relative overflow-y-auto max-h-screen">
              <ProjectForm
                initialProject={editIndex !== null ? projectList[editIndex] : undefined}
                onSubmit={handleFormSubmit}
                onCancel={handleCancel}
              />
            </div>
          </div>
        )}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.length === 0 ? (
            <div className="col-span-2 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-700">No projects found.</p>
            </div>
          ) : (
            filteredProjects.map((fm, index) => (
              <ProjectCard
                key={index}
                project={fm}
                onEdit={() => {
                  setEditIndex(projectList.findIndex(p => p === fm));
                  setShowForm(true);
                }}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}






