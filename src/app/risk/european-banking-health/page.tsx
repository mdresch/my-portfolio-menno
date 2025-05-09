'use client';

import React from 'react';
import Link from 'next/link';
import { 
  CapitalAdequacyChart, 
  NPLRatioChart, 
  StressTestResultsChart,
  LiquidityCoverageChart,
  ProfitabilityTrendsChart,
  CountryRiskHeatmapChart
} from '@/components/risk/EuropeanBankingCharts';

export default function EuropeanBankingHealthPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">European Banking System Health Assessment</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Analysis of vulnerabilities, capital adequacy, and stress test results</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          February 28, 2025 | European Financial Stability Institute
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            This report examines the current state of the European banking system, assessing its resilience to economic 
            shocks, reviewing capital and liquidity positions, and analyzing the results of recent stress tests. While 
            overall stability has improved since the global financial crisis, pockets of vulnerability remain, particularly 
            in southern European countries and among smaller regional banks.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">European banks have maintained capital levels well above regulatory minimums, but profitability remains challenged</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Stress tests reveal significant disparities in resilience between northern and southern European banks</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Rising interest rates have improved net interest margins but increased credit risk in vulnerable sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Adequacy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Capital Adequacy Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              European banks have significantly strengthened their capital positions since the 2008 financial crisis and subsequent 
              European sovereign debt crisis. Common Equity Tier 1 (CET1) ratios across major European banks now average 15.3%, 
              well above regulatory minimums.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              However, our analysis reveals considerable variation across countries and banking groups. Nordic and Swiss banks 
              maintain the strongest capital positions, while some southern European banks, although improved, still lag their 
              northern counterparts.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The quality of capital has improved substantially, with most institutions now relying predominantly on CET1 capital 
              rather than hybrid instruments, enhancing their ability to absorb losses in stress scenarios.
            </p>
          </div>
          <CapitalAdequacyChart />
        </div>
      </section>

      {/* Asset Quality Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Asset Quality Assessment</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6 transition-colors">
          <NPLRatioChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Non-Performing Loan Trends</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Non-performing loan (NPL) ratios have declined consistently across the European banking sector, falling from a 
              post-crisis peak of 7.5% to 2.1% in 2024. This improvement reflects both economic recovery and active NPL 
              management strategies, including portfolio sales and write-offs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Despite this positive trend, NPL ratios remain elevated in several southern European countries, particularly 
              Greece (5.8%), Italy (3.9%), and Portugal (3.2%). These countries also show higher ratios of forborne exposures, 
              indicating potential hidden asset quality issues.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Sectoral Credit Risk</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Commercial real estate (CRE) exposures present the highest sectoral risk in the current environment, with 
              rising interest rates and changing work patterns putting pressure on property valuations. Banks with heavy 
              CRE exposures, particularly in office and retail segments, face elevated risks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Consumer credit quality has also begun deteriorating in several countries as households adjust to higher interest rates. 
              This is particularly evident in countries with high household debt levels, such as Denmark, the Netherlands, and Sweden.
            </p>
          </div>
        </div>
      </section>

      {/* Stress Test Results Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Stress Test Results Analysis</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          The latest European Banking Authority (EBA) stress tests subjected 50 European banks to a severe macroeconomic scenario, 
          including a GDP decline of 6.3%, a stock market crash of 45%, and a commercial real estate price decline of 32%. 
          The results provide key insights into the resilience of the European banking system under extreme conditions.
        </p>
        <div className="mb-8">
          <StressTestResultsChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Capital Depletion</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Under stress, the average CET1 ratio declined from 15.3% to 10.2%, still above regulatory minimums. However, seven banks fell below 8% CET1.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Loss Absorbing Capacity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Credit losses accounted for 70% of capital depletion, with corporate exposures contributing most significantly to losses.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Liquidity Impacts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              All major banks maintained liquidity coverage ratios above 100% even in the adverse scenario, indicating strong liquidity positions.
            </p>
          </div>
        </div>
      </section>

      {/* Liquidity Position Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Liquidity Position Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LiquidityCoverageChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Liquidity positions across European banks remain strong, with the average Liquidity Coverage Ratio (LCR) at 156%, 
              well above the 100% regulatory minimum. Net Stable Funding Ratios (NSFR) are similarly robust, averaging 124%.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The end of the European Central Bank's Targeted Longer-Term Refinancing Operations (TLTRO) program has been 
              managed without significant market disruption, though it has increased funding costs for some banks, particularly 
              in southern Europe.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Deposit stability has become a greater focus following recent bank failures in the United States. Our analysis 
              indicates that European banks generally have more stable and diversified deposit bases, though digital banking 
              has increased the risk of rapid deposit outflows during periods of stress.
            </p>
          </div>
        </div>
      </section>

      {/* Profitability Analysis Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Profitability Analysis</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6 transition-colors">
          <ProfitabilityTrendsChart />
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          After years of compressed margins in a low interest rate environment, European banks have seen profitability 
          improve with rising interest rates. The average Return on Equity (ROE) for major European banks reached 7.9% 
          in 2024, up from 5.2% in 2022, but still below the average cost of equity estimated at 10-12%.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Cost efficiency remains a challenge, with the average cost-to-income ratio at 62%. Digital transformation efforts 
          have begun to yield cost benefits, but legacy IT infrastructure continues to weigh on many established banks, while 
          fintechs and digital challengers operate with more efficient cost structures.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Income diversification varies significantly across the sector. Universal banks with strong wealth management and 
          investment banking operations show more resilient earnings, while retail-focused banks remain highly dependent on 
          net interest income.
        </p>
      </section>

      {/* Geographic Risk Assessment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Country Risk Assessment</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6 transition-colors">
          <CountryRiskHeatmapChart />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Geographic Risk Concentration</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Our assessment identifies significant disparities in banking system health across European countries. Nordic and 
            Benelux banking systems demonstrate the strongest overall health, with high capitalization, good asset quality, 
            and solid profitability.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Southern European banking systems have improved considerably but continue to face challenges including higher 
            NPL ratios, greater sovereign debt exposure, and more limited profitability. The potential for sovereign-banking 
            nexus risk remains elevated in countries with high public debt levels, particularly Italy and Greece.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Eastern European banking systems show mixed performance. While Czech and Polish banks demonstrate strong profitability 
            and capital positions, some southeastern European countries face challenges with dollarization, higher NPLs, and 
            governance issues.
          </p>
        </div>
      </section>

      {/* Emerging Risks Section */}
      <section className="mb-12 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Emerging Risks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Short-term Risks</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Credit quality deterioration</strong> as higher interest rates impact borrowers' debt servicing capacity</li>
              <li><strong>Commercial real estate corrections</strong> affecting loan collateral values and specialized lenders</li>
              <li><strong>Liquidity risk</strong> from increased competition for deposits and changing customer behavior</li>
              <li><strong>Market risk</strong> from potential asset price corrections and volatility in fixed income markets</li>
              <li><strong>Operational disruptions</strong> from elevated geopolitical tensions and potential cyber threats</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Long-term Challenges</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Digital disruption</strong> from fintech competitors and big tech entrants into financial services</li>
              <li><strong>Climate risk</strong> exposure through lending portfolios and transition risks</li>
              <li><strong>Demographic challenges</strong> affecting long-term growth prospects in many European markets</li>
              <li><strong>Regulatory fragmentation</strong> despite progress on Banking Union and Capital Markets Union</li>
              <li><strong>Profitability sustainability</strong> in a potentially lower growth economic environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Policy Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">For Regulators and Supervisors</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Maintain vigilant supervision of commercial real estate exposures and related concentration risks</li>
              <li>Accelerate progress on Banking Union completion, including European Deposit Insurance Scheme</li>
              <li>Enhance climate risk supervision and scenario analysis requirements</li>
              <li>Review liquidity regulations to address potential vulnerabilities from digital banking</li>
              <li>Strengthen cross-border cooperation on resolution planning and crisis management</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">For Banking Institutions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Accelerate digital transformation while addressing legacy IT infrastructure</li>
              <li>Review business models and pursue sustainable profitability through diversification</li>
              <li>Enhance early warning systems for credit risk detection and management</li>
              <li>Develop robust climate risk assessment capabilities and transition strategies</li>
              <li>Invest in cybersecurity and operational resilience measures</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The European banking system has demonstrated considerable resilience, with strengthened capital positions, 
          improved asset quality, and robust liquidity buffers. These improvements position the sector to better 
          withstand potential economic shocks than during previous crisis periods.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          However, significant challenges remain. Profitability continues to lag behind global peers and falls short 
          of sustainable levels at many institutions. Geographic disparities persist, with southern European banks 
          facing greater asset quality and sovereign risk challenges. The changing interest rate environment has improved 
          margins but also introduced new risks that require careful monitoring.
        </p>
        <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          "European banks are better capitalized and more resilient than before previous crises, but structural 
          challenges to profitability and emerging risks require continued vigilance from both supervisors and bank management."
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— European Financial Stability Institute, 2025</footer>
        </blockquote>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report are available for download.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/eu-banking-data.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
          <a 
            href="/data/eu-banking-data.json"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
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
              <Link href="/risk/global-liquidity-trends" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Global Liquidity Trends Report
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">January 15, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global liquidity conditions, central bank interventions, and implications for financial market stability.
            </p>
            <Link 
              href="/risk/global-liquidity-trends" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              Read Report →
            </Link>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              <Link href="/risk/sovereign-debt-monitor" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sovereign Debt Crisis Risk Monitor
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">November 5, 2024</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global sovereign debt levels, sustainability metrics, and potential triggers for sovereign debt crises.
            </p>
            <Link 
              href="/risk/sovereign-debt-monitor" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
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
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/european-banking-health&text=European Banking System Health Assessment"
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
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/european-banking-health&title=European Banking System Health Assessment"
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
            href="mailto:?subject=European Banking System Health Assessment&body=Check out this report on the health of the European banking system: https://example.com/risk/european-banking-health"
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
          <li>European Banking Authority. (2025). EU-Wide Stress Test Results.</li>
          <li>European Central Bank. (2024). Financial Stability Review, November 2024.</li>
          <li>European Systemic Risk Board. (2025). Risk Dashboard, Q1 2025.</li>
          <li>Bank for International Settlements. (2024). Quarterly Banking Statistics.</li>
        </ol>
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