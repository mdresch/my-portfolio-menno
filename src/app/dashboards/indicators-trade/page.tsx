"use client";
import React, { useState } from "react";

const countries = [
  "United States",
  "European Union",
  "China",
  "India",
  "France",
  "Germany",
  "Italy",
  "Spain"
];

const countryIndicators: Record<string, any[]> = {
  "United States": [
    { indicator: "Trade Balance", value: "-900", trend: "Deficit", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "-850", trend: "Negative", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "102.1", trend: "Stable", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "1,500", trend: "Rising", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "2,200", trend: "Rising", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "27.0", trend: "Growing", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "1.00", trend: "Stable", description: "USD per USD" },
    { indicator: "Inflation Rate", value: "2.8%", trend: "Moderate", description: "Annual % change" },
    { indicator: "Interest Rate", value: "4.5%", trend: "Moderate", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "2.5%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "5", trend: "Stable", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "14", trend: "Stable", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "400", trend: "Rising", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "-3.5%", trend: "Deficit", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "250", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "100.2", trend: "Volatile", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "110.5", trend: "Growing", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+2.5%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "N/A", trend: "N/A", description: "EU intra-trade index" },
    { indicator: "Labor Market Conditions", value: "3.8%", trend: "Improving", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "18%", trend: "Increasing", description: "% exports with sustainability certification" }
  ],
  "European Union": [
    { indicator: "Trade Balance", value: "+120", trend: "Surplus", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "+110", trend: "Positive", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "105.3", trend: "Improving", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "2,800", trend: "Rising", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "2,650", trend: "Stable", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "18.5", trend: "Stable", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "1.08", trend: "Stable", description: "EUR per USD" },
    { indicator: "Inflation Rate", value: "2.1%", trend: "Low", description: "Annual % change" },
    { indicator: "Interest Rate", value: "3.0%", trend: "Low", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "3.2%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "8", trend: "Decreasing", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "20", trend: "Increasing", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "350", trend: "Stable", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "+1.2%", trend: "Surplus", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "900", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "97.8", trend: "Stable", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "115.0", trend: "Growing", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+3.0%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "107.8", trend: "Stable", description: "EU intra-trade index" },
    { indicator: "Labor Market Conditions", value: "6.5%", trend: "Improving", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "28%", trend: "Increasing", description: "% exports with sustainability certification" }
  ],
  "China": [
    { indicator: "Trade Balance", value: "+500", trend: "Surplus", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "+480", trend: "Positive", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "99.5", trend: "Stable", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "3,200", trend: "Rising", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "2,700", trend: "Rising", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "19.0", trend: "Growing", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "7.2", trend: "Stable", description: "CNY per USD" },
    { indicator: "Inflation Rate", value: "1.5%", trend: "Low", description: "Annual % change" },
    { indicator: "Interest Rate", value: "2.5%", trend: "Low", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "3.0%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "10", trend: "Stable", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "16", trend: "Increasing", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "180", trend: "Stable", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "+1.8%", trend: "Surplus", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "3,200", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "95.0", trend: "Stable", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "130.0", trend: "Growing", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+4.0%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "105.0", trend: "Stable", description: "ASEAN intra-trade index" },
    { indicator: "Labor Market Conditions", value: "5.2%", trend: "Stable", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "12%", trend: "Increasing", description: "% exports with sustainability certification" }
  ],
  "India": [
    { indicator: "Trade Balance", value: "-250", trend: "Deficit", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "-230", trend: "Negative", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "97.0", trend: "Stable", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "900", trend: "Rising", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "1,200", trend: "Rising", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "4.2", trend: "Growing", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "83.5", trend: "Stable", description: "INR per USD" },
    { indicator: "Inflation Rate", value: "4.8%", trend: "Moderate", description: "Annual % change" },
    { indicator: "Interest Rate", value: "6.5%", trend: "High", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "5.0%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "12", trend: "Stable", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "10", trend: "Stable", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "60", trend: "Rising", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "-2.1%", trend: "Deficit", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "600", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "93.0", trend: "Stable", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "105.0", trend: "Growing", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+3.5%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "102.0", trend: "Stable", description: "SAARC intra-trade index" },
    { indicator: "Labor Market Conditions", value: "7.1%", trend: "Stable", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "8%", trend: "Increasing", description: "% exports with sustainability certification" }
  ],
  "France": [
    { indicator: "Trade Balance", value: "-100", trend: "Deficit", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "-90", trend: "Negative", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "103.0", trend: "Stable", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "700", trend: "Stable", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "800", trend: "Stable", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "3.2", trend: "Stable", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "1.08", trend: "Stable", description: "EUR per USD" },
    { indicator: "Inflation Rate", value: "2.0%", trend: "Low", description: "Annual % change" },
    { indicator: "Interest Rate", value: "2.5%", trend: "Low", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "3.2%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "6", trend: "Stable", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "20", trend: "Increasing", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "50", trend: "Stable", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "-1.0%", trend: "Deficit", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "180", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "97.0", trend: "Stable", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "108.0", trend: "Stable", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+2.8%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "107.8", trend: "Stable", description: "EU intra-trade index" },
    { indicator: "Labor Market Conditions", value: "7.5%", trend: "Stable", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "25%", trend: "Increasing", description: "% exports with sustainability certification" }
  ],
  "Germany": [
    { indicator: "Trade Balance", value: "+200", trend: "Surplus", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "+180", trend: "Positive", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "106.0", trend: "Improving", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "1,200", trend: "Rising", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "1,000", trend: "Stable", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "4.5", trend: "Stable", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "1.08", trend: "Stable", description: "EUR per USD" },
    { indicator: "Inflation Rate", value: "2.2%", trend: "Low", description: "Annual % change" },
    { indicator: "Interest Rate", value: "2.5%", trend: "Low", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "3.2%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "7", trend: "Stable", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "20", trend: "Increasing", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "60", trend: "Stable", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "+5.0%", trend: "Surplus", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "250", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "98.0", trend: "Stable", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "120.0", trend: "Growing", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+2.9%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "107.8", trend: "Stable", description: "EU intra-trade index" },
    { indicator: "Labor Market Conditions", value: "5.0%", trend: "Stable", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "30%", trend: "Increasing", description: "% exports with sustainability certification" }
  ],
  "Italy": [
    { indicator: "Trade Balance", value: "+60", trend: "Surplus", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "+55", trend: "Positive", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "104.0", trend: "Stable", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "500", trend: "Stable", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "450", trend: "Stable", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "2.2", trend: "Stable", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "1.08", trend: "Stable", description: "EUR per USD" },
    { indicator: "Inflation Rate", value: "1.8%", trend: "Low", description: "Annual % change" },
    { indicator: "Interest Rate", value: "2.5%", trend: "Low", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "3.2%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "5", trend: "Stable", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "20", trend: "Increasing", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "30", trend: "Stable", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "+2.0%", trend: "Surplus", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "120", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "97.0", trend: "Stable", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "109.0", trend: "Stable", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+2.7%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "107.8", trend: "Stable", description: "EU intra-trade index" },
    { indicator: "Labor Market Conditions", value: "8.0%", trend: "Stable", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "20%", trend: "Increasing", description: "% exports with sustainability certification" }
  ],
  "Spain": [
    { indicator: "Trade Balance", value: "-40", trend: "Deficit", description: "Difference between exports and imports (USD billions)" },
    { indicator: "Net Exports", value: "-35", trend: "Negative", description: "Exports minus imports (USD billions)" },
    { indicator: "Terms of Trade (TOT)", value: "101.0", trend: "Stable", description: "Export prices / Import prices (Index)" },
    { indicator: "Export Volume", value: "400", trend: "Stable", description: "Total exports (million tons)" },
    { indicator: "Import Volume", value: "420", trend: "Stable", description: "Total imports (million tons)" },
    { indicator: "GDP", value: "1.6", trend: "Stable", description: "Gross Domestic Product (USD trillions)" },
    { indicator: "Exchange Rate", value: "1.08", trend: "Stable", description: "EUR per USD" },
    { indicator: "Inflation Rate", value: "2.3%", trend: "Low", description: "Annual % change" },
    { indicator: "Interest Rate", value: "2.5%", trend: "Low", description: "Central bank rate (%)" },
    { indicator: "Tariffs and Duties", value: "3.2%", trend: "Unchanged", description: "Average applied tariff (%)" },
    { indicator: "Non-Tariff Barriers", value: "4", trend: "Stable", description: "# of significant barriers" },
    { indicator: "Trade Agreements", value: "20", trend: "Increasing", description: "Active agreements" },
    { indicator: "Foreign Direct Investment (FDI)", value: "25", trend: "Stable", description: "Annual inflow (USD billions)" },
    { indicator: "Current Account Balance", value: "-0.5%", trend: "Deficit", description: "% of GDP" },
    { indicator: "Foreign Exchange Reserves", value: "90", trend: "Stable", description: "USD billions" },
    { indicator: "Commodity Prices", value: "97.0", trend: "Stable", description: "Index (oil, metals, etc.)" },
    { indicator: "Manufacturing Output", value: "107.0", trend: "Stable", description: "Index (2015=100)" },
    { indicator: "Global Trade Volume", value: "+2.6%", trend: "Rising", description: "Annual % change" },
    { indicator: "Regional Trade Bloc Performance", value: "107.8", trend: "Stable", description: "EU intra-trade index" },
    { indicator: "Labor Market Conditions", value: "12.0%", trend: "Stable", description: "Unemployment rate (%)" },
    { indicator: "Sustainability Metrics", value: "19%", trend: "Increasing", description: "% exports with sustainability certification" }
  ]
};

export default function IndicatorsTradeDashboard() {
  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]);
  const indicators = countryIndicators[selectedCountry];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Indicators Trade Dashboard</h1>
      <p className="mb-8 text-gray-700 max-w-2xl">
        Select a country to view a comprehensive overview of economic indicators that measure or influence the strength of imports and exports, as well as trade between countries.
      </p>
      <div className="mb-6">
        <label htmlFor="country-select" className="mr-2 font-semibold">Country:</label>
        <select
          id="country-select"
          className="border rounded px-3 py-2"
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
        >
          {countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="mb-8 p-4 bg-gray-50 rounded">
        <h2 className="text-2xl font-semibold mb-2">{selectedCountry} Overview</h2>
        <ul className="list-disc ml-6 text-gray-800">
          <li><strong>GDP:</strong> {indicators.find(i => i.indicator === "GDP")?.value} trillion USD</li>
          <li><strong>Trade Balance:</strong> {indicators.find(i => i.indicator === "Trade Balance")?.value} USD billions ({indicators.find(i => i.indicator === "Trade Balance")?.trend})</li>
          <li><strong>Net Exports:</strong> {indicators.find(i => i.indicator === "Net Exports")?.value} USD billions</li>
          <li><strong>Export Volume:</strong> {indicators.find(i => i.indicator === "Export Volume")?.value} million tons</li>
          <li><strong>Import Volume:</strong> {indicators.find(i => i.indicator === "Import Volume")?.value} million tons</li>
          <li><strong>Current Account Balance:</strong> {indicators.find(i => i.indicator === "Current Account Balance")?.value} of GDP</li>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Indicator</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Value</th>
              <th className="px-4 py-2 border">Trend</th>
            </tr>
          </thead>
          <tbody>
            {indicators.map((row) => (
              <tr key={row.indicator}>
                <td className="px-4 py-2 border font-semibold">{row.indicator}</td>
                <td className="px-4 py-2 border">{row.description}</td>
                <td className="px-4 py-2 border">{row.value}</td>
                <td className="px-4 py-2 border">{row.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
