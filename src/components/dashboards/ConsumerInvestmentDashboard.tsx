import React from "react";
// Import necessary mock components
import { MockKPICard, MockPieChart, MockBarChart } from "./MockVisuals";

export const ConsumerInvestmentDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Consumer Purchasing as Investment</h2>
    <p className="text-gray-600 mb-6">Highlighting areas where consumer spending acts as a form of personal or long-term investment.</p>

    {/* KPI Row for Consumer Investment Areas - Adjusted grid for 8 items */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
      <MockKPICard title="Real Estate Share" value="25%" change="Stable" />
      <MockKPICard title="Education Spending (YoY)" value="+5%" change="Growing" />
      <MockKPICard title="Technology Purchase Growth" value="+8%" change="Strong" />
      <MockKPICard title="Health & Wellness Spend" value="15%" change="+1%" />
      <MockKPICard title="Sustainable Product Growth" value="+12%" change="Accelerating" />
      <MockKPICard title="Luxury Goods (Resale Focus)" value="5%" change="Niche" />
      <MockKPICard title="Financial Product Investment" value="18%" change="+2%" />
      <MockKPICard title="Home Improvement Spend (YoY)" value="+4%" change="Moderate" />
    </div>

    {/* Chart Row for Investment Breakdown */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MockPieChart title="Estimated Share of Consumer Investment Spending" />
      <MockBarChart title="Growth Rate by Investment Area (YoY)" />
      {/* Optional: Could add a line chart for a specific trend */}
      {/* <MockLineChart title="Trend in Sustainable Product Spending" /> */}
    </div>


    {/* Context Note */}
    <div className="mt-6 p-3 bg-purple-50 border border-purple-200 rounded text-purple-800 text-sm">
      <strong>Note:</strong> This dashboard categorizes consumer spending that often carries an investment characteristic, focusing on personal growth, asset building, or future value. Data is illustrative.
    </div>
  </section>
);