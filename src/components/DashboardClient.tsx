"use client";
import React from "react";
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });
const DonutChart = dynamic(() => import("./DonutChart"), { ssr: false });

const importDutyData = [
  { country: "United States", code: "USA", value: 320000 },
  { country: "China", code: "CHN", value: 280000 },
  { country: "Germany", code: "DEU", value: 150000 },
  { country: "Japan", code: "JPN", value: 120000 },
  { country: "United Kingdom", code: "GBR", value: 90000 },
  { country: "India", code: "IND", value: 85000 },
  { country: "Brazil", code: "BRA", value: 70000 },
  { country: "Netherlands", code: "NLD", value: 65000 },
  { country: "France", code: "FRA", value: 60000 },
  { country: "Canada", code: "CAN", value: 55000 },
];

export default function DashboardClient() {
  return (
    <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Global Trade Dashboard</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1 min-w-[300px]">
          <WorldMap data={importDutyData} />
        </div>
        <div className="flex-1 min-w-[300px] flex items-center justify-center">
          <DonutChart data={importDutyData} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">Country</th>
              <th className="px-4 py-2 text-left text-gray-700">Country Code</th>
              <th className="px-4 py-2 text-right text-gray-700">Import Duty (USD)</th>
            </tr>
          </thead>
          <tbody>
            {importDutyData.map((row) => (
              <tr key={row.code} className="border-t">
                <td className="px-4 py-2">{row.country}</td>
                <td className="px-4 py-2">{row.code}</td>
                <td className="px-4 py-2 text-right">{row.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
