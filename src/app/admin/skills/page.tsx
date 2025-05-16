"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SkillService } from "@/lib/api-services";
import type { Skill as ApiSkill } from "@/types/api";

// Use the real Skill type from backend
interface Skill extends ApiSkill {}

export default function SkillsAdminPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function fetchSkills() {
    setLoading(true);
    try {
      const data = await SkillService.getAll();
      setSkills(data);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSkills();
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this skill?")) return;
    setDeletingId(id);
    try {
      await SkillService.delete(id);
      setSkills((prev) => prev.filter((s) => s.id !== id));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to delete skill");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Skills</h1>
      <div className="mb-4">
        <Link href="/admin/skills/new-skills" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add New Skill</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Proficiency</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.id}>
                <td className="py-2 px-4 border-b">{skill.name}</td>
                <td className="py-2 px-4 border-b">{skill.category ?? "-"}</td>
                <td className="py-2 px-4 border-b">{skill.proficiencyLevel}</td>
                <td className="py-2 px-4 border-b">
                  <Link href={`/admin/skills/${skill.id}/edit`} className="text-blue-600 hover:underline mr-2">Edit</Link>
                  <button
                    className="text-red-600 hover:underline disabled:opacity-50"
                    disabled={deletingId === skill.id}
                    onClick={() => handleDelete(skill.id)}
                  >
                    {deletingId === skill.id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
