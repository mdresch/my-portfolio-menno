"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CollapsibleSection from "./CollapsibleSection";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { ProjectDetailViewModel } from "./map-db-project";
import { DEFAULT_PROJECT_IMAGE } from "./map-db-project";

export type { ProjectDetailViewModel };

function isLocalAsset(src: string) {
  return src.startsWith("/");
}

function ProjectFigure({
  src,
  alt,
  className,
  width,
  height,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  if (isLocalAsset(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 736px"
        className={className}
        style={{ height: "auto" }}
        priority={priority}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- external screenshot URLs are not whitelisted in next.config images
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

function UrlPanel({
  label,
  href,
  cta,
  "data-tour": dataTour,
}: {
  label: string;
  href: string;
  cta: string;
  "data-tour"?: string;
}) {
  return (
    <div
      className="mb-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 last:mb-0 dark:border-neutral-700 dark:bg-neutral-800/60"
      data-tour={dataTour}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{label}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 block break-all text-base font-medium text-cyan-700 underline decoration-cyan-600/40 underline-offset-2 hover:text-cyan-900 hover:decoration-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-100"
      >
        {cta}
        <span className="mt-1 block text-sm font-normal text-neutral-600 dark:text-neutral-300">{href}</span>
      </a>
    </div>
  );
}

interface ProjectDetailProps {
  project: ProjectDetailViewModel;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();
  const slug = project.slug || project.title?.toLowerCase().replace(/\s+/g, "-");
  const [viewCount, setViewCount] = useState(() => project.viewCount ?? 0);

  useEffect(() => {
    setViewCount(project.viewCount ?? 0);
  }, [project.id, project.slug, project.viewCount]);

  const galleryShots = useMemo(() => {
    if (project.screenshots.length <= 1) return [];
    return project.screenshots.slice(1);
  }, [project.screenshots]);

  const formattedDate = useMemo(() => {
    if (!project.datePublished) return null;
    try {
      return new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(project.datePublished));
    } catch {
      return project.datePublished;
    }
  }, [project.datePublished]);

  const hasUrls = Boolean(project.repoUrl || project.liveUrl);

  useEffect(() => {
    if (!project.slug) return;
    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch(`/api/projects/${encodeURIComponent(project.slug)}/increment-view`, {
          method: "POST",
          signal: ac.signal,
        });
        if (!res.ok) return;
        const data = (await res.json()) as { viewCount?: number };
        if (typeof data.viewCount === "number") {
          setViewCount(data.viewCount);
        }
      } catch {
        /* ignore abort / network */
      }
    })();
    return () => ac.abort();
  }, [project.slug]);

  return (
    <div
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg shadow"
      data-tour="project-detail"
    >
      <div data-tour="project-header">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>

        {(project.category || formattedDate) && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 flex flex-wrap gap-2 items-center">
            {project.category ? (
              <span className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-900 dark:text-cyan-100 px-3 py-0.5 text-xs font-medium">
                {project.category}
              </span>
            ) : null}
            {formattedDate ? <span>Published {formattedDate}</span> : null}
          </p>
        )}
      </div>

      <div data-tour="project-hero">
        <ProjectFigure
          src={project.imageUrl || DEFAULT_PROJECT_IMAGE}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-lg mb-4 w-full h-auto max-h-[400px] object-cover"
          priority
        />
      </div>

      {project.description ? (
        <p className="mb-4 text-cyan-700 dark:text-cyan-200">{project.description}</p>
      ) : null}

      <div className="mb-4" data-tour="project-primary-link">
        {hasUrls ? (
          <>
            {project.repoUrl ? (
              <UrlPanel
                label="Repository"
                href={project.repoUrl}
                cta={/github\.com/i.test(project.repoUrl) ? "Open GitHub repository" : "Open repository"}
                data-tour="project-repo-link"
              />
            ) : null}
            {project.liveUrl ? (
              <UrlPanel
                label="Live / demo"
                href={project.liveUrl}
                cta="Open deployed app"
                data-tour="project-live-link"
              />
            ) : null}
          </>
        ) : (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">No repository or live URL is set for this project.</p>
        )}
      </div>

      <div className="mb-4 flex flex-wrap gap-4 items-center" data-tour="project-links">
        <button
          type="button"
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => router.push(`/projects/${slug}/edit`)}
        >
          Edit
        </button>
        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          {viewCount} views
        </span>
      </div>

      <div className="mb-4" data-tour="project-tech">
        <strong>Technologies:</strong>{" "}
        {project.technologies.length > 0 ? project.technologies.join(", ") : "—"}
      </div>

      {project.outcomes.length > 0 ? (
        <div data-tour="project-outcomes">
          <CollapsibleSection title="Outcomes">
            <ul className="list-disc pl-6">
              {project.outcomes.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </CollapsibleSection>
        </div>
      ) : null}

      {project.challenges.length > 0 ? (
        <CollapsibleSection title="Technical Challenges & Solutions">
          <ul className="list-disc pl-6">
            {project.challenges.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </CollapsibleSection>
      ) : null}

      {project.caseStudy?.trim() ? (
        <section className="my-6" aria-labelledby="case-study-heading" data-tour="project-case-study">
          <h2 id="case-study-heading" className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
            Case study
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base">
            <ReactMarkdown>{project.caseStudy}</ReactMarkdown>
          </div>
        </section>
      ) : null}

      {galleryShots.length > 0 ? (
        <section className="my-6" aria-label="Additional screenshots" data-tour="project-gallery">
          <h2 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryShots.map((src, idx) => (
              <ProjectFigure
                key={`${src}-${idx}`}
                src={src}
                alt={`${project.title} screenshot ${idx + 2}`}
                width={640}
                height={360}
                className="rounded-lg w-full h-auto object-cover border border-neutral-200 dark:border-neutral-700"
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
