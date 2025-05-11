"use client";
import React from "react";

export default function GeopoliticalRiskPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Geopolitical Risk and Supply Chain Resilience</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Geopolitical Risk</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Geopolitical risk refers to the potential for political, economic, or social instability in one or more countries to disrupt global markets, trade, and supply chains. In 2025, ongoing conflicts, shifting alliances, and regulatory changes are increasing the complexity and unpredictability of global supply chains.
        </p>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li>Regional conflicts and sanctions impacting the flow of goods and raw materials.</li>
          <li>Trade policy shifts and new tariffs creating uncertainty for global businesses.</li>
          <li>Cybersecurity threats and state-sponsored attacks on critical infrastructure.</li>
          <li>Political instability and regime changes affecting supplier reliability.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Supply Chain Resilience Strategies</h2>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li>Diversify suppliers and sourcing regions to reduce dependency on any single country.</li>
          <li>Invest in real-time risk monitoring and scenario planning for geopolitical events.</li>
          <li>Strengthen relationships with logistics partners and local governments.</li>
          <li>Develop contingency plans for rapid response to disruptions.</li>
          <li>Enhance supply chain transparency and traceability using digital tools.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-3">Recent Developments (2024-2025)</h2>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li>Global companies are increasing investment in supply chain risk analytics and digital twins to model geopolitical scenarios.</li>
          <li>New regulations in the EU and US require greater disclosure of supply chain risks related to sanctioned regions.</li>
          <li>Ongoing conflicts in Eastern Europe and the Middle East are prompting businesses to re-evaluate sourcing and logistics strategies.</li>
        </ul>
      </section>
    </div>
  );
}
