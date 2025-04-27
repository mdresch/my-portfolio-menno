"use client";
import React, { useState } from 'react';
import ProjectJsonLd from '@/components/SEO/ProjectJsonLd';
import ProjectForm from '@/components/ProjectForm';
import { marked } from 'marked';
import { ProjectMarkdown } from '@/lib/markdown';

interface ProjectsClientProps {
  projects: ProjectMarkdown[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';
  const [query, setQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [projectList, setProjectList] = useState<ProjectMarkdown[]>(projects);

  const allTechs = Array.from(new Set(projectList.flatMap((p) => p.frontmatter.technologies)));
  const allCategories = Array.from(new Set(projectList.map((p) => p.frontmatter.category).filter(Boolean)));

  const filteredProjects = projectList.filter((project) => {
    const { title, description, technologies, category } = project.frontmatter;
    const matchesQuery =
      title.toLowerCase().includes(query.toLowerCase()) ||
      description.toLowerCase().includes(query.toLowerCase());
    const matchesTech = selectedTech ? technologies.includes(selectedTech) : true;
    const matchesCategory = selectedCategory ? category === selectedCategory : true;
    return matchesQuery && matchesTech && matchesCategory;
  });

  const handleFormSubmit = (project: any) => {
    if (editIndex !== null) {
      setProjectList(prev => prev.map((p, i) => (i === editIndex ? { ...p, frontmatter: project } : p)));
    } else {
      setProjectList(prev => [...prev, { frontmatter: project, content: '' }]);
    }
    setShowForm(false);
    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setShowForm(true);
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
      {projectList.map((project, index) => (
        <ProjectJsonLd key={index} project={project.frontmatter} baseUrl={baseUrl} />
      ))}
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
          >
            <option value="">All Technologies</option>
            {allTechs.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          <select
            className="border rounded px-3 py-2"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {allCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6 max-w-xl w-full relative overflow-y-auto max-h-screen">
              <ProjectForm
                initialProject={editIndex !== null ? projectList[editIndex].frontmatter : undefined}
                onSubmit={handleFormSubmit}
                onCancel={handleCancel}
              />
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.length === 0 ? (
            <div className="col-span-2 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-700">No projects found.</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              const fm = project.frontmatter;
              return (
                <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative">
                  <h2 className="text-2xl font-semibold mb-3">{fm.title}</h2>
                  <p className="text-gray-600 mb-4">{fm.description}</p>
                  {fm.caseStudy && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-1">Case Study</h3>
                      <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: marked.parse(fm.caseStudy) }} />
                    </div>
                  )}
                  {fm.screenshots && fm.screenshots.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-1">Screenshots</h3>
                      <div className="flex flex-wrap gap-3">
                        {fm.screenshots.map((src, i) => (
                          <img key={i} src={src} alt={fm.title + ' screenshot'} className="w-32 h-20 object-cover rounded border" />
                        ))}
                      </div>
                    </div>
                  )}
                  {fm.outcomes && fm.outcomes.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-1">Outcomes & Impact</h3>
                      <ul className="list-disc pl-5 text-gray-700 text-sm">
                        {fm.outcomes.map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {fm.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {fm.link && (
                    <a 
                      href={fm.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                  <button
                    className="absolute top-4 right-4 bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 text-xs"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </div>
              );
            })
          )}
        </div>
      </main>
    </>
  );
}
