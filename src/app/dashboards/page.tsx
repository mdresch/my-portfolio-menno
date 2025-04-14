// filepath: src/app/dashboards/page.tsx
'use client'; // Required if you plan to add client-side interactions later

import React from 'react';
import Link from 'next/link';
import {
  MockKPICard,
  MockLineChart, 
  MockDualAxisLineChart,
  MockAreaChart,
  MockBarChart, // Ensure BarChart is imported if used elsewhere
  MockPieChart // Ensure PieChart is imported if used elsewhere
} from '@/components/dashboards/MockVisuals';
import { OverviewDashboard } from '@/components/dashboards/OverviewDashboard';
import { TradeSectorsDashboard } from '@/components/dashboards/TradeSectorsDashboard';
import { GlobalTradeInfluencesDashboard } from '@/components/dashboards/GlobalTradeInfluencesDashboard';
import { GoodsTradeMetricsDashboard } from '@/components/dashboards/GoodsTradeMetricsDashboard';
import { InvestmentScoreboardDashboard } from '@/components/dashboards/InvestmentScoreboardDashboard';
import { ConsumerInvestmentDashboard } from '@/components/dashboards/ConsumerInvestmentDashboard';
// Import the new component
import { USDStrengthDashboard } from '@/components/dashboards/USDStrengthDashboard';

// Define the structure for your dashboard embeds
// Replace these with your actual Power BI embed URLs or configurations
const dashboards = [
  {
    id: 'economic-growth-dashboard',
    title: 'Economic Growth Analysis',
    // Example using Publish to Web URL (replace with your actual URL)
    embedUrl: 'YOUR_POWER_BI_PUBLISH_TO_WEB_EMBED_URL_1',
    description: 'Illustrating the influence of market conditions and policies on economic growth.',
  },
  // Add more dashboard objects here if needed
];

// Updated OverviewDashboard with more sample data cards including Global Trade
export const OverviewDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Overview Dashboard (Sample Data)</h2>
    {/* KPI Row */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
      {/* Existing cards */}
      <MockKPICard title="GDP Growth (YoY)" value="1.9%" change="-0.3%" />
      <MockKPICard title="Inflation Rate (CPI)" value="2.8%" change="-0.1%" />
      <MockKPICard title="Unemployment Rate (U3)" value="4.1%" change="+0.2%" />
      {/* Updated Consumer Sentiment */}
      <MockKPICard title="Consumer Sentiment (U.Mich)" value="57.0" change="-7.7 pts" />
      <MockKPICard title="Avg. Hourly Earnings (YoY)" value="+4.5%" change="+0.1%" />
      <MockKPICard title="ADP Employment Change" value="180K" change="-15K" />
      <MockKPICard title="GDP (Quarterly, Billions)" value="$28,200" change="+$150B" />
      <MockKPICard title="Retail Sales (MoM)" value="+0.7%" change="+0.2%" />

      {/* Added Global Trade Cards */}
      <MockKPICard title="Global Trade Value (2024)" value="$33 Trillion" />
      <MockKPICard title="Global Trade Growth (YoY)" value="+3.7%" />
      <MockKPICard title="Services Trade Growth (YoY)" value="+9.0%" />
      <MockKPICard title="Goods Trade Growth (YoY)" value="+2.0%" />
    </div>
    {/* Chart Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MockLineChart title="GDP Growth Rate Over Time" />
      <MockDualAxisLineChart title="Inflation vs. Interest Rates" />
      <MockLineChart title="Unemployment Rate Over Time" />
      <MockLineChart title="Global Trade Trends (Goods vs. Services)" />
    </div>
    {/* Add context note about trade */}
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-blue-800 text-sm">
      <strong>Global Trade Note (2024/Early 2025):</strong> Growth driven by services, but momentum slowed late 2024. Early 2025 stable but faces risks from protectionism.
    </div>
    {/* Added context note about sentiment */}
    <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
        <strong>Consumer Sentiment Note (Mar 2025):</strong> Recent declines reflect concerns over finances, business conditions, and inflation.
    </div>
  </section>
);

export default function DashboardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboards</h1>
        <p className="text-gray-600 mt-2">
          Visualizing economic data and policy impacts using Power BI.
        </p>
      </header>

      {/* Section for actual embeds (if configured) */}
      <div className="space-y-12 mb-12">
        {dashboards.map((dashboard) => (
          <section key={dashboard.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-3">{dashboard.title}</h2>
            <p className="text-gray-600 mb-6">{dashboard.description}</p>

            {dashboard.embedUrl && dashboard.embedUrl !== 'YOUR_POWER_BI_PUBLISH_TO_WEB_EMBED_URL_1' ? ( // Check if URL is configured
              <div className="aspect-w-16 aspect-h-9 border rounded-md overflow-hidden">
                <iframe
                  title={dashboard.title}
                  width="100%"
                  height="600"
                  src={dashboard.embedUrl}
                  frameBorder="0"
                  allowFullScreen={true}
                ></iframe>
              </div>
            ) : (
              <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                <p>Actual dashboard embed URL not configured.</p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Render the mock dashboards */}
      <div className="space-y-12"> {/* Wrap mocks in a div for spacing */}
        <OverviewDashboard />
        <TradeSectorsDashboard /> 
        <GlobalTradeInfluencesDashboard />
        <GoodsTradeMetricsDashboard /> {/* New section for Goods Trade Metrics */}
        <InvestmentScoreboardDashboard /> {/* Render the new section */}
        <ConsumerInvestmentDashboard /> {/* Render the new section */}
        <USDStrengthDashboard /> {/* Render the new section */}
        {/* You could add other mock dashboard sections here too */}
        {/* e.g., <PolicyImpactDashboard /> */}
      </div>

      {/* Optional: Link back to home */}
      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}