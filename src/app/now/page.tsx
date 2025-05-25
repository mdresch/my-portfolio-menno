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
      <p className="mt-10 text-gray-500 text-sm">Inspired by <a href="https://nownownow.com/about" className="underline" target="_blank" rel="noopener noreferrer">nownownow.com</a>. Last updated: April 2025.</p>
    </main>
  );
}
