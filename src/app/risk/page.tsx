'use client'; // Assuming potential for client-side interactions later

import React from 'react';
import Link from 'next/link'; // Optional: If you link to a full report
import InteractiveRiskMap from '@/components/risk/InteractiveRiskMap'; // Adjust path

export default function RiskPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Navigating Global Risk in 2025</h1>
        <p className="text-lg text-gray-600">Adapting Risk Management to Today's Geopolitical Landscape</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Is your organization equipped to adapt its risk management strategies in response to today's complex and rapidly evolving geopolitical landscape? Understanding global risk is more critical than ever for maintaining resilience and making sound strategic decisions.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Insights from the 2025 World Risk Review</h2>
          <p className="text-gray-700">
            Drawing on our comprehensive analysis of 197 countries and territories, the World Risk Review provides a succinct summary of the most crucial risk information you need for 2025.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leverage the Report to:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
          <li>
            <strong>Gain a comprehensive understanding</strong> of risk trends to inform your risk management strategies.
          </li>
          <li>
            <strong>Make informed decisions</strong> about expanding into new regions or markets, protecting existing supply chains, and mitigating uncertainty.
          </li>
          <li>
            <strong>Identify potential risks and opportunities</strong> that may impact your employees, assets, operations, and supply chain.
          </li>
          <li>
            <strong>Learn actionable steps</strong> your organization can take now to build and maintain resilience against geoeconomic and geopolitical uncertainties.
          </li>
        </ul>

        {/* Optional: Add a call to action if there's a report to link to */}
        {/* <div className="text-center mt-8">
          <Link href="/path/to/full-report" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200">
            Access the Full 2025 Report
          </Link>
        </div> */}

        <div className="mt-10 text-center text-sm text-gray-500">
          Prepare your organization for the challenges and opportunities of the year ahead.
        </div>
      </section>

      {/* --- Wide-Ranging Trade Issues Section --- */}
      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Wide-Ranging Trade Issues Confront Global Businesses</h2>
         <p className="text-gray-700 mb-4 leading-relaxed">
           Trade is the lifeblood of the global economy, but supply chain challenges are creating concerns for business leaders in 2024 and beyond. The M&A landscape is also facing interconnected risks, with signs of optimism on the horizon in a rebounding market.
         </p>
         <p className="text-gray-700 mb-4 leading-relaxed">
           Global trade patterns are experiencing structural shifts, causing tensions and significant supply chain challenges for businesses — from geopolitical instability, trade restrictions and inflation, to climate risk, currency fluctuations and an evolving labor market.
         </p>
         <p className="text-gray-700 mb-4 leading-relaxed">
           These interconnected risks create a complex global trade environment, unsurprisingly landing as a top concern for business leaders. Meanwhile, on the financial transactions side, optimism is returning to the mergers and acquisitions (M&A) landscape after several years of limited activity.
         </p>
         <p className="text-gray-700 leading-relaxed">
           While the topic of trade is multifaceted and broad, there are opportunities that business leaders can pursue to make better decisions that will help organizations stay ahead of emerging dynamics now and in the future.
         </p>
      </section>

      {/* --- Trade Insights Collection Section --- */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trade Insights Collection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our Trade Collection gives you access to the latest insights from Aon's thought leaders on navigating the evolving risks and opportunities for international business.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Reach out to our team to understand how to make better decisions around macro trends and why they matter to businesses.
        </p>
        {/* Optional: Add a contact link/button */}
        <div className="mt-6">
           <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded hover:bg-blue-700 transition duration-200 text-sm">
              Contact Our Team
           </Link>
        </div>
      </section>


      {/* --- Explore Key Risk Areas & Solutions Section --- */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Explore Key Risk Areas, Insights & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Supply Chain Top 25 Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-red-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Gartner Supply Chain Top 25 for 2024</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the renowned annual ranking of the world's superior supply chains, featuring companies that deliver beyond products—understanding customer value, investing in demand management, and promoting ESG innovation.
            </p>
            <Link href="/risk/supply-chain-top-25" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              View Rankings →
            </Link>
          </div>

          {/* Gartner Regulatory Risk Survey Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-red-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Gartner: Unsettled Regulatory Environment Tops Emerging Risks</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Survey of 266 senior enterprise risk executives reveals that regulatory uncertainty has become the top emerging risk concern in Q1 2025, driven by political shifts and divergent AI regulation approaches.
            </p>
            <Link href="/risk/gartner-regulatory-risk-survey" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Survey Findings →
            </Link>
          </div>

          {/* Geopolitical Nerve Center Card - NEW FEATURE */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-red-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">FEATURED</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Navigating Tariffs with a Geopolitical Nerve Center</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Learn how a nerve center can help companies chart a course through expanding tariffs and trade controls by orchestrating nine rapid actions, from tariff operations to supplier diversification.
            </p>
            <Link href="/risk/geopolitical-nerve-center" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Article →
            </Link>
          </div>

          {/* Global Business Complexity Index Card - NEW FEATURE */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Business Complexity Index</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Understand and navigate global regulatory complexity with our comprehensive index ranking 77 jurisdictions based on business complexity across regulatory, tax, corporate, and HR dimensions.
            </p>
            <Link href="/risk/global-business-complexity-index" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore the Index →
            </Link>
          </div>
          
          {/* Shifting Trade Flows Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Shifting Trade Flows</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Analyze the evolution towards disruption and protectionism in global trade, the rise of "connector" countries, and the implications for supply chain resilience.
            </p>
            <Link href="/risk/shifting-trade-flows" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Learn More →
            </Link>
          </div>

          {/* Mitigating Geopolitics Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mitigating Geopolitics on Operations</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Understand how declining systemic constraints, the growing role of individual leaders, record public debt, and countervailing measures exacerbate operational risks.
            </p>
            <Link href="/risk/mitigating-geopolitics" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Learn More →
            </Link>
          </div>

          {/* Energy Transition Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Energy Transition Political Risks</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Examine the political risks associated with carbon credit markets (CCMs), debt-for-nature swaps (DFNSs), and the changing landscape of climate regulations.
            </p>
            <Link href="/risk/energy-transition-political-risks" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Learn More →
            </Link>
          </div>

          {/* Solutions Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Mitigation Solutions</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Discover specialist advice and insurance solutions designed to help organizations measure, manage, and minimize geopolitical risks while seizing opportunities.
            </p>
            <Link href="/risk/solutions" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore Solutions →
            </Link>
          </div>

          {/* --- NEW: Global Risk Management Survey Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Risk Management Survey</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the 2023/2024 report findings on how interconnected risks like trade, technology, weather, and workforce stability are challenging business leaders.
            </p>
            <Link href="/risk/global-risk-management-survey" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              View Survey Insights →
            </Link>
          </div>

          {/* --- NEW: Cargo Theft Mitigation Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cargo Theft Mitigation</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Learn about the evolving threat of cargo theft and discover 5 key strategies, including technology and vetting, to protect your supply chain.
            </p>
            <Link href="/risk/cargo-theft-mitigation" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Mitigation Strategies →
            </Link>
          </div>

          {/* --- NEW: Podcast: Trade & Supply Chain Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Podcast: Trade & Supply Chain</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Listen to Aon experts discuss the impact of global conflicts on supply chains and strategies for proactive risk management in this special edition podcast.
            </p>
            <Link href="/risk/podcast-special-edition-trade" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Listen to Podcast →
            </Link>
          </div>

          {/* --- Deep Dive on Trade Card (Existing, modified slightly) --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Deep Dive: Trade Risks</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the complex landscape of global trade risks, including geopolitical instability, economic tensions, supply chain vulnerabilities, and M&A dynamics.
            </p>
            <Link href="/risk/deep-dirve-trade" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read the Deep Dive →
            </Link>
          </div>

          {/* --- TTIP Case Study Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">CASE STUDY</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Transatlantic Trade and Investment Partnership</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Analyze the rise and fall of TTIP, a proposed EU-US trade agreement that aimed to create the world's largest bilateral trade initiative, its regulatory implications, and lessons for future trade agreements.
            </p>
            <Link href="/risk/transatlantic-trade-partnership" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Analysis →
            </Link>
          </div>

        </div>
      </section>

      {/* --- Interactive Map Section --- */}
      <section id="interactive-map" className="my-12">
         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Regional Risk Hotspots</h2>
         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
           Explore hypothetical top risks based on the Global Risk Management Survey regions by hovering over representative countries on the map. (Data is illustrative).
         </p>
         <InteractiveRiskMap />
      </section>

       {/* Link back to home */}
       <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}