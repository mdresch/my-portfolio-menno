import React from "react";
import { MacroDashboard } from "../../../components/dashboards/MacroDashboard";

export default function MacroPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Macroeconomic Dashboard</h1>
      <MacroDashboard />
    </div>
  );
}
