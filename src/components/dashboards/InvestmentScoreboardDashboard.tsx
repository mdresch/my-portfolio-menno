import React from 'react';
// Import necessary mock components
import { MockKPICard, MockPieChart, MockLineChart } from './MockVisuals';

export const InvestmentScoreboardDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Import Levy Reinvestment Scoreboard</h2>
    <p className="text-gray-600 mb-6">Tracking the allocation of import levy revenue and its potential economic impact.</p> {/* Updated description */}

    {/* KPI Row for Reinvestment - Adjusted grid for 8 items */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6"> {/* Changed lg:grid-cols-4 */}
      <MockKPICard title="Total Levy Revenue (Q1)" value="$2.1B" change="Reference" />
      <MockKPICard title="Reinvestment Rate" value="80%" change="Target: 75%" />
      <MockKPICard title="Total Reinvested (Q1)" value="$1.68B" change="+6% vs LQ" />
      {/* Added Consumer Purchasing Impact KPI */}
      <MockKPICard title="Est. Consumer Spending Impact" value="+0.2%" change="Indirect Effect" />
      <MockKPICard title="Infrastructure Investment" value="$670M" change="40%" />
      <MockKPICard title="Technology/R&D Investment" value="$420M" change="25%" />
      <MockKPICard title="Green Energy Investment" value="$336M" change="20%" />
      <MockKPICard title="Workforce Dev. Investment" value="$252M" change="15%" />
    </div>

    {/* Chart Row for Investment Breakdown */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MockPieChart title="Levy Reinvestment Allocation by Sector (Q1)" />
        <MockLineChart title="Reinvestment Trend Over Time" />
    </div>


     {/* Context Note */}
     <div className="mt-6 p-3 bg-teal-50 border border-teal-200 rounded text-teal-800 text-sm">
        <strong>Note:</strong> This scoreboard illustrates the hypothetical reinvestment of funds from import levies into strategic areas and estimates potential impacts like consumer spending. Data is illustrative. {/* Updated note */}
      </div>
  </section>
);