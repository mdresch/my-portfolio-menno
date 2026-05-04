import type { Project } from "@prisma/client";

/** Public asset used when `screenshots` is empty (matches prior list page fallback). */
export const DEFAULT_PROJECT_IMAGE = "/images/default-project-image.jpg";

/** Serializable props for the client `ProjectDetail` (from Prisma / API). */
export type ProjectDetailViewModel = {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: string | null;
  datePublished: string | null;
  repoUrl: string | null;
  liveUrl: string | null;
  /** Hero image: first screenshot or default asset path. */
  imageUrl: string;
  screenshots: string[];
  outcomes: string[];
  challenges: string[];
  caseStudy: string | null;
  viewCount?: number;
};

export function mapDbProjectToDetail(p: Project): ProjectDetailViewModel {
  const repoUrl = p.repoUrl?.trim() || null;
  const liveUrl = p.liveUrl?.trim() || null;
  const screenshots = (p.screenshots ?? []).map((s) => s.trim()).filter(Boolean);
  const hero = screenshots[0] || DEFAULT_PROJECT_IMAGE;

  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description ?? "",
    technologies: p.technologies ?? [],
    category: p.category ?? null,
    datePublished: p.datePublished ? p.datePublished.toISOString() : null,
    repoUrl,
    liveUrl,
    imageUrl: hero,
    screenshots,
    outcomes: p.outcomes ?? [],
    challenges: p.challenges ?? [],
    caseStudy: p.caseStudy ?? null,
    viewCount: p.viewCount ?? 0,
  };
}
