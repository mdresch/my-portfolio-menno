"use client";
import React, { useState } from "react";
import Link from "next/link";
import { mockCompanies } from "../../../data/mockCompanies";

// Mock data for global indices
const indices = [
  { name: "S&P 500", region: "US", value: 5200, change: "+0.8%", companies: 500, sectors: 11, segments: ["Large Cap", "Growth", "Value"] },
  { name: "Dow Jones", region: "US", value: 39000, change: "+0.5%", companies: 30, sectors: 9, segments: ["Blue Chip"] },
  { name: "NASDAQ", region: "US", value: 16500, change: "+1.2%", companies: 3500, sectors: 11, segments: ["Tech", "Growth"] },
  { name: "FTSE 100", region: "UK", value: 8000, change: "+0.3%", companies: 100, sectors: 10, segments: ["Large Cap"] },
  { name: "DAX", region: "Germany", value: 18500, change: "+0.6%", companies: 40, sectors: 10, segments: ["Large Cap"] },
  { name: "Nikkei 225", region: "Japan", value: 40000, change: "+1.0%", companies: 225, sectors: 10, segments: ["Large Cap"] },
  { name: "Hang Seng", region: "Hong Kong", value: 18000, change: "-0.2%", companies: 50, sectors: 10, segments: ["Large Cap"] },
  { name: "CAC 40", region: "France", value: 8200, change: "+0.4%", companies: 40, sectors: 10, segments: ["Large Cap"] },
  { name: "SSE Composite", region: "China", value: 3200, change: "+0.1%", companies: 1500, sectors: 11, segments: ["All Cap"] },
  { name: "SMI", region: "Switzerland", value: 11200, change: "+0.3%", companies: 20, sectors: 10, segments: ["Large Cap"] },
  { name: "AEX", region: "Netherlands", value: 880, change: "+0.5%", companies: 25, sectors: 9, segments: ["Large Cap"] },
];

const sectors = [
  "Information Technology", "Health Care", "Financials", "Consumer Discretionary",
  "Communication Services", "Industrials", "Consumer Staples", "Energy",
  "Utilities", "Real Estate", "Materials"
];

export default function StocksDashboardPage() {
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState("All");

  // Get unique indices from mockCompanies, filter out empty/falsey values
  const indicesList = Array.from(new Set(mockCompanies.map(c => c.index).filter(index => !!index)));
  // Filter out empty/falsey sectors (shouldn't happen, but for safety)
  const filteredSectors = sectors.filter(Boolean);

  // Filter companies based on selected sector and index
  const filteredCompanies = mockCompanies.filter(c => {
    const sectorMatch = selectedSector === "All" || c.sector === selectedSector;
    const indexMatch = selectedIndex === "All" || c.index === selectedIndex;
    return sectorMatch && indexMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Global Stocks & Indices Dashboard</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Major Global Indices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2">Index</th>
                <th className="px-3 py-2">Region</th>
                <th className="px-3 py-2">Value</th>
                <th className="px-3 py-2">Change</th>
                <th className="px-3 py-2">Companies</th>
                <th className="px-3 py-2">Sectors</th>
                <th className="px-3 py-2">Market Segments</th>
              </tr>
            </thead>
            <tbody>
              {indices.map(idx => (
                <tr key={idx.name} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-3 py-2 font-medium">{idx.name}</td>
                  <td className="px-3 py-2">{idx.region}</td>
                  <td className="px-3 py-2">{idx.value}</td>
                  <td className="px-3 py-2">{idx.change}</td>
                  <td className="px-3 py-2">{idx.companies}</td>
                  <td className="px-3 py-2">{idx.sectors}</td>
                  <td className="px-3 py-2">{idx.segments.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sectors</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          {sectors.map(sector => (
            <span key={sector} className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium">{sector}</span>
          ))}
        </div>
      </section>      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sample Companies Overview</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <label className="text-sm font-medium">
            Sector:
            <select
              className="ml-2 border rounded px-2 py-1 bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              value={selectedSector}
              onChange={e => setSelectedSector(e.target.value)}
            >
              <option value="All">All</option>
              {filteredSectors.map((sector, i) => (
                <option key={sector || `sector-${i}`} value={sector}>{sector}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Index:
            <select
              className="ml-2 border rounded px-2 py-1 bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              value={selectedIndex}
              onChange={e => setSelectedIndex(e.target.value)}
            >
              <option value="All">All</option>
              {indicesList.map((index, i) => (
                <option key={index || `index-${i}`} value={index}>{index}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2">Company</th>
                <th className="px-3 py-2">Ticker</th>
                <th className="px-3 py-2">Sector</th>
                <th className="px-3 py-2">Index</th>
                <th className="px-3 py-2">Price</th>
                <th className="px-3 py-2">Change</th>
                <th className="px-3 py-2">Market Cap</th>
                <th className="px-3 py-2">P/E</th>
                <th className="px-3 py-2">Dividend Yield</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((c, i) => (
                <tr key={c.ticker || `company-row-${i}`} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-3 py-2 font-medium">
                    <Link href={`/dashboards/stocks/${encodeURIComponent(c.ticker)}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-3 py-2">
                    <Link href={`/dashboards/stocks/${encodeURIComponent(c.ticker)}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400">
                      {c.ticker}
                    </Link>
                  </td>
                  <td className="px-3 py-2">{c.sector}</td>
                  <td className="px-3 py-2">{c.index}</td>
                  <td className="px-3 py-2">{c.price}</td>
                  <td className={`px-3 py-2 ${typeof c.change === "string" && c.change.startsWith("+") ? "text-green-600 dark:text-green-300" : typeof c.change === "string" && c.change.startsWith("-") ? "text-red-600 dark:text-red-300" : "text-gray-500 dark:text-gray-400"}`}>{c.change}</td>
                  <td className="px-3 py-2">{c.summary.marketCap}</td>
                  <td className="px-3 py-2">{c.summary.pe}</td>
                  <td className="px-3 py-2">{c.summary.yield}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Detailed Company Information</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockCompanies.map((company, i) => (
            <div key={company.ticker || `company-card-${i}`} className="border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{company.name}</h3>
                <div className="text-right">
                  <p className="text-lg font-semibold">{company.price}</p>
                  <p className={`text-sm ${typeof company.change === "string" && company.change.startsWith("+") ? "text-green-600 dark:text-green-300" : typeof company.change === "string" && company.change.startsWith("-") ? "text-red-600 dark:text-red-300" : "text-gray-500 dark:text-gray-400"}`}>
                    {company.change ?? "N/A"}
                  </p>
                </div>
              </div>
              
              <div className="text-sm mb-3">
                <p><span className="font-medium">Ticker:</span> {company.ticker}</p>
                <p><span className="font-medium">Sector:</span> {company.sector}</p>
                <p><span className="font-medium">Index:</span> {company.index}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <p><span className="font-medium">Market Cap:</span> {company.summary.marketCap}</p>
                <p><span className="font-medium">P/E Ratio:</span> {company.summary.pe}</p>
                <p><span className="font-medium">EPS:</span> {company.summary.eps}</p>
                <p><span className="font-medium">Dividend:</span> {company.summary.dividend}</p>
                <p><span className="font-medium">Yield:</span> {company.summary.yield}</p>
                <p><span className="font-medium">Beta:</span> {company.summary.beta}</p>
              </div>
              
              {company.news && company.news.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-medium mb-1">Recent News</h4>
                  <ul className="text-xs">
                    {company.news.slice(0, 2).map((item, index) => (
                      <li key={index} className="mb-1">
                        <p>{item.title} <span className="text-gray-500 dark:text-gray-400">({item.date})</span></p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {company.profile && (
                <div className="text-xs">
                  <h4 className="font-medium mb-1">About</h4>
                  <p className="line-clamp-3">{company.profile.description}</p>
                </div>
              )}
              
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <Link href={`/dashboards/stocks/${encodeURIComponent(company.ticker)}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400 text-sm font-medium">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
