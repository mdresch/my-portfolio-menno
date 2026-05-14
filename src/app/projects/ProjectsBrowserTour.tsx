"use client";

/**
 * On-screen placement (avoids overlap with common chat FABs / channel icons on the right):
 * - Launcher: fixed bottom-left (`bottom-6 left-6`).
 * - Step panel (open): fixed bottom, full width on small screens; on `md+` anchored bottom-left (`md:left-6 md:right-auto`).
 */

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const HIGHLIGHT_CLASSES = [
  "relative",
  "z-[60]",
  "rounded-lg",
  "ring-4",
  "ring-cyan-500",
  "ring-offset-2",
  "ring-offset-white",
  "dark:ring-offset-neutral-900",
  "transition-shadow",
  "duration-300",
] as const;

type TourStep = {
  title: string;
  body: string;
  target?: string;
};

function isProjectDetailPath(pathname: string) {
  return /^\/projects\/[^/]+$/.test(pathname) && !pathname.endsWith("/edit");
}

function buildListSteps(): TourStep[] {
  return [
    {
      title: "Projects overview",
      body: "This page is rendered on the server. When DATABASE_URL is set, it runs prisma.project.findMany() and maps each row for the grid you see below. The note under the heading is the postcard from our latest migration: repoUrl + liveUrl replaced the old single link column.",
      target: '[data-tour="projects-heading"]',
    },
    {
      title: "What moved in the database",
      body: "Nothing vanished—URLs were sorted into repository vs live/demo slots. Edit a project anytime to tune both fields independently.",
      target: '[data-tour="projects-enhancement-note"]',
    },
    {
      title: "From Postgres to cards",
      body: "Each card uses mapDbProjectToDetail(): title, description, technologies, the first screenshot (or a default image), plus optional repository and live/demo URLs from Postgres.",
      target: '[data-tour="projects-grid"]',
    },
    {
      title: "One row in the database",
      body: "The first card mirrors one Project record in Neon (slug, arrays like technologies and screenshots, optional repoUrl and liveUrl, etc.). Open any project to see the full detail view with case study and gallery.",
      target: '[data-tour="projects-first-card"]',
    },
    {
      title: "JSON for apps & admin",
      body: "Other parts of the site load the same data via GET /api/projects (Prisma again, different JSON shape). Open a project slug and use this tour there for the detail walkthrough.",
    },
  ];
}

/** Template for detail tour; filtered to existing DOM nodes when the tour starts. */
function buildDetailStepTemplates(): TourStep[] {
  return [
    {
      title: "Project detail page",
      body: "The route loads one row with prisma.project.findUnique({ slug }) (or a title-based fallback), then passes mapDbProjectToDetail() into the client ProjectDetail component.",
      target: '[data-tour="project-detail"]',
    },
    {
      title: "Title & meta",
      body: "Title, optional category pill, and published date come from title, category, and datePublished in Postgres.",
      target: '[data-tour="project-header"]',
    },
    {
      title: "Hero image",
      body: "The hero uses the first entry in screenshots[], or the default public image if the array is empty. Remote URLs use a plain img tag so you do not need every host in next.config.",
      target: '[data-tour="project-hero"]',
    },
    {
      title: "Repository & live URLs",
      body: "Optional repoUrl and liveUrl from Postgres appear as separate actions (e.g. “Open GitHub repository” when the repo URL looks like GitHub, plus “Open live site” for the demo URL).",
      target: '[data-tour="project-primary-link"]',
    },
    {
      title: "Links & actions",
      body: "Edit navigates to the edit route for this slug; view count is tracked separately.",
      target: '[data-tour="project-links"]',
    },
    {
      title: "Technologies",
      body: "The technologies text[] column is rendered as a comma-separated list.",
      target: '[data-tour="project-tech"]',
    },
    {
      title: "Outcomes",
      body: "Strings from outcomes[] appear here in a collapsible section; challenges[] uses the same pattern.",
      target: '[data-tour="project-outcomes"]',
    },
    {
      title: "Case study",
      body: "caseStudy is rendered with ReactMarkdown in a prose block—ideal for markdown stored in the database.",
      target: '[data-tour="project-case-study"]',
    },
    {
      title: "Gallery",
      body: "When there are extra screenshots after the first, they appear in this grid.",
      target: '[data-tour="project-gallery"]',
    },
  ];
}

function filterStepsForDom(steps: TourStep[]): TourStep[] {
  return steps.filter((s) => !s.target || (typeof document !== "undefined" && document.querySelector(s.target)));
}

function resolveSteps(pathname: string): TourStep[] {
  if (pathname === "/projects") return buildListSteps();
  if (isProjectDetailPath(pathname)) return buildDetailStepTemplates();
  return [];
}

export default function ProjectsBrowserTour() {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  /** Snapshot of steps when tour opens so indices stay stable while you click Next. */
  const [activeSteps, setActiveSteps] = useState<TourStep[]>([]);

  const tourAvailable = resolveSteps(pathname).length > 0;

  const clearHighlights = useCallback(() => {
    document.querySelectorAll("[data-tour]").forEach((el) => {
      el.classList.remove(...HIGHLIGHT_CLASSES);
    });
  }, []);

  const applyHighlight = useCallback(
    (index: number, steps: TourStep[]) => {
      clearHighlights();
      const step = steps[index];
      if (!step?.target) return;
      const el = document.querySelector(step.target);
      if (el instanceof HTMLElement) {
        el.classList.add(...HIGHLIGHT_CLASSES);
        el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    },
    [clearHighlights]
  );

  const beginTour = useCallback(() => {
    const raw = resolveSteps(pathname);
    const filtered = filterStepsForDom(raw);
    setActiveSteps(filtered.length > 0 ? filtered : raw);
    setStepIndex(0);
    setOpen(true);
  }, [pathname]);

  const prevPathRef = useRef<string | null>(null);
  useEffect(() => {
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname;
      return;
    }
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setOpen(false);
      setActiveSteps([]);
      setStepIndex(0);
    }
  }, [pathname]);

  useLayoutEffect(() => {
    if (!open || activeSteps.length === 0) return;
    applyHighlight(stepIndex, activeSteps);
    return () => clearHighlights();
  }, [open, stepIndex, activeSteps, applyHighlight, clearHighlights]);

  useEffect(() => {
    if (!open) {
      clearHighlights();
    }
  }, [open, clearHighlights]);

  useEffect(() => {
    if (searchParams.get("tour") === "1") {
      beginTour();
      router.replace(pathname, { scroll: false });
    }
  }, [searchParams, pathname, router, beginTour]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!pathname.startsWith("/projects")) return null;
  if (pathname.includes("/edit")) return null;
  if (!tourAvailable) return null;

  const step = open ? activeSteps[stepIndex] : null;
  const isLast = open && activeSteps.length > 0 && stepIndex >= activeSteps.length - 1;

  return (
    <>
      <span
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
        data-tailwind-tour-jit-anchor
      >
        <span className="relative z-[60] rounded-lg ring-4 ring-cyan-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900 transition-shadow duration-300" />
      </span>

      {!open ? (
        <div className="fixed bottom-6 left-6 z-[70] flex max-w-[min(100vw-3rem,20rem)] flex-col items-start gap-2 pr-4">
          <button
            type="button"
            data-tour="projects-tour-launcher"
            onClick={beginTour}
            className="rounded-full bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Tour: how projects load
          </button>
          <p className="text-left text-xs text-neutral-500 dark:text-neutral-400">
            Or add{" "}
            <a className="underline text-cyan-600 dark:text-cyan-400" href={`${pathname}?tour=1`}>
              ?tour=1
            </a>{" "}
            to the URL.
          </p>
        </div>
      ) : (
        <>
          <div
            className="fixed inset-0 z-[50] bg-black/45 backdrop-blur-[1px]"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed bottom-6 left-4 right-4 z-[70] mx-auto max-w-md rounded-xl border border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900 md:left-6 md:right-auto md:mx-0"
            role="dialog"
            aria-labelledby="tour-step-title"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                Step {activeSteps.length ? stepIndex + 1 : 0} / {activeSteps.length}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Close
              </button>
            </div>
            {step ? (
              <>
                <h2 id="tour-step-title" className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{step.body}</p>
              </>
            ) : (
              <p className="text-sm text-neutral-500">Loading tour…</p>
            )}
            <div className="mt-4 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                disabled={stepIndex === 0}
                onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                className="rounded-lg border border-neutral-300 px-3 py-2 text-sm disabled:opacity-40 dark:border-neutral-600"
              >
                Back
              </button>
              {!isLast ? (
                <button
                  type="button"
                  onClick={() =>
                    setStepIndex((i) =>
                      activeSteps.length ? Math.min(activeSteps.length - 1, i + 1) : 0
                    )
                  }
                  className="rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-500"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-500"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
