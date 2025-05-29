import React from "react";
import { MaturityDashboard } from "../../components/dashboards/MaturityDashboard";
import { MaturityAssessmentDashboard } from "../../components/dashboards/MaturityAssessmentDashboard";

export default function NowPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">What I’m Doing Now</h1>
      {/* Maturity Dashboard Section */}
      <MaturityDashboard />
      {/* Portfolio Maturity Assessment Section */}
      <MaturityAssessmentDashboard />
      {/* Portfolio Maturity Assessment Results - May 2025 */}
      <section className="mb-8 bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow-md border border-blue-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-2">Portfolio Maturity Assessment <span className="text-base font-normal text-gray-500">(May 2025)</span></h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          <strong>Overall Impression:</strong> Clean, modern, and professional portfolio. Clear structure, fast load times, and effective presentation as a Full Stack Developer & AI Enthusiast. Dark theme is well-executed.
        </p>
        <ul className="mb-4 text-gray-700 dark:text-gray-200 list-disc pl-6">
          <li><strong>Design & Aesthetics:</strong> 4.5/5 (Visual appeal, consistency, layout, typography, imagery)</li>
          <li><strong>Content Quality:</strong> 4.5/5 (Clarity, relevance, writing quality); <span className="text-yellow-600">Depth: 3/5</span> (project details can be expanded)</li>
          <li><strong>User Experience (UX):</strong> 5/5 (Navigation, mobile, load times, accessibility)</li>
          <li><strong>Technical Implementation:</strong> 5/5 (Modern stack, code quality, security, performance); <span className="text-yellow-600">SEO: 4/5</span></li>
          <li><strong>Interactivity & Engagement:</strong> 4/5 (Smooth interactions, contact form, social links)</li>
          <li><strong>Innovation & Creativity:</strong> 4/5 (Polished, modern, well-executed design)</li>
        </ul>
        <h3 className="font-semibold mb-1">Key Outcomes & Recommendations:</h3>
        <ul className="mb-2 list-disc pl-6 text-gray-700 dark:text-gray-200">
          <li><strong>Project Depth:</strong> Add detailed case studies for 2-4 key projects (goals, your role, challenges, solutions, results, screenshots, or video demos).</li>
          <li><strong>SEO:</strong> Update the <code>&lt;title&gt;</code> tag to "Menno Drescher - Full Stack Developer & AI Specialist" for better search visibility.</li>
          <li><strong>Multimedia:</strong> Embed more screenshots or short video walkthroughs in project case studies.</li>
          <li><strong>(Optional) User Feedback:</strong> Consider adding a simple feedback button or links to related blog posts for more engagement.</li>
          <li><strong>(Optional) Personal Touch:</strong> Add a professional photo to the "About Me" section for a more personal connection.</li>
        </ul>
        <p className="text-green-700 dark:text-green-300 font-medium mt-2">Conclusion: Your portfolio is excellent—technically sound, visually appealing, and clearly communicates your skills. Adding depth to project showcases will elevate it further. Well done!</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learning</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Deepening expertise in Azure cloud architecture and best practices</li>
          <li>Exploring advanced data visualization with D3.js and React</li>
          <li>Experimenting with AI/ML integrations in web apps</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Current Projects</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Enhancing my portfolio with interactive dashboards and a maturity self-assessment</li>
          <li>Writing blog posts on web security and modern authentication</li>
          <li>Contributing to open-source HR analytics tools</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Focus Areas</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Accessibility and performance optimization</li>
          <li>Automated testing and CI/CD improvements</li>
          <li>Personal branding and storytelling</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Recently Read / Watched / Attended</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Azure Well-Architected Framework documentation</li>
          <li>React Advanced Patterns (video series)</li>
          <li>Next.js Conf 2024 highlights</li>
        </ul>
      </section>
      <p className="mt-10 text-gray-500 text-sm">Inspired by <a href="https://nownownow.com/about" className="underline" target="_blank" rel="noopener noreferrer">nownownow.com</a>. Last updated: Mei 2025.</p>
    </main>
  );
}
