import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MaturityDashboard } from "../../components/dashboards/MaturityDashboard";
import { MaturityAssessmentDashboard } from "../../components/dashboards/MaturityAssessmentDashboard";
import { FloatingActionButton } from "../../components/modern/FloatingActionButton";
import { SectionDivider } from "../../components/modern/SectionDivider";
import { ModernCard } from "../../components/modern/ModernCard";
import { ClientMotionWrapper, ClientMotionItem, ClientAnimatedBackground } from "../../components/modern/ClientMotionWrapper";
import { HeroSection } from "../../components/modern/HeroSection";
import {
  BookOpenIcon,
  CodeBracketIcon,
  LightBulbIcon,
  AcademicCapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

/** Shown in-page and in metadata; bump when you edit copy or scores meaningfully. */
const NOW_PAGE_LAST_UPDATED = "May 2026";

export const metadata: Metadata = {
  title: "What I'm Doing Now | Menno Drescher",
  description:
    "Current projects, learning, and focus areas—plus an honest portfolio maturity snapshot. Updated regularly.",
  keywords: [
    "current projects",
    "now page",
    "professional development",
    "portfolio maturity",
    "learning",
    "focus areas",
  ],
  openGraph: {
    title: "What I'm Doing Now | Menno Drescher",
    description:
      "A /now-style snapshot: projects, learning, focus, and how this portfolio is evolving.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "What I'm Doing Now | Menno Drescher",
    description:
      "A /now-style snapshot: projects, learning, focus, and how this portfolio is evolving.",
  },
};

export default function NowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950">
      <FloatingActionButton />
      <ClientAnimatedBackground />

      <main className="relative max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <ClientMotionWrapper className="space-y-10 sm:space-y-12">
          <ClientMotionItem>
            <HeroSection />
          </ClientMotionItem>

          <ClientMotionItem>
            <MaturityDashboard />
          </ClientMotionItem>

          <SectionDivider variant="wave" />

          <ClientMotionItem>
            <MaturityAssessmentDashboard />
          </ClientMotionItem>

          <SectionDivider variant="dots" />

          <ClientMotionItem>
            <ModernCard variant="gradient" hoverEffect="glow" className="p-6 sm:p-8 rounded-2xl border border-white/30 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-950/50 rounded-xl ring-1 ring-blue-200/60 dark:ring-blue-800/40 w-fit">
                  <SparklesIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Portfolio snapshot
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    High-level takeaway · {NOW_PAGE_LAST_UPDATED}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-emerald-50/90 to-blue-50/90 dark:from-emerald-950/35 dark:to-blue-950/35 border border-emerald-200/50 dark:border-emerald-900/40 p-5 sm:p-6 mb-6">
                <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base leading-relaxed">
                  <strong className="text-emerald-800 dark:text-emerald-200">Overall:</strong> Clean,
                  fast, and intentional. The site reflects how I like to build—clear structure, strong
                  UX, and room to grow depth in project storytelling and metadata polish.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  ["Design & aesthetics", "4.5/5"],
                  ["Content quality", "4.5/5"],
                  ["User experience", "5/5"],
                  ["Technical implementation", "4.5/5"],
                  ["Professional presentation", "5/5"],
                  ["SEO & performance", "4/5"],
                ].map(([label, score]) => (
                  <div
                    key={label}
                    className="flex justify-between items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/90 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-600/60"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</span>
                    <span className="text-sm tabular-nums font-semibold text-blue-600 dark:text-blue-400 shrink-0">
                      {score}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-emerald-50/80 dark:bg-emerald-950/25 border border-emerald-200/60 dark:border-emerald-900/40 px-5 py-4">
                <p className="text-sm sm:text-base text-emerald-900 dark:text-emerald-100 leading-relaxed">
                  <strong>Conclusion:</strong> The foundation is solid. The biggest win from here is
                  richer project narratives (problems, trade-offs, outcomes) and a few deliberate
                  personal touches—without bloating the experience.
                </p>
              </div>
            </ModernCard>
          </ClientMotionItem>

          <SectionDivider variant="gradient" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ModernCard variant="glass" hoverEffect="lift" className="p-6 rounded-2xl h-full border border-indigo-200/40 dark:border-gray-700/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-950/50 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" aria-hidden />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Learning</h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden />
                  <span>Going deeper on Azure architecture and the Well-Architected pillars in real designs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden />
                  <span>Data storytelling in the browser—D3.js and React patterns for readable dashboards.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden />
                  <span>Practical AI integrations: safety, evaluation, and shipping small vertical slices.</span>
                </li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hoverEffect="tilt" className="p-6 rounded-2xl h-full border border-emerald-200/40 dark:border-gray-700/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-950/50 rounded-lg">
                  <CodeBracketIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" aria-hidden />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Current projects</h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                  <span>
                    This portfolio: polish pages like this one, tighten SEO where it matters, and ship
                    useful dashboards where they earn their space.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                  <span>
                    Writing on the blog—including governance and security topics when they connect to
                    delivery.{" "}
                    <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-medium underline-offset-2 hover:underline">
                      Browse posts
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                  <span>Open-source and internal tooling around HR analytics and trustworthy data pipelines.</span>
                </li>
              </ul>
            </ModernCard>
          </div>

          <SectionDivider variant="zigzag" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ModernCard variant="glass" hoverEffect="scale" className="p-6 rounded-2xl h-full border border-amber-200/40 dark:border-gray-700/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-950/50 rounded-lg">
                  <LightBulbIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" aria-hidden />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Focus areas</h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                  <span>Accessibility and performance: fewer assumptions, more measurement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                  <span>Automated testing and CI/CD hygiene so refactors stay boring—in a good way.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                  <span>Clear personal narrative: what I optimize for, and how I work with teams.</span>
                </li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hoverEffect="glow" className="p-6 rounded-2xl h-full border border-sky-200/40 dark:border-gray-700/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-sky-100 dark:bg-sky-950/50 rounded-lg">
                  <BookOpenIcon className="w-6 h-6 text-sky-600 dark:text-sky-400" aria-hidden />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recently read / watched</h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden />
                  <span>Azure Well-Architected Framework—revisiting trade-off guidance before big design calls.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden />
                  <span>React patterns for composable UIs (hooks, boundaries, and performance footguns).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden />
                  <span>Next.js release notes and conference recaps—what is worth adopting vs. what is just noise.</span>
                </li>
              </ul>
            </ModernCard>
          </div>

          <ClientMotionItem className="text-center pt-4 sm:pt-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              {"Inspired by Derek Sivers' "}
              <a
                href="https://nownownow.com/about"
                className="text-blue-600 dark:text-blue-400 underline-offset-2 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                nownownow.com
              </a>{" "}
              idea. Last updated: {NOW_PAGE_LAST_UPDATED}.
            </p>
          </ClientMotionItem>
        </ClientMotionWrapper>
      </main>
    </div>
  );
}
