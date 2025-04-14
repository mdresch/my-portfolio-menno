'use client'; // Assuming potential for client-side interactions later

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

// Helper component for content cards
const ContentCard = ({ type, time, title, href, imgSrc, imgAlt }: { type: string, time: string, title: string, href: string, imgSrc?: string, imgAlt?: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row mb-4 border border-gray-200">
    {/* Placeholder for Image */}
    <div className="w-full md:w-1/4 h-32 md:h-auto bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
      {imgSrc ? <Image src={imgSrc} alt={imgAlt || title} width={150} height={100} className="object-cover w-full h-full" /> : '[Image Placeholder]'}
    </div>
    <div className="p-4 flex flex-col justify-between flex-grow w-full md:w-3/4">
      <div>
        <p className="text-xs text-gray-500 uppercase mb-1">{type} • {time}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      </div>
      <Link href={href} className="text-blue-600 hover:underline font-medium text-sm self-start mt-2">
        Read More →
      </Link>
    </div>
  </div>
);


export default function GlobalRiskManagementSurveyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Global Risk Management Survey 2023/2024
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Business leaders are grappling with traditional risks in new guises across both risk and human capital. Explore the full 2023/2024 report now.
        </p>
      </header>

      {/* --- Perennial Risks, New Reality --- */}
      <section id="introduction" className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perennial Risks, New Reality</h2>
        <p className="text-gray-700 leading-relaxed">
          Trade, technology, weather and workforce stability are the central forces in today’s risk landscape. While each of these forces are individually impacting risk exposures, their increasing interconnectedness is adding to the complexity of risk and presenting new challenges to business leaders. In a period of rapid change and heightened volatility, finance, risk, and people leaders need to come together to better understand how these risks connect.
        </p>
      </section>

      {/* --- Jump to Section (Simplified) --- */}
      <nav className="max-w-3xl mx-auto mb-12 p-4 bg-gray-100 rounded-lg text-center">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase">Jump to Section</h3>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          <a href="#key-findings" className="text-blue-600 hover:underline">Key Findings</a>
          <a href="#top-10-risks" className="text-blue-600 hover:underline">Top 10 Global Risks</a>
          {/* Industry Insights link omitted as no content provided */}
          <a href="#trade-insights" className="text-blue-600 hover:underline">Trade Insights</a>
          <a href="#regional-results" className="text-blue-600 hover:underline">Regional Results</a>
          <a href="#additional-insights" className="text-blue-600 hover:underline">Additional Insights</a>
          <a href="#methodology" className="text-blue-600 hover:underline">Methodology</a>
        </div>
      </nav>

      {/* --- Key Findings --- */}
      <section id="key-findings" className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Findings</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-3">The Compounding Effect of Human Capital Risks</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          As organizations’ exposure to individual risks intensifies and evolves, so too do the connections between them. Business leaders are feeling the impact of the true cost of human capital challenges, and the reality that people risk intensifies all other top business risks. Consequently, organizations’ preparedness efforts must follow suit, even amid economic and staffing challenges. But how are participants responding to this challenge?
        </p>
        {/* Placeholder for Video */}
        <div className="my-6 p-4 border border-dashed border-gray-300 text-center text-gray-500 text-sm aspect-video flex items-center justify-center">
          [Placeholder: Video Player - A23173 GRMS Report Promo]
        </div>
        <Link href="#" className="text-blue-600 hover:underline font-medium">
          Learn More → {/* Placeholder Link */}
        </Link>
      </section>

      {/* --- Top 10 Global Risks --- */}
      <section id="top-10-risks" className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top 10 Global Risks Facing Organizations Today</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The world is more volatile and the macroeconomic environment in which risks must be managed is in constant flux. The velocity of risk evolution, which in many areas was triggered by the pandemic, continues to intensify and forge greater interconnectivity between risks. Click on a risk to find out why it is top of mind for organizations, and for suggestions on how to help mitigate it.
        </p>
        {/* Consider making these clickable links if sub-pages exist */}
        <ol className="list-decimal list-outside space-y-2 text-gray-700 mb-6 pl-6 font-medium">
          <li>Cyber Attack or Data Breach</li>
          <li>Business Interruption</li>
          <li>Economic Slowdown or Slow Recovery</li>
          <li>Failure to Attract or Retain Top Talent</li>
          <li>Regulatory or Legislative Changes</li>
          <li>Supply Chain or Distribution Failure</li>
          <li>Commodity Price Risk or Scarcity of Materials</li>
          <li>Damage to Brand or Reputation</li>
          <li>Failure to Innovate or Meet Customer Needs</li>
          <li>Increasing Competition</li>
        </ol>
        <div className="text-center mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-4xl font-bold text-blue-700">2,842</p>
          <p className="text-sm text-gray-600">Number of participants in the Global Risk Management Survey across 61 countries and territories.</p>
        </div>
      </section>

      {/* --- Trade Insights --- */}
      <section id="trade-insights" className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Trade Insights</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Trade Collection</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our Trade Collection gives you access to the latest insights from Aon's thought leaders on navigating the evolving risks and opportunities for international business.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Reach out to our team to understand how to make better decisions around macro trends and why they matter to businesses.
          </p>
          <div className="mt-4">
             <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 text-sm">
                Contact Our Team {/* Assuming a contact page exists */}
             </Link>
          </div>
        </div>

        {/* Related Content Cards */}
        <div className="space-y-6">
          <ContentCard type="Podcast" time="9 mins" title="Special Edition: Global Trade and its Impact on Supply Chain" href="/risk/podcast-special-edition-trade" />
          <ContentCard type="Article" time="8 mins" title="The Evolving Threat of Cargo Theft: 5 Key Mitigation Strategies" href="/risk/cargo-theft-mitigation" />
          <ContentCard type="Report" time="3 mins" title="Global Risk Management Survey" href="/risk/global-risk-management-survey" /> {/* Link to self? Adjust if needed */}
          <ContentCard type="Report" time="13 mins" title="Wide-Ranging Trade Issues Confront Global Businesses on Multiple Fronts" href="/risk/deep-dirve-trade" />
          <ContentCard type="Article" time="6 mins" title="Four Steps to Develop Strong Property Risk Coverage in a Hardening Market" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="14 mins" title="Cutting Supply Chains: How to Achieve More Reward with Less Risk" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="9 mins" title="Driving Private Equity Value Creation Through Credit Solutions" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="7 mins" title="4 Steps to Help Take Advantage of a Buyer-Friendly Directors' & Officers' Market" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="9 mins" title="Managing Reputational Risks in Global Supply Chains" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="6 mins" title="How an Outsourced Chief Investment Officer Can Help Improve Governance and Manage Complexity" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="8 mins" title="Decarbonizing Your Business: Finding the Right Insurance and Strategy" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="8 mins" title="Reputation Analytics as a Leading Indicator of ESG Risk" href="#" /> {/* Placeholder Link */}
        </div>
      </section>

      {/* --- Regional Results --- */}
      <section id="regional-results" className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Regional Results</h2>
        <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          How do the top risks on business leaders’ minds differ by region and how can these risks be mitigated? Explore the regional results to learn more.
        </p>
        {/* Placeholder for Start Collection Button */}
        <div className="text-center mb-8">
          <Link href="#" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200">
            Start Collection {/* Placeholder Link */}
          </Link>
        </div>

        {/* Regional Content Cards */}
        <div className="space-y-6">
          <ContentCard type="Article" time="12 mins" title="Top Risks Facing Organizations in Asia Pacific" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="12 mins" title="Top Risks Facing Organizations in North America" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="10 mins" title="Top Risks Facing Organizations in Europe" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="8 mins" title="Top Risks Facing Organizations in Latin America" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="8 mins" title="Top Risks Facing Organizations in the Middle East and Africa" href="#" /> {/* Placeholder Link */}
          <ContentCard type="Article" time="9 mins" title="Top Risks Facing Organizations in the United Kingdom" href="#" /> {/* Placeholder Link */}
        </div>
      </section>

      {/* --- Additional Insights --- */}
      <section id="additional-insights" className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Insights</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-3">Captive Insurance: Uptick in Use Reflects Market Realities</h3>
        {/* Placeholder for Image */}
        <div className="my-6 p-4 border border-dashed border-gray-300 text-center text-gray-500 text-sm aspect-[4/1] flex items-center justify-center">
          [Placeholder: Captive Insurance Image]
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          As more companies become comfortable using captives and understanding the value they add, captives are likely to become further embedded into corporate risk strategies, regardless of market conditions.
        </p>
        <Link href="#" className="text-blue-600 hover:underline font-medium">
          Learn More → {/* Placeholder Link */}
        </Link>
      </section>

      {/* --- Methodology --- */}
      <section id="methodology" className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Methodology</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          Aon’s ninth Global Risk Management Survey, a biennial web-based research report, was conducted in June to July 2023 in 11 languages. The research gathered the responses from 2,842 decision makers.
        </p>
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