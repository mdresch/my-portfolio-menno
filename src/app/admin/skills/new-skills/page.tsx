"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SkillService } from "@/lib/api-services";

export default function AddSkillPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [proficiencyLevel, setProficiencyLevel] = useState(1);
  const [iconUrl, setIconUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await SkillService.create({ name, category, proficiencyLevel, iconUrl });
      router.push("/admin/skills");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Skill</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow border border-gray-200 space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Proficiency Level (1-10)</label>
          <input
            type="number"
            min={1}
            max={10}
            className="w-full border rounded px-3 py-2"
            value={proficiencyLevel}
            onChange={e => setProficiencyLevel(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Icon URL (optional)</label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            value={iconUrl}
            onChange={e => setIconUrl(e.target.value)}
          />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Skill"}
          </button>
          <Link href="/admin/skills" className="px-4 py-2 rounded border border-gray-300 bg-gray-50 hover:bg-gray-100 transition">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
