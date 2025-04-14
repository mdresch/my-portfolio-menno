import React from 'react';
// Import the specific mock charts needed
import {
  MockKPICard,
  MockBarChart,
  MockLineChart,
  MockTreemap
} from './MockVisuals';

export const TradeSectorsDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Trade Sectors Overview (Developed Economies)</h2>

    {/* KPI Row for Key Sectors */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
      <MockKPICard title="Services Trade Growth (2024)" value="+9.0%" change="Strong Growth" />
      <MockKPICard title="Manufacturing Exports" value="High-Tech Focus" change="Facing Hurdles" />
      <MockKPICard title="Agricultural Exports" value="Significant" change="Tariff Barriers" />
      <MockKPICard title="Tech/IP Exports" value="Leading Edge" change="Growing Importance" />
    </div>

    {/* Chart Row - Replace placeholders */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Replace MockChartPlaceholder with specific mocks */}
      <MockTreemap title="Trade Value by Sector (Developed Economies)" />
      <MockLineChart title="Growth Rate Comparison (Services vs. Goods)" />
      <MockBarChart title="Top Manufacturing Exporters (Value)" />
      <MockBarChart title="Services Trade Balance (Major Players)" />
    </div>

    {/* Context Notes */}
    <div className="space-y-3">
      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-800 text-sm">
        <strong>Manufacturing & Agriculture Challenges:</strong> Face supply chain issues, protectionism, and tariff barriers despite being key sectors.
      </div>
      <div className="p-3 bg-green-50 border border-green-200 rounded text-green-800 text-sm">
        <strong>Services & Technology Strength:</strong> Rapid growth driven by digitalization and innovation, with developed nations leading.
      </div>
      <div className="p-3 bg-gray-100 border border-gray-200 rounded text-gray-700 text-sm">
        <strong>Policy Shifts:</strong> Adaptation to nearshoring/friendshoring trends impacting trade patterns.
      </div>
    </div>
  </section>
);