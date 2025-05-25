import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
  "#2563eb", "#f59e42", "#10b981", "#6366f1", "#f43f5e", "#06b6d4", "#eab308", "#a21caf", "#64748b", "#84cc16"
];

export default function DonutChart({ data }) {
  return (
    <div style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="country"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            fill="#2563eb"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 text-center mt-2">Imports Duty by Country (USD)</div>
    </div>
  );
}
