'use client';

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  AreaChart  // Add this import
} from 'recharts';

// Colors for charts
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
const PURPLES = ['#8884d8', '#a285d1', '#bb86fc', '#d4a7ff', '#e9c9ff'];

// Global Liquidity Trends Data
const globalLiquidityData = [
  { year: '2018', monetaryLiquidity: 72, financialLiquidity: 85, marketLiquidity: 80, compositeIndex: 79 },
  { year: '2019', monetaryLiquidity: 75, financialLiquidity: 87, marketLiquidity: 82, compositeIndex: 81 },
  { year: '2020', monetaryLiquidity: 92, financialLiquidity: 94, marketLiquidity: 65, compositeIndex: 84 },
  { year: '2021', monetaryLiquidity: 95, financialLiquidity: 90, marketLiquidity: 75, compositeIndex: 87 },
  { year: '2022', monetaryLiquidity: 78, financialLiquidity: 72, marketLiquidity: 60, compositeIndex: 70 },
  { year: '2023', monetaryLiquidity: 65, financialLiquidity: 68, marketLiquidity: 62, compositeIndex: 65 },
  { year: '2024', monetaryLiquidity: 60, financialLiquidity: 64, marketLiquidity: 65, compositeIndex: 63 },
  { year: '2025', monetaryLiquidity: 64, financialLiquidity: 68, marketLiquidity: 70, compositeIndex: 67 },
];

// Global Liquidity Index Data
const globalLiquidityIndexData = [
  { year: '2018', index: 52.4, longTermAvg: 55 },
  { year: '2019', index: 58.6, longTermAvg: 55 },
  { year: '2020', index: 78.3, longTermAvg: 55 },
  { year: '2021', index: 76.5, longTermAvg: 55 },
  { year: '2022', index: 68.7, longTermAvg: 55 },
  { year: '2023', index: 55.2, longTermAvg: 55 },
  { year: '2024', index: 45.8, longTermAvg: 55 },
  { year: '2025', index: 42.3, longTermAvg: 55 },
];

// Central Bank Balance Sheet Data
const centralBankBalanceSheetsData = [
  { 
    quarter: 'Q1 2020', 
    fed: 4.3, 
    ecb: 5.1, 
    boj: 5.4, 
    boe: 0.7, 
    total: 15.5 
  },
  { 
    quarter: 'Q3 2020', 
    fed: 6.9, 
    ecb: 6.7, 
    boj: 5.7, 
    boe: 0.9, 
    total: 20.2 
  },
  { 
    quarter: 'Q1 2021', 
    fed: 7.8, 
    ecb: 7.5, 
    boj: 5.9, 
    boe: 1.0, 
    total: 22.2 
  },
  { 
    quarter: 'Q3 2021', 
    fed: 8.4, 
    ecb: 8.0, 
    boj: 6.1, 
    boe: 1.0, 
    total: 23.5 
  },
  { 
    quarter: 'Q1 2022', 
    fed: 8.9, 
    ecb: 8.2, 
    boj: 6.3, 
    boe: 1.0, 
    total: 24.4 
  },
  { 
    quarter: 'Q3 2022', 
    fed: 8.4, 
    ecb: 8.0, 
    boj: 6.2, 
    boe: 0.9, 
    total: 23.5 
  },
  { 
    quarter: 'Q1 2023', 
    fed: 8.0, 
    ecb: 7.7, 
    boj: 6.3, 
    boe: 0.8, 
    total: 22.8 
  },
  { 
    quarter: 'Q3 2023', 
    fed: 7.5, 
    ecb: 7.3, 
    boj: 6.4, 
    boe: 0.7, 
    total: 21.9 
  },
  { 
    quarter: 'Q1 2024', 
    fed: 7.2, 
    ecb: 7.0, 
    boj: 6.5, 
    boe: 0.6, 
    total: 21.3 
  },
  { 
    quarter: 'Q3 2024', 
    fed: 7.0, 
    ecb: 6.7, 
    boj: 6.6, 
    boe: 0.5, 
    total: 20.8 
  },
  { 
    quarter: 'Q1 2025', 
    fed: 6.8, 
    ecb: 6.5, 
    boj: 6.7, 
    boe: 0.5, 
    total: 20.5 
  },
];

// Central Bank Balance Sheet Data
const centralBankBalanceSheetData = [
  { 
    year: '2018', 
    fed: 4.1, 
    ecb: 4.7, 
    boj: 5.0, 
    boe: 0.6, 
    pboc: 5.2
  },
  { 
    year: '2019', 
    fed: 4.2, 
    ecb: 4.6, 
    boj: 5.3, 
    boe: 0.6, 
    pboc: 5.4
  },
  { 
    year: '2020', 
    fed: 7.4, 
    ecb: 6.8, 
    boj: 6.1, 
    boe: 1.0, 
    pboc: 5.8
  },
  { 
    year: '2021', 
    fed: 8.5, 
    ecb: 8.2, 
    boj: 6.6, 
    boe: 1.2, 
    pboc: 6.0
  },
  { 
    year: '2022', 
    fed: 8.9, 
    ecb: 8.7, 
    boj: 6.8, 
    boe: 1.1, 
    pboc: 6.3
  },
  { 
    year: '2023', 
    fed: 8.1, 
    ecb: 8.2, 
    boj: 6.9, 
    boe: 1.0, 
    pboc: 6.4
  },
  { 
    year: '2024', 
    fed: 7.3, 
    ecb: 7.9, 
    boj: 7.1, 
    boe: 1.0, 
    pboc: 6.5
  },
  { 
    year: '2025', 
    fed: 7.0, 
    ecb: 7.7, 
    boj: 7.2, 
    boe: 0.9, 
    pboc: 6.6
  },
];

// Interest Rate Environment Data
const interestRateData = [
  { 
    month: 'Jan 2020', 
    us10y: 1.8, 
    de10y: -0.2, 
    uk10y: 0.8, 
    jp10y: 0.0,
    fedRate: 1.5,
    ecbRate: 0.0,
  },
  { 
    month: 'Jul 2020', 
    us10y: 0.6, 
    de10y: -0.5, 
    uk10y: 0.2, 
    jp10y: 0.0,
    fedRate: 0.25,
    ecbRate: 0.0,
  },
  { 
    month: 'Jan 2021', 
    us10y: 1.1, 
    de10y: -0.5, 
    uk10y: 0.3, 
    jp10y: 0.0,
    fedRate: 0.25,
    ecbRate: 0.0,
  },
  { 
    month: 'Jul 2021', 
    us10y: 1.3, 
    de10y: -0.4, 
    uk10y: 0.6, 
    jp10y: 0.0,
    fedRate: 0.25,
    ecbRate: 0.0,
  },
  { 
    month: 'Jan 2022', 
    us10y: 1.8, 
    de10y: -0.1, 
    uk10y: 1.2, 
    jp10y: 0.1,
    fedRate: 0.25,
    ecbRate: 0.0,
  },
  { 
    month: 'Jul 2022', 
    us10y: 2.9, 
    de10y: 1.2, 
    uk10y: 2.3, 
    jp10y: 0.2,
    fedRate: 2.25,
    ecbRate: 0.0,
  },
  { 
    month: 'Jan 2023', 
    us10y: 3.5, 
    de10y: 2.2, 
    uk10y: 3.4, 
    jp10y: 0.5,
    fedRate: 4.25,
    ecbRate: 2.0,
  },
  { 
    month: 'Jul 2023', 
    us10y: 3.9, 
    de10y: 2.5, 
    uk10y: 4.3, 
    jp10y: 0.6,
    fedRate: 5.25,
    ecbRate: 3.5,
  },
  { 
    month: 'Jan 2024', 
    us10y: 4.2, 
    de10y: 2.4, 
    uk10y: 4.0, 
    jp10y: 0.8,
    fedRate: 5.5,
    ecbRate: 4.0,
  },
  { 
    month: 'Jul 2024', 
    us10y: 3.9, 
    de10y: 2.2, 
    uk10y: 3.8, 
    jp10y: 1.0,
    fedRate: 5.0,
    ecbRate: 3.75,
  },
  { 
    month: 'Jan 2025', 
    us10y: 3.7, 
    de10y: 2.0, 
    uk10y: 3.5, 
    jp10y: 1.2,
    fedRate: 4.5,
    ecbRate: 3.25,
  },
];

// Interest Rate Data
const interestRateDataNew = [
  { 
    country: 'US', 
    policy: 4.25, 
    real: 1.75, 
    neutral: 2.5, 
    term: 4.8
  },
  { 
    country: 'Eurozone', 
    policy: 3.5, 
    real: 1.6, 
    neutral: 1.5, 
    term: 3.9
  },
  { 
    country: 'UK', 
    policy: 4.0, 
    real: 1.8, 
    neutral: 2.0, 
    term: 4.5
  },
  { 
    country: 'Japan', 
    policy: 0.5, 
    real: 0.2, 
    neutral: 0.0, 
    term: 1.3
  },
  { 
    country: 'Canada', 
    policy: 3.75, 
    real: 1.65, 
    neutral: 2.25, 
    term: 4.2
  },
  { 
    country: 'Australia', 
    policy: 3.85, 
    real: 1.45, 
    neutral: 2.5, 
    term: 4.6
  },
];

// Market Volatility Data
const marketVolatilityData = [
  { 
    date: 'Jan 2020', 
    equityVol: 12, 
    fxVol: 7, 
    rateVol: 5, 
    liquidityScore: 82,
  },
  { 
    date: 'Mar 2020', 
    equityVol: 85, 
    fxVol: 35, 
    rateVol: 30, 
    liquidityScore: 25,
  },
  { 
    date: 'Jul 2020', 
    equityVol: 25, 
    fxVol: 12, 
    rateVol: 10, 
    liquidityScore: 65,
  },
  { 
    date: 'Jan 2021', 
    equityVol: 20, 
    fxVol: 10, 
    rateVol: 8, 
    liquidityScore: 75,
  },
  { 
    date: 'Jul 2021', 
    equityVol: 15, 
    fxVol: 8, 
    rateVol: 7, 
    liquidityScore: 80,
  },
  { 
    date: 'Jan 2022', 
    equityVol: 25, 
    fxVol: 10, 
    rateVol: 12, 
    liquidityScore: 72,
  },
  { 
    date: 'Sep 2022', 
    equityVol: 35, 
    fxVol: 18, 
    rateVol: 20, 
    liquidityScore: 45,
  },
  { 
    date: 'Jan 2023', 
    equityVol: 22, 
    fxVol: 14, 
    rateVol: 15, 
    liquidityScore: 60,
  },
  { 
    date: 'Jul 2023', 
    equityVol: 18, 
    fxVol: 12, 
    rateVol: 14, 
    liquidityScore: 65,
  },
  { 
    date: 'Jan 2024', 
    equityVol: 20, 
    fxVol: 13, 
    rateVol: 13, 
    liquidityScore: 62,
  },
  { 
    date: 'Jul 2024', 
    equityVol: 25, 
    fxVol: 15, 
    rateVol: 12, 
    liquidityScore: 60,
  },
  { 
    date: 'Jan 2025', 
    equityVol: 18, 
    fxVol: 10, 
    rateVol: 10, 
    liquidityScore: 70,
  },
];

// Market Volatility Data
const marketVolatilityDataNew = [
  { 
    month: 'Jan', 
    vix: 18, 
    move: 85, 
    fxvol: 8.2
  },
  { 
    month: 'Feb', 
    vix: 19, 
    move: 90, 
    fxvol: 8.5
  },
  { 
    month: 'Mar', 
    vix: 24, 
    move: 110, 
    fxvol: 9.8
  },
  { 
    month: 'Apr', 
    vix: 22, 
    move: 105, 
    fxvol: 9.2
  },
  { 
    month: 'May', 
    vix: 25, 
    move: 120, 
    fxvol: 10.5
  },
  { 
    month: 'Jun', 
    vix: 28, 
    move: 135, 
    fxvol: 11.2
  },
  { 
    month: 'Jul', 
    vix: 26, 
    move: 125, 
    fxvol: 10.8
  },
  { 
    month: 'Aug', 
    vix: 24, 
    move: 115, 
    fxvol: 10.3
  },
  { 
    month: 'Sep', 
    vix: 22, 
    move: 110, 
    fxvol: 10.0
  },
  { 
    month: 'Oct', 
    vix: 20, 
    move: 105, 
    fxvol: 9.6
  },
  { 
    month: 'Nov', 
    vix: 21, 
    move: 100, 
    fxvol: 9.4
  },
  { 
    month: 'Dec', 
    vix: 19, 
    move: 95, 
    fxvol: 9.0
  },
];

// Liquidity Stress Index Data
const liquidityStressData = [
  { date: 'Jan 2019', index: 15, funding: 12, market: 18, monetary: 15 },
  { date: 'Jul 2019', index: 20, funding: 18, market: 22, monetary: 20 },
  { date: 'Jan 2020', index: 18, funding: 15, market: 20, monetary: 19 },
  { date: 'Mar 2020', index: 95, funding: 92, market: 98, monetary: 95 },
  { date: 'Jul 2020', index: 40, funding: 35, market: 45, monetary: 40 },
  { date: 'Jan 2021', index: 25, funding: 22, market: 28, monetary: 25 },
  { date: 'Jul 2021', index: 20, funding: 18, market: 22, monetary: 20 },
  { date: 'Jan 2022', index: 28, funding: 25, market: 32, monetary: 27 },
  { date: 'Jul 2022', index: 45, funding: 42, market: 50, monetary: 43 },
  { date: 'Oct 2022', index: 68, funding: 65, market: 75, monetary: 64 },
  { date: 'Jan 2023', index: 55, funding: 50, market: 60, monetary: 55 },
  { date: 'Jul 2023', index: 45, funding: 40, market: 50, monetary: 45 },
  { date: 'Jan 2024', index: 40, funding: 35, market: 45, monetary: 40 },
  { date: 'Jul 2024', index: 38, funding: 35, market: 42, monetary: 37 },
  { date: 'Jan 2025', index: 35, funding: 30, market: 40, monetary: 35 },
];

// Emerging Markets Flows Data
const emergingMarketsData = [
  { 
    month: 'Jan 2020', 
    equity: 15.2, 
    debt: 25.4, 
    total: 40.6,
    cumulative: 40.6,
  },
  { 
    month: 'Mar 2020', 
    equity: -55.8, 
    debt: -40.5, 
    total: -96.3,
    cumulative: -55.7,
  },
  { 
    month: 'Jul 2020', 
    equity: 10.5, 
    debt: 25.2, 
    total: 35.7,
    cumulative: -20.0,
  },
  { 
    month: 'Jan 2021', 
    equity: 28.4, 
    debt: 32.7, 
    total: 61.1,
    cumulative: 41.1,
  },
  { 
    month: 'Jul 2021', 
    equity: 15.6, 
    debt: 20.3, 
    total: 35.9,
    cumulative: 77.0,
  },
  { 
    month: 'Jan 2022', 
    equity: -12.5, 
    debt: -8.3, 
    total: -20.8,
    cumulative: 56.2,
  },
  { 
    month: 'Jul 2022', 
    equity: -18.3, 
    debt: -25.6, 
    total: -43.9,
    cumulative: 12.3,
  },
  { 
    month: 'Jan 2023', 
    equity: -5.2, 
    debt: -10.4, 
    total: -15.6,
    cumulative: -3.3,
  },
  { 
    month: 'Jul 2023', 
    equity: 8.5, 
    debt: 15.7, 
    total: 24.2,
    cumulative: 20.9,
  },
  { 
    month: 'Jan 2024', 
    equity: 15.3, 
    debt: 22.8, 
    total: 38.1,
    cumulative: 59.0,
  },
  { 
    month: 'Jul 2024', 
    equity: 10.4, 
    debt: 18.5, 
    total: 28.9,
    cumulative: 87.9,
  },
  { 
    month: 'Jan 2025', 
    equity: 12.8, 
    debt: 20.4, 
    total: 33.2,
    cumulative: 121.1,
  },
];

// Cross-Border Capital Flow Data
const crossBorderFlowData = [
  { 
    quarter: 'Q1 2023', 
    em: 12, 
    advanced: 25, 
    total: 37
  },
  { 
    quarter: 'Q2 2023', 
    em: 15, 
    advanced: 28, 
    total: 43
  },
  { 
    quarter: 'Q3 2023', 
    em: 8, 
    advanced: 20, 
    total: 28
  },
  { 
    quarter: 'Q4 2023', 
    em: -5, 
    advanced: 32, 
    total: 27
  },
  { 
    quarter: 'Q1 2024', 
    em: -12, 
    advanced: 38, 
    total: 26
  },
  { 
    quarter: 'Q2 2024', 
    em: -20, 
    advanced: 42, 
    total: 22
  },
  { 
    quarter: 'Q3 2024', 
    em: -18, 
    advanced: 35, 
    total: 17
  },
  { 
    quarter: 'Q4 2024', 
    em: -14, 
    advanced: 28, 
    total: 14
  },
];

// Emerging Market Vulnerability Data
const emergingMarketData = [
  { name: 'Turkey', vulnerability: 85, reserves: 15 },
  { name: 'Argentina', vulnerability: 82, reserves: 18 },
  { name: 'Egypt', vulnerability: 78, reserves: 22 },
  { name: 'Pakistan', vulnerability: 75, reserves: 25 },
  { name: 'Colombia', vulnerability: 72, reserves: 28 },
  { name: 'South Africa', vulnerability: 68, reserves: 32 },
  { name: 'Brazil', vulnerability: 62, reserves: 38 },
  { name: 'Indonesia', vulnerability: 55, reserves: 45 },
  { name: 'Mexico', vulnerability: 52, reserves: 48 },
  { name: 'India', vulnerability: 45, reserves: 55 },
];

export const GlobalLiquidityTrendsChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Global Liquidity Index</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={globalLiquidityData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="monetaryLiquidity" name="Monetary Liquidity" fill="#8884d8" />
          <Bar dataKey="financialLiquidity" name="Financial Liquidity" fill="#82ca9d" />
          <Bar dataKey="marketLiquidity" name="Market Liquidity" fill="#ffc658" />
          <Line 
            type="monotone" 
            dataKey="compositeIndex" 
            name="Composite Liquidity Index" 
            stroke="#ff7300" 
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Global Market Research Institute Liquidity Index (0-100 scale where higher values indicate more abundant liquidity)
      </div>
    </div>
  );
};

export const GlobalLiquidityIndexChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Global Liquidity Index</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={globalLiquidityIndexData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <ReferenceLine y={55} label="Long-term Average" stroke="#666" strokeDasharray="3 3" />
          <Line 
            type="monotone" 
            dataKey="index" 
            name="Liquidity Index" 
            stroke="#0088FE" 
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: BIS Global Liquidity Indicators, Global Financial Markets Institute calculations
      </div>
    </div>
  );
};

export const CentralBankBalanceSheetsChart = () => {
  // Fixed implementation that doesn't rely on AreaChart if not needed
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Central Bank Balance Sheets</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        In trillions of USD
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={centralBankBalanceSheetData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 35]} />
          <Tooltip formatter={(value) => [`$${value} trillion`, undefined]} />
          <Legend />
          <Bar dataKey="fed" name="US Federal Reserve" stackId="a" fill="#0088FE" />
          <Bar dataKey="ecb" name="European Central Bank" stackId="a" fill="#00C49F" />
          <Bar dataKey="boj" name="Bank of Japan" stackId="a" fill="#FFBB28" />
          <Bar dataKey="boe" name="Bank of England" stackId="a" fill="#FF8042" />
          <Bar dataKey="pboc" name="People's Bank of China" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Central bank balance sheet data, Q4 2024
      </div>
    </div>
  );
};

export const CentralBankBalanceSheetsChartNew = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Central Bank Balance Sheets</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        In trillions of USD
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={centralBankBalanceSheetData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 35]} />
          <Tooltip formatter={(value) => [`$${value} trillion`, undefined]} />
          <Legend />
          <Bar dataKey="fed" name="US Federal Reserve" stackId="a" fill="#0088FE" />
          <Bar dataKey="ecb" name="European Central Bank" stackId="a" fill="#00C49F" />
          <Bar dataKey="boj" name="Bank of Japan" stackId="a" fill="#FFBB28" />
          <Bar dataKey="boe" name="Bank of England" stackId="a" fill="#FF8042" />
          <Bar dataKey="pboc" name="People's Bank of China" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Central bank balance sheet data, Q4 2024
      </div>
    </div>
  );
};

export const InterestRateEnvironmentChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Global Interest Rate Environment</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={interestRateDataNew}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="country" />
          <YAxis domain={[0, 6]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, undefined]} />
          <Legend />
          <Bar dataKey="policy" name="Policy Rate" fill="#0088FE" />
          <Bar dataKey="real" name="Real Interest Rate" fill="#00C49F" />
          <Bar dataKey="neutral" name="Estimated Neutral Rate" fill="#FFBB28" />
          <Bar dataKey="term" name="10Y Government Bond Yield" fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Central banks, Bloomberg, GFMI estimates as of January 2025
      </div>
    </div>
  );
};

export const InterestRateEnvironmentChartNew = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Global Interest Rate Environment</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={interestRateDataNew}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="country" />
          <YAxis domain={[0, 6]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, undefined]} />
          <Legend />
          <Bar dataKey="policy" name="Policy Rate" fill="#0088FE" />
          <Bar dataKey="real" name="Real Interest Rate" fill="#00C49F" />
          <Bar dataKey="neutral" name="Estimated Neutral Rate" fill="#FFBB28" />
          <Bar dataKey="term" name="10Y Government Bond Yield" fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
      <div class="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Central banks, Bloomberg, GFMI estimates as of January 2025
      </div>
    </div>
  );
};

export const MarketVolatilityChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Market Volatility</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={marketVolatilityData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="equityVol" name="Equity Volatility" fill="#8884d8" />
          <Bar dataKey="fxVol" name="FX Volatility" fill="#82ca9d" />
          <Bar dataKey="rateVol" name="Rate Volatility" fill="#ffc658" />
          <Line 
            type="monotone" 
            dataKey="liquidityScore" 
            name="Liquidity Score" 
            stroke="#ff7300" 
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Global Market Research Institute Volatility Index (0-100 scale where higher values indicate more volatility)
      </div>
    </div>
  );
};

export const MarketVolatilityComparisonChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Market Volatility Indicators (2024)</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        VIX (equity volatility), MOVE (bond volatility), and FX VOL (currency volatility) indices
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={marketVolatilityData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" domain={[0, 150]} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 15]} />
          <Tooltip />
          <Legend />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="vix" 
            name="VIX Index" 
            stroke="#0088FE" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="move" 
            name="MOVE Index" 
            stroke="#FF8042" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="fxvol" 
            name="FX Volatility" 
            stroke="#82ca9d" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bloomberg, JP Morgan
      </div>
    </div>
  );
};

export const CrossBorderFlowsChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Cross-Border Portfolio Flows</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Net flows in billions of USD
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={crossBorderFlowData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="quarter" />
          <YAxis domain={[-30, 50]} />
          <Tooltip formatter={(value) => [`$${value} billion`, undefined]} />
          <Legend />
          <Bar dataKey="em" name="Emerging Markets" fill="#FF8042" />
          <Bar dataKey="advanced" name="Advanced Economies" fill="#0088FE" />
          <Line 
            type="monotone" 
            dataKey="total" 
            name="Total Flows" 
            stroke="#82ca9d" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Institute of International Finance, 2023-2024
      </div>
    </div>
  );
};

export const EmergingMarketLiquidityChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Emerging Market Vulnerability Assessment</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Higher vulnerability score indicates greater liquidity risk exposure
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={emergingMarketData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip />
          <Legend />
          <Bar dataKey="vulnerability" name="Liquidity Vulnerability Score" fill="#FF8042">
            {emergingMarketData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`rgba(255, 128, 66, ${0.4 + entry.vulnerability/200})`} />
            ))}
          </Bar>
          <Bar dataKey="reserves" name="FX Reserve Adequacy" fill="#0088FE">
            {emergingMarketData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`rgba(0, 136, 254, ${0.4 + entry.reserves/200})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Global Financial Markets Institute vulnerability model, January 2025
      </div>
    </div>
  );
};