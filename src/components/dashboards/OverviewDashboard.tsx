// filepath: src/components/dashboards/OverviewDashboard.tsx (adjust path if needed)
import React from 'react';
// Correct named import from the correct location
import { MockKPICard, MockChartPlaceholder } from '@/components/dashboards/MockVisuals';
// Or relative path: import { MockKPICard, MockChartPlaceholder } from './MockVisuals';

export const OverviewDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Overview Dashboard</h2>
    {/* KPI Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {/* This should now work */}
      <MockKPICard title="GDP Growth (YoY)" value="2.5%" change="+0.1%" />
      <MockKPICard title="Inflation Rate (CPI)" value="3.1%" change="-0.2%" />
      <MockKPICard title="Unemployment Rate" value="3.8%" change="+0.0%" />
      <MockKPICard title="S&P 500 (YTD)" value="+5.2%" />
    </div>
    {/* Chart Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MockChartPlaceholder title="GDP Growth Rate Over Time" type="Line Chart" />
      <MockChartPlaceholder title="Inflation vs. Interest Rates" type="Dual Axis Line Chart" />
      <MockChartPlaceholder title="Unemployment Rate Over Time" type="Line Chart" />
      <MockChartPlaceholder title="Consumer Confidence Index" type="Gauge/Line Chart" />
    </div>
  </section>
);