import { prisma } from "../../lib/prisma";
import Image from "next/image";

// Helper to normalize Prisma data for server rendering
function normalizeProject(p: any) {
  return {
    id: p.id,
    title: p.title ?? "",
    description: p.description ?? "",
    technologies: p.technologies ?? [],
    image: "/images/default-project-image.jpg", // Default image since not in schema
    gitHubUrl: "", // Not in Prisma schema
    liveUrl: "", // Not in Prisma schema
    slug: p.slug,
  };
}

export default async function ProjectsPage() {
  try {
    // Use Prisma directly in server component (works during build)
    // Handle missing DATABASE_URL gracefully during build
    let dbProjects = [];
    if (process.env.DATABASE_URL) {
      try {
        dbProjects = await prisma.project.findMany({
          orderBy: {
            datePublished: "desc",
          },
        });
      } catch (error) {
        console.error("Error fetching projects from database:", error);
        // Continue with empty array if database is unavailable
      }
    }
    const projects = dbProjects.map(normalizeProject);

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.length === 0 ? (
            <div className="col-span-2 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-700">No projects found.</p>
            </div>
          ) : (
            projects.map((p) => (
              <article key={p.id} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <Image src={p.image} alt={p.title} width={400} height={250} className="rounded-lg object-cover" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-600 mb-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(p.technologies || []).map((tech: string, idx: number) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {p.liveUrl ? (
                    <a href={p.liveUrl} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Live</a>
                  ) : null}
                  {p.gitHubUrl ? (
                    <a href={p.gitHubUrl} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Source</a>
                  ) : null}
                </div>
              </article>
            ))
          )}
        </div>
      </main>
    );
  } catch (err) {
    console.error("Error fetching projects:", err);
    return <div>Failed to load projects. Please try again later.</div>;
  }
}

// Add an Edit button for each project (to be rendered in ProjectsClient)
// Example usage in ProjectsClient:
// <button onClick={() => router.push(`/projects/${project.id}/edit`)} className="text-blue-600 hover:underline">Edit</button>


