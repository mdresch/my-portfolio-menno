import React from "react";

export default function SubstanceGlobalTradeTaxationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Substance in Global Trade & Taxation</h1>
        <p className="text-lg text-gray-600">Understanding the importance of genuine economic activity for tax and trade benefits</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Substance?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Substance is a crucial concept in international trade and taxation, referring to the genuine economic activity that a company must demonstrate in a jurisdiction to benefit from favorable tax treatment or trade agreements. Tax authorities and regulators worldwide have tightened scrutiny, ensuring businesses meet substance requirements to prevent tax avoidance or profit shifting.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Aspects of Substance</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><b>Physical Presence:</b> Companies must have actual operations, such as offices, factories, or distribution centers, in the jurisdiction they claim tax benefits from.</li>
          <li><b>Local Employment & Decision-Making:</b> A business must employ local staff and make significant management decisions within the country to prove it’s not just a "shell company."</li>
          <li><b>Operational Activities:</b> There should be real business transactions taking place—manufacturing, research, or service provision—rather than just passive income collection or financial transfers.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Impact on M&A & Trade Agreements</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><b>Mergers & Acquisitions (M&A):</b> Due diligence in M&A now includes assessing whether an acquired company has genuine substance, ensuring compliance with OECD BEPS regulations and avoiding disputes with tax authorities.</li>
          <li><b>Trade Policies & Free Trade Zones:</b> Governments require businesses in trade zones to maintain real substance before granting tariff exemptions or preferential trade status.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Challenges & Compliance Strategies</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><b>Jurisdictional Differences:</b> Different countries interpret substance requirements differently, making compliance complex for multinational firms.</li>
          <li><b>Increased Regulatory Enforcement:</b> Authorities actively audit firms, demanding proof of legitimate activities before granting tax benefits.</li>
          <li><b>Restructuring Strategies:</b> Companies must align their organizational structure with substance requirements, placing executives and key operations in locations where they claim benefits.</li>
        </ul>
      </section>
    </div>
  );
}
