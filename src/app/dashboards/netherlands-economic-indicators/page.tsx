// filepath: src/app/dashboards/netherlands-economic-indicators/page.tsx
import React from "react";

export default function NetherlandsEconomicIndicatorsPage() {
  const economicData = [
    {
      indicator: "GDP Growth Rate",
      value: "1.3%",
      period: "2025 (projected)",
      source: "OECD, IMF, European Commission",
      trend: "Moderate recovery",
      details: "Real GDP growth driven by strengthening private consumption and domestic demand"
    },
    {
      indicator: "GDP Growth Rate",
      value: "1.1%",
      period: "2026 (projected)",
      source: "OECD",
      trend: "Continued growth",
      details: "Sustained by rising disposable household income"
    },
    {
      indicator: "Inflation Rate",
      value: "2.9%",
      period: "2025 (projected)",
      source: "OECD",
      trend: "Gradual decline",
      details: "Service price pressures persist, but slowly declining from higher levels"
    },
    {
      indicator: "Inflation Rate",
      value: "2.8%",
      period: "2025 (projected)",
      source: "IMF",
      trend: "Gradual decline",
      details: "Consumer prices moderating towards target levels"
    },
    {
      indicator: "Unemployment Rate",
      value: "3.8%",
      period: "May 2025 (actual)",
      source: "CBS, Trading Economics",
      trend: "Stable",
      details: "385,000 people unemployed; rate unchanged from previous month"
    },
    {
      indicator: "Population",
      value: "18.05 million",
      period: "2025",
      source: "IMF DataMapper",
      trend: "Steady growth",
      details: "Continued demographic expansion"
    },
    {
      indicator: "Purchasing Power",
      value: "+2.9%",
      period: "2024",
      source: "CPB",
      trend: "Positive growth",
      details: "Wage growth outstrips inflation, increasing average purchasing power"
    },
    {
      indicator: "Purchasing Power",
      value: "+0.6-0.7%",
      period: "2025 (projected)",
      source: "CPB, BNP Paribas",
      trend: "Modest increase",
      details: "Continued but slower growth in real purchasing power"
    },
    {
      indicator: "Current Account Balance",
      value: "10.4% of GDP",
      period: "2025 (projected)",
      source: "CPB",
      trend: "Strong surplus",
      details: "Maintaining substantial current account surplus"
    },
    {
      indicator: "Poverty Rate",
      value: "Declining",
      period: "2025",
      source: "CPB",
      trend: "Improvement",
      details: "Fewer people living in poverty due to wage growth and welfare benefits"
    }
  ];

  const keyHighlights = [
    {
      title: "Economic Recovery",
      description: "The Dutch economy is experiencing a moderate recovery with GDP growth projected at 1.3% in 2025, driven by strengthening domestic demand and private consumption."
    },
    {
      title: "Low Unemployment",
      description: "Unemployment remains very low at 3.8%, reflecting a tight labor market and strong employment conditions."
    },
    {
      title: "Inflation Moderating",
      description: "Inflation is gradually declining toward target levels, though service price pressures continue to persist."
    },
    {
      title: "Strong External Position",
      description: "The Netherlands maintains a robust current account surplus of over 10% of GDP, indicating strong external competitiveness."
    },
    {
      title: "Improving Living Standards",
      description: "Purchasing power is increasing as wage growth outpaces inflation, leading to improved household finances and reduced poverty."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Economic Indicators for the Netherlands
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Comprehensive overview of the Netherlands' key economic indicators for 2025, 
            based on the latest data from authoritative sources including OECD, IMF, 
            CBS (Centraal Bureau voor de Statistiek), and CPB (Centraal Planbureau).
          </p>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Last updated: July 2025 | Data sources: OECD, IMF, CBS, CPB, European Commission
          </div>
        </header>

        {/* Key Highlights Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Key Economic Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Economic Indicators Table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Detailed Economic Indicators
          </h2>
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Indicator
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Value
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Period
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Source
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Trend
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {economicData.map((item, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.indicator}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.value}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {item.period}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {item.source}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.trend.includes('growth') || item.trend.includes('Positive') || item.trend.includes('Strong') || item.trend.includes('Improvement')
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : item.trend.includes('decline') || item.trend.includes('Gradual')
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {item.trend}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                        {item.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sources and Methodology */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Data Sources & Methodology
          </h2>
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Primary Sources
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>OECD:</strong> Economic Outlook Volume 2025 Issue 1</li>
                  <li><strong>IMF:</strong> World Economic Outlook April 2025</li>
                  <li><strong>CBS:</strong> Centraal Bureau voor de Statistiek</li>
                  <li><strong>CPB:</strong> Centraal Economisch Plan 2025</li>
                  <li><strong>EC:</strong> European Commission Economic Forecasts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Key Notes
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• All projections are based on latest available data as of July 2025</li>
                  <li>• GDP growth rates are real (inflation-adjusted)</li>
                  <li>• Unemployment rate is seasonally adjusted</li>
                  <li>• Current account balance expressed as percentage of GDP</li>
                  <li>• Purchasing power data reflects median household changes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
