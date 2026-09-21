"use client";

import React from "react";
import Link from "next/link";
import { 
  MortgageArrearsChart, 
  BusinessVulnerabilityChart, 
  BankCapitalRatioChart,
  AssetVolatilityChart,
  RiskAssessmentDashboard,
  HousingVulnerabilityChart,
  InternationalContagionChart,
  ClimateRiskChart
} from "../../../components/risk/CanadianFinancialCharts";
import RiskReportCard from "../../../components/risk/RiskReportCard";

export default function CanadianFinancialStabilityPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Canadian Financial Stability Report—2025</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Navigating Trade War and Geopolitical Uncertainties</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          May 8, 2025 | Bank of Canada
        </div>
        <div className="mt-3 inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
          Updated with Bank of Canada FSR 2026 findings (released May 28, 2026)
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The Bank of Canada&apos;s Financial Stability Report 2025 indicated that while Canada&apos;s financial system remains resilient,
            US trade policy uncertainty posed significant risks to financial stability. The 2026 report (released May 28, 2026) confirms
            the system has continued to function well, but notes a more turbulent global environment — with the Middle East conflict
            and AI disruption to the software sector joining trade war uncertainty as key risk drivers. The primary concern is that
            multiple vulnerabilities could crystallize simultaneously.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Geopolitical shocks (Middle East war, trade war) triggering multiple vulnerabilities at once</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Hedge fund repo borrowing amplifying fixed-income market volatility during stress events</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">AI disruption to software sector and ongoing job losses in trade-exposed industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Landscape Section with Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Market Reaction to Trade Policy and Geopolitical Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The April 2025 tariff shock — the largest single episode of trade-war-driven volatility since COVID-19 — has partially subsided.
              Equity markets recovered through mid-2025, and volatility indicators declined through year-end as participants adapted to
              the new trade environment. The US dollar and Treasuries have partially reclaimed their safe-haven role.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              A new volatility driver emerged in early 2026: the Middle East conflict, which has caused one of the largest disruptions to
              global energy markets in history, pushing up oil prices and adding inflationary pressure. By May 2026, markets had partially
              stabilised, though volatility remains above pre-2025 norms and geopolitical risk remains elevated.
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
              Canadian banks remain well positioned to support the financial system and the broader economy. The common equity Tier 1 (CET1)
              capital ratio averaged <strong>13.7%</strong> in Q1 2026 — approximately 2 percentage points above pre-pandemic levels and well above the
              regulatory minimum of 8%. Bank profitability has increased, supported by higher revenues from capital market activities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Banks have increased their accumulated provisions for anticipated loan losses and continue to hold sufficient liquidity to meet
              short-term obligations. Even under a severe stress scenario with a 5.1% GDP decline and 9.2% unemployment, capital would remain
              above regulatory minimums (IMF stress tests).
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
              Canada&apos;s economy is particularly sensitive to developments in the United States due to deep trade and financial linkages.
              The US remains the largest single source of contagion risk, though its relative share has edged down as investors have
              diversified away from US assets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              A significant new contagion channel emerged in 2026: the Middle East war, which has caused one of the largest disruptions
              to global energy markets in history, pushing up oil prices and putting pressure on inflation worldwide. This adds to
              existing trade-war-driven pressures on the Canadian economy.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Hedge funds — which now purchase up to 50% of Government of Canada bonds at auction and account for roughly 30% of
              secondary market trading volume — have continued to increase their repo borrowing. Their activity supports market liquidity
              but could leave fixed-income markets more vulnerable to sudden sell-offs during periods of stress.
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
              The national mortgage arrears rate reached <strong>0.29%</strong> in May 2026 — the highest count (14,061 mortgages 90+ days past due)
              in more than a decade, and more than double the record low of 0.14% recorded in 2022. Ontario&apos;s rate has climbed to 0.23%,
              overtaking the national average for the first time since 2012. Mortgage delinquency balances are up roughly 32% year-over-year
              nationally and 52% higher in Ontario (Equifax Q1 2026).
            </p>
            <p className="text-gray-700 dark:text-gray-300 transition-colors">
              Despite the rise, most renewing households have managed the transition: over <strong>90%</strong> of borrowers who renewed in the past
              12 months did so at rates below their qualifying rate, and approximately <strong>70%</strong> of those who refinanced extended their
              amortization by an average of six years. The final wave of pandemic-era renewals is expected over the next 12 months,
              with this risk projected to have fully passed by the second half of 2027.
            </p>
          </div>
          <MortgageArrearsChart />
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <HousingVulnerabilityChart />
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Housing Market Vulnerabilities</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Canadian housing markets have softened over the past 12 months. Price acceleration vulnerability has declined markedly
              from its 2025 peak, and overvaluation pressures have eased in most urban centres. The Bank continues to closely monitor
              the risk of a price correction, particularly given that household mortgage debt remains elevated.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Debt service vulnerabilities remain the primary concern, driven by the ongoing wave of pandemic-era mortgage renewals.
              However, the mortgage stress test has provided a meaningful cushion — most renewing borrowers qualified at rates
              significantly above current levels — and the debt-to-income ratio has declined from 173% (2025) to below its 2022 peak.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Overbuilding risk has also edged down as construction activity has moderated in response to softer demand conditions.
            </p>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Business Sector Vulnerabilities</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Non-financial businesses have generally remained in solid financial health. Business debt levels are elevated but stable,
            and pockets of stress remain concentrated in trade-exposed and highly leveraged sectors. The share of borrowers falling
            behind on debt payments stabilised over the past 12 months after rising for four consecutive years.
          </p>
          <BusinessVulnerabilityChart />
          <p className="text-gray-700 dark:text-gray-300 mt-4 transition-colors">
            Manufacturing remains the most exposed sector, combining high US trade dependence with elevated debt and thin cash reserves.
            A new 2026 risk has emerged in the technology sector: AI disruption concerns have led to a substantial widening of spreads
            on leveraged loans to software companies, and stocks of some software firms have fallen sharply. Technology firms now show
            materially higher financial vulnerability scores compared with 2025.
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
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Near-Term Monitoring (2026)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong className="dark:text-white">Mortgage arrears trajectory</strong>: Whether the 0.29% national rate stabilises or climbs further through the final renewal wave</li>
              <li><strong className="dark:text-white">Energy market volatility</strong>: Spillover from Middle East conflict into Canadian inflation and credit conditions</li>
              <li><strong className="dark:text-white">Repo and funding markets</strong>: Signs of hedge fund deleveraging or sudden sell-offs in Government of Canada bond markets</li>
              <li><strong className="dark:text-white">Software sector credit</strong>: Further widening of leveraged loan spreads linked to AI disruption concerns</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Medium-Term Concerns (2026–2027)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong className="dark:text-white">Final mortgage renewal wave</strong>: Completion of pandemic-era renewals; risk expected to pass by H2 2027</li>
              <li><strong className="dark:text-white">Unemployment in trade-exposed sectors</strong>: Particularly manufacturing and agriculture under prolonged trade war</li>
              <li><strong className="dark:text-white">AI-driven sector disruption</strong>: Broader contagion from software sector stress to financial and technology employment</li>
              <li><strong className="dark:text-white">Geopolitical escalation</strong>: Potential deepening of Middle East conflict with further energy market implications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* International Mitigation Strategies Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors">International Mitigation Strategies: Lessons for Canada</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Several peer economies facing similar challenges — high household debt, housing market vulnerabilities, hedge fund activity in sovereign bond markets,
          and geopolitical uncertainty — have deployed policy tools that offer direct lessons for the Canadian context.
        </p>

        {/* Country cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Australia */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 px-5 py-3 border-b border-yellow-100 dark:border-yellow-800/40 flex items-center gap-3">
              <span className="text-2xl">🇦🇺</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Australia — APRA Debt-to-Income Caps</h3>
                <span className="text-xs text-yellow-700 dark:text-yellow-300 font-medium">Macroprudential · Effective Feb 2026</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                APRA activated a binding debt-to-income (DTI) limit in February 2026: banks may lend no more than <strong>20% of new residential mortgage volume</strong> at a
                DTI ≥ 6×. This directly targets the highest-risk segment of the mortgage book without constraining mainstream borrowers.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4 mb-3">
                <li>Complemented by a 3% mortgage serviceability buffer and 1% countercyclical capital buffer</li>
                <li>New housing construction exempted to avoid constraining supply</li>
                <li>Measured quarterly per bank, with separate owner-occupier and investor portfolios</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-3 text-xs text-yellow-800 dark:text-yellow-200">
                <strong>Lesson for Canada:</strong> A DTI cap of this type could complement Canada&apos;s existing stress test, specifically targeting highly leveraged borrowers who remain most exposed to job loss shocks from the trade war.
              </div>
            </div>
          </div>

          {/* New Zealand */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
            <div className="bg-green-50 dark:bg-green-900/20 px-5 py-3 border-b border-green-100 dark:border-green-800/40 flex items-center gap-3">
              <span className="text-2xl">🇳🇿</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">New Zealand — LVR + DTI Two-Pillar Framework</h3>
                <span className="text-xs text-green-700 dark:text-green-300 font-medium">Macroprudential · DTI active since Jul 2024</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                The RBNZ operates a two-pillar approach combining loan-to-value ratio (LVR) restrictions with DTI limits.
                Owner-occupiers face a DTI cap of <strong>6× gross household income</strong>; investors face <strong>7×</strong>.
                LVR restrictions allow banks up to 25% of new owner-occupier lending above 80% LVR, and up to 10% of investor lending above 70%.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4 mb-3">
                <li>DTI restrictions designed to be countercyclical — tightest when rates are low and markets are strong</li>
                <li>Result: national house prices broadly flat for 3 years; high-risk lending share manageable</li>
                <li>LVR restrictions eased in December 2025 in exchange for DTI limits taking effect</li>
              </ul>
              <div className="bg-green-50 dark:bg-green-900/20 rounded p-3 text-xs text-green-800 dark:text-green-200">
                <strong>Lesson for Canada:</strong> The countercyclical design — tightening DTI limits when markets overheat — could be applied to Canadian housing markets where overvaluation and debt-service pressures coexist with a softening cycle.
              </div>
            </div>
          </div>

          {/* Norway */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
            <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-b border-blue-100 dark:border-blue-800/40 flex items-center gap-3">
              <span className="text-2xl">🇳🇴</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Norway — Mandatory Amortisation Requirements</h3>
                <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">Structural · Long-term debt reduction</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Norwegian mortgage regulation requires self-amortising mortgages as the default: borrowers must repay principal throughout the life of the loan,
                preventing the interest-only lending that can allow debt balances to grow unchecked. Strong nominal wage growth and lower principal payments
                through self-amortisation have together cushioned Norwegian households against income shocks.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4 mb-3">
                <li>Norges Bank 2026 H1 FSR assesses the Norwegian financial system as <em>robust</em></li>
                <li>Household and firm debt-servicing capacity described as solid, with no material changes in structural vulnerabilities</li>
                <li>Household credit growth stable at 4.7% year-over-year in 2026</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-xs text-blue-800 dark:text-blue-200">
                <strong>Lesson for Canada:</strong> The ~70% of Canadian refinancers who extended amortisation by an average of 6 years are taking on the opposite risk. A tighter limit on extended amortisation — or incentives to return to standard terms — would reduce long-run debt accumulation.
              </div>
            </div>
          </div>

          {/* United Kingdom */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
            <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 border-b border-red-100 dark:border-red-800/40 flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">United Kingdom — System-Wide Stress Testing & MMF Reform</h3>
                <span className="text-xs text-red-700 dark:text-red-300 font-medium">NBFI resilience · BoE July 2026 FSR</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                The Bank of England&apos;s Financial Policy Committee is conducting its second <strong>System-Wide Exploratory Scenario (SWES)</strong> exercise,
                explicitly modelling how stress propagates from banks through non-bank financial intermediaries (NBFIs) — including hedge funds
                whose gilt repo positions reached their highest level on record in early 2026.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4 mb-3">
                <li>Money Market Fund (MMF) reforms locked in: new liquidity and redemption-gate requirements across the UK and Europe</li>
                <li>FPC exploring further changes to support gilt repo market resilience against sudden hedge fund deleveraging</li>
                <li>Capital framework modernisation: simpler, more proportionate, better calibrated to current risks</li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/20 rounded p-3 text-xs text-red-800 dark:text-red-200">
                <strong>Lesson for Canada:</strong> Canada faces an almost identical hedge fund / GoC bond concentration risk. Introducing system-wide stress testing that spans both banks and NBFIs — and considering repo market resilience reforms — would directly address the Bank of Canada&apos;s 2026 top NBFI concern.
              </div>
            </div>
          </div>

        </div>

        {/* ECB row — full width */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors mb-6">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 px-5 py-3 border-b border-indigo-100 dark:border-indigo-800/40 flex items-center gap-3">
            <span className="text-2xl">🇪🇺</span>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Euro Area (ECB) — Geopolitical Reverse Stress Testing & NBFI Policy</h3>
              <span className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">ECB Financial Stability Review, May 2026</span>
            </div>
          </div>
          <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Geopolitical Reverse Stress Testing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The ECB made geopolitical risk the focus of the adverse scenario in its 2025 stress test and will assess banks on geopolitical risk management in its 2026 <em>reverse</em> stress test — working backwards from failure to identify which shocks would cause a bank to breach its capital floor. Canada could apply a similar reverse-scenario approach to trade-war and Middle East energy disruption pathways.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Comprehensive NBFI Policy Response</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ECB and ESRB issued a joint 2026 report analysing financial stability risks from geoeconomic fragmentation across banks and NBFIs. The ECB calls for a <em>comprehensive</em> macroprudential framework for the non-bank sector — not just monitoring but binding leverage and liquidity requirements — applicable to hedge funds, private credit funds, and money market funds.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">AI & Operational Resilience Standards</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                In response to AI-driven disruption risk (AI data centre buildout generating up to USD 3 trillion in financing demand, much from private credit), the ECB is developing new operational resilience standards for AI deployment in financial institutions. This directly parallels Canada&apos;s emerging software-sector leveraged loan stress.
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded p-3 text-xs text-indigo-800 dark:text-indigo-200">
              <strong>Lesson for Canada:</strong> Adopting a joint OSFI–Bank of Canada framework for binding NBFI macroprudential requirements — covering hedge fund leverage limits, private credit reporting, and AI operational resilience — would address three of Canada&apos;s 2026 FSR concerns simultaneously.
            </div>
          </div>
        </div>

        {/* Summary comparison table */}
        <div className="bg-gray-50 dark:bg-neutral-900/50 rounded-lg border border-gray-100 dark:border-neutral-800 p-5 transition-colors">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Canada vs. Peers: Policy Gap Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 pr-4 text-gray-600 dark:text-gray-400 font-medium">Tool</th>
                  <th className="text-center py-2 px-3 text-gray-600 dark:text-gray-400 font-medium">Canada</th>
                  <th className="text-center py-2 px-3 text-gray-600 dark:text-gray-400 font-medium">Australia</th>
                  <th className="text-center py-2 px-3 text-gray-600 dark:text-gray-400 font-medium">New Zealand</th>
                  <th className="text-center py-2 px-3 text-gray-600 dark:text-gray-400 font-medium">Norway</th>
                  <th className="text-center py-2 px-3 text-gray-600 dark:text-gray-400 font-medium">UK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  { tool: "Mortgage stress test / serviceability buffer", ca: "✅", au: "✅", nz: "✅", no: "✅", uk: "✅" },
                  { tool: "Binding DTI limits on new mortgages", ca: "❌", au: "✅", nz: "✅", no: "✅", uk: "⚠️ LTI cap" },
                  { tool: "LVR restrictions", ca: "⚠️ Partial", au: "⚠️ Phased", nz: "✅", no: "✅", uk: "✅" },
                  { tool: "Mandatory amortisation (no interest-only default)", ca: "❌", au: "⚠️ APRA rules", nz: "⚠️ Partial", no: "✅", uk: "⚠️ Partial" },
                  { tool: "System-wide stress testing (banks + NBFIs)", ca: "❌", au: "⚠️ Exploring", nz: "❌", no: "⚠️ Partial", uk: "✅ SWES" },
                  { tool: "Binding macroprudential rules for hedge funds / NBFIs", ca: "❌", au: "⚠️ Exploring", nz: "❌", no: "⚠️ Partial", uk: "⚠️ Developing" },
                  { tool: "Money Market Fund reform (liquidity gates)", ca: "❌", au: "⚠️ Consulting", nz: "❌", no: "✅ via ESB", uk: "✅" },
                  { tool: "Geopolitical reverse stress testing", ca: "❌", au: "⚠️ Exploring", nz: "❌", no: "⚠️ Partial", uk: "⚠️ Partial" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-100 dark:hover:bg-neutral-800/50 transition-colors">
                    <td className="py-2 pr-4 text-gray-700 dark:text-gray-300">{row.tool}</td>
                    <td className="text-center py-2 px-3 text-base">{row.ca}</td>
                    <td className="text-center py-2 px-3 text-base">{row.au}</td>
                    <td className="text-center py-2 px-3 text-base">{row.nz}</td>
                    <td className="text-center py-2 px-3 text-base">{row.no}</td>
                    <td className="text-center py-2 px-3 text-base">{row.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">✅ In place &nbsp;·&nbsp; ⚠️ Partial or in development &nbsp;·&nbsp; ❌ Not in place</p>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The Bank of Canada&apos;s 2026 analysis confirms that Canada&apos;s financial system has continued to function well despite ongoing trade uncertainty
          and new geopolitical shocks. Bank capital ratios have strengthened to an average CET1 of 13.7%, the mortgage renewal risk is approaching
          resolution, and housing market vulnerabilities have softened. These improvements provide meaningful buffers.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Nevertheless, a more turbulent global environment means the risk of multiple vulnerabilities crystallising simultaneously has increased.
          The Middle East conflict, AI-driven sector disruption, and continued hedge fund growth in sovereign bond markets are new dimensions that
          require careful monitoring. The Bank will work closely with federal and provincial financial authorities to address potential emerging issues
          and to foster a stable and resilient financial system that absorbs shocks rather than amplifies them.
        </p>
        <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          &quot;A stable and resilient financial system—one that absorbs shocks and does not amplify them—can help the economy through periods of turbulence.&quot;
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Bank of Canada Financial Stability Reports, 2025–2026</footer>
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
          <li>Bank of Canada. (2026, May 28). Financial Stability Report—2026. Bank of Canada.</li>
          <li>Bank of Canada. (2025, May 8). Financial Stability Report—2025. Bank of Canada.</li>
          <li>Bank of Canada. (2025, April). Monetary Policy Report, April 2025.</li>
          <li>International Monetary Fund. (2025). Financial Sector Assessment Program: Canada.</li>
          <li>Equifax Canada. (2026, Q1). Canadian Mortgage Delinquency Report.</li>
          <li>Canada Mortgage and Housing Corporation. (2026). Mortgage Renewal Wave: Regional Impacts.</li>
          <li>Australian Prudential Regulation Authority (APRA). (2026, February). Activating Debt-to-Income Limits as a Macroprudential Policy Tool.</li>
          <li>Reserve Bank of New Zealand. (2026, May). Financial Stability Report May 2026.</li>
          <li>Norges Bank. (2026, May 12). Financial Stability Report 2026 H1.</li>
          <li>Bank of England Financial Policy Committee. (2026, July). Financial Stability Report — July 2026.</li>
          <li>European Central Bank. (2026, May 27). Financial Stability Review, May 2026.</li>
          <li>ECB &amp; ESRB. (2026, January). Joint Report: Financial Stability Risks from Geoeconomic Fragmentation.</li>
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
            description="Analysis of Canadian financial system resilience through US trade war, Middle East geopolitical shocks, and AI disruption risks. Updated with Bank of Canada FSR 2026."
            date="May 8, 2025 (Updated May 2026)"
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