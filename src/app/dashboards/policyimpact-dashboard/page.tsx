import React from "react";
import { MockChartPlaceholder, MockTablePlaceholder } from "../../../components/dashboards/MockVisuals";

export default function PolicyImpactDashboard() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-lg p-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Policy Impact Analysis</h2>
      {/* Chart Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <MockChartPlaceholder title="GDP Growth Before/After Tax Reform (Comparison)" type="Bar Chart" />
        <MockChartPlaceholder title="Inflation Rate with Monetary Policy Events" type="Annotated Line Chart" />
        <MockChartPlaceholder title="Govt Spending Change vs. GDP Growth Change" type="Scatter Plot" />
        <MockTablePlaceholder title="Key Indicators by Policy Regime" />
      </div>
      {/* Add text box for caveats */}
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-800 text-sm dark:bg-yellow-900/40 dark:border-yellow-700 dark:text-yellow-100">
        <strong>Note:</strong> Correlations shown do not necessarily imply causation. Policy impacts are complex and influenced by numerous factors.
      </div>
    </section>
  );
}