"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Scatter
} from "recharts";

// Colors for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];
const GREEN_COLORS = ["#34A853", "#93D29B", "#D0EDCA"];
const RED_COLORS = ["#EA4335", "#F28B82", "#FCE8E6"];

// Climate Risk Overview Data
const climateRiskOverviewData = [
  { year: 2025, physical: 35, transition: 58 },
  { year: 2030, physical: 42, transition: 65 },
  { year: 2035, physical: 48, transition: 60 },
  { year: 2040, physical: 55, transition: 52 },
  { year: 2045, physical: 63, transition: 45 },
  { year: 2050, physical: 70, transition: 38 },
];

// Sector Exposure Data
const sectorExposureData = [
  {
    sector: "Energy",
    transition: 85,
    physical: 55,
  },
  {
    sector: "Utilities",
    transition: 80,
    physical: 70,
  },
  {
    sector: "Materials",
    transition: 75,
    physical: 65,
  },
  {
    sector: "Transportation",
    transition: 70,
    physical: 60,
  },
  {
    sector: "Agriculture",
    transition: 45,
    physical: 90,
  },
  {
    sector: "Finance",
    transition: 65,
    physical: 40,
  },
  {
    sector: "Technology",
    transition: 30,
    physical: 25,
  },
];

// Physical Risk Map Data (simplified for demo)
const physicalRiskRegionsData = [
  { name: "Coastal Asia", value: 85 },
  { name: "Southeast US", value: 75 },
  { name: "Mediterranean", value: 70 },
  { name: "Central Africa", value: 65 },
  { name: "Australia", value: 60 },
];

// Transition Risk Timeline Data
const transitionRiskTimelineData = [
  { year: 2025, orderly: 20, disorderly: 25, failed: 15 },
  { year: 2030, orderly: 35, disorderly: 45, failed: 30 },
  { year: 2035, orderly: 45, disorderly: 70, failed: 40 },
  { year: 2040, orderly: 55, disorderly: 90, failed: 55 },
  { year: 2045, orderly: 60, disorderly: 80, failed: 70 },
  { year: 2050, orderly: 65, disorderly: 75, failed: 85 },
];

// Carbon Pricing Scenario Data
const carbonPricingData = [
  { year: 2025, scenario1: 30, scenario2: 50, scenario3: 75 },
  { year: 2030, scenario1: 45, scenario2: 80, scenario3: 130 },
  { year: 2035, scenario1: 60, scenario2: 110, scenario3: 185 },
  { year: 2040, scenario1: 75, scenario2: 140, scenario3: 240 },
  { year: 2045, scenario1: 90, scenario2: 170, scenario3: 295 },
  { year: 2050, scenario1: 105, scenario2: 200, scenario3: 350 },
];

// Investment Trends Data
const investmentTrendsData = [
  { year: 2020, green: 15, transition: 8, conventional: 77 },
  { year: 2021, green: 18, transition: 10, conventional: 72 },
  { year: 2022, green: 22, transition: 12, conventional: 66 },
  { year: 2023, green: 28, transition: 15, conventional: 57 },
  { year: 2024, green: 32, transition: 20, conventional: 48 },
  { year: 2025, green: 38, transition: 25, conventional: 37 },
];

export const ClimateRiskOverviewChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Evolution of Climate Risk Channels</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={climateRiskOverviewData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, undefined]} />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="physical" 
            name="Physical Risk Exposure"
            stroke="#0088FE" 
            fill="#0088FE" 
            fillOpacity={0.3} 
            activeDot={{ r: 8 }}
          />
          <Area 
            type="monotone" 
            dataKey="transition" 
            name="Transition Risk Exposure" 
            stroke="#FF8042" 
            fill="#FF8042"
            fillOpacity={0.3} 
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Percentage of financial system exposure to each risk type. Source: Climate Finance Institute projections.
      </div>
    </div>
  );
};

export const SectorExposureChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Climate Risk Exposure by Economic Sector</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Risk exposure scores from 0 (low) to 100 (high)
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={sectorExposureData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="sector" type="category" width={100} />
          <Tooltip formatter={(value) => [`${value} (Score)`, undefined]} />
          <Legend />
          <Bar 
            dataKey="transition" 
            name="Transition Risk" 
            fill="#FF8042" 
          />
          <Bar 
            dataKey="physical" 
            name="Physical Risk" 
            fill="#0088FE"
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Climate Finance Institute, Sectoral Climate Risk Assessment 2025
      </div>
    </div>
  );
};

export const PhysicalRiskMapChart = () => {
  // In a real implementation, this would be a map visualization
  // For this example, using a simple chart to represent regional risk levels
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Physical Climate Risk by Region</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Risk level from 0 (low) to 100 (high)
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={physicalRiskRegionsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(value) => [`${value} (Risk Score)`, undefined]} />
          <Legend />
          <Bar 
            dataKey="value" 
            name="Physical Risk Score" 
            fill="#0088FE" 
          >
            {physicalRiskRegionsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`rgba(0, 136, 254, ${0.4 + entry.value/200})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Note: This is a simplified representation. Full interactive map available in downloaded data.
      </div>
    </div>
  );
};

export const TransitionRiskTimelineChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Financial Impact Under Different Transition Scenarios</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={transitionRiskTimelineData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}% of GDP`, undefined]} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="orderly" 
            name="Orderly Transition" 
            stroke="#34A853" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="disorderly" 
            name="Disorderly Transition" 
            stroke="#EA4335" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="failed" 
            name="Failed Transition" 
            stroke="#FBBC05" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Projected financial system impact as percentage of GDP. Source: Climate Finance Institute.
      </div>
    </div>
  );
};

export const CarbonPricingScenarioChart = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Carbon Price Trajectories Under Different Policy Scenarios</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors">
        Carbon price in USD per ton of CO₂ equivalent
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={carbonPricingData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, "auto"]} tickFormatter={(value) => `$${value}`} />
          <Tooltip formatter={(value) => [`$${value}/tCO₂e`, undefined]} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="scenario1" 
            name="Low Ambition" 
            stroke="#FBBC05" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="scenario2" 
            name="Paris-Aligned" 
            stroke="#34A853" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="scenario3" 
            name="Net-Zero by 2050" 
            stroke="#4285F4" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Climate Finance Institute carbon pricing model, 2025
      </div>
    </div>
  );
};

export const InvestmentTrendsChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Global Investment Allocation Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={investmentTrendsData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          stackOffset="expand"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `${Math.round(value * 100)}%`} />
          <Tooltip formatter={(value, name) => [`${Math.round(value * 100)}%`, name]} />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="green" 
            name="Green Investments" 
            stackId="1"
            stroke="#34A853" 
            fill="#34A853" 
          />
          <Area 
            type="monotone" 
            dataKey="transition" 
            name="Transition Investments" 
            stackId="1"
            stroke="#FBBC05" 
            fill="#FBBC05" 
          />
          <Area 
            type="monotone" 
            dataKey="conventional" 
            name="Conventional Investments" 
            stackId="1"
            stroke="#EA4335" 
            fill="#EA4335" 
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Percentage of global capital allocation. Source: Climate Finance Institute, 2025
      </div>
    </div>
  );
};