"use client";

import React from "react";
import Link from "next/link";
import { 
  UKBankCapitalChart,
  UKHouseholdDebtChart,
  UKPropertyMarketChart,
  UKCorporateDebtChart,
  UKMarketVolatilityChart,
  UKSystemicRiskChart,
  UKClimateRiskChart,
  UKCyberRiskChart
} from "../../../components/risk/UKFinancialCharts";
import RiskReportCard from "../../../components/risk/RiskReportCard";

export default function UKFinancialStabilityPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Financial Stability Report—July 2025</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Building Resilience in an Uncertain World</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          July 15, 2025 | Bank of England
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-6 shadow-md border border-red-100 dark:border-red-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The UK financial system has demonstrated resilience in the face of global economic uncertainties, including persistent 
            inflation pressures, geopolitical tensions, and evolving monetary policy landscapes. However, vulnerabilities remain 
            in household and corporate debt levels, property markets, and emerging risks from cyber threats and climate change.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The Bank of England&apos;s Financial Policy Committee (FPC) continues to monitor systemic risks closely, with particular 
            attention to the interaction between high debt levels, interest rate changes, and potential economic shocks. 
            The financial system&apos;s ability to support the real economy remains robust, but vigilance is required.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Elevated household debt vulnerability to rate shocks</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Commercial real estate market corrections</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Operational resilience and cyber security threats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking System Resilience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">UK Banking System Resilience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              UK banks have maintained strong capital positions, with Common Equity Tier 1 (CET1) ratios well above regulatory 
              requirements. The banking sector&apos;s resilience has been tested through comprehensive stress testing scenarios, 
              demonstrating the ability to withstand severe economic downturns while continuing to lend.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Credit quality has remained broadly stable, though the FPC monitors closely for signs of deterioration, 
              particularly in commercial real estate and leveraged lending markets. Banks have maintained adequate 
              provisions for expected credit losses.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The countercyclical capital buffer rate remains at 2%, providing additional resilience while supporting 
              economic growth through continued lending capacity.
            </p>
          </div>
          <UKBankCapitalChart />
        </div>
      </section>

      {/* Household Sector Vulnerabilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Household Financial Vulnerabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UKHouseholdDebtChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              UK household debt-to-income ratios remain elevated by historical standards, though they have stabilised 
              in recent quarters. The combination of higher interest rates and cost-of-living pressures has increased 
              debt servicing burdens for many households, particularly those with variable-rate mortgages.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Mortgage market developments show signs of adjustment, with lending standards remaining prudent. 
              The FPC&apos;s mortgage market measures, including the loan-to-income flow limit and affordability test, 
              continue to provide important safeguards against excessive risk-taking.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Consumer credit markets show some signs of stress, with unsecured lending delinquencies rising modestly. 
              Banks have tightened lending standards for personal loans and credit cards in response to deteriorating 
              credit conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Property Market Analysis */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">UK Property Market Dynamics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3 transition-colors">Residential Property</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              UK house prices have shown resilience despite higher mortgage rates, supported by limited housing supply 
              and demographic pressures. However, regional variations are evident, with London and South East markets 
              showing greater sensitivity to rate changes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Transaction volumes have declined significantly as affordability pressures mount. First-time buyer 
              activity has been particularly affected, raising concerns about intergenerational wealth mobility.
            </p>
            
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3 mt-6 transition-colors">Commercial Real Estate</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The commercial real estate sector faces structural challenges, particularly in office markets affected 
              by remote working trends. Property valuations have declined substantially, with lending conditions 
              tightening significantly across the sector.
            </p>
          </div>
          <UKPropertyMarketChart />
        </div>
      </section>

      {/* Corporate Sector Analysis */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Corporate Sector Vulnerabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              UK corporate debt levels remain manageable overall, though pockets of vulnerability exist in sectors 
              most affected by structural changes and higher financing costs. Small and medium enterprises (SMEs) 
              face particular challenges from higher rates and reduced credit availability.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Corporate bond markets have experienced volatility, with spreads widening for lower-rated issuers. 
              Refinancing risks are elevated for companies with significant debt maturities over the next two years, 
              particularly in commercial real estate and retail sectors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The leveraged lending market has shown signs of stress, with covenant-lite lending remaining a source 
              of concern. Private credit markets have grown substantially, potentially creating new channels for 
              systemic risk transmission.
            </p>
          </div>
          <UKCorporateDebtChart />
        </div>
      </section>

      {/* Market-Based Finance */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Market-Based Finance and Systemic Risk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UKMarketVolatilityChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              UK financial markets have experienced periods of heightened volatility, reflecting global uncertainties 
              and domestic policy developments. The gilt market has shown improved resilience following reforms 
              implemented after the 2022 LDI crisis.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Money market funds and other short-term funding markets continue to function effectively, though 
              structural vulnerabilities remain. The FPC continues to monitor potential amplification mechanisms 
              in stressed market conditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The growth of market-based finance, including private credit and alternative investment funds, 
              creates new interconnections that require ongoing surveillance and potential regulatory attention.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <UKSystemicRiskChart />
        </div>
      </section>

      {/* Operational Resilience and Cyber Risk */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Operational Resilience and Emerging Threats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3 transition-colors">Cyber Security</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Cyber threats to the UK financial system continue to evolve, with increasingly sophisticated attacks 
              targeting critical infrastructure and customer data. The sector&apos;s investment in cyber defences 
              has increased substantially, but threats continue to outpace defensive capabilities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Third-party service providers represent a growing source of operational risk, with concentration 
              in cloud services and payment systems creating potential single points of failure across multiple 
              financial institutions.
            </p>
            
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3 mt-6 transition-colors">Technology Transition</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The ongoing transition to new payment systems and the potential introduction of a digital pound 
              create both opportunities and risks. Legacy system dependencies remain a vulnerability across 
              the sector.
            </p>
          </div>
          <UKCyberRiskChart />
        </div>
      </section>

      {/* Climate Risk */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Climate-Related Financial Risks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Climate change poses significant long-term risks to UK financial stability through both physical 
              and transition channels. The Bank of England&apos;s Climate Biennial Exploratory Scenario (CBES) 
              has enhanced understanding of these risks across the financial system.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Physical risks from extreme weather events are already materialising, affecting property markets 
              and insurance costs. Transition risks arise from the shift to net-zero emissions, potentially 
              stranding assets in carbon-intensive sectors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Financial institutions have made progress in climate risk management and disclosure, but capabilities 
              remain uneven across the sector. Data quality and scenario modelling continue to present challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The FPC continues to monitor the development of sustainable finance markets, including green bonds 
              and ESG-focused investment products, for potential financial stability implications.
            </p>
          </div>
          <UKClimateRiskChart />
        </div>
      </section>

      {/* Policy Response and Tools */}
      <section className="mb-12 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Financial Policy Committee Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Current Policy Stance</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong className="dark:text-white">Countercyclical Capital Buffer</strong>: Maintained at 2% to preserve lending capacity</li>
              <li><strong className="dark:text-white">Mortgage Market Measures</strong>: LTI flow limit and affordability test remain in place</li>
              <li><strong className="dark:text-white">Leverage Ratio</strong>: Minimum requirement of 3.25% for major banks</li>
              <li><strong className="dark:text-white">Operational Resilience</strong>: Enhanced requirements for critical services</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Future Priorities</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong className="dark:text-white">Market-Based Finance</strong>: Continued development of regulatory framework</li>
              <li><strong className="dark:text-white">Digital Innovation</strong>: Oversight of fintech and digital payment systems</li>
              <li><strong className="dark:text-white">Climate Risk</strong>: Implementation of climate stress testing</li>
              <li><strong className="dark:text-white">Global Coordination</strong>: Enhanced international regulatory cooperation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stress Testing Results */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">2025 Stress Test Results</h2>
        <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6 shadow-md border border-green-100 dark:border-green-900/50 transition-colors">
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The 2025 annual cyclical scenario (ACS) stress test demonstrates that the UK banking system is well-capitalised 
            and resilient to severe economic shocks. All participating banks maintained capital ratios above minimum requirements 
            throughout the stress scenario.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
              <h4 className="font-semibold text-gray-800 dark:text-white">Scenario: GDP decline</h4>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">-5.2%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Peak to trough over 2 years</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
              <h4 className="font-semibold text-gray-800 dark:text-white">House price decline</h4>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">-31%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Peak to trough</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
              <h4 className="font-semibold text-gray-800 dark:text-white">Unemployment rate</h4>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">12%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Peak level</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimistic Stress Test Results */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">2025 Optimistic Results: Counter Stress Test Resilience</h2>
        <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-6 shadow-md border border-emerald-100 dark:border-emerald-900/50 transition-colors">
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The UK&apos;s economic fundamentals demonstrate exceptional resilience and structural advantages that position 
            the financial system to not only withstand shocks but to thrive in positive economic scenarios. The counter 
            stress test reveals the UK&apos;s capacity to capitalize on favorable conditions and drive sustainable growth.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
            Key strengths include world-class financial infrastructure, robust regulatory frameworks, skilled workforce, 
            and strategic positioning as a global financial hub. These advantages enable rapid adaptation to positive 
            economic developments and sustainable wealth creation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
              <h4 className="font-semibold text-gray-800 dark:text-white">Scenario: GDP growth</h4>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+4.8%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sustained annual growth</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
              <h4 className="font-semibold text-gray-800 dark:text-white">House price growth</h4>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+18%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Over 3 years</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
              <h4 className="font-semibold text-gray-800 dark:text-white">Unemployment rate</h4>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2.8%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Near full employment</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Economic Strengths
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>World-leading financial services sector driving innovation</li>
                <li>Strong rule of law and regulatory excellence</li>
                <li>Diversified economy with resilient service sectors</li>
                <li>Strategic post-Brexit trade positioning</li>
                <li>Green finance leadership and sustainable investment flows</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Positive Outcomes
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Enhanced productivity through AI and fintech adoption</li>
                <li>Increased foreign investment in UK markets</li>
                <li>Sustainable debt reduction through growth</li>
                <li>Strengthened international financial partnerships</li>
                <li>Climate transition creating new economic opportunities</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-emerald-100 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800/50">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Banking Sector Optimistic Scenario</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Under favorable conditions, UK banks demonstrate exceptional capacity to support economic growth with 
              CET1 ratios reaching 20%+, significant expansion in sustainable lending, and robust returns on equity 
              exceeding 15%. The sector&apos;s technological advantages and regulatory sophistication position it to 
              capture global market share in emerging financial services.
            </p>
          </div>
        </div>
      </section>

      {/* International Perspective */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">International Financial Developments</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Global financial conditions remain challenging, with central banks navigating persistent inflationary pressures 
          and growth concerns. The UK&apos;s financial system benefits from strong international regulatory cooperation 
          and robust cross-border supervision arrangements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Global Risks</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>US-China trade tensions and technological decoupling</li>
              <li>European banking sector vulnerabilities</li>
              <li>Emerging market debt sustainability concerns</li>
              <li>Commercial real estate stress in major economies</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">UK Exposures</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>EU financial markets through ongoing cooperation agreements</li>
              <li>US markets via significant cross-border banking activities</li>
              <li>Global systemically important financial institutions</li>
              <li>International supply chain and trade finance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The UK financial system demonstrates resilience in the face of multiple challenges, supported by strong capital 
          buffers, prudent regulatory frameworks, and effective supervision. However, vulnerabilities in household and 
          corporate debt, combined with emerging risks from operational threats and climate change, require continued vigilance.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The Financial Policy Committee remains committed to taking action as needed to maintain financial stability, 
          using its macroprudential tools to address risks while supporting the financial system&apos;s role in facilitating 
          economic growth and prosperity.
        </p>
        <blockquote className="border-l-4 border-red-500 dark:border-red-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          &quot;The UK financial system has the capacity to support households and businesses even in challenging economic conditions, 
          but continued adaptation to evolving risks is essential for maintaining this resilience.&quot;
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Bank of England Financial Stability Report, July 2025</footer>
        </blockquote>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report are available for download in multiple formats.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/uk-financial-stability-2025.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
          <a 
            href="/data/uk-financial-stability-2025.json"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">JSON Format</span>
          </a>
          <a 
            href="/data/uk-financial-stability-2025.xml"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
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
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/uk-financial-stability&text=UK Financial Stability Report July 2025"
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
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/uk-financial-stability&title=UK Financial Stability Report July 2025"
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
            href="mailto:?subject=UK Financial Stability Report July 2025&body=Check out this report on UK financial stability: https://example.com/risk/uk-financial-stability"
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

      {/* Sources */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sources</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
          <li>Bank of England. (2025, July 15). Financial Stability Report—July 2025. Bank of England.</li>
          <li>Bank of England. (2025, June). Monetary Policy Report, June 2025.</li>
          <li>Financial Policy Committee. (2025). Annual Cyclical Scenario Stress Test Results.</li>
          <li>Prudential Regulation Authority. (2025). Climate Biennial Exploratory Scenario 2025.</li>
        </ol>
      </section>

      {/* Related Risk Reports Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Related Risk Reports</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Explore our comprehensive collection of financial risk analysis reports covering different markets and regulatory frameworks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RiskReportCard
            title="UK Financial Stability Report—July 2025"
            description="Comprehensive analysis of UK financial system resilience, household vulnerabilities, and emerging operational risks."
            date="July 15, 2025"
            category="Financial Risk"
            tags={["Banking", "Household Debt", "Operational Risk"]}
            imageUrl="/images/showcase-dataviz.jpg"
            href="/risk/uk-financial-stability"
            isActive={true}
            usePlaceholder={true}
            downloadLinks={[
              { format: "CSV", url: "/data/uk-financial-stability-2025.csv" },
              { format: "JSON", url: "/data/uk-financial-stability-2025.json" },
              { format: "XML", url: "/data/uk-financial-stability-2025.xml" }
            ]}
          />
          <RiskReportCard
            title="Canadian Financial Stability Report—2025"
            description="Analysis of how the Canadian financial system is responding to US trade policy uncertainty and market volatility."
            date="May 8, 2025"
            category="Financial Risk"
            tags={["Trade War", "Banking", "Market Volatility"]}
            imageUrl="/images/showcase-dataviz.jpg"
            href="/risk/canadian-financial-stability"
            usePlaceholder={true}
            downloadLinks={[
              { format: "CSV", url: "/data/canadian-financial-stability-2025.csv" },
              { format: "JSON", url: "/data/canadian-financial-stability-2025.json" },
              { format: "XML", url: "/data/canadian-financial-stability-2025.xml" }
            ]}
          />
          <RiskReportCard
            title="European Banking Stress Analysis"
            description="Deep dive into European banking sector vulnerabilities and regulatory responses in the current rate environment."
            date="June 20, 2025"
            category="Banking Risk"
            tags={["European Banking", "Stress Testing", "Regulatory"]}
            imageUrl="/images/risk-europe.jpg"
            href="/risk/european-banking-stress"
            usePlaceholder={true}
            downloadLinks={[
              { format: "CSV", url: "/data/european-banking-stress.csv" }
            ]}
          />
        </div>
      </section>

      {/* Data Available Note */}
      <section className="text-sm text-gray-600 dark:text-gray-400 mb-8 border-t pt-4 border-gray-200 dark:border-gray-700">
        <p>Data available as: CSV, JSON and XML</p>
        <p className="mt-1">
          This analysis was produced by the Financial Policy Committee of the Bank of England: Andrew Bailey, 
          Sarah Breeden, Jon Cunliffe, Ashley Alder, Nikhil Rathi, Elizabeth Stheeman, and Carolyn Wilkins.
        </p>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-red-600 dark:text-red-400 hover:underline hover:text-red-800 dark:hover:text-red-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}
