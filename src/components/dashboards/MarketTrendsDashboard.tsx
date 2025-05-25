import React from 'react';
import { MockKPICard, MockBarChart, MockTablePlaceholder } from '../../components/dashboards/MockVisuals';

// Example mock data for sectors and segments
const sectors = [
  { name: 'Technology', performance: '+8.2%', vsTotal: 'Overperforming' },
  { name: 'Healthcare', performance: '+3.5%', vsTotal: 'Underperforming' },
  { name: 'Financials', performance: '+5.0%', vsTotal: 'Overperforming' },
  { name: 'Consumer Discretionary', performance: '+2.1%', vsTotal: 'Underperforming' },
  { name: 'Energy', performance: '+6.7%', vsTotal: 'Overperforming' },
];

const marketSegments = [
  { name: 'Large Cap', performance: '+6.0%', vsTotal: 'Overperforming' },
  { name: 'Mid Cap', performance: '+4.2%', vsTotal: 'Underperforming' },
  { name: 'Small Cap', performance: '+2.8%', vsTotal: 'Underperforming' },
];

export const MarketTrendsDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Market Trends Dashboard</h2>
    {/* KPI Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MockKPICard title="Total Market YTD" value="+5.2%" change="+0.3%" />
      <MockKPICard title="Best Sector" value="Technology" change="+8.2%" />
      <MockKPICard title="Worst Sector" value="Consumer Discretionary" change="+2.1%" />
      <MockKPICard title="Best Segment" value="Large Cap" change="+6.0%" />
    </div>
    {/* Bar Chart for Sectors */}
    <div className="mb-8">
      <MockBarChart title="Sector Performance vs. Total Market" />
      <div className="mt-4">
        <table className="min-w-full text-sm text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1 border">Sector</th>
              <th className="px-2 py-1 border">Performance</th>
              <th className="px-2 py-1 border">Vs. Total</th>
            </tr>
          </thead>
          <tbody>
            {sectors.map((s) => (
              <tr key={s.name}>
                <td className="px-2 py-1 border">{s.name}</td>
                <td className="px-2 py-1 border">{s.performance}</td>
                <td className={`px-2 py-1 border ${s.vsTotal === 'Overperforming' ? 'text-green-600' : 'text-red-600'}`}>{s.vsTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {/* Bar Chart for Market Segments */}
    <div className="mb-8">
      <MockBarChart title="Market Segment Performance vs. Total Market" />
      <div className="mt-4">
        <table className="min-w-full text-sm text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1 border">Segment</th>
              <th className="px-2 py-1 border">Performance</th>
              <th className="px-2 py-1 border">Vs. Total</th>
            </tr>
          </thead>
          <tbody>
            {marketSegments.map((s) => (
              <tr key={s.name}>
                <td className="px-2 py-1 border">{s.name}</td>
                <td className="px-2 py-1 border">{s.performance}</td>
                <td className={`px-2 py-1 border ${s.vsTotal === 'Overperforming' ? 'text-green-600' : 'text-red-600'}`}>{s.vsTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {/* Placeholder for more visuals if needed */}
    <MockTablePlaceholder title="Top Movers (Stocks)" />
  </section>
);
