"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SupplyChainTop25MethodologyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk/supply-chain-top-25" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Supply Chain Top 25</span>
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Supply Chain Top 25: 2025 Updates and 2026 Input Invitation</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span className="text-sm">By Simon Bailey | December 17, 2024</span>
        </div>
      </header>

      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead mb-6">
            In 2025, Gartner's Supply Chain Top 25 marks its 21st edition as we continue to celebrate the crucial role of supply chains, uplift the profession and share leader insights. Each year we review the way we arrive at the ranking, take onboard feedback and refresh the methodology.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-8 italic text-gray-700">
            And each year, we aim to strike the right balance between stability and evolution, with an incremental approach that gives year-over-year comparability and keeps the methodology relevant as supply chains evolve. We also balance between editions, with a multiyear approach. For 2025, we're broadly maintaining stability and looking ahead to the 2026 cycle, we're inviting your input to help us shape the methodology for the future.
          </div>

          <p>
            So, let's discuss which companies get evaluated, what's staying the same, highlight one change for this year and look forward to the 2026 cycle too.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Which Companies Get Ranked?</h2>
          <p>
            Each year, we begin with companies from the Fortune Global 500 and Forbes Global 2000, narrowing them down to about 250 based on specific criteria. The criteria for 2025 remain the same:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Revenue:</strong> Companies must report at least $15 billion in revenue, converted to U.S. dollars.</li>
            <li><strong>Financial Data:</strong> We use public, audited financials from S&P Capital IQ, excluding most private companies and those without four years of data.</li>
            <li><strong>Industry:</strong> We focus on manufacturing, retail and distribution, excluding extractive industries, those tied to volatile commodities and service-based industries (unless asset-heavy with $1 billion in inventory).</li>
            <li><strong>Community Sentiment:</strong> Companies must meet peer and expert vote thresholds over five years. Experts review those excluded to determine if they should be reconsidered.</li>
            <li><strong>ESG Threshold:</strong> Companies need an "S&P ESG Score" above a set threshold by October's end.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2025 Methodology Updates</h2>
          <p>
            In 2024, we focused on the ESG component and reviewed the trusted third parties that we used to determine points in this area. We simplified the number of ways to get to 10 points down to just one path and increased the points for ESG performance.
          </p>

          <p>
            For 2025, we are making minimal changes to the Top 25 methodology. The weighting of components will stay identical to 2024, as outlined in the following figure.
          </p>

          <div className="my-8 flex justify-center">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center max-w-lg">
              <h3 className="font-semibold text-lg mb-2">2025 Gartner Supply Chain Top 25 Methodology</h3>
              <div className="grid grid-cols-2 gap-4 mt-4 text-left">
                <div className="bg-white p-4 rounded shadow">
                  <p className="font-medium">ESG Component (20%)</p>
                  <p className="text-sm text-gray-600">Environmental, Social and Governance performance</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="font-medium">ROPA (20%)</p>
                  <p className="text-sm text-gray-600">3-year weighted return on physical assets</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="font-medium">Inventory Turns (10%)</p>
                  <p className="text-sm text-gray-600">Annual cost of goods sold / quarterly inventory</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="font-medium">Revenue Growth (10%)</p>
                  <p className="text-sm text-gray-600">Compound annual growth rate over 3 years</p>
                </div>
                <div className="col-span-2 bg-white p-4 rounded shadow">
                  <p className="font-medium">Opinion Components (40%)</p>
                  <p className="text-sm text-gray-600">Peer Panel (15%) + Gartner Expert Panel (25%)</p>
                </div>
              </div>
            </div>
          </div>

          <p>
            The components themselves will all be calculated the same, with one exception. In the ESG component, we will change one point in the Social Performance area where we will replace the Bloomberg Gender Equality Index with a broader S&P ESG Social Score.
          </p>

          <p>
            The S&P ESG Social Score, out of 100, evaluates Community Relations, Societal Healthcare, Customer Relations, Financial Inclusion, Human Capital, Human Rights, Labor Practices, Health & Safety and Privacy Protection. Points are allocated based on an average score threshold.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Involved in 2025 and 2026</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">Take an Active Part in the Community Opinion</h3>
          <ul className="list-disc pl-6 my-4 space-y-3">
            <li>
              <p>
                Any company meeting the inclusion criteria can request to submit a Gartner Top 25 Supply Chain Research Information Packet (SCRIP) to make Gartner experts more aware of their latest initiatives. Companies that submit a SCRIP may also apply for the opportunity to conduct a one-hour virtual company briefing to share more information with the Gartner experts who are voting. The SCRIP submission window opens in November 2024 and the briefings can be scheduled from early January to 10 March 2025.
              </p>
            </li>
            <li>
              <p>
                <strong>Peer Panel:</strong> Supply chain professionals, excluding consultants and technology vendors, can apply to join the peer panel. We will assess each application to ensure we maintain a balanced representation across the globe and across industries, and that only one panelist per company gets to vote each year.
              </p>
            </li>
          </ul>
          <p>
            To learn more about the SCRIP and briefing process or to apply to become a peer panelist, email your name, position and company details to <a href="mailto:supplychaintop25@gartner.com" className="text-blue-600 hover:underline">supplychaintop25@gartner.com</a>.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Give Us Your Feedback for 2026</h3>
          <p>
            We're now seeking deeper community input for 2026 and beyond. We aim to balance stability and evolution with an incremental approach, ensuring year-over-year comparability and relevance as supply chains evolve. While we can't adopt every suggestion, we'll identify trends and incorporate those that help us gradually evolve the Top 25, maintaining its status as an equitable global ranking.
          </p>

          <p>
            As we consider the way supply chains will evolve, we see a few shifts occurring:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Enterprises are increasing looking outside their traditional value chains to a more ecosystem-based approach to capabilities and innovation.</li>
            <li>ESG reporting is moving from voluntary to mandatory.</li>
            <li>Technology shifts may enable us to interact with the community in different ways to gauge community opinion.</li>
          </ul>

          <p>
            Over the next six months, we'll gather feedback to potentially update the methodology by mid-2025, providing companies with advance notice of changes. If you'd like to help shape the future methodology, please complete this Gartner Supply Chain Top 25 Methodology Community Survey. The survey will remain open from December 2024 to the end of February 2025.
          </p>

          <p>
            And for fuller details on our Top 25 methodology, please see Top 25 2025 Methodology Changes and Invitation for Input for 2026 (subscription required).
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-100">
            <h3 className="text-xl font-medium mb-4">We Want Your Input</h3>
            <p className="mb-4">
              We aim for an equitable methodology, using metrics and data that are publicly available and relevant across regions and industries. So please give us your thoughts on the questions below and more in our survey.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Industry Inclusion:</strong> With rising supply-chain-as-a-service models and circular economy trends, do we need to relook at which industries we rank?
              </li>
              <li>
                <strong>Tangible Asset Utilization:</strong> We currently assess ROPA over three years. Should we consider longer-term innovation opportunities or find alternative ways to evaluate asset utilization?
              </li>
              <li>
                <strong>Working Capital:</strong> Should we expand beyond inventory management to consider the entire cash conversion cycle, and is this comparable across industries?
              </li>
              <li>
                <strong>Environmental, Social and Governance (ESG):</strong> As ESG disclosure becomes mandatory, what measures will still set leading supply chains apart? Should we broaden our focus to include nature and circularity?
              </li>
              <li>
                <strong>Community Opinion:</strong> What guidance should we provide to focus community and expert votes for the top 25 companies?
              </li>
              <li>
                <strong>Missing Measures:</strong> Are there areas of supply chain excellence we should quantify more, beyond the qualitative peer and expert panels?
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a href="https://www.gartner.com/survey/supply-chain-top-25-methodology" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200">
                Take the Survey
              </a>
            </div>
          </div>
        </div>
      </article>
      
      {/* Additional Resources */}
      <section className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-2">2024 Rankings</h3>
            <p className="text-sm mb-4">View the current Gartner Supply Chain Top 25 rankings</p>
            <Link href="/risk/supply-chain-top-25" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Rankings
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-2">Previous Methodologies</h3>
            <p className="text-sm mb-4">Compare how the methodology has evolved over time</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Archive
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-2">Full Report</h3>
            <p className="text-sm mb-4">Download the complete methodology document (subscription required)</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Download Report
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row justify-between">
        <Link href="/risk/supply-chain-top-25" className="mb-4 sm:mb-0 text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Supply Chain Top 25
        </Link>
        <Link href="/risk" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 justify-end">
          Back to Risk Management
        </Link>
      </div>
    </div>
  );
}