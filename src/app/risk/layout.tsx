import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management Dashboards | Menno Drescher",
  description: "Comprehensive risk analysis dashboards covering supply chain, geopolitical, financial, and trade risks. Interactive visualizations and insights for risk management professionals.",
  keywords: ["risk management", "supply chain risk", "geopolitical risk", "financial risk", "trade risk", "risk analysis", "risk dashboards"],
  openGraph: {
    title: "Risk Management Dashboards | Menno Drescher",
    description: "Comprehensive risk analysis dashboards covering supply chain, geopolitical, financial, and trade risks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Management Dashboards | Menno Drescher",
    description: "Comprehensive risk analysis dashboards covering supply chain, geopolitical, financial, and trade risks.",
  },
};

export default function RiskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
