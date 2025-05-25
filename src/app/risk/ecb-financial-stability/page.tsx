"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CapitalAdequacyChart,
  NPLRatioChart,
  StressTestResultsChart,
  LiquidityCoverageChart,
  ProfitabilityTrendsChart,
  CountryRiskHeatmapChart
} from '@/components/risk/EuropeanBankingCharts';
import {
  CentralBankBalanceSheetsChart,
  InterestRateEnvironmentChart,
  MarketVolatilityChart
} from '@/components/risk/GlobalLiquidityCharts';
import {
  ClimateRiskOverviewChart,
  SectorExposureChart
} from '@/components/risk/ClimateFinancialCharts';
import RiskReportCard from '@/components/risk/RiskReportCard';

export default function ECBFinancialStabilityRisk() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">ECB Financial Stability Risk Dashboard—2025</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Euro Area Systemic Risk Overview</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          May 2025 | European Central Bank
        </div>
      </header>

      {/* Executive Summary & Risk Cards */}
      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The ECB’s Financial Stability Review (Nov 2024) highlights persistent macro-financial and geopolitical uncertainty, with risks shifting from inflation to growth. While euro area banks remain resilient, vulnerabilities are rising in sovereign, corporate, and non-bank sectors. Market volatility and policy uncertainty remain elevated.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Macro-financial/geopolitical shocks & market volatility</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Sovereign and corporate debt sustainability</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Non-bank financial sector liquidity & leverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Macro-Financial & Market Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 transition-colors text-center">Macro-Financial & Market Environment</h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              Uncertainty remains high due to geopolitical tensions and shifting monetary policy. Market volatility has increased, with sharp corrections in equity and bond markets. Policy rates remain elevated, and central bank balance sheets are gradually normalizing.
            </p>
            <MarketVolatilityChart />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Market Volatility:</strong> Financial markets have experienced increased volatility amid shifting monetary policy and geopolitical tensions. Equity and bond markets have seen sharp corrections, highlighting the sensitivity of asset prices to macro-financial shocks.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <InterestRateEnvironmentChart />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Interest Rate Environment:</strong> Policy rates remain elevated as central banks continue to address inflationary pressures. Higher rates have increased funding costs for households, corporates, and sovereigns, impacting debt sustainability and credit conditions.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <CentralBankBalanceSheetsChart />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Central Bank Balance Sheets:</strong> Central bank balance sheets are gradually normalizing after years of expansionary policy. The reduction in asset holdings may affect market liquidity and asset prices, requiring careful monitoring.
              </div>
            </div>
          </div>
          
          {/* Growth Forecasts & Trade Tensions Component */}
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Economic Growth Forecasts</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              The European Commission has significantly cut its growth forecasts for the Eurozone as US trade policy creates economic disruption. The EU executive now expects the 20-member currency area's economy to grow only 0.9% in 2025—down from its previous estimate of 1.3%—and has reduced its 2026 GDP growth outlook to 1.4% from 1.6%.
            </p>
            
            <div className="my-4 bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 border border-gray-200 dark:border-neutral-700 transition-colors">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Revised Growth Forecasts by Country</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-neutral-700">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Country</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Previous 2025 Forecast (%)</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Revised 2025 Forecast (%)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">Eurozone (Overall)</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">1.3</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">Germany</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">0.7</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">0.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">France</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">0.8</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">0.6</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">Italy</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">1.0</td>
                      <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300">0.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Source: European Commission Forecast, May 2025</p>
            </div>
            
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Trade Tensions & Economic Impact:</strong> The EU's growth forecasts factor in a "significant" reduction in US-China trade and new US tariffs, including 10% "reciprocal" levies on most EU imports and 25% tariffs on EU steel, aluminum, and cars. Economy Commissioner Valdis Dombrovskis noted that while "the EU economy is demonstrating resilience amid high trade tensions," risks to the outlook remain "tilted to the downside." Germany is projected to flatline this year, while Ireland, Spain, and Greece are expected to outperform the Eurozone average. Inflation is forecast to reach the ECB's 2% target by mid-2025 before falling to 1.7% on average next year.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectoral Analysis Section */}
      <section className="mb-16 bg-gray-50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 transition-colors text-center">Key Vulnerabilities by Sector</h2>
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Household Sector</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              Household debt-to-income ratios have declined, but debt service costs remain elevated for some. Risks are concentrated among low-income and highly indebted households.
            </p>
            <Image src="https://www.ecb.europa.eu/press/financial-stability-publications/fsr/html/fsr202411/ecb.fsr202411.en_img17.png" alt="Household Vulnerability Indicator" width={600} height={350} className="rounded-lg border" />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Household Vulnerability Indicator:</strong> The indicator shows that while household debt-to-income ratios have improved, some segments remain vulnerable to higher interest rates and inflation. Low-income and highly indebted households are most at risk of financial stress.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Corporate Sector</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              Corporate balance sheets are under pressure from high funding costs and weak growth, especially in commercial real estate and SMEs. Insolvencies are rising from low levels.
            </p>
            <Image src="https://www.ecb.europa.eu/press/financial-stability-publications/fsr/html/fsr202411/ecb.fsr202411.en_img18.png" alt="Corporate Insolvency Index" width={600} height={350} className="rounded-lg border" />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Corporate Insolvency Index:</strong> The index highlights a gradual rise in corporate insolvencies, particularly among SMEs and sectors sensitive to higher funding costs. While still below pre-pandemic levels, the trend warrants close monitoring.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Sovereign & Market Risks</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              Sovereign vulnerabilities are increasing, especially in high-debt countries. Market volatility has increased, with sharp but short-lived corrections in equity and bond markets.
            </p>
            <Image src="https://www.ecb.europa.eu/press/financial-stability-publications/fsr/html/fsr202411/ecb.fsr202411.en_img19.png" alt="Sovereign Debt and Market Volatility" width={600} height={350} className="rounded-lg border" />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Sovereign Debt and Market Volatility:</strong> The chart illustrates increased volatility in sovereign bond markets, especially in high-debt countries. Short-lived corrections have occurred, but underlying vulnerabilities persist and require ongoing attention.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Banking Sector</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              Euro area banks remain resilient, with strong capital and liquidity buffers. Asset quality is deteriorating slowly, mainly in CRE, SMEs, and consumer credit, but exposures are manageable in aggregate.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col h-full">
                <CapitalAdequacyChart />
                <div className="my-4">
                  <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                    <strong>Capital Adequacy:</strong> Euro area banks maintain strong capital positions, with CET1 ratios well above regulatory requirements. This capital strength provides a buffer against potential losses from adverse macroeconomic or market shocks.
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <NPLRatioChart />
                <div className="my-4">
                  <div className="bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                    <strong>Non-Performing Loan Ratio Trends:</strong> The NPL ratio for euro area banks remains near historical lows, reflecting strong asset quality and prudent lending standards. However, a gradual uptick is visible in sectors most exposed to higher interest rates and weaker growth, such as commercial real estate and SMEs. While overall risks are contained, close monitoring is warranted as macroeconomic conditions evolve.
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <StressTestResultsChart />
                <div className="my-4">
                  <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                    <strong>Stress Test CET1 Ratio Impacts by Country Group:</strong> ECB stress tests indicate that euro area banks, on average, maintain robust capital buffers under adverse scenarios. However, the impact on Common Equity Tier 1 (CET1) ratios varies by country group, with banks in countries with higher sovereign and macroeconomic vulnerabilities experiencing larger declines. This underscores the importance of country-specific risk factors and the need for continued vigilance in monitoring capital adequacy across the euro area banking sector.
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <LiquidityCoverageChart />
                <div className="my-4">
                  <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                    <strong>Liquidity Coverage:</strong> Banks’ liquidity coverage ratios remain comfortably above regulatory thresholds, supported by ample central bank reserves and stable funding sources. This positions banks to withstand short-term liquidity shocks.
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <ProfitabilityTrendsChart />
                <div className="my-4">
                  <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                    <strong>Profitability Trends:</strong> Bank profitability has improved, driven by higher net interest margins amid rising rates. However, increased funding costs and potential credit losses could weigh on profits going forward.
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <CountryRiskHeatmapChart />
                <div className="my-4">
                  <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                    <strong>Country Risk Heatmap:</strong> Risk exposures vary across euro area countries, with higher vulnerabilities in countries facing elevated sovereign debt, weaker growth, or concentrated sectoral risks. The heatmap highlights areas for close monitoring.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-10">
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Non-Bank Financial Sector</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              NBFIs face valuation, liquidity, and leverage risks, especially in investment funds and insurers. High concentration in equity holdings and increased exposure to US assets amplify vulnerabilities.
            </p>
            <Image src="https://www.ecb.europa.eu/press/financial-stability-publications/fsr/html/fsr202411/ecb.fsr202411.en_img21.png" alt="NBFI Liquidity and Leverage" width={600} height={350} className="rounded-lg border" />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>NBFI Liquidity and Leverage:</strong> Non-bank financial institutions face heightened liquidity and leverage risks, particularly in investment funds and insurers. High concentration in equities and US assets amplifies potential vulnerabilities.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-neutral-800 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Climate & Emerging Risks</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors text-base leading-relaxed">
              Climate change and transition risks are increasingly relevant for euro area financial stability. Physical and transition risks are sector-specific and evolving.
            </p>
            <ClimateRiskOverviewChart />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Climate Risk Overview:</strong> The chart summarizes the growing impact of climate-related risks on euro area financial stability. Both physical and transition risks are increasingly relevant for banks and non-banks alike.
              </div>
            </div>
            <SectorExposureChart />
            <div className="my-4">
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 shadow-sm transition-colors">
                <strong>Sector Exposure to Climate Risk:</strong> This chart details sectoral exposures to climate-related risks, highlighting which industries are most vulnerable to transition and physical climate impacts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report are available for download in multiple formats.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.ecb.europa.eu/pub/pdf/fsr/ecb.fsr202411~dd60fc02c3.en.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
            <span className="text-gray-700 dark:text-gray-300">ECB FSR 2024 (PDF)</span>
          </a>
          <a href="https://www.ecb.europa.eu/pub/pdf/fsr/ecb.fsr202411_annex~630e55881a.en.zip" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
            <span className="text-gray-700 dark:text-gray-300">Statistical Annex (ZIP)</span>
          </a>
          <a href="https://sdw.ecb.europa.eu/reports.do?node=1000004859" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
            <span className="text-gray-700 dark:text-gray-300">ECB Dashboard</span>
          </a>
        </div>
      </section>

      {/* Further Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Further Resources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
          <li><a href="https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/index.en.html" target="_blank" rel="noopener noreferrer">ECB Macroprudential Bulletin</a></li>
          <li><a href="https://www.ecb.europa.eu/explainers/topic/financial-stability/html/index.en.html" target="_blank" rel="noopener noreferrer">ECB Explainers on Financial Stability</a></li>
          <li><a href="https://www.ecb.europa.eu/pub/financial-stability/html/index.en.html" target="_blank" rel="noopener noreferrer">ECB Financial Stability Data Portal</a></li>
        </ul>
      </section>

      {/* Related Risk Reports Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Related Risk Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RiskReportCard
            title="ECB Financial Stability Review—2024"
            description="Official ECB assessment of euro area financial stability, risks, and resilience."
            date="Nov 2024"
            category="Financial Risk"
            tags={["ECB", "Euro Area", "Systemic Risk"]}
            imageUrl="https://www.ecb.europa.eu/press/financial-stability-publications/fsr/html/fsr202411/ecb.fsr202411.en_img16.png"
            href="https://www.ecb.europa.eu/pub/financial-stability/html/index.en.html"
            isActive={true}
            usePlaceholder={false}
            downloadLinks={[]}
          />
          <RiskReportCard
            title="Macroprudential Bulletin"
            description="ECB bulletin on macroprudential policy, systemic risk, and regulatory developments."
            date="2024"
            category="Macroprudential"
            tags={["ECB", "Macroprudential", "Policy"]}
            imageUrl="https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/mpbu202504_01/ecb.mpbu202504_01.en_img0.png?520de39468f0b7bb218c57f17974ab62"
            href="https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/index.en.html"
            usePlaceholder={false}
            downloadLinks={[]}
          />
          <RiskReportCard
            title="Climate Risk & Financial Stability"
            description="Analysis of climate-related risks to euro area financial stability."
            date="2024"
            category="Environmental Risk"
            tags={["ECB", "Climate", "Transition Risk"]}
            imageUrl="https://www.ecb.europa.eu/press/financial-stability-publications/fsr/html/fsr202311/ecb.fsr202311.en_img22.png"
            href="https://www.ecb.europa.eu/pub/financial-stability/html/index.en.html"
            usePlaceholder={false}
            downloadLinks={[]}
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
