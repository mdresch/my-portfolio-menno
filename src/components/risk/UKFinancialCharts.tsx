"use client";

import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart } from 'recharts';

// UK Bank Capital Ratios
const ukBankCapitalData = [
  { year: '2020', cet1: 16.8, tier1: 18.2, totalCapital: 21.5 },
  { year: '2021', cet1: 17.2, tier1: 18.8, totalCapital: 22.1 },
  { year: '2022', cet1: 16.9, tier1: 18.5, totalCapital: 21.8 },
  { year: '2023', cet1: 17.4, tier1: 19.1, totalCapital: 22.4 },
  { year: '2024', cet1: 17.8, tier1: 19.6, totalCapital: 23.1 },
  { year: '2025', cet1: 18.1, tier1: 19.9, totalCapital: 23.5 }
];

// UK Household Debt to Income
const ukHouseholdDebtData = [
  { year: '2018', debtToIncome: 142, mortgageDebt: 118, consumerCredit: 24 },
  { year: '2019', debtToIncome: 144, mortgageDebt: 120, consumerCredit: 24 },
  { year: '2020', debtToIncome: 146, mortgageDebt: 123, consumerCredit: 23 },
  { year: '2021', debtToIncome: 148, mortgageDebt: 125, consumerCredit: 23 },
  { year: '2022', debtToIncome: 151, mortgageDebt: 128, consumerCredit: 23 },
  { year: '2023', debtToIncome: 153, mortgageDebt: 130, consumerCredit: 23 },
  { year: '2024', debtToIncome: 155, mortgageDebt: 132, consumerCredit: 23 },
  { year: '2025', debtToIncome: 154, mortgageDebt: 131, consumerCredit: 23 }
];

// UK Property Market Data
const ukPropertyData = [
  { quarter: 'Q1 2023', housePrices: 100, transactions: 100, commercialRE: 100 },
  { quarter: 'Q2 2023', housePrices: 102.1, transactions: 95.2, commercialRE: 98.5 },
  { quarter: 'Q3 2023', housePrices: 103.8, transactions: 89.1, commercialRE: 94.2 },
  { quarter: 'Q4 2023', housePrices: 104.2, transactions: 82.3, commercialRE: 88.7 },
  { quarter: 'Q1 2024', housePrices: 103.9, transactions: 78.9, commercialRE: 82.1 },
  { quarter: 'Q2 2024', housePrices: 102.8, transactions: 76.4, commercialRE: 79.3 },
  { quarter: 'Q3 2024', housePrices: 101.2, transactions: 73.2, commercialRE: 75.8 },
  { quarter: 'Q4 2024', housePrices: 100.8, transactions: 71.1, commercialRE: 72.4 },
  { quarter: 'Q1 2025', housePrices: 100.3, transactions: 69.8, commercialRE: 69.1 }
];

// UK Corporate Debt by Sector
const ukCorporateDebtData = [
  { sector: 'Real Estate', debtToAssets: 65.2, vulnerableFirms: 28.5, totalDebt: 285 },
  { sector: 'Retail', debtToAssets: 42.8, vulnerableFirms: 22.1, totalDebt: 156 },
  { sector: 'Hospitality', debtToAssets: 58.1, vulnerableFirms: 31.2, totalDebt: 89 },
  { sector: 'Manufacturing', debtToAssets: 38.5, vulnerableFirms: 15.8, totalDebt: 342 },
  { sector: 'Technology', debtToAssets: 24.2, vulnerableFirms: 8.3, totalDebt: 178 },
  { sector: 'Energy', debtToAssets: 47.3, vulnerableFirms: 19.7, totalDebt: 298 },
  { sector: 'Healthcare', debtToAssets: 32.1, vulnerableFirms: 12.4, totalDebt: 87 },
  { sector: 'Financial Services', debtToAssets: 41.7, vulnerableFirms: 18.9, totalDebt: 425 }
];

// UK Market Volatility Index
const ukMarketVolatilityData = [
  { month: 'Jan 2024', vix: 14.2, giltYield: 3.8, sterling: 1.27 },
  { month: 'Feb 2024', vix: 16.8, giltYield: 4.1, sterling: 1.25 },
  { month: 'Mar 2024', vix: 18.5, giltYield: 4.3, sterling: 1.24 },
  { month: 'Apr 2024', vix: 22.1, giltYield: 4.6, sterling: 1.22 },
  { month: 'May 2024', vix: 19.3, giltYield: 4.4, sterling: 1.23 },
  { month: 'Jun 2024', vix: 17.2, giltYield: 4.2, sterling: 1.25 },
  { month: 'Jul 2024', vix: 15.8, giltYield: 4.0, sterling: 1.26 },
  { month: 'Aug 2024', vix: 21.4, giltYield: 4.5, sterling: 1.21 },
  { month: 'Sep 2024', vix: 18.9, giltYield: 4.3, sterling: 1.23 },
  { month: 'Oct 2024', vix: 16.7, giltYield: 4.1, sterling: 1.25 },
  { month: 'Nov 2024', vix: 14.9, giltYield: 3.9, sterling: 1.27 },
  { month: 'Dec 2024', vix: 13.8, giltYield: 3.7, sterling: 1.28 },
  { month: 'Jan 2025', vix: 15.2, giltYield: 3.8, sterling: 1.26 },
  { month: 'Feb 2025', vix: 17.6, giltYield: 4.0, sterling: 1.24 },
  { month: 'Mar 2025', vix: 19.8, giltYield: 4.2, sterling: 1.22 },
  { month: 'Apr 2025', vix: 24.3, giltYield: 4.7, sterling: 1.19 },
  { month: 'May 2025', vix: 22.1, giltYield: 4.5, sterling: 1.21 },
  { month: 'Jun 2025', vix: 20.4, giltYield: 4.3, sterling: 1.23 },
  { month: 'Jul 2025', vix: 18.7, giltYield: 4.1, sterling: 1.25 }
];

// Systemic Risk Indicators
const ukSystemicRiskData = [
  { category: 'Banking', riskLevel: 25, trend: 'stable' },
  { category: 'Household', riskLevel: 42, trend: 'increasing' },
  { category: 'Corporate', riskLevel: 35, trend: 'increasing' },
  { category: 'Market-based Finance', riskLevel: 38, trend: 'stable' },
  { category: 'Operational', riskLevel: 55, trend: 'increasing' },
  { category: 'International', riskLevel: 28, trend: 'stable' }
];

// Climate Risk Assessment
const ukClimateRiskData = [
  { scenario: 'Early Policy Action', physicalRisk: 15, transitionRisk: 35, timeHorizon: '2030' },
  { scenario: 'Late Policy Action', physicalRisk: 25, transitionRisk: 55, timeHorizon: '2035' },
  { scenario: 'No Additional Action', physicalRisk: 45, transitionRisk: 25, timeHorizon: '2040' }
];

// Cyber Risk Incidents
const ukCyberRiskData = [
  { year: '2020', incidents: 156, severity: 'Medium', impact: 2.3 },
  { year: '2021', incidents: 189, severity: 'Medium', impact: 3.1 },
  { year: '2022', incidents: 234, severity: 'High', impact: 4.2 },
  { year: '2023', incidents: 287, severity: 'High', impact: 5.8 },
  { year: '2024', incidents: 342, severity: 'Very High', impact: 7.4 },
  { year: '2025', incidents: 398, severity: 'Very High', impact: 8.9 }
];

// UK Mortgage Rates Data
const ukMortgageRatesData = [
  { year: '2020', bankRate: 0.10, mortgageRate: 2.15, spread: 2.05 },
  { year: '2021', bankRate: 0.10, mortgageRate: 2.05, spread: 1.95 },
  { year: '2022', bankRate: 0.75, mortgageRate: 3.25, spread: 2.50 },
  { year: '2023', bankRate: 4.50, mortgageRate: 5.85, spread: 1.35 },
  { year: '2024', bankRate: 5.25, mortgageRate: 6.50, spread: 1.25 },
  { year: '2025', bankRate: 5.00, mortgageRate: 6.25, spread: 1.25 }
];

// UK Corporate Vulnerabilities Data
const ukCorporateVulnerabilitiesData = [
  { sector: 'Real Estate', highDebt: 32, liquidity: 15, profitability: 28 },
  { sector: 'Retail', highDebt: 24, liquidity: 22, profitability: 31 },
  { sector: 'Hospitality', highDebt: 28, liquidity: 18, profitability: 35 },
  { sector: 'Manufacturing', highDebt: 18, liquidity: 12, profitability: 15 },
  { sector: 'Technology', highDebt: 12, liquidity: 8, profitability: 10 },
  { sector: 'Energy', highDebt: 22, liquidity: 14, profitability: 20 }
];

// UK Market Liquidity Data
const ukMarketLiquidityData = [
  { month: 'Jan 2025', giltSpread: 15, corporateSpread: 125, bankFunding: 85 },
  { month: 'Feb 2025', giltSpread: 18, corporateSpread: 135, bankFunding: 88 },
  { month: 'Mar 2025', giltSpread: 22, corporateSpread: 145, bankFunding: 92 },
  { month: 'Apr 2025', giltSpread: 28, corporateSpread: 165, bankFunding: 98 },
  { month: 'May 2025', giltSpread: 24, corporateSpread: 155, bankFunding: 94 },
  { month: 'Jun 2025', giltSpread: 20, corporateSpread: 140, bankFunding: 89 },
  { month: 'Jul 2025', giltSpread: 18, corporateSpread: 135, bankFunding: 87 }
];

// UK Risk Assessment Dashboard Data
const ukRiskAssessmentData = [
  { risk: 'Banking Sector', current: 25, target: 20, status: 'Stable' },
  { risk: 'Household Debt', current: 42, target: 35, status: 'Elevated' },
  { risk: 'Corporate Debt', current: 35, target: 30, status: 'Elevated' },
  { risk: 'Market Liquidity', current: 38, target: 25, status: 'Moderate' },
  { risk: 'Operational', current: 55, target: 40, status: 'High' },
  { risk: 'International', current: 28, target: 25, status: 'Moderate' }
];

// UK Commodity Volatility Data
const ukCommodityVolatilityData = [
  { month: 'Jan 2024', oil: 12.5, gas: 35.2, metals: 18.7, food: 22.1 },
  { month: 'Feb 2024', oil: 15.8, gas: 42.1, metals: 21.3, food: 24.5 },
  { month: 'Mar 2024', oil: 18.2, gas: 48.7, metals: 25.1, food: 28.2 },
  { month: 'Apr 2024', oil: 22.4, gas: 55.3, metals: 28.9, food: 32.1 },
  { month: 'May 2024', oil: 19.1, gas: 51.2, metals: 26.4, food: 29.8 },
  { month: 'Jun 2024', oil: 16.7, gas: 46.8, metals: 23.2, food: 26.9 },
  { month: 'Jul 2024', oil: 14.3, gas: 41.5, metals: 20.1, food: 24.2 },
  { month: 'Aug 2024', oil: 20.8, gas: 52.7, metals: 27.8, food: 31.4 },
  { month: 'Sep 2024', oil: 17.9, gas: 47.3, metals: 24.6, food: 28.7 },
  { month: 'Oct 2024', oil: 15.4, gas: 43.1, metals: 21.8, food: 25.9 },
  { month: 'Nov 2024', oil: 13.2, gas: 38.9, metals: 19.4, food: 23.1 },
  { month: 'Dec 2024', oil: 11.8, gas: 35.6, metals: 17.2, food: 21.5 },
  { month: 'Jan 2025', oil: 14.1, gas: 39.8, metals: 20.3, food: 24.8 },
  { month: 'Feb 2025', oil: 16.9, gas: 44.2, metals: 23.7, food: 27.3 },
  { month: 'Mar 2025', oil: 19.6, gas: 49.1, metals: 26.8, food: 30.2 },
  { month: 'Apr 2025', oil: 23.7, gas: 56.4, metals: 31.2, food: 34.5 },
  { month: 'May 2025', oil: 21.2, gas: 52.8, metals: 28.9, food: 31.8 },
  { month: 'Jun 2025', oil: 18.5, gas: 48.3, metals: 25.7, food: 28.9 },
  { month: 'Jul 2025', oil: 16.8, gas: 44.9, metals: 23.1, food: 26.4 }
];

const COLORS = ['#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d', '#16a34a', '#059669', '#0891b2', '#0284c7', '#2563eb', '#4f46e5', '#7c3aed'];

export function UKBankCapitalChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Bank Capital Ratios (%)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={ukBankCapitalData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="cet1" stroke="#dc2626" strokeWidth={2} name="CET1 Ratio" />
          <Line type="monotone" dataKey="tier1" stroke="#ea580c" strokeWidth={2} name="Tier 1 Ratio" />
          <Line type="monotone" dataKey="totalCapital" stroke="#16a34a" strokeWidth={2} name="Total Capital Ratio" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        All ratios remain well above regulatory minimums. CET1 requirement: 7%, Tier 1: 8.5%, Total: 10.5%
      </p>
    </div>
  );
}

export function UKHouseholdDebtChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Household Debt-to-Income Ratio (%)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={ukHouseholdDebtData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="mortgageDebt" stackId="1" stroke="#dc2626" fill="#dc2626" fillOpacity={0.6} name="Mortgage Debt" />
          <Area type="monotone" dataKey="consumerCredit" stackId="1" stroke="#ea580c" fill="#ea580c" fillOpacity={0.6} name="Consumer Credit" />
          <Line type="monotone" dataKey="debtToIncome" stroke="#1f2937" strokeWidth={3} name="Total Debt-to-Income" />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Debt levels stabilising but remain elevated. Mortgage debt dominates household liabilities.
      </p>
    </div>
  );
}

export function UKPropertyMarketChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Property Market Indices (Q1 2023 = 100)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={ukPropertyData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="quarter" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="housePrices" stroke="#dc2626" strokeWidth={2} name="House Prices" />
          <Line type="monotone" dataKey="transactions" stroke="#ea580c" strokeWidth={2} name="Transactions Volume" />
          <Line type="monotone" dataKey="commercialRE" stroke="#7c3aed" strokeWidth={2} name="Commercial RE Prices" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Commercial real estate faces significant correction while residential market shows greater resilience.
      </p>
    </div>
  );
}

export function UKCorporateDebtChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Corporate Debt by Sector (%)</h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={ukCorporateDebtData} 
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="sector" 
            className="text-xs"
            angle={-45}
            textAnchor="end"
            height={80}
            interval={0}
          />
          <YAxis 
            className="text-xs"
            label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
            domain={[0, 70]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
            formatter={(value, name) => [
              `${value}%`, 
              name === 'debtToAssets' ? 'Debt-to-Assets Ratio' : 'Vulnerable Firms'
            ]}
            labelFormatter={(label) => `Sector: ${label}`}
          />
          <Legend />
          <Bar 
            dataKey="debtToAssets" 
            fill="#dc2626" 
            name="Debt-to-Assets Ratio (%)" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="vulnerableFirms" 
            fill="#ea580c" 
            name="Vulnerable Firms (%)" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Real estate and hospitality sectors show highest vulnerability to interest rate increases. Data represents UK corporate sector debt levels as percentage of total assets and share of firms with elevated debt burdens.
      </p>
    </div>
  );
}

export function UKMarketVolatilityChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Market Volatility Indicators</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={ukMarketVolatilityData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" className="text-xs" angle={-45} textAnchor="end" height={60} />
          <YAxis yAxisId="left" className="text-xs" />
          <YAxis yAxisId="right" orientation="right" className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="vix" fill="#dc2626" name="UK VIX" />
          <Line yAxisId="right" type="monotone" dataKey="giltYield" stroke="#ea580c" strokeWidth={2} name="10Y Gilt Yield %" />
          <Line yAxisId="right" type="monotone" dataKey="sterling" stroke="#16a34a" strokeWidth={2} name="GBP/USD" />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Volatility peaked in April 2025 amid policy uncertainty, while gilt yields remain elevated.
      </p>
    </div>
  );
}

export function UKSystemicRiskChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Systemic Risk Heat Map</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ukSystemicRiskData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="category" className="text-xs" angle={-45} textAnchor="end" height={60} />
          <YAxis className="text-xs" domain={[0, 100]} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Bar dataKey="riskLevel" name="Risk Level">
            {ukSystemicRiskData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.riskLevel > 50 ? '#dc2626' : entry.riskLevel > 30 ? '#ea580c' : '#16a34a'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Operational risks elevated due to cyber threats. Household vulnerabilities increasing.
      </p>
    </div>
  );
}

export function UKClimateRiskChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Climate Risk Scenarios</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ukClimateRiskData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="scenario" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Bar dataKey="physicalRisk" stackId="a" fill="#dc2626" name="Physical Risk %" />
          <Bar dataKey="transitionRisk" stackId="a" fill="#ea580c" name="Transition Risk %" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Late policy action scenario shows highest transition risk impact on financial institutions.
      </p>
    </div>
  );
}

export function UKCyberRiskChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Cyber Security Incidents & Impact</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={ukCyberRiskData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis yAxisId="left" className="text-xs" />
          <YAxis yAxisId="right" orientation="right" className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="incidents" fill="#dc2626" name="Number of Incidents" />
          <Line yAxisId="right" type="monotone" dataKey="impact" stroke="#ea580c" strokeWidth={3} name="Average Impact (£M)" />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Cyber incidents increasing in both frequency and financial impact across UK financial services.
      </p>
    </div>
  );
}

export function UKMortgageRatesChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Mortgage Rates vs Bank Rate</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={ukMortgageRatesData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="bankRate" stroke="#1e40af" strokeWidth={3} name="Bank Rate %" />
          <Line type="monotone" dataKey="mortgageRate" stroke="#dc2626" strokeWidth={3} name="Average Mortgage Rate %" />
          <Line type="monotone" dataKey="spread" stroke="#059669" strokeWidth={2} name="Spread %" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Mortgage rates remain elevated following Bank Rate increases, with spreads stabilizing at lower levels.
      </p>
    </div>
  );
}

export function UKCorporateVulnerabilitiesChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Corporate Vulnerabilities by Sector</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ukCorporateVulnerabilitiesData} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis type="number" className="text-xs" />
          <YAxis dataKey="sector" type="category" className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Bar dataKey="highDebt" fill="#dc2626" name="High Debt %" />
          <Bar dataKey="liquidity" fill="#ea580c" name="Liquidity Issues %" />
          <Bar dataKey="profitability" fill="#f59e0b" name="Profitability Concerns %" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Real estate and hospitality sectors show highest vulnerability across multiple metrics.
      </p>
    </div>
  );
}

export function UKMarketLiquidityChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Market Liquidity Indicators</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={ukMarketLiquidityData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" className="text-xs" />
          <YAxis yAxisId="left" className="text-xs" />
          <YAxis yAxisId="right" orientation="right" className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="giltSpread" fill="#1e40af" name="Gilt Spread (bps)" />
          <Line yAxisId="right" type="monotone" dataKey="corporateSpread" stroke="#dc2626" strokeWidth={3} name="Corporate Spread (bps)" />
          <Line yAxisId="right" type="monotone" dataKey="bankFunding" stroke="#059669" strokeWidth={2} name="Bank Funding Spread (bps)" />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Market liquidity conditions tightened in early 2025 but have since stabilized.
      </p>
    </div>
  );
}

export function UKRiskAssessmentDashboard() {
  const getColor = (status: string) => {
    switch (status) {
      case 'Stable': return '#059669';
      case 'Moderate': return '#f59e0b';
      case 'Elevated': return '#ea580c';
      case 'High': return '#dc2626';
      default: return '#6b7280';
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Financial System Risk Assessment</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ukRiskAssessmentData.map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h5 className="font-medium text-gray-800 dark:text-white">{item.risk}</h5>
              <span 
                className="px-2 py-1 text-xs rounded-full text-white font-medium"
                style={{ backgroundColor: getColor(item.status) }}
              >
                {item.status}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <span>Current: {item.current}%</span>
              <span>Target: {item.target}%</span>
            </div>
            <div className="mt-2 bg-gray-200 dark:bg-neutral-600 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${(item.current / 60) * 100}%`,
                  backgroundColor: getColor(item.status)
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UKCommodityVolatilityChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">UK Commodity Price Volatility</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={ukCommodityVolatilityData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="oil" stroke="#1e40af" strokeWidth={2} name="Oil Volatility %" />
          <Line type="monotone" dataKey="gas" stroke="#dc2626" strokeWidth={2} name="Gas Volatility %" />
          <Line type="monotone" dataKey="metals" stroke="#059669" strokeWidth={2} name="Metals Volatility %" />
          <Line type="monotone" dataKey="food" stroke="#f59e0b" strokeWidth={2} name="Food Volatility %" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        Gas price volatility remains elevated, contributing to inflationary pressures and economic uncertainty.
      </p>
    </div>
  );
}
