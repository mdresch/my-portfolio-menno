import React from 'react';
// Import MockBarChart if not already imported
import { MockKPICard, MockChartPlaceholder, MockBarChart } from './MockVisuals';

export const GoodsTradeMetricsDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Goods Import/Export Metrics (KPIs)</h2>
    <p className="text-gray-600 mb-6">Tracking the efficiency, cost, and reliability of goods movement.</p>

    {/* KPI Row 1 for Goods Trade Metrics */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
      <MockKPICard title="Trade Balance (Monthly)" value="+$15.2B" change="+$1.1B" />
      <MockKPICard title="Export Growth Rate (YoY)" value="+4.5%" change="+0.3%" />
      <MockKPICard title="Import Dependency Ratio" value="28%" change="-0.5%" />
      <MockKPICard title="Customs Clearance Time" value="48 Hrs" change="-3 Hrs" />
      <MockKPICard title="Cost per Unit Shipped" value="$12.50" change="+$0.25" />
      <MockKPICard title="On-Time Delivery Rate" value="96.5%" change="+0.2%" />
      <MockKPICard title="Order Accuracy Rate" value="99.1%" change="-0.1%" />
      <MockKPICard title="Freight Cost % Revenue" value="8.2%" change="+0.4%" />
      <MockKPICard title="Average Lead Time" value="25 Days" change="+1 Day" />
      <MockKPICard title="Shipment Carbon Footprint" value="1.1 tCO₂e/shipment" change="+0.02" />
    </div>

    {/* KPI Row 2 for Import Levy Revenue */}
    <h3 className="text-xl font-semibold mb-3 mt-8 border-t pt-4">Import Levy Revenue</h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <MockKPICard title="Total Levy Revenue (Q1)" value="$2.1B" change="+5%" />
        <MockKPICard title="Avg. Effective Levy Rate" value="3.8%" change="-0.2%" />
        <MockKPICard title="Revenue from China" value="$0.8B" change="+2%" />
        <MockKPICard title="Revenue from EU" value="$0.5B" change="+8%" />
    </div>

    {/* Chart for Levy Revenue Breakdown */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MockBarChart title="Import Levy Revenue by Top Countries (Q1)" />
        {/* Optional: Add another relevant chart or placeholder */}
        <MockChartPlaceholder title="Levy Revenue vs. Import Value" type="Scatter Plot" />
    </div>


     {/* Context Note */}
     <div className="mt-6 p-3 bg-gray-100 border border-gray-200 rounded text-gray-700 text-sm">
        <strong>Note:</strong> Metrics monitor operational aspects and revenue from import levies. Data is illustrative.
      </div>
  </section>
);