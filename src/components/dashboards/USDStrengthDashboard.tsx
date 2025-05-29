import React from "react";
// Import necessary mock components
import { MockKPICard, MockLineChart, MockDualAxisLineChart } from "./MockVisuals";

export const USDStrengthDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">US Dollar Strength & Influencers</h2>
    <p className="text-gray-600 mb-6">Monitoring the value of the USD and key factors like interest rates and economic indicators.</p>

    {/* KPI Row for USD and Influencers - Adjusted grid for 6 items */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"> {/* Changed lg:grid-cols-6 */}
      {/* Updated DXY values */}
      <MockKPICard title="USD Index (DXY)" value="102.715" change="-0.25%" />
      {/* Added Yearly Change KPI */}
      <MockKPICard title="USD Index (YoY)" value="-1.3%" change="Fluctuating" />
      <MockKPICard title="Fed Funds Rate (Target)" value="5.25-5.50%" change="Holding" />
      <MockKPICard title="Inflation Rate (CPI YoY)" value="2.8%" change="-0.1%" />
      <MockKPICard title="GDP Growth (Annualized)" value="1.9%" change="-0.3%" />
      <MockKPICard title="Trade Balance (Monthly)" value="-$65B" change="+$2B" />
    </div>

    {/* Chart Row for Relationships */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MockLineChart title="USD Index (DXY) Trend" />
      <MockDualAxisLineChart title="USD Index vs. Fed Funds Rate" />
      <MockLineChart title="Inflation Rate (CPI) Trend" />
      {/* Optional: Could add GDP vs USD chart */}
      {/* <MockDualAxisLineChart title="GDP Growth vs. USD Index" /> */}
    </div>


    {/* Context Note */}
    <div className="mt-6 p-3 bg-indigo-50 border border-indigo-200 rounded text-indigo-800 text-sm">
      <strong>Note:</strong> The US Dollar's value (currently ~102.7) reflects interest rates, inflation, growth, trade, and sentiment. It has seen a slight decline recently and over the past year. Data is illustrative. {/* Updated note */}
    </div>
  </section>
);