"use client";

import React from "react";
import Link from "next/link";
import { 
  GlobalLiquidityIndexChart, 
  CentralBankBalanceSheetsChart, 
  MarketVolatilityComparisonChart,
  InterestRateEnvironmentChart,
  CrossBorderFlowsChart,
  EmergingMarketLiquidityChart
} from "../../../components/risk/GlobalLiquidityCharts";

export default function GlobalLiquidityTrendsPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Global Liquidity Trends Report</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Analysis of liquidity conditions, central bank interventions, and market stability</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          January 15, 2025 | Global Financial Markets Institute
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            This report analyzes global liquidity conditions, which have undergone significant changes over the past year 
            as central banks navigate the post-pandemic economic landscape. Following aggressive monetary tightening to 
            combat inflation in 2023-2024, liquidity conditions have tightened considerably, leading to increased market 
            volatility and stress in certain financial market segments.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Global liquidity conditions have reached their tightest levels since 2018</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Emerging markets face heightened vulnerabilities due to capital flow reversals</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Quantitative tightening has reduced global central bank balance sheets by $4.2 trillion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Liquidity Indicators Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Global Liquidity Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Our Global Liquidity Index, which aggregates multiple measures of financial conditions across major economies, 
              indicates that liquidity has tightened significantly since 2022. This tightening results from multiple factors: 
              higher policy rates, reduced central bank balance sheets through quantitative tightening, and reduced credit 
              creation as financial institutions adopt more conservative lending practices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The current level of the Global Liquidity Index is 42.3, down from 68.7 in 2022 and well below its long-term 
              average of 55. This reading indicates restrictive financial conditions with potential implications for economic 
              growth and financial stability, particularly in more vulnerable market segments.
            </p>
          </div>
          <GlobalLiquidityIndexChart />
        </div>
      </section>

      {/* Central Bank Balance Sheets Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Central Bank Balance Sheet Dynamics</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6 transition-colors">
          <CentralBankBalanceSheetsChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Quantitative Tightening</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Major central banks have collectively reduced their balance sheets by $4.2 trillion since peak levels in 2022, 
              representing a 14.7% contraction. The Federal Reserve has led this trend, reducing its balance sheet by 
              $1.9 trillion (21.3%), while the European Central Bank and Bank of England have pursued more gradual 
              reductions of 11.2% and 12.7%, respectively.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              This quantitative tightening has contributed significantly to tighter liquidity conditions, reduced 
              market support, and upward pressure on longer-term interest rates, particularly in government bond markets.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Policy Divergence</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              While most major central banks have engaged in balance sheet contraction, notable exceptions exist. 
              The Bank of Japan has maintained its expansive balance sheet, though it has adjusted yield curve control 
              parameters. The People's Bank of China has actually expanded its balance sheet moderately to support 
              economic growth amid property sector challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              This policy divergence has contributed to significant exchange rate movements and capital flow volatility, 
              particularly affecting emerging market economies with high external financing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Market Volatility Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Financial Market Volatility Assessment</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Tightening liquidity conditions have contributed to increased volatility across multiple financial market segments. 
          Bond markets have experienced particularly pronounced volatility, with the MOVE Index (measuring Treasury volatility) 
          reaching levels last seen during the 2020 pandemic market disruption.
        </p>
        <div className="mb-8">
          <MarketVolatilityComparisonChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Fixed Income Markets</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Treasury market liquidity deterioration with bid-ask spreads 45% wider than pre-pandemic levels and order book depth reduced by 38%.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Currency Markets</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              FX volatility has increased 28% year-over-year, with emerging market currencies experiencing particularly sharp moves.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Equity Markets</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Elevated equity volatility particularly affecting growth and small-cap segments, with rotation toward defensive sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Interest Rate Environment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Global Interest Rate Environment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InterestRateEnvironmentChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The global interest rate environment remains restrictive despite modest policy rate reductions by some central banks 
              in recent months. Real interest rates (policy rates adjusted for inflation) remain significantly positive across 
              major economies, maintaining a dampening effect on credit growth and economic activity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Our analysis indicates that current policy rates in advanced economies are approximately 150-200 basis points above 
              their neutral rates, representing a significantly restrictive monetary stance. While central banks have begun easing 
              cycles, the pace has been cautious, with concerns about inflation persistence leading to a "higher for longer" approach.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Term premia in bond markets remain elevated, reflecting uncertainty about the inflation outlook, fiscal deficits, 
              and the ultimate endpoint of central bank tightening cycles. This has contributed to a steepened yield curve in 
              recent months following earlier inversions.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Border Capital Flows Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Cross-Border Capital Flows</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6 transition-colors">
          <CrossBorderFlowsChart />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Capital Flow Dynamics</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Cross-border capital flows have become increasingly volatile as monetary policy divergence and geopolitical tensions 
            impact investor positioning. Portfolio flows to emerging markets have been particularly affected, with net outflows 
            of $64 billion over the past six months compared to $35 billion in inflows during the same period last year.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Advanced economies have generally experienced "flight to safety" inflows during periods of market stress, 
            particularly in US Treasury and German Bund markets. However, countries with high fiscal deficits and debt 
            levels have seen increased scrutiny from investors, resulting in higher risk premia.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Foreign direct investment flows remain subdued globally, 24% below pre-pandemic levels, reflecting increased 
            geopolitical fragmentation, supply chain reshoring, and a more cautious corporate investment stance in the 
            face of economic uncertainty.
          </p>
        </div>
      </section>

      {/* Emerging Markets Liquidity Section */}
      <section className="mb-12 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Emerging Market Vulnerabilities</h2>
        
        <div className="mb-8">
          <EmergingMarketLiquidityChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">External Financing Pressures</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Emerging markets with high external financing requirements and substantial dollar-denominated debt face 
              increased pressures in the current environment of reduced global liquidity. Our vulnerability index 
              identifies Turkey, Argentina, Egypt, Pakistan, and Colombia as facing particularly elevated refinancing risks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Several emerging markets face significant debt redemptions in 2025-2026 that were issued during the period 
              of abundant liquidity in 2020-2021. Refinancing this debt in the current higher-rate environment presents 
              fiscal challenges and may necessitate deeper fiscal adjustments or IMF support in some cases.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Policy Response</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Emerging market central banks have generally maintained higher policy rates than advanced economy counterparts 
              to preserve yield differentials and defend currencies. Foreign exchange intervention has increased, with FX 
              reserves declining by an average of 8.5% across emerging economies over the past year.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Several countries have implemented capital flow management measures or enhanced existing ones to mitigate 
              volatility. While these may provide short-term stability, they risk market fragmentation and reduced 
              foreign investor confidence over the medium term.
            </p>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Policy Implications and Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">For Central Banks</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Ensure clear communication about monetary policy normalization paths to minimize market disruptions</li>
              <li>Calibrate the pace of quantitative tightening to avoid excessive market volatility</li>
              <li>Maintain robust liquidity facilities to address potential market dysfunction during stress episodes</li>
              <li>Enhance coordination through international forums to mitigate spillovers from policy divergence</li>
              <li>Consider implementing targeted liquidity facilities for vulnerable market segments showing signs of stress</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">For Market Participants</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Enhance liquidity risk management frameworks to account for potential further deterioration in market conditions</li>
              <li>Stress test portfolios against scenarios of continued or accelerated quantitative tightening</li>
              <li>Reassess currency hedging strategies given elevated FX volatility and divergent monetary policies</li>
              <li>Monitor counterparty exposures to institutions with significant leverage or liquidity mismatches</li>
              <li>Develop contingency plans for potential emerging market stress scenarios or debt restructurings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scenario Analysis Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Liquidity Scenario Analysis</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 transition-colors">
            <thead>
              <tr className="bg-gray-50 dark:bg-neutral-700 transition-colors">
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Scenario</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Description</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Probability</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Market Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Base Case</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Gradual normalization of monetary policy with continued quantitative tightening at current pace
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">60%</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Moderate market volatility with periodic stress episodes in less liquid market segments
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-neutral-700/30 transition-colors">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Accelerated Tightening</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Inflation persistence forces central banks to accelerate quantitative tightening and delay rate cuts
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">25%</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Sharp market correction with significant stress in credit markets and emerging economies
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Policy Reversal</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Economic slowdown forces central banks to pause or reverse quantitative tightening
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">15%</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Initial relief rally followed by increased volatility due to growth concerns
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Global liquidity conditions have tightened significantly as central banks navigate the post-pandemic normalization 
          process. This tightening has contributed to increased market volatility, stress in certain market segments, 
          and emerging market vulnerabilities.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          While the financial system has thus far demonstrated resilience to these tighter conditions, pockets of 
          vulnerability exist that warrant close monitoring. The pace and extent of further liquidity withdrawal will 
          be a critical determinant of financial stability over the coming year.
        </p>
        <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          "The unwinding of the extraordinary monetary accommodations implemented during the pandemic represents 
          an unprecedented challenge for markets and policymakers alike. The path to normalization requires careful 
          calibration to avoid unnecessary market disruption while ensuring price stability."
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Global Financial Markets Institute, 2025</footer>
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
            href="/data/global-liquidity-data.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
          <a 
            href="/data/global-liquidity-data.json"
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
              <Link href="/risk/european-banking-health" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                European Banking System Health
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">February 28, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Comprehensive assessment of European banking sector vulnerabilities, capital adequacy, and stress test results.
            </p>
            <Link 
              href="/risk/european-banking-health" 
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
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/global-liquidity-trends&text=Global Liquidity Trends Report"
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
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/global-liquidity-trends&title=Global Liquidity Trends Report"
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
            href="mailto:?subject=Global Liquidity Trends Report&body=Check out this report on global liquidity conditions: https://example.com/risk/global-liquidity-trends"
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
          <li>Bank for International Settlements. (2025). Global Liquidity Indicators, Q4 2024.</li>
          <li>Federal Reserve Board. (2024). Financial Stability Report, December 2024.</li>
          <li>International Monetary Fund. (2025). Global Financial Stability Report: Market Liquidity Under Stress.</li>
          <li>European Central Bank. (2024). Financial Stability Review, November 2024.</li>
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