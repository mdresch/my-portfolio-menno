import React from 'react';
import { MockKPICard } from './MockVisuals';

export const GlobalTradeInfluencesDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Global Trade Influences (KPIs)</h2>
    <p className="text-gray-600 mb-6">Monitoring key factors shaping international trade patterns.</p>

    {/* KPI Row for Influence Factors */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      <MockKPICard title="New Trade Agreements (YTD)" value="5" change="+1 vs LY" />
      <MockKPICard title="Average Tariff Rate" value="4.2%" change="-0.1%" />
      <MockKPICard title="Supply Chain Lead Time" value="18 Days" change="-2 Days" />
      <MockKPICard title="Sustainable Product Share" value="12%" change="+1.5%" />
      <MockKPICard title="Trade Carbon Intensity" value="0.8 tCO₂/unit" change="+0.05" />
      <MockKPICard title="Friendshoring Import Share" value="35%" change="+3%" />
    </div>

    {/* Optional: Placeholder for charts visualizing trends in these KPIs */}
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MockChartPlaceholder title="Trend in Trade Agreements" type="Line Chart" />
      <MockChartPlaceholder title="Tariff Rate Changes Over Time" type="Line Chart" />
    </div> */}

     {/* Context Note */}
     <div className="mt-4 p-3 bg-gray-100 border border-gray-200 rounded text-gray-700 text-sm">
        <strong>Note:</strong> These KPIs represent a mix of geopolitical, economic, technological, social, environmental, and security factors influencing global trade dynamics. Data is illustrative.
      </div>
  </section>
);