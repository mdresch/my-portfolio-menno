import React from "react";

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
      { label: "Mobile Responsiveness", score: 5, note: "Fully responsive, adapts perfectly to all screens." },
      { label: "Load Times", score: 5, note: "Very fast, snappy, Lighthouse 98." },
      {
        label: "Accessibility",
        score: 4.5,
        note: "Semantic HTML, alt text, keyboard navigation, good contrast.",
      },
      { label: "User Feedback", score: 3, note: "Contact form and email; no comments or direct feedback." },
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
      { label: "SEO Optimization", score: 4, note: "Meta tags present, title tag could be more descriptive." },
      { label: "Security", score: 5, note: "HTTPS, secure hosting, no obvious vulnerabilities." },
      { label: "Performance", score: 5, note: "Excellent, Lighthouse 98." },
    ],
    recommendation: "Update <title> tag for SEO; maintain best practices.",
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
      { label: "Feedback Mechanisms", score: 3, note: "Limited to contact form." },
      { label: "User Interaction", score: 3.5, note: "Encourages exploration, clear CTAs." },
      { label: "Personalization", score: 2.5, note: "No personal photo or personalized elements." },
    ],
    recommendation:
			"Add feedback button or related blog links; consider a personal photo.",
  },
  {
    category: "Innovation and Creativity",
    details: [
      { label: "Unique Features", score: 3.5, note: "Polished, strong execution of modern design." },
      { label: "Creative Presentation", score: 4, note: "Clean, professional, engaging presentation." },
      {
        label: "Cutting-Edge Technologies",
        score: 3,
        note: "Modern stack; no AR/VR or experimental tech.",
      },
      { label: "Innovation in Design", score: 3.5, note: "Excellent execution of best practices." },
      {
        label: "Future-Proofing",
        score: 4.5,
        note: "Modern, responsive, adaptable for future updates.",
      },
    ],
    recommendation:
			"Consider adding more innovative features or tech for further distinction.",
  },
];

function getAverageScore(details: { score: number }[]): string {
  if (!details || details.length === 0) return "0";
  const sum = details.reduce((acc: number, d: { score: number }) => acc + d.score, 0);
  return (sum / details.length).toFixed(2);
}

export const MaturityAssessmentDashboard = () => (
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Portfolio Maturity Assessment</h2>
    <div className="space-y-8">
      {assessment.map((item) => (
        <div key={item.category} className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-gray-900 dark:text-gray-100">{item.category}</span>
            <span className="text-xs font-mono text-blue-700 dark:text-blue-400">
							Average: {getAverageScore(item.details)}/5
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2">
            {item.details.map((detail) => (
              <div
                key={detail.label}
                className="bg-gray-50 dark:bg-gray-700/50 rounded p-2 flex flex-col border border-gray-100 dark:border-gray-600"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{detail.label}</span>
                  <span className="text-xs font-mono text-blue-700 dark:text-blue-400">{detail.score}/5</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-300">{detail.note}</div>
              </div>
            ))}
          </div>
          <div className="text-xs text-blue-700 dark:text-blue-400 mb-2">
						Recommendation: {item.recommendation}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
			By implementing these recommendations, Menno Drescher's portfolio site can achieve a higher level
			of excellence and stand out as a benchmark in portfolio design.
    </div>
  </section>
);
