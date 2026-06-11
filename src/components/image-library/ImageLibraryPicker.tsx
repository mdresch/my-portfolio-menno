"use client";

import { useCallback, useEffect, useState } from "react";
import type { PublicImageAssetDto } from "@/lib/image-library-serialize";

export type ImageLibraryPickerMode = "cover" | "inline" | "screenshot" | "any";

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (image: PublicImageAssetDto) => void;
  title?: string;
};

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ImageLibraryPicker({ open, onClose, onSelect, title }: Props) {
  const [images, setImages] = useState<PublicImageAssetDto[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (tag) params.set("tag", tag);
      const res = await fetch(`/api/library?${params}`, { credentials: "include" });
      const data = (await res.json()) as {
        images?: PublicImageAssetDto[];
        tags?: string[];
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "Failed to load library");
      setImages(data.images ?? []);
      setTags(data.tags ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, [q, tag]);

  useEffect(() => {
    if (open) void load();
  }, [open, load]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-library-picker-title"
    >
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-white shadow-xl dark:bg-gray-900">
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
          <h2 id="image-library-picker-title" className="text-lg font-semibold">
            {title ?? "Choose from image library"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-gray-100 p-4 dark:border-gray-800">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && void load()}
            placeholder="Search title, slug, tags…"
            className="min-w-[200px] flex-1 rounded border px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded border px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
            title="Filter by tag"
          >
            <option value="">All tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => void load()}
            className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {error && (
            <p className="mb-3 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
              {error}
            </p>
          )}
          {loading ? (
            <p className="py-8 text-center text-gray-500">Loading…</p>
          ) : images.length === 0 ? (
            <p className="py-8 text-center text-gray-500">No images match your filters.</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {images.map((img) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => {
                    onSelect(img);
                    onClose();
                  }}
                  className="overflow-hidden rounded-lg border text-left transition hover:ring-2 hover:ring-blue-500 dark:border-gray-700"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.mediaUrl}
                    alt={img.altText || img.title || img.slug}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="p-2">
                    <p className="truncate text-xs font-medium">{img.slug}</p>
                    <p className="text-[10px] text-gray-500">
                      {formatBytes(img.byteSize)} · {img.viewCount ?? 0} views
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
