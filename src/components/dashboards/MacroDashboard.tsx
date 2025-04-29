import React from 'react';
import { MockKPICard, MockLineChart, MockBarChart, MockTablePlaceholder, MockStackedBarChart, MockUnemploymentLineChart } from '@/components/dashboards/MockVisuals';

// Example mock data for macro indicators
const macroKPIs = [
  { title: 'GDP Growth (YoY)', value: '2.5%', change: '+0.1%' },
  { title: 'Inflation Rate (CPI)', value: '3.1%', change: '-0.2%' },
  { title: 'Interest Rate', value: '4.0%', change: '+0.25%' },
  { title: 'Employment Rate', value: '96.2%', change: '+0.1%' },
  { title: 'Unemployment Rate', value: '3.8%', change: '-0.1%' },
  { title: 'Population Growth', value: '0.7%', change: '+0.02%' },
  { title: 'R&D Expenditure (% GDP)', value: '2.1%' },
  { title: 'Tax on Personal Income (% GDP)', value: '9.5%' },
  { title: 'Gov. Debt (% GDP)', value: '78%' },
  { title: 'Household Debt (% Net Disposable Income)', value: '110%' },
  { title: 'Population', value: '340M', change: '+0.7%' },
  { title: 'Age 0-14', value: '18%', change: '-0.1%' },
  { title: 'Age 15-64', value: '65%', change: '+0.1%' },
  { title: 'Age 65+', value: '17%', change: '+0.2%' },
];

export const MacroDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">Macroeconomic Dashboard</h2>
    {/* KPI Row */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {macroKPIs.map((kpi) => (
        <MockKPICard key={kpi.title} title={kpi.title} value={kpi.value} change={kpi.change} />
      ))}
    </div>
    {/* Charts for major indicators */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <MockLineChart title="GDP Growth Over Time" />
      <MockLineChart title="Inflation Rate Over Time" />
      <MockLineChart title="Interest Rate Over Time" />
      <MockLineChart title="Unemployment Rate Over Time" />
      <MockUnemploymentLineChart title="Unemployment Rate Over Time" />
      <MockStackedBarChart title="Population by Age and Gender (M/F)" />
    </div>
    {/* Bar charts for R&D, Tax, Debt, Household Debt */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <MockBarChart title="R&D Expenditure, Tax, and Debt (% of GDP)" />
      <MockBarChart title="Household Debt vs. Net Disposable Income" />
    </div>
    {/* Skills, STEM gap, employment shortage */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <MockTablePlaceholder title="Skills & Competency Index" />
      <MockTablePlaceholder title="STEM Gap & Employment Shortage" />
    </div>
  </section>
);
