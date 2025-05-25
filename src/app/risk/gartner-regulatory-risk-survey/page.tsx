'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GartnerRegulatoryRiskSurveyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Risk Management</span>
          </Link>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-500 text-sm mb-2">GARTNER RESEARCH</p>
          <h1 className="text-4xl font-bold mb-2">Unsettled Regulatory and Legal Environment Tops Emerging Risks</h1>
          <p className="text-xl text-gray-700 mb-4">
            Survey of 266 Senior Enterprise Risk Executives Reveals Shifts in Top Five Emerging Risks
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <p>Stamford, Conn.</p>
            <span className="mx-2">|</span>
            <p>April 8, 2025</p>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p>
            Concerns regarding the unsettled regulatory and legal environment moved into the top rank of emerging risks for the first quarter of 2025, according to a Gartner, Inc. survey of enterprise risk leaders.
          </p>
          <p>
            The survey of 266 senior risk and assurance executives – taken in the first quarter of 2025 – revealed that the unsettled regulatory and legal environment, which is marked by increasing compliance complexity and costs due to regulatory authority changes, moved from the third most cited spot in 3Q24 and 4Q24 to rank as the most cited in 1Q25.
          </p>

          {/* Top Emerging Risks Chart */}
          <div className="my-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Figure 1: Top Emerging Risks of Q1 2025</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm my-4">
              <div className="h-[300px] w-full flex items-center justify-center border border-gray-200">
                <p className="text-gray-500">Risk visualization chart will be implemented here</p>
              </div>
              <p className="text-sm text-gray-500 text-right mt-2">Source: Gartner (April 2025)</p>
            </div>
          </div>

          <p>
            "The global political arena is seeing transformative shifts, driven by elections that have ushered new governments into power across key economies, making the issue one that executives want to better understand and address before they face real consequences," said Gamika Takkar, Director, Research, Key Initiative Leader for the Gartner Risk & Audit Practice.
          </p>

          <h2 className="text-2xl font-bold mt-8">Root Causes of the Unsettled Regulatory and Legal Environment</h2>
          <p>
            In addition to the unsettled regulatory and legal environment after the U.S. election, Europe and other regions are preparing for consequential elections that could also reshape regulatory landscapes. These political transitions carry the potential to redefine compliance frameworks, posing challenges for businesses striving to adapt to new legal realities.
          </p>
          <p>
            Adding to the complexity is the divergent approach to artificial intelligence (AI) regulation across regions. While some governments champion AI innovation through flexible regulatory measures, others intensify scrutiny, complicating the compliance landscape for companies operating globally. This regulatory tug-of-war leaves businesses grappling with the challenge of aligning their AI strategies with disparate legal requirements.
          </p>

          <h2 className="text-2xl font-bold mt-8">Potential Consequences</h2>
          <p>
            The consequences of an unsettled regulatory and legal environment affect every aspect of business operations. As new administrations take the helm, the focus on regulatory scrutiny and enforcement can shift dramatically. In certain jurisdictions, rules that were once rigorously enforced may fall by the wayside, leaving businesses in a state of flux as they attempt to anticipate and respond to these changes.
          </p>
          <p>
            The financial burden of compliance is also evolving as different standards across borders reshape the cost landscape. Companies may be compelled to hire specialized staff or adapt their operations to adhere to varying regulations. This financial strain can impact profitability, forcing businesses to reevaluate their strategies and resource allocation in the face of mounting compliance costs.
          </p>

          <h2 className="text-2xl font-bold mt-8">Assessing Risk Exposure and Navigating Policy Uncertainty</h2>
          <p>
            To effectively navigate these challenges, organizations should assess their risk exposure in four critical policy areas:
          </p>

          <div className="my-6 bg-gray-50 p-6 rounded-lg">
            <ol className="list-decimal list-inside space-y-4">
              <li className="font-semibold">
                Trade, tariffs, and supply chain disruptions: 
                <p className="font-normal ml-6 mt-1">Companies must prepare for critical input shortages, retaliatory tariffs, shifts in trade routes, increased production costs, capital investment uncertainty, exchange rate volatility, and lower consumer demand.</p>
              </li>
              <li className="font-semibold">
                Regulatory and legal volatility: 
                <p className="font-normal ml-6 mt-1">Rapid changes in industry-specific regulations, uncertain legal and compliance costs, shifting tax policy, changes in federal spending, and evolving AI regulation require vigilant monitoring and adaptation.</p>
              </li>
              <li className="font-semibold">
                Shifting geopolitical landscape: 
                <p className="font-normal ml-6 mt-1">Reduced government spending on foreign aid, employee safety concerns, business continuity challenges, and critical shipping lane disruptions necessitate strategic planning and risk mitigation efforts.</p>
              </li>
              <li className="font-semibold">
                Immigration and workforce changes: 
                <p className="font-normal ml-6 mt-1">Shifting talent availability, productivity losses, weakened critical expertise, labor cost uncertainty, and legal and compliance changes demand agile workforce strategies.</p>
              </li>
            </ol>
          </div>

          <p>
            "Businesses can better position themselves to adapt to these emerging threats by prioritizing potential disruptions and shifting resources to mitigate risks," said Takkar.
          </p>

          <div className="my-8 bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-semibold text-lg mb-2">Additional Resources</h3>
            <p>Gartner clients can access the study at <span className="text-blue-600">1Q25 Emerging Risk Report</span>.</p>
            <p>Nonclients can read: <span className="text-blue-600">Top Emerging Risk Trends Report</span>.</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">About the Gartner Enterprise Risk, Audit & Compliance Conference</h2>
          <p>
            Taking place on September 8-9, 2025 in Grapevine, Texas, the Gartner Enterprise Risk, Audit & Compliance Conference will cover the challenges mission-critical to enterprise risk, audit and compliance executives, across six topic areas: Third party risk management; Business risk ownership; Governance, risk and compliance tool; Compliance program effectiveness; Digital audit function; And emerging risk landscape. Follow news and updates from the conferences on X using the hashtag #GartnerLegal.
          </p>

          <h2 className="text-2xl font-bold mt-8">About Gartner for Legal, Risk & Compliance Leaders</h2>
          <p>
            Gartner for Legal, Risk and Compliance Leaders provides expert guidance and tools to help leaders across legal, risk, audit and compliance departments more effectively manage an increasingly complex risk landscape and build next-generation functions. Additional information is available at gartner.com/en/audit-risk and gartner.com/en/legal-compliance. Follow news and updates on LinkedIn and X. Visit the Gartner Legal and Compliance Newsroom for more information and insights.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-10 mb-8 border-t border-gray-200 pt-6 text-gray-600">
          <p className="mb-1 text-sm">
            Press Contact: <span className="font-medium">Meghan Rimol</span>
          </p>
          <p className="mb-1 text-sm">
            Gartner Communications
          </p>
          <p className="mb-1 text-sm">
            <span className="font-medium">pr@gartner.com</span>
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="mt-10 flex justify-between">
          <Link href="/risk" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Risk Management
          </Link>
        </div>
      </div>
    </div>
  );
}