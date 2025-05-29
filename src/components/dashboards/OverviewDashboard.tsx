// filepath: src/components/dashboards/OverviewDashboard.tsx (adjust path if needed)
import React from "react";
// Correct named import from the correct location
import { MockKPICard, MockPPICPIChart, MockPayrollEmploymentChart, MockAverageHourlyEarningsChart, MockEmploymentCostIndexChart } from "../../components/dashboards/MockVisuals";
// Or relative path: import { MockKPICard, MockChartPlaceholder, MockPPICPIChart, MockPayrollEmploymentChart, MockAverageHourlyEarningsChart, MockEmploymentCostIndexChart } from './MockVisuals';

// --- Import/Export Price Indexes Mock Data ---
const importExportKPIs = [
  { title: "Import Prices (MoM)", value: "-0.1%", change: "↓", description: "March 2025" },
  { title: "Import Prices (YoY)", value: "+0.9%", change: "↑", description: "Mar 2024–Mar 2025" },
  { title: "Export Prices (MoM)", value: "0.0%", change: "→", description: "March 2025" },
  { title: "Export Prices (YoY)", value: "+2.4%", change: "↑", description: "Mar 2024–Mar 2025" },
  { title: "Fuel Import Prices (MoM)", value: "-2.3%", change: "↓", description: "March 2025" },
  { title: "Fuel Import Prices (YoY)", value: "-5.2%", change: "↓", description: "Mar 2024–Mar 2025" },
  { title: "Nonfuel Import Prices (MoM)", value: "+0.1%", change: "↑", description: "March 2025" },
  { title: "Nonfuel Import Prices (YoY)", value: "+1.5%", change: "↑", description: "Mar 2024–Mar 2025" },
  { title: "Agri Export Prices (MoM)", value: "0.0%", change: "→", description: "March 2025" },
  { title: "Agri Export Prices (YoY)", value: "+1.4%", change: "↑", description: "Mar 2024–Mar 2025" },
  { title: "Non-Agri Export Prices (MoM)", value: "-0.1%", change: "↓", description: "March 2025" },
  { title: "Non-Agri Export Prices (YoY)", value: "+2.5%", change: "↑", description: "Mar 2024–Mar 2025" },
];

const importExportPriceData = [
  { month: "2024-12", import: 0.1, export: 0.5 },
  { month: "2025-01", import: 0.2, export: 1.4 },
  { month: "2025-02", import: 0.2, export: 0.5 },
  { month: "2025-03", import: -0.1, export: 0.0 },
];

const fuelImportPriceData = [
  { month: "2024-12", value: 1.2 },
  { month: "2025-01", value: 2.7 },
  { month: "2025-02", value: 1.6 },
  { month: "2025-03", value: -2.3 },
];

const nonfuelImportPriceData = [
  { month: "2024-12", value: 0.0 },
  { month: "2025-01", value: 0.0 },
  { month: "2025-02", value: 0.1 },
  { month: "2025-03", value: 0.1 },
];

const agriExportPriceData = [
  { month: "2024-12", value: 0.7 },
  { month: "2025-01", value: -0.2 },
  { month: "2025-02", value: 0.6 },
  { month: "2025-03", value: 0.0 },
];

const nonAgriExportPriceData = [
  { month: "2024-12", value: 0.4 },
  { month: "2025-01", value: 1.5 },
  { month: "2025-02", value: 0.5 },
  { month: "2025-03", value: -0.1 },
];

// --- Chart Components ---
// NOTE: The following inline styles are required for dynamic chart rendering and cannot be replaced by static Tailwind classes.
const ImportExportPriceLineChart = () => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">Import & Export Price Indexes (MoM %)</p>
    <div className="flex-grow flex items-end space-x-2 overflow-x-auto p-2">
      {importExportPriceData.map((point) => (
        <div key={point.month} className="flex flex-col items-center w-10">
          <div className="w-3 h-3 rounded-full bg-blue-500 mb-1" style={{ marginBottom: `${(point.import + 2) * 10}px` }} title={`Import: ${point.import}%`}></div>
          <div className="w-3 h-3 rounded-full bg-green-500" style={{ marginBottom: `${(point.export - point.import) * 10}px` }} title={`Export: ${point.export}%`}></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.month.slice(5)}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400 gap-4">
      <span className="flex items-center"><span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>Import</span>
      <span className="flex items-center"><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>Export</span>
    </div>
  </div>
);

const FuelImportBarChart = () => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">Fuel Import Prices (MoM %)</p>
    <div className="flex-grow flex items-end space-x-2 overflow-x-auto p-2">
      {fuelImportPriceData.map((point) => (
        <div key={point.month} className="flex flex-col items-center w-10">
          <div className="w-4 bg-yellow-600 rounded-t-sm" style={{ height: `${(point.value + 8) * 6}px` }} title={`${point.value}%`}></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.month.slice(5)}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Fuel Imports</div>
  </div>
);

const NonfuelImportBarChart = () => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">Nonfuel Import Prices (MoM %)</p>
    <div className="flex-grow flex items-end space-x-2 overflow-x-auto p-2">
      {nonfuelImportPriceData.map((point) => (
        <div key={point.month} className="flex flex-col items-center w-10">
          <div className="w-4 bg-blue-400 rounded-t-sm" style={{ height: `${(point.value + 1) * 30}px` }} title={`${point.value}%`}></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.month.slice(5)}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Nonfuel Imports</div>
  </div>
);

const AgriExportBarChart = () => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">Agricultural Export Prices (MoM %)</p>
    <div className="flex-grow flex items-end space-x-2 overflow-x-auto p-2">
      {agriExportPriceData.map((point) => (
        <div key={point.month} className="flex flex-col items-center w-10">
          <div className="w-4 bg-green-600 rounded-t-sm" style={{ height: `${(point.value + 1) * 30}px` }} title={`${point.value}%`}></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.month.slice(5)}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Agri Exports</div>
  </div>
);

const NonAgriExportBarChart = () => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-64 flex flex-col bg-white dark:bg-neutral-900 shadow-sm">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-center">Non-Agri Export Prices (MoM %)</p>
    <div className="flex-grow flex items-end space-x-2 overflow-x-auto p-2">
      {nonAgriExportPriceData.map((point) => (
        <div key={point.month} className="flex flex-col items-center w-10">
          <div className="w-4 bg-purple-600 rounded-t-sm" style={{ height: `${(point.value + 1) * 30}px` }} title={`${point.value}%`}></div>
          <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{point.month.slice(5)}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">Non-Agri Exports</div>
  </div>
);

export const OverviewDashboard = () => (
  <section className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Overview Dashboard</h2>
    {/* KPI Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {/* Existing KPIs */}
      <MockKPICard title="GDP Growth (YoY)" value="2.5%" change="+0.1%" />
      <MockKPICard title="Inflation Rate (CPI)" value="3.1%" change="-0.2%" />
      <MockKPICard title="Unemployment Rate" value="3.8%" change="+0.0%" />
      <MockKPICard title="S&P 500 (YTD)" value="+5.2%" />
      {/* Import/Export KPIs */}
      {importExportKPIs.map((kpi) => (
        <MockKPICard key={kpi.title} title={kpi.title} value={kpi.value} change={kpi.change} />
      ))}
      <MockKPICard title="Consumer Confidence Index" value="98.5" change="-1.2" />
      <MockKPICard title="Producer Price Index (PPI)" value="123.4" change="+0.8%" />
      <MockKPICard title="Purchasing Managers’ Index (PMI)" value="52.1" change="+0.3" />
      <MockKPICard title="Housing Permits & Starts" value="1.45M" change="-2.1%" />
      <MockKPICard title="Initial Jobless Claims" value="210K" change="+5K" />
      <MockKPICard title="Gross Domestic Product (GDP)" value="$25.7T" change="+2.5%" />
      <MockKPICard title="Industrial Production Index" value="104.2" change="+0.4%" />
      <MockKPICard title="Retail Sales" value="$7.1T" change="+0.7%" />
      <MockKPICard title="Personal Income & Expenditures" value="+0.5%" change="+0.1%" />
      <MockKPICard title="Non-Farm Payrolls" value="+275K" change="+10K" />
      <MockKPICard title="Unemployment Rate" value="3.8%" change="+0.0%" />
      <MockKPICard title="Consumer Price Index (CPI)" value="3.1%" change="-0.2%" />
      <MockKPICard title="Balance of Trade" value="-$68B" change="-2.3%" />
    </div>
    {/* Chart Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ImportExportPriceLineChart />
      <FuelImportBarChart />
      <NonfuelImportBarChart />
      <AgriExportBarChart />
      <NonAgriExportBarChart />
      <MockPPICPIChart title="Producer Price Index (PPI) vs Consumer Price Index (CPI)" />
      <MockPayrollEmploymentChart title="Payroll Employment Trends" />
      <MockAverageHourlyEarningsChart title="Average Hourly Earnings" />
      <MockEmploymentCostIndexChart title="Employment Cost Index (ECI) Over Time" />
    </div>
  </section>
);