"use client";
import React, { useEffect, useState } from "react";
import { MockKPICard } from "../../components/dashboards/MockVisuals";
import { motion, AnimatePresence } from "../modern/ClientMotionWrapper";
import { ChartBarIcon } from "@heroicons/react/24/outline";

function parseScoreOutOf5(value: string): number | undefined {
  const m = value.trim().match(/^([\d.]+)\s*\//);
  if (!m) return undefined;
  const n = parseFloat(m[1]);
  return Number.isFinite(n) ? n : undefined;
}

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
    <section className="rounded-2xl border border-gray-200/80 dark:border-gray-600/60 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-gray-900/5 dark:shadow-black/40 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-violet-100 dark:bg-violet-950/50 p-2.5 ring-1 ring-violet-200/60 dark:ring-violet-800/40">
            <ChartBarIcon className="h-6 w-6 text-violet-700 dark:text-violet-300" aria-hidden />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
              Maturity dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 max-w-xl leading-relaxed">
              A concise snapshot of how this portfolio scores across pillars I care about—aligned with
              Azure Well-Architected and solid web fundamentals. Numbers are a self-review, not an
              audit; I refresh them roughly each quarter.
            </p>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-gray-500 dark:text-gray-400 text-sm py-8 text-center rounded-xl bg-gray-50 dark:bg-gray-800/50">
          Loading scores…
        </div>
      ) : error ? (
        <div className="text-red-600 dark:text-red-400 text-sm py-4 px-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/50">
          {error}
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {maturityData.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.35 }}
              >
                <MockKPICard
                  title={item.title}
                  value={item.value}
                  change={item.change}
                  changeTone="muted"
                  scoreOutOf5={parseScoreOutOf5(item.value)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
      <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200/80 dark:border-gray-700/80 pt-5">
        Method notes: scores mix qualitative judgment with Lighthouse-style signals where relevant.
        Sub-scores in parentheses (e.g. depth, SEO) call out the main drag on that pillar.
      </p>
    </section>
  );
};
