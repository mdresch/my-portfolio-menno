"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator */}
      <div className="fixed top-6 right-6 z-40">
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200 dark:text-gray-600"
            />
            <motion.circle
              cx="16"
              cy="16"
              r="14"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress
              }}
              className="drop-shadow-sm"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div
            className="absolute text-xs font-bold text-gray-600 dark:text-gray-300"
            style={{
              opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
            }}
          >
            <motion.span
              style={{
                opacity: scrollYProgress
              }}
            >
              %
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
