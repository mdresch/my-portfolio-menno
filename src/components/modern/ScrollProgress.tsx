"use client";

import React, { useId, useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import { motion, useScroll, useSpring } from "./ClientMotionWrapper";

/** Site-wide scroll depth: thin top bar + compact % ring (see root layout). */
export const ScrollProgress: React.FC = () => {
  const gradId = useId().replace(/:/g, "");
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPercent(Math.round(v * 100));
  });

  return (
    <div className="pointer-events-none print:hidden">
      <motion.div
        className="pointer-events-none fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
        style={{ scaleX }}
        aria-hidden
      />

      <div className="fixed top-14 right-4 sm:top-16 sm:right-6 z-[90]">
        <motion.div
          className="pointer-events-auto relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-white/90 shadow-lg backdrop-blur-sm dark:border-gray-600 dark:bg-gray-900/90"
          whileHover={{ scale: 1.06 }}
          title={`Scroll depth: ${percent}%`}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          aria-label="Page scroll progress"
        >
          <svg className="h-8 w-8 -rotate-90" viewBox="0 0 32 32" aria-hidden>
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-200 dark:text-gray-600"
            />
            <motion.circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
              className="drop-shadow-sm"
            />
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute text-[10px] font-bold tabular-nums text-gray-700 dark:text-gray-200">
            {percent}
            <span className="text-[8px] font-semibold opacity-80">%</span>
          </span>
        </motion.div>
      </div>
    </div>
  );
};
