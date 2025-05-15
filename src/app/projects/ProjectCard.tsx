import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <Image
        src={project.imageUrl || project.image || "/default-project-image.png"}
        alt={project.title}
        width={400}
        height={250}
        className="rounded-lg object-cover mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {(project.technologies || []).map((tech: string, idx: number) => (
          <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      {/* Add links/buttons as needed */}
    </div>
  );
}


