'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Complexity score data
const countryData = [
  { 
    rank: 1, 
    country: "Brazil", 
    overall: 84, 
    regulatory: 86, 
    tax: 90, 
    corporate: 81, 
    employment: 72,
    region: "Americas",
    trend: "unchanged"
  },
  { 
    rank: 2, 
    country: "France", 
    overall: 81, 
    regulatory: 78, 
    tax: 83, 
    corporate: 77, 
    employment: 89,
    region: "EMEA",
    trend: "up"
  },
  { 
    rank: 3, 
    country: "Indonesia", 
    overall: 79, 
    regulatory: 83, 
    tax: 80, 
    corporate: 76, 
    employment: 74,
    region: "APAC",
    trend: "up"
  },
  { 
    rank: 4, 
    country: "China", 
    overall: 78, 
    regulatory: 85, 
    tax: 79, 
    corporate: 75, 
    employment: 68,
    region: "APAC",
    trend: "down"
  },
  { 
    rank: 5, 
    country: "Mexico", 
    overall: 76, 
    regulatory: 72, 
    tax: 86, 
    corporate: 73, 
    employment: 67,
    region: "Americas",
    trend: "up"
  },
  { 
    rank: 6, 
    country: "Italy", 
    overall: 74, 
    regulatory: 75, 
    tax: 78, 
    corporate: 70, 
    employment: 72,
    region: "EMEA",
    trend: "unchanged"
  },
  { 
    rank: 7, 
    country: "Colombia", 
    overall: 73, 
    regulatory: 71, 
    tax: 79, 
    corporate: 68, 
    employment: 71,
    region: "Americas",
    trend: "up"
  },
  { 
    rank: 8, 
    country: "Turkey", 
    overall: 72, 
    regulatory: 76, 
    tax: 74, 
    corporate: 69, 
    employment: 65,
    region: "EMEA",
    trend: "up"
  },
  { 
    rank: 9, 
    country: "India", 
    overall: 71, 
    regulatory: 74, 
    tax: 72, 
    corporate: 70, 
    employment: 67,
    region: "APAC",
    trend: "down"
  },
  { 
    rank: 10, 
    country: "Poland", 
    overall: 70, 
    regulatory: 68, 
    tax: 73, 
    corporate: 71, 
    employment: 66,
    region: "EMEA",
    trend: "unchanged"
  },
  { 
    rank: 11, 
    country: "Argentina", 
    overall: 69, 
    regulatory: 71, 
    tax: 75, 
    corporate: 65, 
    employment: 61,
    region: "Americas",
    trend: "up"
  },
  { 
    rank: 12, 
    country: "Greece", 
    overall: 68, 
    regulatory: 69, 
    tax: 72, 
    corporate: 66, 
    employment: 64,
    region: "EMEA",
    trend: "down"
  },
  // Additional countries skipping to middle complexity
  { 
    rank: 38, 
    country: "United Kingdom", 
    overall: 45, 
    regulatory: 42, 
    tax: 48, 
    corporate: 46, 
    employment: 43,
    region: "EMEA",
    trend: "down"
  },
  { 
    rank: 39, 
    country: "Canada", 
    overall: 43, 
    regulatory: 41, 
    tax: 45, 
    corporate: 44, 
    employment: 42,
    region: "Americas",
    trend: "unchanged"
  },
  { 
    rank: 40, 
    country: "Australia", 
    overall: 42, 
    regulatory: 40, 
    tax: 44, 
    corporate: 43, 
    employment: 40,
    region: "APAC",
    trend: "down"
  },
  // More countries skipping to least complex
  { 
    rank: 73, 
    country: "Denmark", 
    overall: 25, 
    regulatory: 22, 
    tax: 26, 
    corporate: 28, 
    employment: 24,
    region: "EMEA",
    trend: "unchanged"
  },
  { 
    rank: 74, 
    country: "Hong Kong", 
    overall: 23, 
    regulatory: 21, 
    tax: 19, 
    corporate: 27, 
    employment: 29,
    region: "APAC",
    trend: "up"
  },
  { 
    rank: 75, 
    country: "Singapore", 
    overall: 21, 
    regulatory: 18, 
    tax: 20, 
    corporate: 23, 
    employment: 25,
    region: "APAC",
    trend: "unchanged"
  },
  { 
    rank: 76, 
    country: "United States", 
    overall: 20, 
    regulatory: 25, 
    tax: 18, 
    corporate: 19, 
    employment: 17,
    region: "Americas",
    trend: "down"
  },
  { 
    rank: 77, 
    country: "New Zealand", 
    overall: 18, 
    regulatory: 17, 
    tax: 19, 
    corporate: 18, 
    employment: 20,
    region: "APAC",
    trend: "unchanged"
  }
];

// Complexity color helper function
const getComplexityColor = (score: number) => {
  if (score >= 80) return "bg-red-100 text-red-800"; // Very High
  if (score >= 60) return "bg-orange-100 text-orange-800"; // High
  if (score >= 40) return "bg-amber-100 text-amber-800"; // Medium
  if (score >= 20) return "bg-green-100 text-green-800"; // Low
  return "bg-emerald-100 text-emerald-800"; // Very Low
};

// Trend icons
const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "up") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    );
  } else if (trend === "down") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  } else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
      </svg>
    );
  }
};

export default function RankingsPage() {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rank");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and sort data
  const filteredData = countryData
    .filter(country => {
      // Apply region filter
      if (filter !== "all" && country.region !== filter) {
        return false;
      }
      
      // Apply search filter
      if (searchTerm && !country.country.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Handle sorting
      const key = sortBy as keyof typeof a;
      const valA = a[key];
      const valB = b[key];
      
      if (sortOrder === "asc") {
        return typeof valA === "number" && typeof valB === "number" 
          ? valA - valB 
          : String(valA).localeCompare(String(valB));
      } else {
        return typeof valA === "number" && typeof valB === "number" 
          ? valB - valA 
          : String(valB).localeCompare(String(valA));
      }
    });

  const toggleSortOrder = (columnKey: string) => {
    if (sortBy === columnKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(columnKey);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk/global-business-complexity-index" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Global Business Complexity Index</span>
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Country Rankings</h1>
        <p className="text-gray-600 text-lg mb-6">
          Compare business complexity across 77 jurisdictions worldwide
        </p>
      </header>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="text-gray-700 mb-6">
          <p className="mb-2">
            The Global Business Complexity Index ranks countries based on the complexity of their business environments. 
            A higher score indicates greater complexity in regulatory requirements, tax compliance, corporate governance, and employment regulations.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-red-100 text-red-800">81-100: Very High</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-800">61-80: High</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-amber-100 text-amber-800">41-60: Medium</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">21-40: Low</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-emerald-100 text-emerald-800">0-20: Very Low</span>
          </div>
        </div>

        {/* Filter and search controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Region
            </label>
            <select
              id="region"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Regions</option>
              <option value="EMEA">EMEA</option>
              <option value="Americas">Americas</option>
              <option value="APAC">APAC</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Countries
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by country name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Rankings table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSortOrder("rank")}
                >
                  <div className="flex items-center gap-1">
                    Rank
                    {sortBy === "rank" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSortOrder("country")}
                >
                  <div className="flex items-center gap-1">
                    Country
                    {sortBy === "country" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSortOrder("region")}
                >
                  <div className="flex items-center gap-1">
                    Region
                    {sortBy === "region" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSortOrder("overall")}
                >
                  <div className="flex items-center gap-1">
                    Overall
                    {sortBy === "overall" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
                  onClick={() => toggleSortOrder("regulatory")}
                >
                  <div className="flex items-center gap-1">
                    Regulatory
                    {sortBy === "regulatory" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
                  onClick={() => toggleSortOrder("tax")}
                >
                  <div className="flex items-center gap-1">
                    Tax
                    {sortBy === "tax" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
                  onClick={() => toggleSortOrder("corporate")}
                >
                  <div className="flex items-center gap-1">
                    Corporate
                    {sortBy === "corporate" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
                  onClick={() => toggleSortOrder("employment")}
                >
                  <div className="flex items-center gap-1">
                    Employment
                    {sortBy === "employment" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSortOrder("trend")}
                >
                  <div className="flex items-center gap-1">
                    Trend
                    {sortBy === "trend" && (
                      <span>{sortOrder === "asc" ? "↓" : "↑"}</span>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((country) => (
                <tr key={country.rank} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {country.rank}
                  </td>
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/risk/global-business-complexity-index/country/${country.country.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
                      {country.country}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {country.region}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(country.overall)}`}>
                      {country.overall}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(country.regulatory)}`}>
                      {country.regulatory}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(country.tax)}`}>
                      {country.tax}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(country.corporate)}`}>
                      {country.corporate}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(country.employment)}`}>
                      {country.employment}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <TrendIcon trend={country.trend} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile view of additional metrics */}
        <div className="md:hidden mt-6">
          <p className="text-sm text-gray-500 mb-2">Tap on a country name to view detailed metrics</p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Understanding the Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Dimension Metrics</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Regulatory:</strong> Evaluates the complexity of regulatory frameworks, government processes, and administrative requirements.</li>
              <li><strong>Tax:</strong> Measures the complexity of tax systems, including compliance requirements, reporting burden, and frequency of changes.</li>
              <li><strong>Corporate:</strong> Assesses the complexity of corporate governance, entity formation, and ongoing compliance obligations.</li>
              <li><strong>Employment:</strong> Gauges the complexity of labor laws, hiring/termination procedures, and HR compliance requirements.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Trend Indicators</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Upward arrow:</strong> Indicates increasing complexity compared to the previous year.</li>
              <li><strong>Downward arrow:</strong> Indicates decreasing complexity compared to the previous year.</li>
              <li><strong>Horizontal line:</strong> Indicates no significant change in complexity compared to the previous year.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-8">
        <h2 className="text-xl font-semibold mb-2">Need Detailed Country Analysis?</h2>
        <p className="mb-4">
          Access comprehensive country profiles with in-depth analysis of regulatory environments, compliance requirements, and practical business challenges.
        </p>
        <Link
          href="/risk/global-business-complexity-index/country-profiles"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View Country Profiles
        </Link>
      </div>

      {/* Navigation buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between">
        <Link href="/risk/global-business-complexity-index/methodology" className="mb-4 sm:mb-0 text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Methodology
        </Link>
        <Link href="/risk/global-business-complexity-index/trends" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 justify-end">
          Next: Trends & Insights
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}