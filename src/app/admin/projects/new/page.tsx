"use client";
import ProjectForm from '../../../../components/ProjectForm';
import { useRouter } from 'next/navigation';
import type { Project } from '../../../../components/ProjectForm';

export default function NewProjectPage() {
  const router = useRouter();

  const handleSubmit = async (project: Project) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      if (!res.ok) throw new Error('Failed to create project');
      router.push('/admin');
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      alert('Error creating project: ' + message);
    }
  };

  return (
    <div className="py-8">
      <ProjectForm onSubmit={handleSubmit} />
    </div>
  );
}
