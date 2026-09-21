import type { Metadata } from "next";
import LibraryPageClient from "@/components/image-library/LibraryPageClient";

export const metadata: Metadata = {
  title: "Image Library | Menno Drescher",
  description: "Curated images for blog posts, projects, and site content.",
};

export const revalidate = 60;

export default function LibraryPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950 transition-colors">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg dark:text-white">
          Image library
        </h1>
        <div className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" />
        <p className="mb-12 max-w-2xl text-xl text-gray-700 dark:text-gray-300">
          Curated images served from <code className="text-sm">/media/&#123;slug&#125;</code>.
          Use these URLs in blog posts and projects.
        </p>
        <LibraryPageClient />
      </div>
    </div>
  );
}
