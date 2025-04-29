import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Menno Drescher | HCM Services Specialist",
  description: "Learn about Menno Drescher, a Managed HCM Services Specialist with over 25 years of experience in Finance and Human Resources Consultancy.",
  keywords: ["Menno Drescher", "HCM Services", "Human Resources Consultant", "Azure", "HR Technology"],
  openGraph: {
    title: "About Menno Drescher | HCM Services Specialist",
    description: "Learn about Menno Drescher, a Managed HCM Services Specialist with over 25 years of experience in Finance and Human Resources Consultancy.",
    type: "profile",
    images: [
      {
        url: "https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "Menno Drescher - HCM Services Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Menno Drescher | HCM Services Specialist",
    description: "Learn about Menno Drescher, a Managed HCM Services Specialist with over 25 years of experience in Finance and Human Resources Consultancy.",
    images: ["https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg"], // Create this image
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="prose lg:prose-xl">
        <p className="mb-8">
          Hello, I'm Menno Drescher—a passionate professional with over 25 years of experience in Finance and Human Resources Consultancy. Currently, I'm proud to be a Managed HCM Services Specialist at CBA Consult, where I focus on optimizing organizational performance and leveraging technology to drive meaningful impact.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Expertise</h2>
          <p className="mb-4">
            My expertise spans a wide range of areas, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>HCM Services</strong> - Delivering tailored solutions to enhance HR processes and employee engagement</li>
            <li><strong>Finance and HR Consultancy</strong> - Providing strategic insights to optimize financial and human capital management</li>
            <li><strong>Project Management</strong> - Leading projects with a focus on best practices and client-centric approaches</li>
            <li><strong>Data Processing</strong> - Ensuring accurate and efficient transactional data processing</li>
            <li><strong>Organizational Performance Management</strong> - Implementing frameworks to measure and improve organizational effectiveness</li>
            <li><strong>Analytical Skills</strong> - Utilizing data analytics to drive informed decision-making</li>
            <li><strong>Process Optimization</strong> - Streamlining processes to enhance efficiency and reduce costs</li>
            <li><strong>Change Management</strong> - Guiding organizations through transitions with minimal disruption</li>
            <li><strong>Stakeholder Engagement</strong> - Building strong relationships with clients and partners to foster collaboration</li>
            <li><strong>Business Process Outsourcing</strong> - Offering comprehensive outsourcing solutions to meet client needs</li>
            <li><strong>HR Technology</strong> - Implementing and optimizing HR technology solutions for enhanced performance</li>
            <li><strong>Data Analytics</strong> - Leveraging data to drive insights and improve decision-making</li>
            <li><strong>Azure Entra</strong> - Expertise in identity and access management solutions</li>
            <li><strong>Security and Compliance</strong> - Ensuring robust security frameworks and compliance with industry standards</li>
            <li><strong>End User Adoption</strong> - Driving successful technology implementations through user engagement</li>
            <li><strong>Human Capital Management</strong> - Strategic HR solutions for organizational growth</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Technical Stack</h3>
              <ul className="list-disc pl-6">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Development Tools</h3>
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
          <h2 className="text-2xl font-semibold mb-4">Professional Philosophy</h2>
          <p className="mb-4">
            I believe in staying ahead of the curve by continuously exploring new ideas and opportunities to innovate. My approach combines technical expertise with strategic thinking to create solutions that are both practical and forward-thinking.
          </p>
          <p className="mb-4">
            Beyond my professional endeavors, I'm deeply fascinated by web development and emerging technologies. I enjoy staying current with the latest developments in the tech industry and applying these innovations to solve real-world problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
          <p className="mb-4">
            I'm always open to new opportunities and collaborations. Whether you're interested in discussing tech-driven solutions, sharing ideas, or exploring potential projects, I'd love to connect and build something extraordinary together.
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
