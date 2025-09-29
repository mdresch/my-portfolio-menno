import Image from "next/image";

interface Project {
  id: number;
  slug?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  image?: string;
  technologies?: string[];
  viewCount?: number;
  gitHubUrl?: string;
  liveUrl?: string;
}

// Server component – renders plain HTML and anchors; no client-side hooks
export default function ProjectCard({ project }: { project: Project }) {
  const slug = project.slug ?? (project.title ? project.title.toLowerCase().replace(/\s+/g, "-") : String(project.id));

  return (
    <article className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <Image src={project.image ?? "/images/default-project-image.jpg"} alt={project.title} width={400} height={250} className="rounded-lg object-cover" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {(project.technologies || []).map((tech: string, idx: number) => (
          <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{tech}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-2">
        <a href={`/projects/${slug}/edit`} className="text-blue-600 hover:underline">Edit</a>
        {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Live</a> : null}
        {project.gitHubUrl ? <a href={project.gitHubUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Source</a> : null}
        <span className="text-gray-500 text-sm flex items-center">{project.viewCount ?? 0} views</span>
      </div>
    </article>
  );
}