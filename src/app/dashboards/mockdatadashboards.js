import React from 'react';

// Simple placeholder for any chart type
export const MockChartPlaceholder = ({ title, type }: { title: string; type: string }) => (
  <div className="border border-dashed border-gray-300 rounded-lg p-4 h-64 flex flex-col justify-center items-center bg-gray-50">
    <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>
    <p className="text-xs text-gray-500">({type} Placeholder)</p>
    {/* You could add a simple SVG icon here */}
  </div>
);

// Placeholder for KPI cards
export const MockKPICard = ({ title, value, change }: { title: string; value: string; change?: string }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
    <p className="text-sm text-gray-500 mb-1">{title}</p>
    <p className="text-2xl font-semibold text-gray-800">{value}</p>
    {change && <p className={`text-xs ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{change}</p>}
  </div>
);

// Placeholder for a simple table/matrix
export const MockTablePlaceholder = ({ title }: { title: string }) => (
  <div className="border border-dashed border-gray-300 rounded-lg p-4 h-64 flex flex-col justify-center items-center bg-gray-50">
    <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>
    <p className="text-xs text-gray-500">(Table/Matrix Placeholder)</p>
  </div>
);

// Placeholder for a map
export const MockMapPlaceholder = ({ title }: { title: string }) => (
    <div className="border border-dashed border-gray-300 rounded-lg p-4 h-64 flex flex-col justify-center items-center bg-gray-50">
      <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>
      <p className="text-xs text-gray-500">(Map Placeholder)</p>
    </div>
  );