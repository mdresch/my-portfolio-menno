import React from "react";

const assessment = [
  {
    category: "Design and Aesthetics",
    score: 4,
    reasoning: "The site has a clean and modern design with consistent use of colors and typography. The layout is intuitive, making it easy to navigate. However, adding more creative elements and animations could enhance visual appeal.",
    recommendation: "Introduce more creative design elements and animations to make the site visually distinctive."
  },
  {
    category: "Content Quality",
    score: 4,
    reasoning: "The content is clear and relevant, showcasing a variety of projects in web development, AI, and analytics. The writing is professional, and the interactive resume is a nice touch. More detailed case studies and multimedia elements could further enrich the content.",
    recommendation: "Enhance project descriptions with more detailed case studies and add more multimedia content, such as videos and interactive demos."
  },
  {
    category: "User Experience (UX)",
    score: 4,
    reasoning: "The site is easy to navigate and mobile-responsive. Load times are fast, and the overall performance is good. Minor accessibility improvements could make the site more inclusive.",
    recommendation: "Address minor accessibility issues to ensure the site is usable by all visitors, including those with disabilities."
  },
  {
    category: "Technical Implementation",
    score: 5,
    reasoning: "The site uses modern web technologies effectively, with clean code and strong SEO optimization. Security measures appear robust, ensuring a safe browsing experience.",
    recommendation: "Continue following best practices and monitor for new web and Azure security standards."
  },
  {
    category: "Interactivity and Engagement",
    score: 3,
    reasoning: "There are some interactive elements, such as the interactive resume, but more could be added to engage users. Social media integration is present, but feedback mechanisms like comments or ratings are limited.",
    recommendation: "Add more interactive features like project filters, user comments, and ratings to increase engagement."
  },
  {
    category: "Innovation and Creativity",
    score: 4,
    reasoning: "The site showcases innovative projects and uses cutting-edge technologies. There is potential for more creative use of technologies like AR/VR to make the portfolio stand out even more.",
    recommendation: "Explore the use of cutting-edge technologies like AR/VR to showcase projects in a more immersive way."
  }
];

export const MaturityAssessmentDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">Portfolio Maturity Assessment</h2>
    <div className="space-y-6">
      {assessment.map((item) => (
        <div key={item.category} className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium">{item.category}</span>
            <span className="text-sm font-mono">Score: {item.score}/5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${(item.score / 5) * 100}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-600 mb-1">{item.reasoning}</div>
          <div className="text-xs text-blue-700">Recommendation: {item.recommendation}</div>
        </div>
      ))}
    </div>
  </section>
);
