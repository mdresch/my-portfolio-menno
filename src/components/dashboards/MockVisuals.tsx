"use client";

import React from "react";
import Link from "next/link";

// Simple placeholder for any chart type (Can keep as fallback or remove)
const MockChartPlaceholder = ({ title, type }: { title: string; type: string }) => (
  <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-gray-50 dark:bg-neutral-900">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex justify-center items-center text-xs text-gray-400 dark:text-gray-500">({type} Placeholder)</div>
  </div>
);

export { MockChartPlaceholder };

// --- NEW MOCK CHART COMPONENTS ---

// Mock Line Chart
export const MockLineChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-1 overflow-hidden p-2">
      {/* Simulate line segments with varying heights */}
      <div className="w-1/6 h-1/3 bg-blue-200 rounded-t-sm"></div>
      <div className="w-1/6 h-1/2 bg-blue-300 rounded-t-sm"></div>
      <div className="w-1/6 h-2/5 bg-blue-400 rounded-t-sm"></div>
      <div className="w-1/6 h-3/4 bg-blue-500 rounded-t-sm"></div>
      <div className="w-1/6 h-2/3 bg-blue-400 rounded-t-sm"></div>
      <div className="w-1/6 h-1/2 bg-blue-300 rounded-t-sm"></div>
    </div>
  </div>
);

// Mock Dual Axis Line Chart
export const MockDualAxisLineChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm relative">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-1 overflow-hidden p-2">
      {/* Line 1 (Blue) */}
      <div className="w-1/6 h-1/3 bg-blue-300 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/5 bg-blue-400 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/2 bg-blue-500 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-3/5 bg-blue-600 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/2 bg-blue-500 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/5 bg-blue-400 rounded-t-sm opacity-70"></div>
    </div>
    {/* Line 2 (Green) - Positioned absolutely to overlay */}
    <div className="absolute bottom-0 left-0 right-0 flex items-end space-x-1 overflow-hidden p-2 pb-[calc(0.5rem+1px)] h-full">
      {/* Adjust padding-bottom to align */}
      <div className="w-1/6 h-1/2 bg-green-300 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-3/5 bg-green-400 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/3 bg-green-500 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/2 bg-green-400 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/5 bg-green-300 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/3 bg-green-200 rounded-t-sm opacity-70"></div>
    </div>
  </div>
);

// Mock Bar Chart
export const MockBarChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end justify-around space-x-2 overflow-hidden p-2">
      {/* Simulate bars */}
      <div className="w-1/5 h-1/3 bg-teal-300 rounded-t-sm"></div>
      <div className="w-1/5 h-3/4 bg-teal-500 rounded-t-sm"></div>
      <div className="w-1/5 h-1/2 bg-teal-400 rounded-t-sm"></div>
      <div className="w-1/5 h-2/3 bg-teal-500 rounded-t-sm"></div>
      <div className="w-1/5 h-2/5 bg-teal-300 rounded-t-sm"></div>
    </div>
  </div>
);

// Mock Area Chart
export const MockAreaChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-0 overflow-hidden relative">
      {/* Simulate filled area segments */}
      <div className="w-1/6 h-1/3 bg-purple-200"></div>
      <div className="w-1/6 h-1/2 bg-purple-200"></div>
      <div className="w-1/6 h-2/5 bg-purple-200"></div>
      <div className="w-1/6 h-3/4 bg-purple-200"></div>
      <div className="w-1/6 h-2/3 bg-purple-200"></div>
      <div className="w-1/6 h-1/2 bg-purple-200"></div>
      {/* Add a border top to mimic the line */}
      <div className="absolute top-0 left-0 right-0 h-full border-t-2 border-purple-500 pointer-events-none"></div>
    </div>
  </div>
);

// Mock Treemap
export const MockTreemap = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow grid grid-cols-3 grid-rows-3 gap-1 p-1">
      {/* Simulate treemap blocks */}
      <div className="col-span-2 row-span-2 bg-indigo-500 rounded flex items-center justify-center text-white text-xs opacity-90">Area 1</div>
      <div className="bg-indigo-300 rounded flex items-center justify-center text-indigo-800 text-xs opacity-90">Area 2</div>
      <div className="bg-indigo-300 rounded flex items-center justify-center text-indigo-800 text-xs opacity-90">Area 3</div>
      <div className="bg-indigo-200 rounded flex items-center justify-center text-indigo-700 text-xs opacity-90">Area 4</div>
      <div className="bg-indigo-200 rounded flex items-center justify-center text-indigo-700 text-xs opacity-90">Area 5</div>
      <div className="bg-indigo-200 rounded flex items-center justify-center text-indigo-700 text-xs opacity-90">Area 6</div>
    </div>
  </div>
);

// Mock Pie Chart (Simple Stacked Block Representation)
export const MockPieChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex flex-col items-center justify-center p-2">
      <div className="w-3/4 h-1/4 bg-cyan-500 flex items-center justify-center text-white text-xs font-semibold">Sector A (40%)</div>
      <div className="w-3/4 h-1/5 bg-cyan-400 flex items-center justify-center text-white text-xs font-semibold">Sector B (25%)</div>
      <div className="w-3/4 h-1/6 bg-cyan-300 flex items-center justify-center text-cyan-800 text-xs font-semibold">Sector C (20%)</div>
      <div className="w-3/4 h-[15%] bg-cyan-200 flex items-center justify-center text-cyan-700 text-xs font-semibold">Sector D (15%)</div>
    </div>
  </div>
);

// Mock Stacked Bar Chart for Population by Age and Gender
const populationData = [
  { age: "0-14", male: 16, female: 17 },
  { age: "15-64", male: 110, female: 111 },
  { age: "65+", male: 13, female: 15 },
];

export const MockStackedBarChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end justify-around space-x-2 overflow-hidden p-2">
      {populationData.map((group) => (
        <div key={group.age} className="flex flex-col items-center w-1/5">
          {/* Female bar */}
          <div
            className="w-8 bg-pink-400 rounded-t-sm"
            style={{ height: `${group.female * 1.2}px` }}
            title={`Female: ${group.female}M`}
          ></div>
          {/* Male bar (stacked below) */}
          <div
            className="w-8 bg-blue-400 rounded-b-sm"
            style={{ height: `${group.male * 1.2}px`, marginTop: "-2px" }}
            title={`Male: ${group.male}M`}
          ></div>
          <span className="text-xs mt-1">{group.age}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-around mt-2 text-xs text-gray-500 dark:text-gray-400">
      <span className="flex items-center"><span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-1"></span>Male</span>
      <span className="flex items-center"><span className="inline-block w-3 h-3 bg-pink-400 rounded-full mr-1"></span>Female</span>
    </div>
  </div>
);

// Mock data for unemployment rate over time
const unemploymentRateData = [
  { year: 2015, rate: 5.3 },
  { year: 2016, rate: 4.9 },
  { year: 2017, rate: 4.4 },
  { year: 2018, rate: 3.9 },
  { year: 2019, rate: 3.7 },
  { year: 2020, rate: 8.1 },
  { year: 2021, rate: 5.4 },
  { year: 2022, rate: 3.6 },
  { year: 2023, rate: 3.5 },
  { year: 2024, rate: 3.8 },
  { year: 2025, rate: 3.8 },
];

export const MockUnemploymentLineChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-1 overflow-x-auto p-2">
      {unemploymentRateData.map((point, idx) => (
        <div key={point.year} className="flex flex-col items-center w-8">
          <div
            className="w-4 bg-blue-500 rounded-t-sm"
            style={{ height: `${point.rate * 10}px` }}
            title={`${point.rate}%`}
          ></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.year}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Unemployment Rate (%)</div>
  </div>
);

// Mock data for PPI and CPI over time
const ppiCpiData = [
  { year: 2015, ppi: 100, cpi: 100 },
  { year: 2016, ppi: 102, cpi: 101 },
  { year: 2017, ppi: 104, cpi: 103 },
  { year: 2018, ppi: 107, cpi: 105 },
  { year: 2019, ppi: 110, cpi: 107 },
  { year: 2020, ppi: 108, cpi: 109 },
  { year: 2021, ppi: 115, cpi: 112 },
  { year: 2022, ppi: 120, cpi: 117 },
  { year: 2023, ppi: 123, cpi: 120 },
  { year: 2024, ppi: 125, cpi: 123 },
  { year: 2025, ppi: 127, cpi: 125 },
];

export const MockPPICPIChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-2 overflow-x-auto p-2">
      {ppiCpiData.map((point, idx) => (
        <div key={point.year} className="flex flex-col items-center w-8">
          {/* CPI line (green dot) */}
          <div
            className="w-3 h-3 rounded-full bg-green-500 mb-1"
            style={{ marginBottom: `${(point.cpi - 100) * 1.2}px` }}
            title={`CPI: ${point.cpi}`}
          ></div>
          {/* PPI line (blue dot) */}
          <div
            className="w-3 h-3 rounded-full bg-blue-500"
            style={{ marginBottom: `${(point.ppi - point.cpi) * 1.2}px` }}
            title={`PPI: ${point.ppi}`}
          ></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.year}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400 gap-4">
      <span className="flex items-center"><span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>PPI</span>
      <span className="flex items-center"><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>CPI</span>
    </div>
  </div>
);

// Mock data for payroll employment over time
const payrollEmploymentData = [
  { year: 2015, jobs: 140 },
  { year: 2016, jobs: 142 },
  { year: 2017, jobs: 145 },
  { year: 2018, jobs: 148 },
  { year: 2019, jobs: 151 },
  { year: 2020, jobs: 146 },
  { year: 2021, jobs: 150 },
  { year: 2022, jobs: 154 },
  { year: 2023, jobs: 157 },
  { year: 2024, jobs: 159 },
  { year: 2025, jobs: 160 },
];

export const MockPayrollEmploymentChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-1 overflow-x-auto p-2">
      {payrollEmploymentData.map((point) => (
        <div key={point.year} className="flex flex-col items-center w-8">
          <div
            className="w-4 bg-emerald-500 rounded-t-sm"
            style={{ height: `${(point.jobs - 140) * 4}px` }}
            title={`${point.jobs}M jobs`}
          ></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.year}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Payroll Employment (Millions)</div>
  </div>
);

// Mock data for average hourly earnings over time
const averageHourlyEarningsData = [
  { year: 2015, earnings: 22.5 },
  { year: 2016, earnings: 23.1 },
  { year: 2017, earnings: 23.8 },
  { year: 2018, earnings: 24.5 },
  { year: 2019, earnings: 25.1 },
  { year: 2020, earnings: 26.0 },
  { year: 2021, earnings: 27.2 },
  { year: 2022, earnings: 28.0 },
  { year: 2023, earnings: 28.7 },
  { year: 2024, earnings: 29.3 },
  { year: 2025, earnings: 29.8 },
];

export const MockAverageHourlyEarningsChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-1 overflow-x-auto p-2">
      {averageHourlyEarningsData.map((point) => (
        <div key={point.year} className="flex flex-col items-center w-8">
          <div
            className="w-4 bg-yellow-500 rounded-t-sm"
            style={{ height: `${(point.earnings - 22) * 10}px` }}
            title={`$${point.earnings}`}
          ></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.year}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Avg Hourly Earnings (USD)</div>
  </div>
);

// Updated mock data for Employment Cost Index (ECI) over time (2017=100, quarterly)
const employmentCostIndexData = [
  { label: "2022 Q4", eci: 116.0 },
  { label: "2023 Q1", eci: 116.9 },
  { label: "2023 Q2", eci: 117.7 },
  { label: "2023 Q3", eci: 118.0 },
  { label: "2023 Q4", eci: 118.4 },
  { label: "2024 Q1", eci: 120.7 },
  { label: "2024 Q2", eci: 120.4 },
  { label: "2024 Q3", eci: 119.9 },
  { label: "2024 Q4", eci: 120.6 },
];

export const MockEmploymentCostIndexChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-2 overflow-x-auto p-2">
      {employmentCostIndexData.map((point) => (
        <div key={point.label} className="flex flex-col items-center w-10">
          <div
            className="w-4 bg-purple-500 rounded-t-sm"
            style={{ height: `${(point.eci - 115) * 12}px` }}
            title={`ECI: ${point.eci}`}
          ></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.label}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Employment Cost Index (2017=100)</div>
  </div>
);

// Placeholder for KPI cards
export const MockKPICard = ({ title, value, change }: { title: string; value: string; change?: string }) => (
  <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
    <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{title}</p>
    <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{value}</p>
    {change && <p className={`text-xs ${change.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>{change}</p>}
  </div>
);

// Placeholder for a simple table/matrix
export const MockTablePlaceholder = ({ title }: { title: string }) => (
  <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col justify-center items-center bg-gray-50 dark:bg-neutral-900">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{title}</p>
    <p className="text-xs text-gray-500 dark:text-gray-400">(Table/Matrix Placeholder)</p>
  </div>
);

// Placeholder for a map
export const LocalMockMapPlaceholder = ({ title }: { title: string }) => (
  <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col justify-center items-center bg-gray-50 dark:bg-neutral-900">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{title}</p>
    <p className="text-xs text-gray-500 dark:text-gray-400">(Map Placeholder)</p>
  </div>
);

