import React from "react";

const executiveSummary = `The “Universal Trump Tariffs,” announced on April 2, 2025, with reciprocal tariff increases originally set to take effect on April 9, have now been temporarily paused for three months. While certain newly proposed U.S. tariffs have been temporarily paused, the tariff increases on Chinese imports are still expected to move forward. This limited delay offers only short-term relief, as uncertainty persists for global businesses navigating trade tensions, supply chains, and long-term planning.

The potential global ripple effects of these tariffs—if and when enacted—are still expected to disrupt markets, drive up import costs, and impact GDP growth.

Many foreign governments are weighing retaliation, and organizations across sectors remain on high alert. Even with the pause, economists are already adjusting their 2025 outlooks, predicting a slowed growth rate of 2%, down from 2.4% in 2024.

In this environment of watchful waiting and mounting complexity, companies aren’t standing still. Many are taking proactive steps now—revisiting sourcing strategies, financial models, and operational plans—to stay agile and mitigate risk before the policy clock starts again.

This whitepaper outlines the key considerations for businesses navigating this critical window: how to respond to uncertainty, protect margins, and build resilience across the enterprise.`;

const keyFindings = [
  "Pending implementation, all imports entering the U.S. from foreign entities and geographic regions were subject to a baseline 10% increase in IEEPA universal tariffs.",
  "Reciprocal tariffs were proposed to range from 29% to 54%, depending on the country.",
  "China, Vietnam, South Korea, Japan, and the EU were expected to be hit hardest by the increases, with China now facing a 125% tariff on imports to the U.S.",
  "Canada and Mexico were slated for a baseline 25% tariff increase over the original universal baseline.",
  "Tariff regulations under Section 232 remain in effect and continue to apply as previously enacted."
];

export default function RiskPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">U.S. Global Trade and Tariff Policy: Implications and Economic Impact</h1>
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Executive Summary</h2>
        <p className="text-gray-700 mb-6 whitespace-pre-line">{executiveSummary}</p>
        <h3 className="text-md font-semibold mb-2 text-gray-800">Simplifying the Complex: Tariff Key Findings</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          {keyFindings.map((finding, idx) => (
            <li key={idx}>{finding}</li>
          ))}
        </ul>
        <a href="https://rgp.com/tariffs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read the full whitepaper at rgp.com/tariffs</a>
      </div>
      {/* Data Estate for Sustainable Investment Decisions */}
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Building a Robust Data Estate for Sustainable Investment Decisions</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Define Clear Objectives:</strong> Identify critical financial and ESG metrics, current data challenges, and how data supports your sustainability strategy.
          </li>
          <li>
            <strong>Perform a Data Inventory and Audit:</strong> Document all internal (financial, performance, compliance) and external (market, ESG, regulatory) data sources, plus real-time feeds.
          </li>
          <li>
            <strong>Sketch Your Data Architecture:</strong> Decide on data warehouse, data lake, or hybrid; ensure scalability; plan ETL/ELT integration pipelines; and visualize your data flow.
          </li>
          <li>
            <strong>Establish Data Governance and Quality Standards:</strong> Implement validation, cleaning, access controls, security, and thorough documentation for transparency and compliance.
          </li>
          <li>
            <strong>Select the Right Tools and Technologies:</strong> Choose cloud platforms (AWS Redshift, BigQuery, Azure Synapse), ETL/ELT tools, and analytics/visualization solutions (Power BI, Tableau, custom dashboards).
          </li>
          <li>
            <strong>Build Your Team or Partner with Experts:</strong> Assemble data architects, engineers, analysts, and compliance specialists, or partner with experienced vendors.
          </li>
        </ol>
        <div className="mb-4">
          <strong>Summary Checklist:</strong>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
            <li>Define Objectives: Identify metrics, challenges, and outcomes.</li>
            <li>Data Inventory: List all data sources and assess quality/gaps.</li>
            <li>Design Architecture: Choose warehouse/lake, plan integration, sketch diagram.</li>
            <li>Data Governance: Set up validation, security, and documentation.</li>
            <li>Select Tools/Platforms: Pick cloud, integration, and analytics tools.</li>
            <li>Build a Team or Partner Up: Gather experts or strategic partners.</li>
          </ul>
        </div>
        <p className="text-gray-700 mt-4">Starting with these steps ensures your data estate supports informed, sustainable investment decisions and evolves with new trends and regulations.</p>
        <div className="mt-6">
          <em>Would you like to drill down further into any of these steps—such as technology recommendations or a detailed data flow diagram?</em>
        </div>
      </div>
    </main>
  );
}