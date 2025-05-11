"use client";
import React from "react";

export default function SupplyChainResiliencePage() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Supply Chain Resilience</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Supply Chain Resilience?</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Supply chain resilience is the ability of a supply chain to anticipate, prepare for, respond to, and recover from disruptions to ensure continuity and sustainability. In 2024-2025, organizations are focusing on building more adaptive, transparent, and robust supply chains to address risks from geopolitical tensions, climate change, cyber threats, and global health events.
        </p>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li><strong>Key Trends (2025):</strong></li>
          <ul className="list-disc ml-6">
            <li>Increased investment in digital supply chain technologies (AI, IoT, blockchain).</li>
            <li>Greater emphasis on multi-sourcing and nearshoring to reduce dependency on single regions.</li>
            <li>Enhanced supply chain visibility and real-time risk monitoring.</li>
            <li>Focus on sustainability and ESG compliance in supplier networks.</li>
            <li>Scenario planning and stress testing for major disruptions (e.g., geopolitical conflict, pandemics).</li>
          </ul>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Recent Developments</h2>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li>2025: Companies are leveraging AI-driven analytics to predict and mitigate supply chain risks in real time.</li>
          <li>2025: Regulatory changes in the EU and US are requiring more transparent reporting on supply chain sustainability and risk exposure.</li>
          <li>2024-2025: Ongoing disruptions from global conflicts and climate events are accelerating the adoption of digital twins and advanced scenario modeling.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-3">Best Practices for Building Resilient Supply Chains</h2>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li>Map and monitor your entire supply network, including tier-2 and tier-3 suppliers.</li>
          <li>Invest in digital tools for real-time visibility and predictive analytics.</li>
          <li>Develop contingency plans and diversify sourcing strategies.</li>
          <li>Collaborate closely with suppliers and logistics partners on risk management.</li>
          <li>Integrate ESG and sustainability criteria into supplier selection and evaluation.</li>
        </ul>
      </section>
    </div>
  );
}
