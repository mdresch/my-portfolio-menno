"use client";
import React, { useEffect, useState } from "react";
import { MockKPICard } from "../../components/dashboards/MockVisuals";
import { motion, AnimatePresence } from "../modern/ClientMotionWrapper";

export const MaturityDashboard = () => {
  const [maturityData, setMaturityData] = useState([
    { title: "Accessibility", value: "-", change: "-" },
    { title: "Performance", value: "-", change: "-" },
    { title: "Automated Testing", value: "-", change: "-" },
    { title: "CI/CD Automation", value: "-", change: "-" },
    { title: "Branding & Storytelling", value: "-", change: "-" },
    { title: "Azure Best Practices", value: "-", change: "-" },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMaturityData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/maturity");
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        setMaturityData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    }
    fetchMaturityData();
    // Optionally, poll every 5 minutes for updates
    const interval = setInterval(fetchMaturityData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Maturity Dashboard</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
        Self-assess your portfolio's evolution across key areas. Updated quarterly.
      </p>
      {loading ? (
        <div className="text-gray-500 dark:text-gray-400 text-sm">Loading...</div>
      ) : error ? (
        <div className="text-red-500 dark:text-red-400 text-sm">{error}</div>
      ) : (
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {maturityData.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <MockKPICard title={item.title} value={item.value} change={item.change} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Based on Azure Well-Architected Framework, web best practices, and personal growth milestones.
      </div>
      {/* Decorative SVG wave for visual distinction */}
      <svg viewBox="0 0 500 30" className="w-full mt-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 Q125 40 250 20 T500 20 V30 H0Z" className="fill-gray-100 dark:fill-gray-700" />
      </svg>
    </section>
  );
};
