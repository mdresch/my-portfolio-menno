'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Scatter,
  ScatterChart,
  ZAxis,
  ReferenceLine,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

// Sample data for charts
const debtToGDPData = [
  { region: 'Advanced Economies', '2021': 121, '2022': 118, '2023': 115, '2024': 114 },
  { region: 'Emerging Markets', '2021': 65, '2022': 68, '2023': 70, '2024': 72 },
  { region: 'Low Income', '2021': 50, '2022': 54, '2023': 57, '2024': 59 },
  { region: 'Global', '2021': 98, '2022': 97, '2023': 96, '2024': 97 }
];

const interestPaymentsData = [
  { country: 'United States', percent: 12.4 },
  { country: 'Italy', percent: 9.8 },
  { country: 'Japan', percent: 9.2 },
  { country: 'France', percent: 7.5 },
  { country: 'Spain', percent: 6.8 },
  { country: 'United Kingdom', percent: 6.2 },
  { country: 'Brazil', percent: 13.8 },
  { country: 'South Africa', percent: 15.2 },
  { country: 'India', percent: 11.7 },
  { country: 'Ghana', percent: 38.5 },
  { country: 'Argentina', percent: 22.6 },
  { country: 'Egypt', percent: 18.3 }
];

const debtMaturityData = [
  { country: 'USA', shortTerm: 25, mediumTerm: 35, longTerm: 40 },
  { country: 'Japan', shortTerm: 15, mediumTerm: 30, longTerm: 55 },
  { country: 'Germany', shortTerm: 10, mediumTerm: 45, longTerm: 45 },
  { country: 'UK', shortTerm: 18, mediumTerm: 42, longTerm: 40 },
  { country: 'Italy', shortTerm: 22, mediumTerm: 38, longTerm: 40 },
  { country: 'Brazil', shortTerm: 32, mediumTerm: 45, longTerm: 23 },
  { country: 'India', shortTerm: 28, mediumTerm: 42, longTerm: 30 },
  { country: 'South Africa', shortTerm: 35, mediumTerm: 40, longTerm: 25 }
];

const vulnerabilityScoresData = [
  { name: 'Ghana', score: 89, risk: 'Extreme' },
  { name: 'Argentina', score: 85, risk: 'Extreme' },
  { name: 'Egypt', score: 82, risk: 'Extreme' },
  { name: 'Pakistan', score: 78, risk: 'High' },
  { name: 'Tunisia', score: 76, risk: 'High' },
  { name: 'El Salvador', score: 74, risk: 'High' },
  { name: 'Kenya', score: 71, risk: 'High' },
  { name: 'Ethiopia', score: 68, risk: 'Medium-High' },
  { name: 'Turkey', score: 65, risk: 'Medium-High' },
  { name: 'South Africa', score: 62, risk: 'Medium-High' }
];

const histDebtCrisisData = [
  { decade: '1980s', count: 46 },
  { decade: '1990s', count: 38 },
  { decade: '2000s', count: 23 },
  { decade: '2010s', count: 15 },
  { decade: '2020-24', count: 8 }
];

const debtCompositionData = [
  {
    subject: 'Local Currency',
    'Advanced Economies': 85,
    'Emerging Markets': 62,
    'Low Income': 35,
    fullMark: 100
  },
  {
    subject: 'Foreign Currency',
    'Advanced Economies': 15,
    'Emerging Markets': 38,
    'Low Income': 65,
    fullMark: 100
  },
  {
    subject: 'Market Held',
    'Advanced Economies': 78,
    'Emerging Markets': 55,
    'Low Income': 25,
    fullMark: 100
  },
  {
    subject: 'Official Sector',
    'Advanced Economies': 22,
    'Emerging Markets': 45,
    'Low Income': 75,
    fullMark: 100
  },
  {
    subject: 'Long Maturity',
    'Advanced Economies': 70,
    'Emerging Markets': 55,
    'Low Income': 35,
    fullMark: 100
  },
  {
    subject: 'Fixed Rate',
    'Advanced Economies': 90,
    'Emerging Markets': 65,
    'Low Income': 40,
    fullMark: 100
  }
];

// Components for the charts
const DebtToGDPTrendsChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Global Debt-to-GDP Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={debtToGDPData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="region" />
          <YAxis domain={[0, 140]} label={{ value: '% of GDP', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="2021" name="2021" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="2022" name="2022" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="2023" name="2023" stroke="#ffc658" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="2024" name="2024" stroke="#ff8042" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: IMF Global Debt Database, November 2024
      </div>
    </div>
  );
};

const InterestPaymentsChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Interest Payments as % of Government Revenue (2024)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={interestPaymentsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 40]} />
          <YAxis dataKey="country" type="category" width={100} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="percent" name="Interest/Revenue" fill="#8884d8">
            {interestPaymentsData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={
                  entry.percent > 20 ? '#d32f2f' : 
                  entry.percent > 10 ? '#f57c00' : 
                  '#2e7d32'
                } 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: National treasury data, IMF Fiscal Monitor, October 2024
      </div>
    </div>
  );
};

const DebtMaturityProfileChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sovereign Debt Maturity Profiles</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={debtMaturityData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="country" />
          <YAxis domain={[0, 100]} label={{ value: 'Percentage of Total Debt', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="shortTerm" name="< 1 Year" stackId="a" fill="#ff8042" />
          <Bar dataKey="mediumTerm" name="1-5 Years" stackId="a" fill="#8884d8" />
          <Bar dataKey="longTerm" name="> 5 Years" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank for International Settlements, national debt management offices, 2024
      </div>
    </div>
  );
};

const VulnerabilityScoresChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sovereign Debt Vulnerability Scores</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={vulnerabilityScoresData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip formatter={(value) => `${value}/100`} />
          <Legend />
          <Bar dataKey="score" name="Vulnerability Score" fill="#8884d8">
            {vulnerabilityScoresData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={
                  entry.score > 80 ? '#d32f2f' : 
                  entry.score > 70 ? '#f57c00' : 
                  entry.score > 60 ? '#ff9800' : 
                  '#2e7d32'
                } 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Global Financial Markets Institute Sovereign Risk Index, November 2024
      </div>
    </div>
  );
};

const HistoricalDebtCrisesChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Historical Sovereign Debt Crises</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={histDebtCrisisData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="decade" />
          <YAxis domain={[0, 50]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Number of Sovereign Debt Crises" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Reinhart & Rogoff updated database, IMF, World Bank, 2024
      </div>
    </div>
  );
};

const DebtCompositionRadarChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sovereign Debt Composition by Income Group</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart outerRadius={120} data={debtCompositionData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Advanced Economies" dataKey="Advanced Economies" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
          <Radar name="Emerging Markets" dataKey="Emerging Markets" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />
          <Radar name="Low Income" dataKey="Low Income" stroke="#ff8042" fill="#ff8042" fillOpacity={0.4} />
          <Legend />
          <Tooltip formatter={(value) => `${value}%`} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: IMF Global Debt Database, World Bank International Debt Statistics, 2024
      </div>
    </div>
  );
};

export default function SovereignDebtMonitorPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Sovereign Debt Crisis Risk Monitor</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
          Analysis of global sovereign debt levels, sustainability metrics, and potential triggers for sovereign debt crises
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          November 5, 2024 | Global Financial Markets Institute
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-yellow-50 dark:bg-amber-950/30 rounded-lg p-6 shadow-md border border-yellow-100 dark:border-amber-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            This report examines the current state of global sovereign debt and assesses the risk of sovereign debt crises 
            across different regions. Despite stabilizing global debt-to-GDP ratios, our analysis reveals elevated risks in 
            several emerging and developing economies, primarily due to rising interest rates, reduced fiscal space, and 
            challenging refinancing conditions. Additionally, debt compositions in vulnerable countries highlight significant 
            vulnerabilities to external shocks.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Interest payments now consume more than 20% of government revenue in five emerging economies
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Advanced economy debt has stabilized but remains historically high at 114% of GDP
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Ten countries are at high or extreme risk of debt distress in the next 12-24 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Debt Trends Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Global Debt Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Global sovereign debt levels have stabilized in recent years, with aggregate debt-to-GDP ratios 
              declining slightly from pandemic peaks. However, the absolute level of sovereign debt remains at 
              historically high levels, particularly in advanced economies where it averages 114% of GDP.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Debt trajectories are diverging across income groups. While advanced economies have begun to 
              stabilize their debt ratios, emerging markets and low-income countries have seen continuing 
              increases in debt-to-GDP levels. This divergence reflects differing access to capital markets, 
              varying economic growth rates, and different fiscal consolidation capabilities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The composition of sovereign debt has also evolved, with increasing reliance on domestic currency 
              debt in emerging markets (now 62% of total sovereign debt), though foreign currency exposures remain 
              significant. Low-income countries continue to have high exposure to foreign currency debt (65%), 
              creating significant exchange rate vulnerabilities.
            </p>
          </div>
          <DebtToGDPTrendsChart />
        </div>
      </section>

      {/* Interest Burden Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Interest Payment Burden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InterestPaymentsChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Rising interest rates have significantly increased the fiscal burden of sovereign debt, particularly 
              for countries with large refinancing needs. Interest payments as a percentage of government revenue 
              have reached alarming levels in several emerging and developing economies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Ghana, Argentina, and Egypt face extreme interest payment burdens, with more than 18% of government 
              revenue directed to debt servicing. This severely constrains fiscal space for essential public services 
              and investment. Meanwhile, even advanced economies like the United States are experiencing rising 
              interest burdens, with interest payments now consuming 12.4% of federal revenue.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The interest burden is particularly concerning when combined with weak economic growth prospects. 
              Countries facing the "interest rate-growth differential" (where interest rates exceed economic growth rates) 
              face debt dynamics that can quickly become unsustainable without substantial primary budget surpluses.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-100 dark:border-amber-900/50 mt-4">
              <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300 mb-2">Risk Alert</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Countries with interest payments exceeding 15% of government revenue face elevated risk of debt distress, 
                particularly when combined with significant foreign currency exposure and near-term refinancing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Debt Composition and Vulnerability Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Debt Composition and Vulnerabilities</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          The composition of sovereign debt—including currency denomination, maturity profile, interest rate structure, 
          and creditor base—is a critical determinant of vulnerability to debt distress. Our analysis reveals significant 
          differences in these characteristics across country income groups.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <DebtMaturityProfileChart />
          <DebtCompositionRadarChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Currency Risk</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Low-income countries face significant currency mismatches with 65% of sovereign debt denominated in foreign currencies, 
              primarily USD and EUR. Currency depreciation can rapidly increase debt burdens, creating fiscal stress and heightening 
              rollover risks. Even emerging markets maintain substantial foreign currency exposure (38% of total debt).
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Maturity Risk</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Several emerging economies face concentrated maturity profiles, with significant debt redemptions due in the 
              next 1-3 years. Brazil, Turkey, and South Africa all have more than 30% of their sovereign debt maturing within 
              one year, creating substantial refinancing pressure in a higher interest rate environment. Advanced economies 
              benefit from longer average maturities.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Creditor Composition</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              The shift toward non-Paris Club creditors, particularly for low-income countries, has complicated debt resolution 
              frameworks. Official bilateral debt to non-Paris Club creditors now accounts for approximately 20% of external debt 
              in low-income countries. This fragmented creditor base may complicate potential debt restructuring efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Vulnerability Assessment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Vulnerability Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Our sovereign debt vulnerability assessment evaluates multiple factors including debt burden metrics, 
              fiscal space, external position, debt composition, market access, and economic fundamentals to identify 
              countries at elevated risk of debt distress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The analysis identifies ten countries with high or extreme vulnerability scores, indicating significant 
              risk of debt distress in the next 12-24 months. Ghana, Argentina, and Egypt demonstrate the highest 
              vulnerability scores, with existing debt service challenges and limited market access.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              A second tier of vulnerable countries—including Pakistan, Tunisia, El Salvador, and Kenya—face elevated 
              risks but maintain some policy flexibility. These countries require careful monitoring, particularly as 
              global financial conditions tighten and refinancing needs come due in 2025-2026.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-100 dark:border-amber-900/50 mt-6">
              <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300 mb-2">Early Warning Signs</h3>
              <ul className="list-disc pl-5 text-sm text-amber-700 dark:text-amber-400 space-y-2">
                <li>Sovereign bond spreads exceeding 1,000 basis points</li>
                <li>Interest payments above 25% of government revenue</li>
                <li>Short-term debt exceeding 30% of total debt with limited reserves</li>
                <li>External financing needs above 15% of GDP</li>
                <li>Primary fiscal deficits above 3% of GDP with debt/GDP exceeding 70%</li>
              </ul>
            </div>
          </div>
          <VulnerabilityScoresChart />
        </div>
      </section>

      {/* Historical Context Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Historical Context</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HistoricalDebtCrisesChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Sovereign debt crises have become less frequent over recent decades, with the peak period of 
              widespread defaults occurring during the 1980s debt crisis that primarily affected Latin America 
              and parts of Africa. Institutional improvements, including stronger multilateral support frameworks 
              and improved debt management practices, have contributed to greater resilience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              However, the current environment presents unique challenges compared to recent history. The combination 
              of elevated debt levels following the pandemic, rapid interest rate increases, and a fragmented creditor 
              landscape creates vulnerabilities that differ from previous periods of stress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              While institutional frameworks for dealing with sovereign debt crises have evolved, significant gaps 
              remain. The Common Framework for Debt Treatments has shown limited effectiveness to date, and the rise 
              of non-traditional creditors has complicated collective action approaches to debt resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Scenario Analysis Section */}
      <section className="mb-12 bg-yellow-50 dark:bg-amber-950/30 p-6 rounded-lg border border-yellow-100 dark:border-amber-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Risk Scenario Analysis</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3">Scenario 1: Global Monetary Tightening Persists</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors">Key Assumptions</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Central banks maintain restrictive policy through 2025</li>
                <li>Global 10-year yields increase 50-75 basis points</li>
                <li>Emerging market currencies depreciate 10-15%</li>
                <li>Global growth slows to 2.2%</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors">Impact Assessment</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Under this scenario, 3-5 vulnerable countries would likely experience debt distress requiring restructuring. 
                Refinancing costs would increase significantly for all emerging markets, with yields for B-rated sovereigns 
                increasing 150-200 basis points. Fiscal adjustments would accelerate across vulnerable countries, potentially 
                creating social and political tensions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3">Scenario 2: Commodity Price Shock</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors">Key Assumptions</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Oil prices decline to $50-55 per barrel</li>
                <li>Metal prices fall 15-20%</li>
                <li>Agricultural commodity prices decline 10%</li>
                <li>Duration of shock: 12-18 months</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors">Impact Assessment</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Commodity exporters with already-weak fiscal positions would face severe stress, including Nigeria, Angola, 
                Ecuador, and Zambia. Current account balances would deteriorate by 3-5% of GDP for major exporters. Credit 
                ratings downgrades would likely follow for 6-8 commodity-dependent economies, restricting market access when 
                most needed.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3">Scenario 3: Coordinated International Response</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors">Key Assumptions</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Enhanced Common Framework implementation</li>
                <li>New IMF financing mechanisms for vulnerable countries</li>
                <li>Coordinated creditor participation including China</li>
                <li>Expanded concessional financing from multilaterals</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors">Impact Assessment</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A coordinated international response could meaningfully reduce near-term default risks and provide breathing 
                room for fiscal adjustment. Bond spreads could compress 150-250 basis points for countries receiving support. 
                However, underlying debt sustainability challenges would remain, requiring structural reforms and medium-term 
                fiscal consolidation to restore sustainable debt trajectories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Policy Implications and Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3 transition-colors">For Vulnerable Countries</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Extend debt maturities where possible to reduce near-term refinancing needs</li>
              <li>Develop comprehensive debt management strategies prioritizing sustainability</li>
              <li>Implement gradual fiscal consolidation focused on revenue mobilization</li>
              <li>Pursue structural reforms to enhance growth and export competitiveness</li>
              <li>Engage proactively with creditors at early signs of unsustainability</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3 transition-colors">For International Policymakers</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Strengthen the Common Framework with clearer timelines and broader creditor participation</li>
              <li>Expand precautionary financing facilities for countries with sound policies</li>
              <li>Enhance debt transparency requirements and monitoring capabilities</li>
              <li>Develop contingency plans for coordinated response to sovereign debt distress events</li>
              <li>Implement standardized sovereign bond clauses to facilitate orderly restructuring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Case Studies: High Vulnerability Countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Ghana</h3>
            <div className="flex items-center mb-3">
              <div className="text-lg font-bold text-red-500 mr-2">Extreme Risk</div>
              <div className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs rounded-full">Score: 89/100</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 transition-colors">
              Currently in debt restructuring process with external bondholders after domestic debt exchange.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Debt-to-GDP: 90%</li>
              <li>Interest/Revenue: 38.5%</li>
              <li>Foreign currency debt: 62%</li>
              <li>IMF program: $3 billion (2023)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Argentina</h3>
            <div className="flex items-center mb-3">
              <div className="text-lg font-bold text-red-500 mr-2">Extreme Risk</div>
              <div className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs rounded-full">Score: 85/100</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 transition-colors">
              Facing severe macroeconomic imbalances with limited market access and high inflation.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Debt-to-GDP: 88%</li>
              <li>Interest/Revenue: 22.6%</li>
              <li>Foreign currency debt: 75%</li>
              <li>IMF program: $44 billion (under stress)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Egypt</h3>
            <div className="flex items-center mb-3">
              <div className="text-lg font-bold text-red-500 mr-2">Extreme Risk</div>
              <div className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs rounded-full">Score: 82/100</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 transition-colors">
              Facing exchange rate pressures, high refinancing needs, and significant external vulnerabilities.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Debt-to-GDP: 93%</li>
              <li>Interest/Revenue: 18.3%</li>
              <li>Foreign currency debt: 48%</li>
              <li>IMF program: $3 billion (2022)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The global sovereign debt landscape presents significant challenges, with elevated risks concentrated in 
          a subset of vulnerable emerging and developing economies. While widespread sovereign debt crises are not 
          our baseline expectation, pockets of severe stress are highly likely, with several countries facing debt 
          restructuring needs in the next 12-24 months.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The combination of high debt levels, rising interest burdens, and challenging global financial conditions 
          requires proactive policy responses from both vulnerable countries and the international community. 
          Strengthening debt resolution frameworks and providing adequate support for countries implementing difficult 
          but necessary adjustments will be critical to minimizing economic disruption and supporting financial stability.
        </p>
        <blockquote className="border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          "The current sovereign debt challenges require a balanced approach that addresses immediate liquidity needs 
          while creating pathways to long-term debt sustainability through growth-enhancing reforms and prudent fiscal management."
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Global Financial Markets Institute, 2024</footer>
        </blockquote>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-yellow-50 dark:bg-amber-950/30 p-6 rounded-lg border border-yellow-100 dark:border-amber-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report are available for download in the following formats.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/sovereign-debt-data.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
          <a 
            href="/data/sovereign-debt-data.json"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
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
              <Link href="/risk/global-liquidity-trends" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Global Liquidity Trends Report
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">January 15, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global liquidity conditions, central bank interventions, and implications for financial market stability.
            </p>
            <Link 
              href="/risk/global-liquidity-trends" 
              className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
            >
              Read Report →
            </Link>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              <Link href="/risk/european-banking-health" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                European Banking System Health
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">February 28, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Comprehensive assessment of European banking sector vulnerabilities, capital adequacy, and stress test results.
            </p>
            <Link 
              href="/risk/european-banking-health" 
              className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
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
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/sovereign-debt-monitor&text=Sovereign Debt Crisis Risk Monitor"
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
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/sovereign-debt-monitor&title=Sovereign Debt Crisis Risk Monitor"
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
            href="mailto:?subject=Sovereign Debt Crisis Risk Monitor&body=Check out this report on sovereign debt risks: https://example.com/risk/sovereign-debt-monitor"
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
          <li>International Monetary Fund. (2024). Global Debt Database, October 2024.</li>
          <li>International Monetary Fund. (2024). Fiscal Monitor: Addressing Fiscal Challenges, October 2024.</li>
          <li>World Bank. (2024). International Debt Statistics 2025.</li>
          <li>Bank for International Settlements. (2024). Quarterly Review, September 2024.</li>
          <li>Reinhart, C., & Rogoff, K. (Updated 2024). This Time Is Different: Eight Centuries of Financial Folly Database.</li>
        </ol>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-amber-600 dark:text-amber-400 hover:underline hover:text-amber-800 dark:hover:text-amber-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}