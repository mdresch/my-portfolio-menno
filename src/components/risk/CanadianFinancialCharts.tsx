'use client';

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

// Mortgage Arrears Data
const mortgageArrearsData = [
  { name: 'Q1 2023', actual: 0.15, baseCase: 0.15, severeCase: 0.15 },
  { name: 'Q2 2023', actual: 0.17, baseCase: 0.17, severeCase: 0.17 },
  { name: 'Q3 2023', actual: 0.18, baseCase: 0.18, severeCase: 0.18 },
  { name: 'Q4 2023', actual: 0.19, baseCase: 0.19, severeCase: 0.19 },
  { name: 'Q1 2024', actual: 0.19, baseCase: 0.19, severeCase: 0.19 },
  { name: 'Q2 2024', actual: 0.18, baseCase: 0.19, severeCase: 0.21 },
  { name: 'Q3 2024', actual: 0.17, baseCase: 0.18, severeCase: 0.23 },
  { name: 'Q4 2024', actual: 0.16, baseCase: 0.17, severeCase: 0.25 },
  { name: 'Q1 2025', actual: 0.15, baseCase: 0.17, severeCase: 0.28 },
  { name: 'Q2 2025', actual: null, baseCase: 0.16, severeCase: 0.32 },
  { name: 'Q3 2025', actual: null, baseCase: 0.16, severeCase: 0.38 },
  { name: 'Q4 2025', actual: null, baseCase: 0.15, severeCase: 0.45 },
  { name: 'Q1 2026', actual: null, baseCase: 0.15, severeCase: 0.52 },
];

// Bank Capital Ratio Data
const bankCapitalRatioData = [
  { name: '2023', actual: 12.8, stressScenario: null },
  { name: '2024', actual: 13.1, stressScenario: null },
  { name: '2025', actual: 13.3, stressScenario: 13.3 },
  { name: '2026', actual: null, stressScenario: 10.8 },
  { name: '2027', actual: null, stressScenario: 9.2 },
];

// Asset Volatility Data
const assetVolatilityData = [
  {
    date: 'Jan 2025',
    equityVolatility: 11,
    bondVolatility: 5,
    currencyVolatility: 8,
  },
  {
    date: 'Feb 2025',
    equityVolatility: 13,
    bondVolatility: 7,
    currencyVolatility: 9,
  },
  {
    date: 'Mar 2025',
    equityVolatility: 15,
    bondVolatility: 8,
    currencyVolatility: 11,
  },
  {
    date: 'Apr 2025',
    equityVolatility: 29,
    bondVolatility: 18,
    currencyVolatility: 24,
  },
  {
    date: 'May 2025',
    equityVolatility: 22,
    bondVolatility: 14,
    currencyVolatility: 16,
  },
];

// Business Vulnerability Data
const businessVulnerabilityData = [
  {
    sector: 'Manufacturing',
    highDebt: 28,
    lowCash: 35,
    usTradeDependence: 65,
  },
  {
    sector: 'Services',
    highDebt: 19,
    lowCash: 22,
    usTradeDependence: 42,
  },
  {
    sector: 'Retail',
    highDebt: 23,
    lowCash: 29,
    usTradeDependence: 38,
  },
  {
    sector: 'Agriculture',
    highDebt: 31,
    lowCash: 27,
    usTradeDependence: 51,
  },
  {
    sector: 'Technology',
    highDebt: 15,
    lowCash: 18,
    usTradeDependence: 67,
  },
];

// Risk assessment data
const riskAssessmentData = [
  { subject: 'Market Risk', A: 8, B: 6, fullMark: 10 },
  { subject: 'Credit Risk', A: 7, B: 5, fullMark: 10 },
  { subject: 'Funding Risk', A: 5, B: 2, fullMark: 10 },
  { subject: 'Trade War Impact', A: 9, B: 3, fullMark: 10 },
  { subject: 'Household Risk', A: 6, B: 5, fullMark: 10 },
  { subject: 'Business Risk', A: 7, B: 4, fullMark: 10 },
];

// Housing Market Vulnerability Data
const housingVulnerabilityData = [
  {
    quarter: 'Q1 2024',
    overvaluation: 65,
    debtService: 72,
    priceAcceleration: 45,
    overbuilding: 38
  },
  {
    quarter: 'Q2 2024',
    overvaluation: 68,
    debtService: 75,
    priceAcceleration: 50,
    overbuilding: 42
  },
  {
    quarter: 'Q3 2024',
    overvaluation: 70,
    debtService: 78,
    priceAcceleration: 58,
    overbuilding: 44
  },
  {
    quarter: 'Q4 2024',
    overvaluation: 73,
    debtService: 82,
    priceAcceleration: 62,
    overbuilding: 48
  },
  {
    quarter: 'Q1 2025',
    overvaluation: 75,
    debtService: 85,
    priceAcceleration: 65,
    overbuilding: 51
  },
];

// International Financial Contagion Risk Data
const contagionRiskData = [
  { name: 'US', value: 35 },
  { name: 'EU', value: 28 },
  { name: 'China', value: 22 },
  { name: 'UK', value: 10 },
  { name: 'Japan', value: 5 },
];

// Climate Financial Risk Data
const climateRiskData = [
  { name: 'Physical Risk', value: 42 },
  { name: 'Transition Risk', value: 58 },
];

const climateRiskByIndustryData = [
  {
    industry: 'Energy',
    transition: 85,
    physical: 55,
  },
  {
    industry: 'Utilities',
    transition: 80,
    physical: 70,
  },
  {
    industry: 'Materials',
    transition: 75,
    physical: 65,
  },
  {
    industry: 'Transportation',
    transition: 70,
    physical: 60,
  },
  {
    industry: 'Agriculture',
    transition: 45,
    physical: 90,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export const MortgageArrearsChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Mortgage Arrears Projection</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 transition-colors">Percentage of residential mortgages in arrears for 90+ days</div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={mortgageArrearsData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#666', fontSize: 12 }} />
          <YAxis
            tick={{ fill: '#666', fontSize: 12 }}
            domain={[0, 0.6]}
            tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
          />
          <Tooltip
            formatter={(value: any) => [`${(value * 100).toFixed(2)}%`, undefined]}
            labelFormatter={(label) => `Period: ${label}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#4285F4"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Historical"
          />
          <Line
            type="monotone"
            dataKey="baseCase"
            stroke="#34A853"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 3 }}
            name="Base Case Forecast"
          />
          <Line
            type="monotone"
            dataKey="severeCase"
            stroke="#EA4335"
            strokeWidth={2}
            strokeDasharray="3 3"
            dot={{ r: 3 }}
            name="Severe Trade War Scenario"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank of Canada staff calculations
      </div>
    </div>
  );
};

export const BankCapitalRatioChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Bank Capital Ratios Under Stress Testing</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={bankCapitalRatioData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#666', fontSize: 12 }} />
          <YAxis
            tick={{ fill: '#666', fontSize: 12 }}
            domain={[0, 'dataMax + 2']}
            tickFormatter={(value) => `${value.toFixed(1)}%`}
          />
          <Tooltip
            formatter={(value: any) => [`${value.toFixed(1)}%`, undefined]}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Legend />
          <Bar dataKey="actual" name="Actual CET1 Ratio" fill="#4285F4" />
          <Bar dataKey="stressScenario" name="Severe Trade War Scenario" fill="#EA4335" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center justify-center">
        <div className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-md transition-colors">
          <span className="text-xs font-medium text-yellow-800 dark:text-yellow-200">Regulatory Minimum: 8%</span>
        </div>
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank of Canada/IMF stress testing results
      </div>
    </div>
  );
};

export const AssetVolatilityChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Market Volatility Indicators</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={assetVolatilityData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="date" tick={{ fill: '#666', fontSize: 12 }} />
          <YAxis tick={{ fill: '#666', fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="equityVolatility"
            name="Equity Market Volatility"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="bondVolatility"
            name="Bond Market Volatility"
            stroke="#82ca9d"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="currencyVolatility"
            name="Currency Volatility"
            stroke="#ffc658"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank of Canada, Bloomberg
      </div>
    </div>
  );
};

export const BusinessVulnerabilityChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Business Sector Vulnerabilities</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={businessVulnerabilityData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" tick={{ fill: '#666', fontSize: 12 }} />
          <YAxis
            dataKey="sector"
            type="category"
            tick={{ fill: '#666', fontSize: 12 }}
            width={100}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="highDebt"
            name="High Debt (% of firms)"
            fill="#8884d8"
            barSize={20}
          />
          <Bar
            dataKey="lowCash"
            name="Low Cash Reserves (% of firms)"
            fill="#82ca9d"
            barSize={20}
          />
          <Bar
            dataKey="usTradeDependence"
            name="US Trade Dependence (%)"
            fill="#ffc658"
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank of Canada Business Outlook Survey, Statistics Canada
      </div>
    </div>
  );
};

export const HousingVulnerabilityChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Housing Market Vulnerability Index</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 transition-colors">
        Vulnerability scores from 0 (low) to 100 (high)
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={housingVulnerabilityData[housingVulnerabilityData.length - 1]}>
          <PolarGrid stroke="#e0e0e0" />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ fill: '#666', fontSize: 12 }}
            tickFormatter={(_, index) => {
              const keys = ['Overvaluation', 'Debt Service', 'Price Acceleration', 'Overbuilding'];
              return keys[index];
            }} 
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          <Radar
            name="Q1 2025"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            data={[
              { name: "overvaluation", value: housingVulnerabilityData[housingVulnerabilityData.length - 1].overvaluation },
              { name: "debtService", value: housingVulnerabilityData[housingVulnerabilityData.length - 1].debtService },
              { name: "priceAcceleration", value: housingVulnerabilityData[housingVulnerabilityData.length - 1].priceAcceleration },
              { name: "overbuilding", value: housingVulnerabilityData[housingVulnerabilityData.length - 1].overbuilding },
            ]}
          />
          <Tooltip formatter={(value: any) => [`${value}`, undefined]} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank of Canada Housing Market Assessment Framework
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <strong>Key Finding:</strong> Elevated debt service ratios represent the highest vulnerability in the Canadian housing market, driven by higher interest rates and increased mortgage renewals at higher rates.
      </div>
    </div>
  );
};

export const InternationalContagionChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">International Financial Contagion Risk</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 transition-colors">
        Potential impact on Canadian financial system by origin country (%)
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={contagionRiskData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {contagionRiskData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => [`${value}%`, undefined]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank of Canada International Financial Stability Analysis
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <strong>Key Finding:</strong> The United States remains the largest potential source of financial contagion risk to Canada due to highly integrated banking systems and trade dependencies.
      </div>
    </div>
  );
};

export const ClimateRiskChart: React.FC = () => {
  const [view, setView] = useState<'overview'|'industry'>('overview');
  
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Climate-Related Financial Risk</h3>
      
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setView('overview')}
          className={`px-3 py-1 text-sm rounded-md ${
            view === 'overview'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
          }`}
        >
          Risk Overview
        </button>
        <button
          onClick={() => setView('industry')}
          className={`px-3 py-1 text-sm rounded-md ${
            view === 'industry'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
          }`}
        >
          By Industry
        </button>
      </div>
      
      {view === 'overview' ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={climateRiskData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              <Cell fill="#34A853" />
              <Cell fill="#EA4335" />
            </Pie>
            <Tooltip formatter={(value: any) => [`${value}%`, undefined]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={climateRiskByIndustryData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis type="number" tick={{ fill: '#666', fontSize: 12 }} domain={[0, 100]} />
            <YAxis dataKey="industry" type="category" tick={{ fill: '#666', fontSize: 12 }} />
            <Tooltip formatter={(value: any) => [`${value}`, undefined]} />
            <Legend />
            <Bar dataKey="transition" name="Transition Risk" fill="#EA4335" />
            <Bar dataKey="physical" name="Physical Risk" fill="#34A853" />
          </BarChart>
        </ResponsiveContainer>
      )}
      
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Bank of Canada Climate Scenario Analysis
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <strong>Key Finding:</strong> Transition risks are higher than physical risks in the short term, with energy, utilities, and materials sectors most exposed to policy and market changes.
      </div>
    </div>
  );
};

export const RiskAssessmentDashboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const riskCategories = [
    { name: "Overall Risk", description: "Combined assessment of all financial system risks" },
    { name: "Market Risk", description: "Volatility in equity, bond, and currency markets" },
    { name: "Credit Risk", description: "Potential for loan defaults from households and businesses" },
    { name: "Funding Risk", description: "Access to and cost of funding for financial institutions" },
    { name: "Operational Risk", description: "Risks from process failures, people, and systems" }
  ];
  
  const pieData = [
    { name: 'High', value: 25 },
    { name: 'Medium-High', value: 35 },
    { name: 'Medium', value: 20 },
    { name: 'Medium-Low', value: 15 },
    { name: 'Low', value: 5 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Risk Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, 'Proportion']} />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center transition-colors">
          Distribution of risk assessments across categories
        </div>
      </div>
      
      <div className="md:col-span-2 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Risk Assessment Comparison</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors">Current vs. Pre-Trade War</div>
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart outerRadius={90} data={riskAssessmentData}>
            <PolarGrid stroke="#e0e0e0" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: '#666', fontSize: 10 }} />
            <Radar
              name="May 2025 (Current)"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="January 2025 (Pre-Trade War)"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
