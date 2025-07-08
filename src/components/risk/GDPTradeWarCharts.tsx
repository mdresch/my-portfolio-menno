"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

// GDP Per Capita Chart
const gdpPerCapitaData = [
  { year: '2020', canada: 45.3, usa: 63.5, oecd: 37.8 },
  { year: '2021', canada: 52.1, usa: 69.4, oecd: 40.2 },
  { year: '2022', canada: 54.2, usa: 70.9, oecd: 41.5 },
  { year: '2023', canada: 53.8, usa: 71.2, oecd: 42.1 },
  { year: '2024', canada: 53.4, usa: 72.8, oecd: 42.7 },
  { year: '2025P', canada: 54.1, usa: 74.2, oecd: 43.5 },
];

export function GDPPerCapitaChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">GDP Per Capita Comparison (USD Thousands)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={gdpPerCapitaData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--tooltip-bg)', 
              border: 'var(--tooltip-border)',
              color: 'var(--tooltip-text)'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="canada" stroke="#ef4444" strokeWidth={2} name="Canada" />
          <Line type="monotone" dataKey="usa" stroke="#3b82f6" strokeWidth={2} name="USA" />
          <Line type="monotone" dataKey="oecd" stroke="#10b981" strokeWidth={2} name="OECD Avg" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Productivity Growth Chart
const productivityData = [
  { year: '2019', canada: 0.9, usa: 1.4, germany: 1.2, japan: 1.1 },
  { year: '2020', canada: 0.6, usa: 1.2, germany: 0.8, japan: 0.9 },
  { year: '2021', canada: 1.1, usa: 2.1, germany: 1.5, japan: 1.3 },
  { year: '2022', canada: 0.8, usa: 1.8, germany: 1.1, japan: 1.0 },
  { year: '2023', canada: 0.7, usa: 1.6, germany: 1.0, japan: 0.8 },
  { year: '2024', canada: 0.9, usa: 1.7, germany: 1.2, japan: 1.1 },
];

export function ProductivityGrowthChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Annual Productivity Growth (%)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={productivityData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--tooltip-bg)', 
              border: 'var(--tooltip-border)',
              color: 'var(--tooltip-text)'
            }}
          />
          <Legend />
          <Bar dataKey="canada" fill="#ef4444" name="Canada" />
          <Bar dataKey="usa" fill="#3b82f6" name="USA" />
          <Bar dataKey="germany" fill="#10b981" name="Germany" />
          <Bar dataKey="japan" fill="#f59e0b" name="Japan" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Business Investment Chart
const investmentData = [
  { year: '2019', canada: 5.8, usa: 10.2, target: 8.0 },
  { year: '2020', canada: 5.2, usa: 9.8, target: 8.0 },
  { year: '2021', canada: 5.4, usa: 10.4, target: 8.0 },
  { year: '2022', canada: 5.7, usa: 10.8, target: 8.0 },
  { year: '2023', canada: 5.5, usa: 10.9, target: 8.0 },
  { year: '2024', canada: 5.6, usa: 11.0, target: 8.0 },
  { year: '2025P', canada: 6.2, usa: 11.2, target: 8.0 },
  { year: '2026P', canada: 7.1, usa: 11.4, target: 8.0 },
  { year: '2027P', canada: 8.0, usa: 11.6, target: 8.0 },
];

export function BusinessInvestmentChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Business Investment (% of GDP)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={investmentData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--tooltip-bg)', 
              border: 'var(--tooltip-border)',
              color: 'var(--tooltip-text)'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="canada" stroke="#ef4444" strokeWidth={2} name="Canada" />
          <Line type="monotone" dataKey="usa" stroke="#3b82f6" strokeWidth={2} name="USA" />
          <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Canada Target" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Trade Intensity Chart
const tradeIntensityData = [
  { region: 'United States', share: 75, color: '#ef4444' },
  { region: 'European Union', share: 8, color: '#3b82f6' },
  { region: 'China & Asia', share: 12, color: '#10b981' },
  { region: 'Other', share: 5, color: '#f59e0b' },
];

export function TradeIntensityChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Export Market Concentration (2024)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={tradeIntensityData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ region, share }) => `${region}: ${share}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="share"
          >
            {tradeIntensityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Economic Resilience Chart
const resilienceData = [
  { scenario: 'Baseline', gdpImpact: 2.5, employment: 0.8, tradeDiversification: 25 },
  { scenario: 'Moderate Trade War', gdpImpact: 1.8, employment: -0.5, tradeDiversification: 35 },
  { scenario: 'Severe Trade War', gdpImpact: 0.8, employment: -1.2, tradeDiversification: 45 },
];

export function EconomicResilienceChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Economic Resilience Scenarios</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={resilienceData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="scenario" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--tooltip-bg)', 
              border: 'var(--tooltip-border)',
              color: 'var(--tooltip-text)'
            }}
          />
          <Legend />
          <Bar dataKey="gdpImpact" fill="#10b981" name="GDP Growth (%)" />
          <Bar dataKey="employment" fill="#3b82f6" name="Employment Impact (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Interprovincial Trade Chart
const interprovincialData = [
  { sector: 'Goods', current: 15.2, potential: 22.8 },
  { sector: 'Services', current: 8.1, potential: 14.5 },
  { sector: 'Energy', current: 25.6, potential: 28.2 },
  { sector: 'Agriculture', current: 18.9, potential: 24.1 },
  { sector: 'Manufacturing', current: 12.4, potential: 19.7 },
];

export function InterprovincialTradeChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Interprovincial Trade Potential (CAD Billions)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={interprovincialData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="sector" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--tooltip-bg)', 
              border: 'var(--tooltip-border)',
              color: 'var(--tooltip-text)'
            }}
          />
          <Legend />
          <Bar dataKey="current" fill="#ef4444" name="Current" />
          <Bar dataKey="potential" fill="#10b981" name="Potential" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Export Diversification Chart
const diversificationData = [
  { year: '2024', us: 75, eu: 8, asia: 12, other: 5 },
  { year: '2025P', us: 72, eu: 10, asia: 14, other: 4 },
  { year: '2026P', us: 69, eu: 12, asia: 15, other: 4 },
  { year: '2027P', us: 65, eu: 15, asia: 16, other: 4 },
];

export function ExportDiversificationChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Export Diversification Timeline (%)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={diversificationData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="year" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--tooltip-bg)', 
              border: 'var(--tooltip-border)',
              color: 'var(--tooltip-text)'
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="us" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="United States" />
          <Area type="monotone" dataKey="eu" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="European Union" />
          <Area type="monotone" dataKey="asia" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Asia-Pacific" />
          <Area type="monotone" dataKey="other" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Other Markets" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// Legacy chart components for backward compatibility
export const GDPGrowthChart = GDPPerCapitaChart;
export const ProductivityChart = ProductivityGrowthChart;
export const TradeExposureChart = TradeIntensityChart;
export const InvestmentChart = BusinessInvestmentChart;
export const SectorDiversificationChart = InterprovincialTradeChart;
export const PolicyImpactChart = EconomicResilienceChart;

// Risk Assessment Dashboard component
export function RiskAssessmentDashboard() {
  const riskMetrics = [
    { metric: 'Trade Concentration Risk', current: 'High', target: 'Medium', status: 'improving' },
    { metric: 'Productivity Gap', current: 'High', target: 'Low', status: 'stable' },
    { metric: 'Investment Rate', current: 'Low', target: 'High', status: 'improving' },
    { metric: 'Export Diversification', current: 'Low', target: 'Medium', status: 'improving' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'improving': return 'text-green-600 dark:text-green-400';
      case 'stable': return 'text-yellow-600 dark:text-yellow-400';
      case 'declining': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Risk Assessment Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {riskMetrics.map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-800 dark:text-white">{item.metric}</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-600 dark:text-gray-300">Current: {item.current}</span>
              <span className="text-xs text-gray-600 dark:text-gray-300">Target: {item.target}</span>
            </div>
            <div className={`text-xs mt-1 ${getStatusColor(item.status)}`}>
              Status: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
