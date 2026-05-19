"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ImageAssetDto } from "@/lib/image-library-serialize";

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export default function AdminImagesPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<ImageAssetDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [includeDeleted, setIncludeDeleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<ImageAssetDto | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    altText: "",
    caption: "",
    description: "",
    tags: "",
    slug: "",
  });
  const [copied, setCopied] = useState<string | null>(null);

  const loadImages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = includeDeleted ? "?includeDeleted=1" : "";
      const res = await fetch(`/api/images${q}`, { credentials: "include" });
      const data = (await res.json()) as { images?: ImageAssetDto[]; error?: string };
      if (!res.ok) throw new Error(data.error || "Failed to load images");
      setImages(data.images ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, [includeDeleted]);

  useEffect(() => {
    void loadImages();
  }, [loadImages]);

  async function handleUpload(file: File) {
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/images/upload", {
        method: "POST",
        body: form,
        credentials: "include",
      });
      const data = (await res.json()) as { image?: ImageAssetDto; error?: string };
      if (!res.ok) throw new Error(data.error || "Upload failed");
      await loadImages();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  function openEdit(img: ImageAssetDto) {
    setEditing(img);
    setEditForm({
      title: img.title ?? "",
      altText: img.altText ?? "",
      caption: img.caption ?? "",
      description: img.description ?? "",
      tags: img.tags.join(", "),
      slug: img.slug,
    });
  }

  async function saveEdit() {
    if (!editing) return;
    setError(null);
    try {
      const res = await fetch(`/api/images/${editing.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: editForm.title,
          altText: editForm.altText,
          caption: editForm.caption,
          description: editForm.description,
          tags: editForm.tags,
          slug: editForm.slug,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Update failed");
      setEditing(null);
      await loadImages();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Update failed");
    }
  }

  async function softDelete(img: ImageAssetDto) {
    if (!confirm(`Remove "${img.slug}" from the library? (soft delete)`)) return;
    try {
      const res = await fetch(`/api/images/${img.id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error || "Delete failed");
      }
      await loadImages();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed");
    }
  }

  async function restore(img: ImageAssetDto) {
    try {
      const res = await fetch(`/api/images/${img.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ restore: true }),
      });
      if (!res.ok) throw new Error("Restore failed");
      await loadImages();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Restore failed");
    }
  }

  function copyText(label: string, text: string) {
    void navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/admin" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
            ← Admin
          </Link>
          <h2 className="mt-2 text-xl font-semibold">Image library</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upload curated images. Use <code className="text-xs">/media/&#123;slug&#125;</code> in
            blog posts and projects. Views are logged on each load.
          </p>
        </div>
        <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {uploading ? "Uploading…" : "Upload image"}
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void handleUpload(f);
            }}
          />
        </label>
      </div>

      <label className="mb-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <input
          type="checkbox"
          checked={includeDeleted}
          onChange={(e) => setIncludeDeleted(e.target.checked)}
        />
        Show deleted
      </label>

      {error && (
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </p>
      )}

      {copied && (
        <p className="mb-4 text-sm text-green-600 dark:text-green-400">Copied {copied}</p>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
        </div>
      ) : images.length === 0 ? (
        <p className="py-8 text-center text-gray-500">No images yet. Upload your first asset.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <article
              key={img.id}
              className={`overflow-hidden rounded-lg border dark:border-gray-700 ${
                img.deletedAt ? "opacity-60" : ""
              }`}
            >
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-900">
                {!img.deletedAt ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img.mediaUrl}
                    alt={img.altText || img.title || img.slug}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-gray-500">
                    Deleted
                  </div>
                )}
              </div>
              <div className="space-y-2 p-3">
                <p className="truncate font-medium" title={img.slug}>
                  {img.slug}
                </p>
                <p className="text-xs text-gray-500">
                  {formatBytes(img.byteSize)} · {img.viewCount ?? 0} views
                </p>
                <div className="flex flex-wrap gap-1">
                  <button
                    type="button"
                    className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700"
                    onClick={() => copyText("URL", img.mediaUrl)}
                  >
                    Copy URL
                  </button>
                  <button
                    type="button"
                    className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700"
                    onClick={() =>
                      copyText(
                        "Markdown",
                        `![${img.altText || img.title || img.slug}](${img.mediaUrl})`
                      )
                    }
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700"
                    onClick={() => openEdit(img)}
                  >
                    Edit
                  </button>
                  {img.deletedAt ? (
                    <button
                      type="button"
                      className="rounded bg-green-100 px-2 py-1 text-xs dark:bg-green-900/40"
                      onClick={() => void restore(img)}
                    >
                      Restore
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="rounded bg-red-100 px-2 py-1 text-xs text-red-800 dark:bg-red-900/40"
                      onClick={() => void softDelete(img)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {editing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-image-title"
        >
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900">
            <h3 id="edit-image-title" className="mb-4 text-lg font-semibold">
              Edit metadata
            </h3>
            <div className="space-y-3">
              <label className="block text-sm">
                Slug
                <input
                  className="mt-1 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-800"
                  value={editForm.slug}
                  onChange={(e) => setEditForm((f) => ({ ...f, slug: e.target.value }))}
                />
              </label>
              <label className="block text-sm">
                Title
                <input
                  className="mt-1 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-800"
                  value={editForm.title}
                  onChange={(e) => setEditForm((f) => ({ ...f, title: e.target.value }))}
                />
              </label>
              <label className="block text-sm">
                Alt text
                <input
                  className="mt-1 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-800"
                  value={editForm.altText}
                  onChange={(e) => setEditForm((f) => ({ ...f, altText: e.target.value }))}
                />
              </label>
              <label className="block text-sm">
                Caption
                <input
                  className="mt-1 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-800"
                  value={editForm.caption}
                  onChange={(e) => setEditForm((f) => ({ ...f, caption: e.target.value }))}
                />
              </label>
              <label className="block text-sm">
                Tags (comma-separated)
                <input
                  className="mt-1 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-800"
                  value={editForm.tags}
                  onChange={(e) => setEditForm((f) => ({ ...f, tags: e.target.value }))}
                />
              </label>
              <label className="block text-sm">
                Description
                <textarea
                  className="mt-1 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-800"
                  rows={3}
                  value={editForm.description}
                  onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                />
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-lg px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                onClick={() => void saveEdit()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
