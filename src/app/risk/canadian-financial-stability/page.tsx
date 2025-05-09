'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MortgageArrearsChart, 
  BusinessVulnerabilityChart, 
  BankCapitalRatioChart,
  AssetVolatilityChart,
  RiskAssessmentDashboard,
  HousingVulnerabilityChart,
  InternationalContagionChart,
  ClimateRiskChart
} from '@/components/risk/CanadianFinancialCharts';
import RiskReportCard from '@/components/risk/RiskReportCard';

export default function CanadianFinancialStabilityPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Canadian Financial Stability Report—2025</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Navigating Trade War Uncertainties</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          May 8, 2025 | Bank of Canada
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The Bank of Canada's Financial Stability Report 2025 indicates that while Canada's financial system remains resilient, 
            the recent trade war initiated by the United States poses significant risks to financial stability. Canadian households, 
            businesses, banks, and non-bank financial intermediaries have weathered the pandemic, inflation, and interest rate increases, 
            but US trade policy uncertainty threatens to test this resilience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Market volatility leading to liquidity challenges</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Export-dependent business defaults</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Job losses leading to household debt serviceability issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Landscape Section with Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Market Reaction to Trade Policy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Since January 2025, the unpredictability of US trade policy has caused a sharp increase in uncertainty and market volatility. 
              The new tariffs announced by the United States in early April were significantly larger than market participants had anticipated, 
              leading to sharp repricing in equity, bond, and currency markets as investors revised their economic outlooks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Benchmark equity indexes fell sharply before recovering almost entirely, while stock market volatility rose to its highest 
              level since the COVID-19 crisis. Sovereign bond yields in Canada and the United States saw large swings. Many investors 
              appeared to diversify away from US assets.
            </p>
          </div>
          <AssetVolatilityChart />
        </div>
      </section>

      {/* Risk Assessment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Financial System Risk Assessment</h2>
        <RiskAssessmentDashboard />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Banking System Resilience</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Canadian banks remain well positioned to support the financial system and the broader economy, even through a period of financial stress. 
              They have good access to funding through deposits and wholesale markets, and credit performance has been strong. 
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Banks have increased their accumulated provisions—funds set aside for anticipated loan losses—and they maintain elevated levels of capital 
              to absorb unexpected losses. They also continue to hold sufficient liquidity to meet their short-term obligations.
            </p>
          </div>
          <BankCapitalRatioChart />
        </div>
      </section>

      {/* International Financial Contagion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">International Financial Contagion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The global financial system is highly interconnected, with shocks in one region often spreading rapidly to others. 
              Canada's economy is particularly sensitive to developments in the United States due to deep trade and financial linkages.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The current trade war increases the risk of financial contagion from international markets to Canada. A deterioration 
              in the US financial system would have significant implications for Canadian financial institutions and markets, potentially 
              amplifying the direct economic effects of trade restrictions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              While European and Asian markets also present contagion risk, the US remains the dominant channel through which external 
              financial shocks could impact Canada's financial stability.
            </p>
          </div>
          <InternationalContagionChart />
        </div>
      </section>

      {/* Vulnerability Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Key Vulnerabilities by Sector</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Household Vulnerabilities</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Many households continue to adjust to higher debt-servicing costs. While interest rates have come down significantly over the past year, 
              previous increases are still affecting mortgage renewals. A large share of mortgages being renewed this year or next were taken out 
              during the pandemic at historically low interest rates.
            </p>
            <p className="text-gray-700 dark:text-gray-300 transition-colors">
              However, the trade war threatens jobs and incomes, particularly in trade-dependent industries. Some affected households may become 
              unable to continue making debt payments, potentially leading to a significant rise in mortgage arrears under a severe scenario.
            </p>
          </div>
          <MortgageArrearsChart />
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <HousingVulnerabilityChart />
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Housing Market Vulnerabilities</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The Canadian housing market faces several vulnerabilities that could amplify the impact of economic shocks from the trade war. 
              The Housing Market Vulnerability Index highlights four key areas of concern.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Debt service vulnerabilities are particularly elevated as many homeowners face higher mortgage payments during renewals. 
              Market overvaluation also remains a concern in major urban centers, creating the risk of price corrections if economic 
              conditions deteriorate significantly due to trade tensions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              These vulnerabilities could interact with macroeconomic shocks from trade disputes, potentially amplifying downside risks 
              to the financial system.
            </p>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Business Sector Vulnerabilities</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Non-financial businesses have adjusted well to past interest-rate increases and have generally remained in solid financial health over the past 12 months. 
            The ratio of total debt to assets has remained broadly stable since mid-2023 at relatively low levels. However, the trade war will test the financial 
            resilience of businesses in industries tied to trade.
          </p>
          <BusinessVulnerabilityChart />
          <p className="text-gray-700 dark:text-gray-300 mt-4 transition-colors">
            Businesses that export a large share of their production to the United States and have high leverage, low profitability, and low cash reserves 
            are particularly vulnerable to a long-lasting trade war. This applies mostly to firms in manufacturing subsectors, as shown in the chart above.
          </p>
        </div>
      </section>

      {/* Climate Risk Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Emerging Risk: Climate Change Financial Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              While the trade war dominates near-term financial stability concerns, climate change remains a significant medium to long-term risk 
              to the Canadian financial system. The transition to a low-carbon economy could have substantial implications for certain sectors 
              of the Canadian economy.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Transition risks arise from policy changes, technological disruption, and shifting market preferences as the economy adapts 
              to climate change mitigation efforts. Physical risks include direct damage to assets and disruption to supply chains from 
              extreme weather events and long-term climate shifts.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The Bank of Canada continues to develop its approach to assessing climate-related financial risks, including through 
              scenario analysis and stress testing methodologies.
            </p>
          </div>
          <ClimateRiskChart />
        </div>
      </section>

      {/* Risk Monitoring Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Risk Monitoring Focus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Near-Term Monitoring</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong className="dark:text-white">Financial stress indicators</strong>: Delinquency rates for businesses and households, especially for consumer credit products</li>
              <li><strong className="dark:text-white">Precautionary behavior</strong>: Unusually high line of credit draws, risk-off investor moves, bank provision changes</li>
              <li><strong className="dark:text-white">Credit availability</strong>: Access to new credit or refinancing, especially in trade-exposed sectors</li>
              <li><strong className="dark:text-white">Market liquidity</strong>: Evidence of deterioration in core funding markets like government bond and repo markets</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Medium-Term Concerns</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong className="dark:text-white">Unemployment growth</strong>: Particularly in trade-dependent sectors and regions</li>
              <li><strong className="dark:text-white">Business adaptation</strong>: Ability of firms to pivot to new markets or business models</li>
              <li><strong className="dark:text-white">Bank lending behavior</strong>: Changes in credit standards or willingness to extend credit</li>
              <li><strong className="dark:text-white">Government policy response</strong>: Effectiveness of measures to support affected businesses and households</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The Bank of Canada's analysis shows that Canada's financial system entered 2025 with increased resilience. This resilience provides a buffer against the 
          risks posed by the current trade war and associated economic uncertainties. While markets have experienced increased volatility, they continue to function well.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The Bank will work closely with federal and provincial financial authorities to monitor and assess the health of Canada's financial system 
          and to address potential emerging issues. The objective is to foster a stable and resilient financial system that absorbs shocks and can 
          support the economy through periods of turbulence.
        </p>
        <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          "A stable and resilient financial system—one that absorbs shocks and does not amplify them—can help the economy through periods of turbulence."
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Bank of Canada Financial Stability Report, 2025</footer>
        </blockquote>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report are available for download in multiple formats.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/canadian-financial-stability-2025.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
          <a 
            href="/data/canadian-financial-stability-2025.json"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">JSON Format</span>
          </a>
          <a 
            href="/data/canadian-financial-stability-2025.xml"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">XML Format</span>
          </a>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Share This Report</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/canadian-financial-stability&text=Canadian Financial Stability Report 2025"
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
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/canadian-financial-stability&title=Canadian Financial Stability Report 2025"
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
            href="mailto:?subject=Canadian Financial Stability Report 2025&body=Check out this report on Canadian financial stability: https://example.com/risk/canadian-financial-stability"
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
          <li>Bank of Canada. (2025, May 8). Financial Stability Report—2025. Bank of Canada.</li>
          <li>Bank of Canada. (2025, April). Monetary Policy Report, April 2025.</li>
          <li>International Monetary Fund. (2025). Financial Sector Assessment Program: Canada.</li>
        </ol>
      </section>

      {/* Data Available Note */}
      <section className="text-sm text-gray-600 dark:text-gray-400 mb-8 border-t pt-4 border-gray-200 dark:border-gray-700">
        <p>Data available as: CSV, JSON and XML</p>
        <p className="mt-1">
          This analysis was produced by the Governing Council of the Bank of Canada: Tiff Macklem, Carolyn Rogers, Toni Gravelle, 
          Sharon Kozicki, Nicolas Vincent, Rhys Mendes and Michelle Alexopoulos.
        </p>
      </section>

      {/* Related Risk Reports Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Related Risk Reports</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Explore our other risk analysis reports to gain a comprehensive understanding of the evolving risk landscape
          across markets, geopolitics, and regulatory environments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RiskReportCard
            title="Canadian Financial Stability Report—2025"
            description="Analysis of how the Canadian financial system is responding to US trade policy uncertainty and market volatility."
            date="May 8, 2025"
            category="Financial Risk"
            tags={["Trade War", "Banking", "Market Volatility"]}
            imageUrl="/images/showcase-dataviz.jpg"
            href="/risk/canadian-financial-stability"
            isActive={true}
            usePlaceholder={true} // Using placeholder until images are ready
            downloadLinks={[
              { format: "CSV", url: "/data/canadian-financial-stability-2025.csv" },
              { format: "JSON", url: "/data/canadian-financial-stability-2025.json" },
              { format: "XML", url: "/data/canadian-financial-stability-2025.xml" }
            ]}
          />
          <RiskReportCard
            title="Global Trade War Analysis"
            description="Deep dive into potential scenarios in the evolving US-China-EU trade conflict and implications for financial markets."
            date="April 15, 2025"
            category="Geopolitical Risk"
            tags={["Trade War", "Geopolitics", "Scenario Analysis"]}
            imageUrl="/images/risk-trade.jpg"
            href="/risk/deep-dive-trade"
            usePlaceholder={true} // Using placeholder until images are ready
            downloadLinks={[
              { format: "CSV", url: "/data/trade-war-scenarios.csv" },
              { format: "JSON", url: "/data/trade-war-scenarios.json" }
            ]}
          />
          <RiskReportCard
            title="Climate Risk Financial Impact"
            description="Analysis of long-term climate risks to financial stability, including transition risks and physical asset exposures."
            date="March 22, 2025"
            category="Environmental Risk"
            tags={["Climate Change", "Transition Risk", "Long-term Analysis"]}
            imageUrl="/images/risk-climate.jpg"
            href="/risk/climate-financial-impact"
            usePlaceholder={true} // Using placeholder until images are ready
            downloadLinks={[
              { format: "CSV", url: "/data/climate-risk-data.csv" }
            ]}
          />
        </div>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}