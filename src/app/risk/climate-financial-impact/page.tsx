'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ClimateRiskOverviewChart, 
  SectorExposureChart, 
  PhysicalRiskMapChart,
  TransitionRiskTimelineChart,
  CarbonPricingScenarioChart,
  InvestmentTrendsChart
} from '@/components/risk/ClimateFinancialCharts';

export default function ClimateFinancialImpactPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Climate Risk Financial Impact Assessment</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Long-term analysis of climate risks to financial stability</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          March 22, 2025 | Climate Finance Institute
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6 shadow-md border border-green-100 dark:border-green-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            This report examines the evolution of climate-related financial risks and their potential impact on global financial
            stability. As the physical effects of climate change intensify and the transition to a low-carbon economy accelerates,
            financial systems face both physical and transition risks that could lead to significant asset revaluations,
            credit losses, and market disruptions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Physical risk exposure is highly concentrated geographically and in specific sectors</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Transition risks may materialize suddenly if policy action is delayed</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Financial system exposure to high-carbon sectors exceeds $7 trillion globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section with Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Climate Risk Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Climate-related financial risks arise through two primary channels: physical risks and transition risks. 
              Physical risks stem from climate and weather-related events, potentially resulting in property damage, reduced 
              productivity, and supply chain disruptions. Transition risks emerge from the process of adjustment towards a 
              lower-carbon economy, influenced by changes in climate policy, technology, and consumer and investor preferences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Our analysis indicates that while physical risks are growing steadily as climate change progresses, 
              transition risks could manifest more suddenly, particularly if climate action is delayed and subsequent 
              policy responses need to be more abrupt and disruptive.
            </p>
          </div>
          <ClimateRiskOverviewChart />
        </div>
      </section>

      {/* Sectoral Exposure Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Sectoral Exposure to Climate Risks</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6">
          <SectorExposureChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 transition-colors">High Exposure Sectors</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The energy sector faces the highest combined exposure to climate risks, with significant transition 
              risks stemming from potential stranded assets in fossil fuel reserves and infrastructure. Utilities, 
              materials, and transportation sectors also show substantial exposure to both physical and transition risks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The agriculture sector faces particularly high physical risk exposure due to changing precipitation patterns, 
              temperature increases, and more frequent extreme weather events affecting crop yields and production stability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 transition-colors">Financial System Implications</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Financial institutions' lending and investment exposures to these high-risk sectors could lead to increased 
              credit losses, market volatility, and liquidity challenges. Our analysis estimates that global financial 
              system exposure to high-carbon sectors that face significant transition risks exceeds $7 trillion.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Insurance companies face dual challenges from climate change: increased claims from physical damage events 
              and potential devaluation of investment portfolios with high carbon exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Physical Risk Map Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Geographic Distribution of Physical Risks</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Physical risks from climate change are unevenly distributed globally, with coastal regions, areas prone to 
          extreme weather events, and regions dependent on climate-sensitive industries facing the highest exposure.
        </p>
        <div className="mb-8">
          <PhysicalRiskMapChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Coastal Vulnerability</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Rising sea levels and increased storm severity threaten coastal infrastructure worth over $2.5 trillion globally.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Agricultural Impacts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Changing precipitation patterns could reduce agricultural productivity by up to 30% in some regions by 2050.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Energy System Stress</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Increased cooling demand and reduced hydropower capacity could stress energy systems in many regions.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Risk Timeline Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Transition Risk Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The timing and speed of the low-carbon transition significantly influence the magnitude of financial impacts. 
              Our analysis models three potential transition pathways: orderly (early and gradual policy action), disorderly 
              (late and sudden policy action), and failed (insufficient policy action to meet climate goals).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              A disorderly transition presents the highest financial stability risks, as it would necessitate more 
              abrupt policy changes, leading to sudden asset revaluations and market disruptions. The financial impact 
              could be 2-3 times higher than in an orderly transition scenario.
            </p>
          </div>
          <TransitionRiskTimelineChart />
        </div>
      </section>

      {/* Carbon Pricing Impact Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Carbon Pricing Scenario Analysis</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Carbon pricing mechanisms are expected to expand globally and increase in price to meet climate targets. 
          We modeled the financial impact of different carbon pricing trajectories on corporate profitability and asset valuations.
        </p>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6">
          <CarbonPricingScenarioChart />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 transition-colors">Key Carbon Pricing Insights</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>A carbon price of $75-100/tCO₂e by 2030 is likely needed to align with net-zero pathways</li>
            <li>Energy and materials sectors could see profit impacts of 30-40% without significant business model changes</li>
            <li>Carbon pricing would create competitive advantages for companies with lower emissions intensities</li>
            <li>Regional differences in carbon pricing implementation could lead to carbon leakage and competitive distortions</li>
          </ul>
        </div>
      </section>

      {/* Sustainable Finance Trends Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Sustainable Finance Investment Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InvestmentTrendsChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Sustainable finance has grown rapidly, with global sustainable investment assets reaching $35.3 trillion in 2024. 
              This growth reflects increasing investor awareness of climate risks and opportunities, as well as expanding 
              regulatory requirements for climate risk disclosure and management.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              While this represents a positive trend for financing the low-carbon transition, challenges remain in ensuring 
              effective capital allocation to genuine climate solutions rather than "greenwashing." The development of robust 
              taxonomies, standards, and disclosure requirements is critical to supporting market integrity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Financial institutions are increasingly integrating climate considerations into risk management frameworks, 
              stress testing, and capital allocation decisions, though significant methodology and data challenges persist.
            </p>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-12 bg-green-50 dark:bg-green-950/30 rounded-lg p-6 shadow-md border border-green-100 dark:border-green-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Recommendations for Financial Stability</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 transition-colors">For Financial Institutions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Develop robust climate risk assessment methodologies for both physical and transition risks</li>
              <li>Conduct regular scenario analysis and stress testing using multiple climate pathways</li>
              <li>Integrate climate considerations into governance, strategy, and risk management frameworks</li>
              <li>Enhance disclosure of climate-related financial risks aligned with TCFD recommendations</li>
              <li>Develop transition plans to align portfolios with net-zero emissions by 2050</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 transition-colors">For Policymakers</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Implement clear, predictable policy pathways for the low-carbon transition</li>
              <li>Develop standardized climate risk disclosure requirements and taxonomies</li>
              <li>Integrate climate risks into financial regulatory frameworks and supervisory expectations</li>
              <li>Support development of climate-related data, metrics, and methodologies</li>
              <li>Consider macroprudential tools to address systemic climate-related financial risks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Climate change presents unprecedented challenges to the global financial system through both physical and transition risk channels. 
          The magnitude and timing of these risks depend significantly on climate policy pathways, technological developments, and adaptation measures.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          While significant progress has been made in understanding and measuring climate-related financial risks, considerable work remains 
          to fully integrate these considerations into financial decision-making and supervision. The orderly transition to a low-carbon 
          economy requires coordinated action from financial institutions, regulators, and policymakers to ensure financial stability 
          through this transformation.
        </p>
        <blockquote className="border-l-4 border-green-500 dark:border-green-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          "The financial risks from climate change are unprecedented in their breadth, magnitude, and potential for systemic impact. 
          Yet they also represent an opportunity to build a more resilient financial system that can support the transition to a sustainable economy."
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Climate Finance Institute, 2025</footer>
        </blockquote>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border border-green-100 dark:border-green-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report are available for download.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/climate-risk-data.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
          <a 
            href="/data/climate-risk-data.json"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">JSON Format</span>
          </a>
        </div>
      </section>

      {/* Related Reports Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Related Risk Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              <Link href="/risk/global-liquidity-trends" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Global Liquidity Trends Report
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">January 15, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global liquidity conditions, central bank interventions, and implications for financial market stability.
            </p>
            <Link 
              href="/risk/global-liquidity-trends" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
            >
              Read Report →
            </Link>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              <Link href="/risk/sovereign-debt-monitor" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Sovereign Debt Crisis Risk Monitor
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">November 5, 2024</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global sovereign debt levels, sustainability metrics, and potential triggers for sovereign debt crises.
            </p>
            <Link 
              href="/risk/sovereign-debt-monitor" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
            >
              Read Report →
            </Link>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Share This Report</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/climate-financial-impact&text=Climate Risk Financial Impact Assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-[#1a91da] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x mr-2" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
            <span>Share on X</span>
          </a>
          <a 
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/climate-financial-impact&title=Climate Risk Financial Impact Assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#0077B5] text-white rounded-md hover:bg-[#006699] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin mr-2" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            <span>Share on LinkedIn</span>
          </a>
          <a 
            href="mailto:?subject=Climate Risk Financial Impact Assessment&body=Check out this report on climate-related financial risks: https://example.com/risk/climate-financial-impact"
            className="flex items-center px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Share via Email</span>
          </a>
        </div>
      </section>

      {/* References Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sources</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
          <li>Climate Finance Institute. (2025). Climate-Related Financial Risk Assessment Framework.</li>
          <li>Network for Greening the Financial System. (2024). Climate Scenarios for Central Banks and Supervisors.</li>
          <li>Task Force on Climate-related Financial Disclosures. (2025). Status Report.</li>
          <li>International Monetary Fund. (2024). Global Financial Stability Report: Climate Change and Financial Stability.</li>
        </ol>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-green-600 dark:text-green-400 hover:underline hover:text-green-800 dark:hover:text-green-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}