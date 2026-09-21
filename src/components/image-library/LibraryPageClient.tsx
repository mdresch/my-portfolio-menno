"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { PublicImageAssetDto } from "@/lib/image-library-serialize";

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export default function LibraryPageClient() {
  const [images, setImages] = useState<PublicImageAssetDto[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (tag) params.set("tag", tag);
      const res = await fetch(`/api/library?${params}`);
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
    void load();
  }, [load]);

  function copyUrl(url: string) {
    void navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && void load()}
          placeholder="Search images…"
          className="min-w-[220px] flex-1 rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-900"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-900"
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
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {copied && (
        <p className="mb-4 text-sm text-green-600 dark:text-green-400">Copied {copied}</p>
      )}

      {error && (
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </p>
      )}

      {loading ? (
        <p className="py-16 text-center text-gray-500">Loading library…</p>
      ) : images.length === 0 ? (
        <p className="py-16 text-center text-gray-500">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((img) => (
            <article
              key={img.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <a href={img.mediaUrl} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.mediaUrl}
                  alt={img.altText || img.title || img.slug}
                  className="aspect-video w-full object-cover"
                />
              </a>
              <div className="p-4">
                <h2 className="truncate font-semibold text-gray-900 dark:text-white">
                  {img.title || img.slug}
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  {formatBytes(img.byteSize)} · {img.viewCount ?? 0} views
                  {typeof img.usageCount === "number" ? ` · ${img.usageCount} uses` : ""}
                </p>
                {img.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {img.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] dark:bg-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => copyUrl(img.mediaUrl)}
                    className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800"
                  >
                    Copy URL
                  </button>
                  <Link
                    href={img.mediaUrl}
                    className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900/40 dark:text-blue-200"
                  >
                    Open
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
