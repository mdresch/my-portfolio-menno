import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const assessment = [
  {
    category: "Design and Aesthetics",
    details: [
      {
        label: "Visual Appeal",
        score: 4.5,
        note: "Clean, modern, professional aesthetic. Dark theme, engaging animation.",
      },
      {
        label: "Consistency",
        score: 5,
        note: "Highly consistent fonts, colors, spacing, and section styling.",
      },
      {
        label: "Layout",
        score: 4.5,
        note: "Intuitive single-page layout, clear information hierarchy.",
      },
      {
        label: "Typography",
        score: 4,
        note: "Well-chosen, readable, distinct headings and body text.",
      },
      {
        label: "Imagery",
        score: 4,
        note: "Clear, relevant project images; icons add visual interest.",
      },
    ],
    recommendation:
      "Consider adding a personal photo for connection; maintain strong visual consistency.",
  },
  {
    category: "Content Quality",
    details: [
      { label: "Clarity", score: 4.5, note: "Information is clear and easy to understand." },
      { label: "Relevance", score: 5, note: "Content is highly relevant to expertise and audience." },
      {
        label: "Depth",
        score: 3,
        note: "Project section could be expanded with detailed case studies.",
      },
      { label: "Writing Quality", score: 4.5, note: "Professional, concise, error-free writing." },
      {
        label: "Multimedia",
        score: 3.5,
        note: "Project images used; more video/screenshots possible.",
      },
    ],
    recommendation:
      "Add detailed case studies for key projects, including goals, challenges, solutions, and outcomes. Embed more multimedia.",
  },
  {
    category: "User Experience (UX)",
    details: [
      { label: "Navigation", score: 5, note: "Sticky header, smooth scrolling, logical section order." },
      { label: "Mobile Responsiveness", score: 5, note: "Fully responsive, adapts well across breakpoints." },
      { label: "Load Times", score: 5, note: "Very fast, snappy, strong Lighthouse-style signals." },
      {
        label: "Accessibility",
        score: 4.5,
        note: "Semantic HTML, alt text, keyboard navigation, good contrast.",
      },
      { label: "User Feedback", score: 3, note: "Contact form and email; room for richer feedback loops." },
    ],
    recommendation: "Minor accessibility improvements possible; consider more feedback options.",
  },
  {
    category: "Technical Implementation",
    details: [
      { label: "Modern Technologies", score: 5, note: "Built with React/Next.js, hosted on Vercel." },
      {
        label: "Code Quality",
        score: 4.5,
        note: "Clean, well-structured, inferred from performance and lack of errors.",
      },
      { label: "SEO Optimization", score: 4, note: "Meta tags present; title tags can always be sharper." },
      { label: "Security", score: 5, note: "HTTPS, secure hosting, no obvious vulnerabilities." },
      { label: "Performance", score: 5, note: "Excellent delivery and runtime performance." },
    ],
    recommendation: "Keep tightening metadata and structured data as the site grows.",
  },
  {
    category: "Interactivity and Engagement",
    details: [
      { label: "Interactive Elements", score: 4, note: "Smooth scrolling, hover effects, typing animation." },
      {
        label: "User Engagement Features",
        score: 3.5,
        note: "Contact form, CV download, social links.",
      },
      { label: "Feedback Mechanisms", score: 3, note: "Mostly routed through the contact form." },
      { label: "User Interaction", score: 3.5, note: "Encourages exploration, clear CTAs." },
      { label: "Personalization", score: 2.5, note: "Room for more personal touches and discovery paths." },
    ],
    recommendation:
      "Add lightweight feedback affordances or related reading links; consider a personal photo.",
  },
  {
    category: "Innovation and Creativity",
    details: [
      { label: "Unique Features", score: 3.5, note: "Polished, strong execution of modern design." },
      { label: "Creative Presentation", score: 4, note: "Clean, professional, engaging presentation." },
      {
        label: "Cutting-Edge Technologies",
        score: 3,
        note: "Modern stack; experimental tech kept intentional, not gimmicky.",
      },
      { label: "Innovation in Design", score: 3.5, note: "Excellent execution of best practices." },
      {
        label: "Future-Proofing",
        score: 4.5,
        note: "Modern, responsive, adaptable for future updates.",
      },
    ],
    recommendation:
      "Continue experimenting where it supports the story—without compromising clarity.",
  },
];

function getAverageScore(details: { score: number }[]): string {
  if (!details || details.length === 0) return "0";
  const sum = details.reduce((acc: number, d: { score: number }) => acc + d.score, 0);
  return (sum / details.length).toFixed(2);
}

export const MaturityAssessmentDashboard = () => (
  <section className="rounded-2xl border border-gray-200/80 dark:border-gray-600/60 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-gray-900/5 dark:shadow-black/40 p-6 sm:p-8">
    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
        Portfolio maturity — drill-down
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl leading-relaxed">
        Each block expands into sub-criteria and a short recommendation. Same review as the cards
        above, just with more texture so future me remembers why the numbers landed where they did.
      </p>
    </div>
    <div className="space-y-3">
      {assessment.map((item) => {
        const avg = getAverageScore(item.details);
        const avgNum = parseFloat(avg);
        return (
          <details
            key={item.category}
            className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 open:bg-white dark:open:bg-gray-900/90 open:shadow-md transition-colors"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-left [&::-webkit-details-marker]:hidden">
              <div className="min-w-0 flex-1">
                <span className="font-medium text-gray-900 dark:text-gray-100 block truncate sm:whitespace-normal">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 block">
                  Average {avg}/5 · {item.details.length} criteria
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div
                  className="hidden sm:block w-24 md:w-32 h-2 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden"
                  aria-hidden
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400"
                    style={{ width: `${(avgNum / 5) * 100}%` }}
                  />
                </div>
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </div>
            </summary>
            <div className="px-4 pb-4 pt-0 border-t border-gray-200/80 dark:border-gray-700/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-4">
                {item.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-lg bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-600/80 p-3 flex flex-col"
                  >
                    <div className="flex justify-between items-baseline gap-2 mb-1">
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                        {detail.label}
                      </span>
                      <span className="text-xs font-mono tabular-nums text-violet-600 dark:text-violet-300 shrink-0">
                        {detail.score}/5
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">{detail.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-700 dark:text-gray-200 border-l-2 border-violet-400 dark:border-violet-500 pl-3 leading-relaxed">
                <span className="font-semibold text-violet-700 dark:text-violet-300">Next focus: </span>
                {item.recommendation}
              </p>
            </div>
          </details>
        );
      })}
    </div>
    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200/80 dark:border-gray-700/80 pt-5">
      I use this rubric as a personal quality bar—not a competitive scoreboard. The point is steady
      improvement and honest notes, not perfection on every axis.
    </p>
  </section>
);
