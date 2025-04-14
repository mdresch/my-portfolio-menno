'use client';

import React from 'react';
import Link from 'next/link';
// Adjust the import path here:
import { MockKPICard, MockChartPlaceholder, MockTablePlaceholder, MockMapPlaceholder } from '@/components/dashboards/MockVisuals'; // Assuming the file is in src/components/dashboards/

// Simple placeholder for any chart type (Can keep as fallback or remove)
export const MockChartPlaceholder = ({ title, type }: { title: string; type: string }) => (
  <div className="border border-dashed border-gray-300 rounded-lg p-4 h-64 flex flex-col bg-gray-50">
    <p className="text-sm font-medium text-gray-700 mb-2 text-center">{title}</p>
    <div className="flex-grow flex justify-center items-center text-xs text-gray-400">({type} Placeholder)</div>
  </div>
);

// --- NEW MOCK CHART COMPONENTS ---

// Mock Line Chart
export const MockLineChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 rounded-lg p-4 h-64 flex flex-col bg-white shadow-sm">
    <p className="text-sm font-medium text-gray-700 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-1 overflow-hidden p-2">
      {/* Simulate line segments with varying heights */}
      <div className="w-1/6 h-1/3 bg-blue-200 rounded-t-sm"></div>
      <div className="w-1/6 h-1/2 bg-blue-300 rounded-t-sm"></div>
      <div className="w-1/6 h-2/5 bg-blue-400 rounded-t-sm"></div>
      <div className="w-1/6 h-3/4 bg-blue-500 rounded-t-sm"></div>
      <div className="w-1/6 h-2/3 bg-blue-400 rounded-t-sm"></div>
      <div className="w-1/6 h-1/2 bg-blue-300 rounded-t-sm"></div>
    </div>
  </div>
);

// Mock Dual Axis Line Chart
export const MockDualAxisLineChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 rounded-lg p-4 h-64 flex flex-col bg-white shadow-sm relative">
    <p className="text-sm font-medium text-gray-700 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end space-x-1 overflow-hidden p-2">
      {/* Line 1 (Blue) */}
      <div className="w-1/6 h-1/3 bg-blue-300 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/5 bg-blue-400 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/2 bg-blue-500 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-3/5 bg-blue-600 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/2 bg-blue-500 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/5 bg-blue-400 rounded-t-sm opacity-70"></div>
    </div>
    {/* Line 2 (Green) - Positioned absolutely to overlay */}
    <div className="absolute bottom-0 left-0 right-0 flex items-end space-x-1 overflow-hidden p-2 pb-[calc(0.5rem+1px)] h-full">
      {/* Adjust padding-bottom to align */}
      <div className="w-1/6 h-1/2 bg-green-300 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-3/5 bg-green-400 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/3 bg-green-500 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/2 bg-green-400 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-2/5 bg-green-300 rounded-t-sm opacity-70"></div>
      <div className="w-1/6 h-1/3 bg-green-200 rounded-t-sm opacity-70"></div>
    </div>
  </div>
);

// Mock Bar Chart
export const MockBarChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 rounded-lg p-4 h-64 flex flex-col bg-white shadow-sm">
    <p className="text-sm font-medium text-gray-700 mb-2 text-center">{title}</p>
    <div className="flex-grow flex items-end justify-around space-x-2 overflow-hidden p-2">
      {/* Simulate bars */}
      <div className="w-1/5 h-1/3 bg-teal-300 rounded-t-sm"></div>
      <div className="w-1/5 h-3/4 bg-teal-500 rounded-t-sm"></div>
      <div className="w-1/5 h-1/2 bg-teal-400 rounded-t-sm"></div>
      <div className="w-1/5 h-2/3 bg-teal-500 rounded-t-sm"></div>
      <div className="w-1/5 h-2/5 bg-teal-300 rounded-t-sm"></div>
    </div>
  </div>
);

// Mock Area Chart
export const MockAreaChart = ({ title }: { title: string }) => (
    <div className="border border-gray-200 rounded-lg p-4 h-64 flex flex-col bg-white shadow-sm">
      <p className="text-sm font-medium text-gray-700 mb-2 text-center">{title}</p>
      <div className="flex-grow flex items-end space-x-0 overflow-hidden relative">
          {/* Simulate filled area segments */}
          <div className="w-1/6 h-1/3 bg-purple-200"></div>
          <div className="w-1/6 h-1/2 bg-purple-200"></div>
          <div className="w-1/6 h-2/5 bg-purple-200"></div>
          <div className="w-1/6 h-3/4 bg-purple-200"></div>
          <div className="w-1/6 h-2/3 bg-purple-200"></div>
          <div className="w-1/6 h-1/2 bg-purple-200"></div>
          {/* Add a border top to mimic the line */}
          <div className="absolute top-0 left-0 right-0 h-full border-t-2 border-purple-500 pointer-events-none"></div>
      </div>
    </div>
  );

// Mock Treemap
export const MockTreemap = ({ title }: { title: string }) => (
  <div className="border border-gray-200 rounded-lg p-4 h-64 flex flex-col bg-white shadow-sm">
    <p className="text-sm font-medium text-gray-700 mb-2 text-center">{title}</p>
    <div className="flex-grow grid grid-cols-3 grid-rows-3 gap-1 p-1">
      {/* Simulate treemap blocks */}
      <div className="col-span-2 row-span-2 bg-indigo-500 rounded flex items-center justify-center text-white text-xs opacity-90">Area 1</div>
      <div className="bg-indigo-300 rounded flex items-center justify-center text-indigo-800 text-xs opacity-90">Area 2</div>
      <div className="bg-indigo-300 rounded flex items-center justify-center text-indigo-800 text-xs opacity-90">Area 3</div>
      <div className="bg-indigo-200 rounded flex items-center justify-center text-indigo-700 text-xs opacity-90">Area 4</div>
      <div className="bg-indigo-200 rounded flex items-center justify-center text-indigo-700 text-xs opacity-90">Area 5</div>
      <div className="bg-indigo-200 rounded flex items-center justify-center text-indigo-700 text-xs opacity-90">Area 6</div>
    </div>
  </div>
);

// Mock Pie Chart (Simple Stacked Block Representation)
export const MockPieChart = ({ title }: { title: string }) => (
  <div className="border border-gray-200 rounded-lg p-4 h-64 flex flex-col bg-white shadow-sm">
    <p className="text-sm font-medium text-gray-700 mb-2 text-center">{title}</p>
    <div className="flex-grow flex flex-col items-center justify-center p-2">
      <div className="w-3/4 h-1/4 bg-cyan-500 flex items-center justify-center text-white text-xs font-semibold">Sector A (40%)</div>
      <div className="w-3/4 h-1/5 bg-cyan-400 flex items-center justify-center text-white text-xs font-semibold">Sector B (25%)</div>
      <div className="w-3/4 h-1/6 bg-cyan-300 flex items-center justify-center text-cyan-800 text-xs font-semibold">Sector C (20%)</div>
      <div className="w-3/4 h-[15%] bg-cyan-200 flex items-center justify-center text-cyan-700 text-xs font-semibold">Sector D (15%)</div>
    </div>
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

