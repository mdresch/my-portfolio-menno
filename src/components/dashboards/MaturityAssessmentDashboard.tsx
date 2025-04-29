import React from "react";

const assessment = [
  {
    category: "Design and Aesthetics",
    details: [
      { label: "Visual Appeal", score: 4, note: "Clean, modern, professional aesthetic. Consistent and visually appealing colors/typography." },
      { label: "Consistency", score: 4, note: "Design elements are used consistently throughout the site." },
      { label: "Layout", score: 4, note: "Intuitive, easy to navigate, clear structure." },
      { label: "Typography", score: 4, note: "Well-chosen, readable, complements design." },
      { label: "Imagery", score: 4, note: "High-quality images effectively showcase projects." },
    ],
    recommendation: "Introduce more creative design elements and animations to make the site visually distinctive."
  },
  {
    category: "Content Quality",
    details: [
      { label: "Clarity", score: 4, note: "Information is clear and easy to understand." },
      { label: "Relevance", score: 4, note: "Content is relevant, showcasing a variety of projects." },
      { label: "Depth", score: 3, note: "More detailed case studies could provide deeper insights." },
      { label: "Writing Quality", score: 4, note: "Professional, error-free writing." },
      { label: "Multimedia", score: 4, note: "Images and videos enhance the content." },
    ],
    recommendation: "Enhance project descriptions with more detailed case studies and add more multimedia content, such as videos and interactive demos."
  },
  {
    category: "User Experience (UX)",
    details: [
      { label: "Navigation", score: 4, note: "Clear menu and logical structure." },
      { label: "Mobile Responsiveness", score: 4, note: "Good experience on different devices." },
      { label: "Load Times", score: 4, note: "Fast load times and good performance." },
      { label: "Accessibility", score: 3, note: "Generally accessible, but minor improvements possible." },
      { label: "User Feedback", score: 3, note: "Limited opportunity for user feedback." },
    ],
    recommendation: "Address minor accessibility issues to ensure the site is usable by all visitors, including those with disabilities."
  },
  {
    category: "Technical Implementation",
    details: [
      { label: "Modern Technologies", score: 5, note: "Uses modern web technologies effectively." },
      { label: "Code Quality", score: 5, note: "Clean, well-structured, maintainable code." },
      { label: "SEO Optimization", score: 5, note: "Well-optimized for search engines." },
      { label: "Security", score: 5, note: "Security measures in place for safe browsing." },
      { label: "Performance", score: 4, note: "Optimized for fast load times and smooth performance." },
    ],
    recommendation: "Continue following best practices and monitor for new web and Azure security standards."
  },
  {
    category: "Interactivity and Engagement",
    details: [
      { label: "Interactive Elements", score: 3, note: "Some interactive elements, but more could be added." },
      { label: "User Engagement Features", score: 3, note: "Contact forms and social media integration present." },
      { label: "Feedback Mechanisms", score: 3, note: "Limited feedback mechanisms for comments/ratings." },
      { label: "User Interaction", score: 3, note: "Moderate interaction; potential for more engagement." },
      { label: "Personalization", score: 3, note: "Limited personalized elements." },
    ],
    recommendation: "Add more interactive features like user comments and ratings to increase engagement."
  },
  {
    category: "Innovation and Creativity",
    details: [
      { label: "Unique Features", score: 4, note: "Unique features set the site apart." },
      { label: "Creative Presentation", score: 4, note: "Creative and engaging project/service presentation." },
      { label: "Cutting-Edge Technologies", score: 4, note: "Uses modern tech, but more AR/VR possible." },
      { label: "Innovation in Design", score: 4, note: "Innovative design and UX, room for more creativity." },
      { label: "Future-Proofing", score: 4, note: "Designed to be adaptable to future trends." },
    ],
    recommendation: "Explore the use of cutting-edge technologies like AR/VR to showcase projects in a more immersive way."
  },
];

function getAverageScore(details) {
  if (!details || details.length === 0) return 0;
  const sum = details.reduce((acc, d) => acc + d.score, 0);
  return (sum / details.length).toFixed(2);
}

export const MaturityAssessmentDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">Portfolio Maturity Assessment</h2>
    <div className="space-y-8">
      {assessment.map((item) => (
        <div key={item.category} className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium">{item.category}</span>
            <span className="text-xs font-mono text-blue-700">Average: {getAverageScore(item.details)}/5</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2">
            {item.details.map((detail) => (
              <div key={detail.label} className="bg-gray-50 rounded p-2 flex flex-col border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-gray-700">{detail.label}</span>
                  <span className="text-xs font-mono text-blue-700">{detail.score}/5</span>
                </div>
                <div className="text-xs text-gray-500">{detail.note}</div>
              </div>
            ))}
          </div>
          <div className="text-xs text-blue-700 mb-2">Recommendation: {item.recommendation}</div>
        </div>
      ))}
    </div>
    <div className="mt-6 text-xs text-gray-500">
      By implementing these recommendations, Menno Drescher's portfolio site can achieve a higher level of excellence and stand out as a benchmark in portfolio design.
    </div>
  </section>
);
