"use client";

import React from "react";
import { motion } from "./ClientMotionWrapper";
import { ModernTooltip } from "./ModernTooltip";
import { ClockIcon } from "@heroicons/react/24/outline";

export const HeroSection: React.FC = () => {
  return (
    <header className="text-center mb-12 sm:mb-14">
      <ModernTooltip content="I refresh this page when my priorities shift—no automated ticker, just an honest /now page.">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100/90 dark:bg-blue-950/40 rounded-full text-blue-800 dark:text-blue-200 text-xs sm:text-sm font-medium mb-5 cursor-help ring-1 ring-blue-200/80 dark:ring-blue-800/50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ClockIcon className="w-4 h-4 shrink-0" aria-hidden />
          <span>Live status</span>
          <motion.span
            className="w-2 h-2 bg-emerald-500 rounded-full shrink-0"
            animate={{ scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            aria-hidden
          />
        </motion.div>
      </ModernTooltip>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15 }}
      >
        {"What I'm doing now"}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.28 }}
      >
        In the spirit of{" "}
        <a
          href="https://nownownow.com/about"
          className="text-blue-600 dark:text-blue-400 underline-offset-2 hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          nownownow.com
        </a>
        : a short, human snapshot of projects, learning, and focus—not a résumé, not social
        performance. Updated whenever it stops feeling true.
      </motion.p>
    </header>
  );
};
