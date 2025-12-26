import ProjectDetail from "../ProjectDetail";
import { prisma } from "../../../lib/prisma";
import { notFound } from "next/navigation";

// Helper to normalize Prisma data to ProjectDetail type
function normalizeProject(p: any) {
  return {
    title: p.title ?? "",
    description: p.description ?? "",
    technologies: p.technologies ?? [],
    imageUrl: "/default-project-image.jpg", // Default image since not in schema
    gitHubUrl: "", // Not in Prisma schema
    liveUrl: "", // Not in Prisma schema
  };
}

// Define proper types for App Router
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  try {
    // Handle missing DATABASE_URL gracefully during build
    if (!process.env.DATABASE_URL) {
      return notFound();
    }

    // Use Prisma directly to find project by slug (works during build)
    let dbProject = null;
    try {
      dbProject = await prisma.project.findUnique({
        where: { slug },
      });
    } catch (error) {
      console.error("Error fetching project from database:", error);
      return notFound();
    }

    if (!dbProject) {
      // Fallback: try to find by title if slug doesn't match
      try {
        const allProjects = await prisma.project.findMany();
        const projectByTitle = allProjects.find(
          (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
        );
        
        if (!projectByTitle) return notFound();
        
        return <ProjectDetail project={normalizeProject(projectByTitle)} />;
      } catch (error) {
        console.error("Error fetching all projects:", error);
        return notFound();
      }
    }

    return <ProjectDetail project={normalizeProject(dbProject)} />;
  } catch (error) {
    console.error("Error fetching project:", error);
    return notFound();
  }
}
