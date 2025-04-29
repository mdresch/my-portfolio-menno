'use client'; // Assuming potential for client-side interactions later

import React from 'react';
import Link from 'next/link'; // Optional: If you link back or to a form

export default function RiskSolutionsPage() {
  // Data for the table
  const solutionsData = [
    {
      risk: "Shifting global trade flows",
      overview: "The global trade architecture is changing, and businesses need to understand the implications of this shift to be best positioned for growth.",
      sectors: "Organizations with long investment horizons and supply chains or key supplier dependencies, including energy, manufacturing, and infrastructure.",
      offerings: ["Contract frustration insurance", "Risk advisory", "Trade credit insurance", "Cyber insurance", "Sentrisk"]
    },
    {
      risk: "A breakdown in systemic constraints and less predictable leaders",
      overview: "While scenario planning is vital, most organizations tend to simply forecast “rational” outcomes based on structural factors and do not fully consider the impact of individual leaders.",
      sectors: "Organizations in sectors that are most at risk or exposed to unpredictable geopolitical developments, including energy, mining, marine, and aviation.",
      offerings: ["Political risk insurance", "War and strikes risk insurance", "World Risk Review", "Strategic risk consulting"]
    },
    {
      risk: "Implications of record public debt levels",
      overview: "Worldwide public debt and business insolvency rates are likely to remain elevated in 2025. This fragile structure is not well-equipped to absorb any potential geopolitical shocks.",
      sectors: "Organizations with strained balance sheets or exposure to high debt or deficit countries or counterparties may be most at risk. This includes the construction, infrastructure, hospitality, and transport sectors.",
      offerings: ["Structured credit insurance", "Trade credit insurance", "Surety", "World Risk Review"]
    },
    {
      risk: "Expanding use of countervailing measures",
      overview: "Export controls or trade bans are increasingly being imposed on specific companies in response to trade policies of other governments, potentially imperilling supply chains.",
      sectors: "Multinational organizations in potentially politically sensitive sectors, such as manufacturing, textiles, high-tech, automotive, critical minerals, and defense.",
      offerings: ["Contract frustration insurance", "Sentrisk", "Strategic risk consulting"]
    },
    {
      risk: "Optionality",
      overview: "While optionality has become a key strategy for managing unstable geopolitical conditions and commodity markets, the approach can also exacerbate political risks.",
      sectors: "Sectors exposed to geopolitical shocks and commodity market dynamics, such as energy, mining, and finance.",
      offerings: ["Business interruption insurance", "Contract frustration insurance", "Political risk insurance", "World Risk Review"]
    },
    {
      risk: "Political risks to carbon credits and debt-for-nature swaps",
      overview: "In 2024, carbon credit markets (CCMs) and debt-for-nature swaps (DFNSs) gained legitimacy. Yet, non-delivery remains a core risk for buyers.",
      sectors: "Companies buying carbon credits in a compliance (e.g., CORSIA, ETS) or voluntary market, or investors in DFNSs.",
      offerings: ["Carbon credit-specific insurance", "Non-delivery insurance", "Political risk insurance"]
    },
    {
      risk: "Climate policy and regulatory obligations",
      overview: "Meeting compliance obligations can be complex and costly. As political priorities shift, new uncertainties may surround the implementation timeline and permanence of climate regulations.",
      sectors: "Organizations trading soft commodities (e.g., coffee, beef, palm oil), as well as energy, industrial manufacturing, and construction sectors.",
      offerings: ["Enterprise risk management advisory", "Risk advisory", "Sentrisk"]
    }
  ];


  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Risk and Insurance Mitigation Solutions
        </h1>
        <p className="text-lg text-gray-600">Leveraging Expertise to Navigate Geopolitical Uncertainty</p>
      </header>

      <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Marsh, our teams help organizations measure, manage, and minimize risks while anticipating future challenges and seizing opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide specialist advice and solutions to companies and lenders, enabling them to protect assets, seek to enhance investment returns, and unlock growth opportunities across industries and geographies.
            </p>
          </div>
          <div className="text-center md:text-left bg-blue-50 p-6 rounded-lg border border-blue-200">
             <p className="text-blue-800 font-semibold mb-3">Interested in learning more?</p>
             {/* Replace with actual link to contact form/page */}
             <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded hover:bg-blue-700 transition duration-200 text-sm">
                Connect with a Specialist
             </Link>
             <p className="text-xs text-blue-600 mt-2">Fill out the form to find out more.</p>
          </div>
        </div>
      </section>

      {/* --- Solutions Table --- */}
      <section className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/5">
                Risk Overview
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-2/5">
                Impacted Sectors
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-2/5">
                Key Marsh Offerings
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {solutionsData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 align-top">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.risk}</p>
                  <p className="text-xs text-gray-600">{item.overview}</p>
                </td>
                <td className="px-6 py-4 text-xs text-gray-600 align-top">
                  {item.sectors}
                </td>
                <td className="px-6 py-4 align-top">
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                    {item.offerings.map((offering, oIndex) => (
                      <li key={oIndex}>{offering}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Optional: Link back to main risk page or home */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 hover:underline mr-4">
          ← Back to Risk Overview
        </Link>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}