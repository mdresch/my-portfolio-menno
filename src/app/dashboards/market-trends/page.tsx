import React from "react";
import { MarketTrendsDashboard } from "../../../components/dashboards/MarketTrendsDashboard";

export default function MarketTrendsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Market Trends Dashboard</h1>
      <MarketTrendsDashboard />
    </div>
  );
}
