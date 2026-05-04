import { prisma } from "../../lib/prisma";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@prisma/client";
import { mapDbProjectToDetail } from "./map-db-project";

/** Always read projects at request time so build/CI without DATABASE_URL does not cache an empty list. */
export const dynamic = "force-dynamic";

function normalizeProjectForList(p: Project) {
  const d = mapDbProjectToDetail(p);
  return {
    id: d.id,
    title: d.title,
    description: d.description,
    technologies: d.technologies,
    image: d.imageUrl,
    repoUrl: d.repoUrl ?? "",
    liveUrl: d.liveUrl ?? "",
    slug: d.slug,
  };
}

export default async function ProjectsPage() {
  try {
    let dbProjects: Awaited<ReturnType<typeof prisma.project.findMany>> = [];
    let dbLoadError: string | null = null;

    if (!process.env.DATABASE_URL) {
      if (process.env.NODE_ENV === "development") {
        dbLoadError =
          "DATABASE_URL is not set. Add it to .env or .env.local and restart the dev server.";
      }
    } else {
      try {
        dbProjects = await prisma.project.findMany({
          orderBy: {
            datePublished: "desc",
          },
        });
      } catch (error) {
        console.error("Error fetching projects from database:", error);
        dbLoadError =
          error instanceof Error ? error.message : "Database query failed";
      }
    }
    const projects = dbProjects.map(normalizeProjectForList);

    return (
      <main className="container mx-auto px-4 py-8" data-tour="projects-page">
        <h1 className="text-4xl font-bold mb-4" data-tour="projects-heading">
          My Projects
        </h1>
        <aside
          className="mb-8 max-w-3xl rounded-lg border border-cyan-200/90 bg-cyan-50/60 px-4 py-3 text-sm leading-relaxed text-neutral-800 dark:border-cyan-900/50 dark:bg-cyan-950/35 dark:text-neutral-100"
          data-tour="projects-enhancement-note"
          aria-label="About project URL fields"
        >
          <span className="font-semibold">Enhanced URLs</span> — Each project now keeps a{" "}
          <span className="font-medium">repository</span> URL and a{" "}
          <span className="font-medium">live or demo</span> URL in the database instead of one blended{" "}
          <span className="font-mono text-xs">link</span>. Existing rows were migrated automatically.{" "}
          <span className="text-neutral-600 dark:text-neutral-400">
            (Same mass in the portfolio universe; the Higgs-adjacent joke is that the field split into two
            detectable channels—source code vs shipped app—without losing your data.)
          </span>
        </aside>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-tour="projects-grid">
          {projects.length === 0 ? (
            <div className="col-span-2 bg-yellow-50 border-l-4 border-yellow-500 p-4 space-y-2">
              <p className="text-yellow-800 font-medium">
                {dbLoadError ? "Could not load projects." : "No projects found."}
              </p>
              {dbLoadError && process.env.NODE_ENV === "development" ? (
                <p className="text-sm text-red-800 whitespace-pre-wrap">{dbLoadError}</p>
              ) : null}
            </div>
          ) : (
            projects.map((p, idx) => (
              <article
                key={p.id}
                className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-tour={idx === 0 ? "projects-first-card" : undefined}
              >
                <Link
                  href={`/projects/${encodeURIComponent(p.slug)}`}
                  className="group mb-4 block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                  aria-label={`View project details: ${p.title}`}
                >
                  <div className="mb-4 overflow-hidden rounded-lg">
                    {p.image.startsWith("/") ? (
                      <Image
                        src={p.image}
                        alt=""
                        width={400}
                        height={250}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-auto w-full max-h-[250px] rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                        style={{ height: "auto" }}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element -- remote screenshot URLs
                      <img
                        src={p.image}
                        alt=""
                        width={400}
                        height={250}
                        className="rounded-lg object-cover w-full max-h-[250px] transition-transform duration-200 group-hover:scale-[1.02]"
                      />
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-neutral-900 underline-offset-2 transition-colors group-hover:text-cyan-700 group-hover:underline dark:text-neutral-100 dark:group-hover:text-cyan-300">
                    {p.title}
                  </h2>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(p.technologies || []).map((tech: string, idx: number) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                  <Link
                    href={`/projects/${encodeURIComponent(p.slug)}`}
                    className="font-medium text-cyan-700 hover:underline dark:text-cyan-300"
                  >
                    View details
                  </Link>
                  {p.liveUrl ? (
                    <a href={p.liveUrl} className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                  ) : null}
                  {p.repoUrl ? (
                    <a href={p.repoUrl} className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noreferrer">
                      Repository
                    </a>
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


