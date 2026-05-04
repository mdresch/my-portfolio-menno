"use client";
import ProjectForm from "../../../../components/ProjectForm";
import { useRouter } from "next/navigation";
import type { Project } from "../../../../components/ProjectForm";
import { ProjectService } from "../../../../lib/api-services";

export default function NewProjectPage() {
  const router = useRouter();

  const handleSubmit = async (project: Project) => {
    try {
      const apiProject = {
        title: project.title,
        description: project.description,
        technologies: project.technologies ?? [],
        repoUrl: (project.repoUrl ?? "").trim() || null,
        liveUrl: (project.liveUrl ?? "").trim() || null,
        datePublished: project.datePublished || new Date().toISOString(),
        category: project.category || "",
        caseStudy: project.caseStudy || "",
        screenshots: project.screenshots ?? [],
        outcomes: project.outcomes ?? [],
        challenges: project.challenges ?? [],
        slug: project.title.toLowerCase().replace(/\s+/g, "-"),
      };
      await ProjectService.create(apiProject);
      router.push("/admin");
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      alert("Error creating project: " + message);
    }
  };

  return (
    <div className="py-8">
      <ProjectForm onSubmit={handleSubmit} />
    </div>
  );
}
