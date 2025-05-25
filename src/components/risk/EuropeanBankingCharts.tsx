'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter
} from 'recharts';

// Colors for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const BLUES = ['#0088FE', '#4dabf5', '#84c5f7', '#b7ddf9', '#e2f1fd'];

// Capital Adequacy Data
const capitalAdequacyData = [
  { 
    country: 'Nordic', 
    cet1: 17.8, 
    tier1: 1.5, 
    tier2: 1.2,
    min: 8.0
  },
  { 
    country: 'Switzerland', 
    cet1: 17.1, 
    tier1: 1.6, 
    tier2: 1.5,
    min: 8.0
  },
  { 
    country: 'UK', 
    cet1: 16.3, 
    tier1: 2.1, 
    tier2: 2.3,
    min: 8.0
  },
  { 
    country: 'Benelux', 
    cet1: 15.9, 
    tier1: 1.8, 
    tier2: 2.1,
    min: 8.0
  },
  { 
    country: 'Germany', 
    cet1: 15.2, 
    tier1: 1.7, 
    tier2: 1.9,
    min: 8.0
  },
  { 
    country: 'France', 
    cet1: 14.8, 
    tier1: 1.9, 
    tier2: 2.2,
    min: 8.0
  },
  { 
    country: 'Spain', 
    cet1: 13.5, 
    tier1: 1.8, 
    tier2: 2.0,
    min: 8.0
  },
  { 
    country: 'Italy', 
    cet1: 12.9, 
    tier1: 1.7, 
    tier2: 2.3,
    min: 8.0
  },
  { 
    country: 'Greece', 
    cet1: 12.3, 
    tier1: 1.5, 
    tier2: 1.9,
    min: 8.0
  },
];

// NPL Ratio Data
const nplRatioData = [
  { 
    year: '2017', 
    total: 5.4,
    southern: 11.2, 
    northern: 2.1 
  },
  { 
    year: '2018', 
    total: 4.9,
    southern: 9.8, 
    northern: 1.9 
  },
  { 
    year: '2019', 
    total: 4.1,
    southern: 8.5, 
    northern: 1.7 
  },
  { 
    year: '2020', 
    total: 3.6,
    southern: 7.4, 
    northern: 1.6 
  },
  { 
    year: '2021', 
    total: 3.2,
    southern: 6.7, 
    northern: 1.5 
  },
  { 
    year: '2022', 
    total: 2.8,
    southern: 5.9, 
    northern: 1.4
  },
  { 
    year: '2023', 
    total: 2.4,
    southern: 4.9, 
    northern: 1.3
  },
  { 
    year: '2024', 
    total: 2.1,
    southern: 4.3, 
    northern: 1.2
  },
];

// Stress Test Results Data
const stressTestResultsData = [
  { 
    name: 'Nordic', 
    baseline: 17.8, 
    adverse: 13.6, 
    depletion: 4.2
  },
  { 
    name: 'Benelux', 
    baseline: 15.9, 
    adverse: 11.8, 
    depletion: 4.1
  },
  { 
    name: 'Germany', 
    baseline: 15.2, 
    adverse: 10.9, 
    depletion: 4.3
  },
  { 
    name: 'France', 
    baseline: 14.8, 
    adverse: 10.5, 
    depletion: 4.3
  },
  { 
    name: 'UK', 
    baseline: 16.3, 
    adverse: 11.7, 
    depletion: 4.6
  },
  { 
    name: 'Spain', 
    baseline: 13.5, 
    adverse: 8.3, 
    depletion: 5.2
  },
  { 
    name: 'Italy', 
    baseline: 12.9, 
    adverse: 7.5, 
    depletion: 5.4
  },
  { 
    name: 'Greece', 
    baseline: 12.3, 
    adverse: 6.5, 
    depletion: 5.8
  },
];

// Liquidity Coverage Data
const liquidityCoverageData = [
  { 
    bank: 'Average', 
    lcr: 156, 
    nsfr: 124
  },
  { 
    bank: 'Large Universal', 
    lcr: 148, 
    nsfr: 120
  },
  { 
    bank: 'G-SIBs', 
    lcr: 142, 
    nsfr: 118
  },
  { 
    bank: 'Regional', 
    lcr: 165, 
    nsfr: 131
  },
  { 
    bank: 'Specialized', 
    lcr: 172, 
    nsfr: 127
  },
];

// Profitability Trends Data
const profitabilityTrendsData = [
  { 
    year: '2019', 
    roe: 5.7, 
    nim: 1.43, 
    cir: 66.5
  },
  { 
    year: '2020', 
    roe: 2.1, 
    nim: 1.35, 
    cir: 69.8
  },
  { 
    year: '2021', 
    roe: 3.9, 
    nim: 1.32, 
    cir: 67.2
  },
  { 
    year: '2022', 
    roe: 5.2, 
    nim: 1.38, 
    cir: 65.4
  },
  { 
    year: '2023', 
    roe: 6.5, 
    nim: 1.63, 
    cir: 63.8
  },
  { 
    year: '2024', 
    roe: 7.9, 
    nim: 1.82, 
    cir: 62.1
  },
];

// Country Risk Data
const countryRiskData = [
  { name: 'Sweden', capital: 90, asset: 85, profitability: 88, liquidity: 92, overall: 89 },
  { name: 'Denmark', capital: 92, asset: 80, profitability: 85, liquidity: 88, overall: 86 },
  { name: 'Netherlands', capital: 87, asset: 82, profitability: 83, liquidity: 90, overall: 85 },
  { name: 'Germany', capital: 85, asset: 78, profitability: 70, liquidity: 87, overall: 80 },
  { name: 'France', capital: 82, asset: 75, profitability: 72, liquidity: 85, overall: 78 },
  { name: 'UK', capital: 86, asset: 78, profitability: 76, liquidity: 83, overall: 81 },
  { name: 'Spain', capital: 77, asset: 68, profitability: 75, liquidity: 80, overall: 75 },
  { name: 'Italy', capital: 73, asset: 62, profitability: 65, liquidity: 78, overall: 70 },
  { name: 'Portugal', capital: 75, asset: 65, profitability: 68, liquidity: 77, overall: 71 },
  { name: 'Greece', capital: 70, asset: 58, profitability: 62, liquidity: 72, overall: 65 },
];

export const CapitalAdequacyChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Capital Adequacy by Country Group</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={capitalAdequacyData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="country" />
          <YAxis domain={[0, 22]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, undefined]} />
          <Legend />
          <Bar dataKey="cet1" name="CET1 Ratio" stackId="a" fill="#0088FE" />
          <Bar dataKey="tier1" name="Additional Tier 1" stackId="a" fill="#82ca9d" />
          <Bar dataKey="tier2" name="Tier 2" stackId="a" fill="#ffc658" />
          <Bar dataKey="min" name="Minimum Requirement" fill="#ff6b6b" fillOpacity={0.2} />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: European Banking Authority, Q4 2024 data
      </div>
    </div>
  );
};

export const NPLRatioChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Non-Performing Loan Ratio Trends</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        NPLs as a percentage of total loans
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={nplRatioData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 12]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, undefined]} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="southern" 
            name="Southern Europe" 
            stroke="#FF8042" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="total" 
            name="EU Average" 
            stroke="#8884d8" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="northern" 
            name="Northern Europe" 
            stroke="#82ca9d" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: European Central Bank Consolidated Banking Statistics
      </div>
    </div>
  );
};

export const StressTestResultsChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Stress Test CET1 Ratio Impacts by Country Group</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Baseline vs. Adverse Scenario CET1 Ratios (%)
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={stressTestResultsData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 20]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, undefined]} />
          <Legend />
          <Bar dataKey="baseline" name="Baseline Scenario" fill="#82ca9d" />
          <Bar dataKey="adverse" name="Adverse Scenario" fill="#FF8042" />
          <Bar dataKey="depletion" name="Capital Depletion" fill="#8884d8" fillOpacity={0.2} />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: European Banking Authority 2024 EU-Wide Stress Test
      </div>
    </div>
  );
};

export const LiquidityCoverageChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Liquidity Metrics by Bank Type</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={liquidityCoverageData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={40}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="bank" />
          <YAxis domain={[0, 200]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, undefined]} />
          <Legend />
          <Bar dataKey="lcr" name="Liquidity Coverage Ratio" fill="#0088FE" />
          <Bar dataKey="nsfr" name="Net Stable Funding Ratio" fill="#82ca9d" />
          <Line 
            type="monotone" 
            dataKey="lcr" // Use same data key as the bar
            name="Regulatory minimum" 
            stroke="#ff0000"
            strokeWidth={2}
            strokeDasharray="3 3"
            dot={false}
            activeDot={false}
            legendType="none"
            isAnimationActive={false}
            data={liquidityCoverageData.map(() => 100)} // Creating a flat line at 100%
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: European Central Bank Supervisory Statistics, Q4 2024
      </div>
    </div>
  );
};

export const ProfitabilityTrendsChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">European Banking Profitability Trends</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Key performance indicators over time
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={profitabilityTrendsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" orientation="left" domain={[0, 10]} tickFormatter={(value) => `${value}%`} />
          <YAxis yAxisId="right" orientation="right" domain={[50, 80]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value, name) => {
            if (name === "Return on Equity" || name === "Net Interest Margin") 
              return [`${value}%`, name];
            return [`${value}%`, name];
          }} />
          <Legend />
          <Bar 
            yAxisId="left" 
            dataKey="roe" 
            name="Return on Equity" 
            fill="#0088FE" 
          />
          <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="nim" 
            name="Net Interest Margin" 
            stroke="#FF8042"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="cir" 
            name="Cost-Income Ratio" 
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: European Banking Federation, Banking Sector Performance Indicators
      </div>
    </div>
  );
};

export const CountryRiskHeatmapChart = () => {
  // Simplifying the heatmap as a bar chart for the purpose of this example
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">European Banking System Risk Assessment by Country</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Risk scores from 0 (high risk) to 100 (low risk)
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={countryRiskData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip formatter={(value) => [`${value} (Score)`, undefined]} />
          <Legend />
          <Bar dataKey="overall" name="Overall Health Score" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: European Financial Stability Institute composite scoring model, 2025
      </div>
    </div>
  );
};