"use client";

import React from "react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts";
import { useTheme } from "next-themes";

// Sample data for charts
const counterfeitNotesData = [
  { year: "2020", notes: 220000 },
  { year: "2021", notes: 175000 },
  { year: "2022", notes: 145000 },
  { year: "2023", notes: 124000 },
  { year: "2024", notes: 103000 },
  { year: "2025", notes: 88000 },
];

const digitalPaymentData = [
  { year: "2020", traditional: 65, digital: 35 },
  { year: "2021", traditional: 58, digital: 42 },
  { year: "2022", traditional: 52, digital: 48 },
  { year: "2023", traditional: 46, digital: 54 },
  { year: "2024", traditional: 41, digital: 59 },
  { year: "2025", traditional: 37, digital: 63 },
];

const banknoteDenominationData = [
  { name: "£5", value: 20 },
  { name: "£10", value: 25 },
  { name: "£20", value: 40 },
  { name: "£50", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const securityFeatureAdoptionData = [
  { year: "2020", polymer: 65, hologram: 82, microtext: 78, uvFeatures: 90 },
  { year: "2021", polymer: 75, hologram: 84, microtext: 80, uvFeatures: 92 },
  { year: "2022", polymer: 85, hologram: 86, microtext: 83, uvFeatures: 94 },
  { year: "2023", polymer: 95, hologram: 88, microtext: 85, uvFeatures: 96 },
  { year: "2024", polymer: 98, hologram: 92, microtext: 88, uvFeatures: 97 },
  { year: "2025", polymer: 100, hologram: 95, microtext: 92, uvFeatures: 99 },
];

export function DigitalPaymentChart() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white transition-colors">Transition from Traditional to Digital Payments (2020-2025)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={digitalPaymentData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#555" : "#ccc"} />
            <XAxis dataKey="year" stroke={isDark ? "#aaa" : "#666"} />
            <YAxis stroke={isDark ? "#aaa" : "#666"} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? "#333" : "#fff",
                color: isDark ? "#fff" : "#333",
                border: `1px solid ${isDark ? "#555" : "#ddd"}`
              }}
              labelStyle={{ color: isDark ? "#fff" : "#333" }}
            />
            <Legend wrapperStyle={{ color: isDark ? "#fff" : "#333" }} />
            <Area type="monotone" dataKey="traditional" stackId="1" stroke="#8884d8" fill={isDark ? "#8884d8" : "#8884d8"} name="Traditional Cash (%)"/>
            <Area type="monotone" dataKey="digital" stackId="1" stroke="#82ca9d" fill={isDark ? "#4ade80" : "#82ca9d"} name="Digital Payments (%)"/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center transition-colors">Source: Bank of England estimates, 2025</p>
    </div>
  );
}

export function SecurityFeaturesChart() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md mb-8 border border-gray-100 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white transition-colors">Adoption of Security Features in UK Banknotes (2020-2025)</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={securityFeatureAdoptionData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#555" : "#ccc"} />
            <XAxis dataKey="year" stroke={isDark ? "#aaa" : "#666"} />
            <YAxis stroke={isDark ? "#aaa" : "#666"} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? "#333" : "#fff",
                color: isDark ? "#fff" : "#333",
                border: `1px solid ${isDark ? "#555" : "#ddd"}`
              }}
              labelStyle={{ color: isDark ? "#fff" : "#333" }}
            />
            <Legend wrapperStyle={{ color: isDark ? "#fff" : "#333" }} />
            <Line type="monotone" dataKey="polymer" stroke="#8884d8" activeDot={{ r: 8 }} name="Polymer Notes (%)" strokeWidth={2} />
            <Line type="monotone" dataKey="hologram" stroke="#82ca9d" name="Holographic Features (%)" strokeWidth={2} />
            <Line type="monotone" dataKey="microtext" stroke="#ffc658" name="Microtext (%)" strokeWidth={2} />
            <Line type="monotone" dataKey="uvFeatures" stroke="#ff8042" name="UV Features (%)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center transition-colors">Source: Bank of England Technical Reports, 2025</p>
    </div>
  );
}

export function CounterfeitNotesChart() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white transition-colors">Counterfeit Notes Detected in the UK (2020-2025)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={counterfeitNotesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#555" : "#ccc"} />
            <XAxis dataKey="year" stroke={isDark ? "#aaa" : "#666"} />
            <YAxis stroke={isDark ? "#aaa" : "#666"} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? "#333" : "#fff",
                color: isDark ? "#fff" : "#333",
                border: `1px solid ${isDark ? "#555" : "#ddd"}`
              }}
              labelStyle={{ color: isDark ? "#fff" : "#333" }}
            />
            <Legend wrapperStyle={{ color: isDark ? "#fff" : "#333" }} />
            <Bar dataKey="notes" fill={isDark ? "#9c7be8" : "#8884d8"} name="Counterfeit Notes Detected" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center transition-colors">Source: Bank of England Counterfeit Currency Report, 2025</p>
    </div>
  );
}

export function BanknoteDenominationChart() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  // Brighter colors for dark mode for better contrast
  const darkModeColors = ["#60a5fa", "#5eead4", "#fcd34d", "#fb923c"];
  const lightModeColors = COLORS;
  
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors">
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-800 dark:text-white transition-colors">Distribution of Bank of England Notes by Denomination</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={banknoteDenominationData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {banknoteDenominationData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={isDark ? darkModeColors[index % darkModeColors.length] : lightModeColors[index % lightModeColors.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? "#333" : "#fff",
                color: isDark ? "#fff" : "#333",
                border: `1px solid ${isDark ? "#555" : "#ddd"}`
              }}
              labelStyle={{ color: isDark ? "#fff" : "#333" }}
            />
            <Legend wrapperStyle={{ color: isDark ? "#fff" : "#333" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center transition-colors">Source: Bank of England Currency Statistics, 2025</p>
    </div>
  );
}

export function StrategicRoadmap() {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md mt-6 border border-gray-100 dark:border-gray-700 transition-colors">
      <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white transition-colors">Strategic Roadmap for Legal Tender Protection</h3>
      <div className="flex flex-wrap justify-around items-center">
        <div className="text-center p-4">
          <div className="w-20 h-20 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center mx-auto mb-2 transition-colors">
            <span className="text-sky-800 dark:text-sky-200 text-xl font-bold transition-colors">2025</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Digital Pound Pilot</p>
        </div>
        <div className="hidden md:block text-gray-500 dark:text-gray-400">→</div>
        <div className="text-center p-4">
          <div className="w-20 h-20 rounded-full bg-sky-200 dark:bg-sky-800 flex items-center justify-center mx-auto mb-2 transition-colors">
            <span className="text-sky-800 dark:text-sky-200 text-xl font-bold transition-colors">2026</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">CTP Framework Rollout</p>
        </div>
        <div className="hidden md:block text-gray-500 dark:text-gray-400">→</div>
        <div className="text-center p-4">
          <div className="w-20 h-20 rounded-full bg-sky-300 dark:bg-sky-700 flex items-center justify-center mx-auto mb-2 transition-colors">
            <span className="text-sky-800 dark:text-sky-200 text-xl font-bold transition-colors">2027</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Liquidity Framework Review</p>
        </div>
        <div className="hidden md:block text-gray-500 dark:text-gray-400">→</div>
        <div className="text-center p-4">
          <div className="w-20 h-20 rounded-full bg-sky-400 dark:bg-sky-600 flex items-center justify-center mx-auto mb-2 transition-colors">
            <span className="text-sky-800 dark:text-sky-200 text-xl font-bold transition-colors">2028</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Full Digital Pound Launch</p>
        </div>
      </div>
    </div>
  );
}