"use client";

import React from "react";
import { motion } from "./ClientMotionWrapper";
import { ModernTooltip } from "./ModernTooltip";
import { ClockIcon } from "@heroicons/react/24/outline";

export const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <ModernTooltip content="This page is updated regularly to reflect current activities and focus areas">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 cursor-help"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ClockIcon className="w-4 h-4" />
          Live Status
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </ModernTooltip>
      
      <motion.h1 
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        What I'm Doing Now
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        A real-time snapshot of my current projects, learning journey, and focus areas. 
        Updated regularly to reflect my evolving interests and professional growth.
      </motion.p>
    </div>
  );
};
