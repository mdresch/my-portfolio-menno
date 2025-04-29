import React from "react";
import { MockKPICard } from "@/components/dashboards/MockVisuals";

const maturityData = [
  { title: "Accessibility", value: "80%", change: "+10% YoY" },
  { title: "Performance", value: "A (Lighthouse)", change: "+5 pts" },
  { title: "Automated Testing", value: "60% Coverage", change: "+20%" },
  { title: "CI/CD Automation", value: "Enabled", change: "Stable" },
  { title: "Branding & Storytelling", value: "Evolving", change: "+1 new case" },
  { title: "Azure Best Practices", value: "Adopted", change: "+2 WAF pillars" },
];

export const MaturityDashboard = () => (
  <section className="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">Maturity Dashboard</h2>
    <p className="text-gray-600 mb-6 text-sm">
      Self-assess your portfolio’s evolution across key areas. Updated quarterly.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      {maturityData.map((item) => (
        <MockKPICard key={item.title} title={item.title} value={item.value} change={item.change} />
      ))}
    </div>
    <div className="mt-4 text-xs text-gray-500">
      Based on Azure Well-Architected Framework, web best practices, and personal growth milestones.
    </div>
  </section>
);
