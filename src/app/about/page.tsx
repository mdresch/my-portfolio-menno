import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Menno Drescher | HCM, Finance & Tech Specialist",
  description: "Discover Menno Drescher's 25+ years of expertise in Human Capital Management, Finance, and Technology. Learn how Menno drives organizational success through strategic consulting and innovative solutions.",
  keywords: ["Menno Drescher", "HCM Services", "Finance", "HR Technology", "Azure", "Consultancy"],
  openGraph: {
    title: "About Menno Drescher | HCM, Finance & Tech Specialist",
    description: "Discover Menno Drescher's 25+ years of expertise in Human Capital Management, Finance, and Technology. Learn how Menno drives organizational success through strategic consulting and innovative solutions.",
    type: "profile",
    images: [
      {
        url: "https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg",
        width: 1200,
        height: 630,
        alt: "Menno Drescher - HCM, Finance & Tech Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Menno Drescher | HCM, Finance & Tech Specialist",
    description: "Discover Menno Drescher's 25+ years of expertise in Human Capital Management, Finance, and Technology. Learn how Menno drives organizational success through strategic consulting and innovative solutions.",
    images: ["https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="prose lg:prose-xl">
        <p className="mb-8">
          I'm Menno Drescher, a results-driven professional with over 25 years of experience in Finance and Human Resources Consultancy. Currently, I work as a Managed HCM Services Specialist at CBA Consult, where I help organizations enhance performance through strategic HR solutions and cutting-edge technology.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What I Bring to the Table</h2>
          <p className="mb-4">
            My career has been built on delivering value across a wide range of domains:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Human Capital Management</strong> – Strategic HR solutions that drive growth and engagement</li>
            <li><strong>Finance & HR Consulting</strong> – Insightful guidance to optimize people and financial performance</li>
            <li><strong>Project & Change Management</strong> – Leading initiatives and transitions with precision and care</li>
            <li><strong>Process & Data Optimization</strong> – Streamlining operations and ensuring data integrity</li>
            <li><strong>HR Technology & Adoption</strong> – Implementing tools that empower users and improve outcomes</li>
            <li><strong>Security & Compliance</strong> – Safeguarding systems with a focus on Azure Entra and IAM</li>
            <li><strong>Analytics & Performance</strong> – Turning data into actionable insights for better decision-making</li>
            <li><strong>Stakeholder Collaboration</strong> – Building trusted relationships that fuel success</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Languages & Frameworks</h3>
              <ul className="list-disc pl-6">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools & Platforms</h3>
              <ul className="list-disc pl-6">
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="mb-4">
            I’m passionate about innovation and continuous improvement. I thrive at the intersection of business and technology—where strategic goals meet practical execution. Whether it's optimizing HR systems or exploring the latest in web development, I bring curiosity, clarity, and commitment to every challenge.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
          <p className="mb-4">
            I’m always open to new ideas, partnerships, and opportunities to collaborate. If you're looking to explore tech-enabled solutions or simply want to exchange insights—<a href="/contact" className="text-cyan-700 underline hover:text-cyan-900">let’s connect and create something impactful</a>.
          </p>
        </section>

        <section className="text-center">
          <p className="text-gray-600">
            Last updated: April 2025
          </p>
        </section>
      </div>
    </main>
  );
}
