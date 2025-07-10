"use client";

import React from "react";
import { motion } from "./ClientMotionWrapper";

interface SectionDividerProps {
  variant?: "wave" | "dots" | "gradient" | "zigzag";
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = "wave", 
  className = "" 
}) => {
  const renderDivider = () => {
    switch (variant) {
      case "wave":
        return (
          <motion.svg
            viewBox="0 0 1200 120"
            className={`w-full h-12 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </motion.svg>
        );

      case "dots":
        return (
          <div className={`flex justify-center items-center py-8 ${className}`}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        );

      case "gradient":
        return (
          <motion.div
            className={`h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8 ${className}`}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        );

      case "zigzag":
        return (
          <motion.svg
            viewBox="0 0 1200 40"
            className={`w-full h-8 ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.path
              d="M0,20 L60,5 L120,20 L180,5 L240,20 L300,5 L360,20 L420,5 L480,20 L540,5 L600,20 L660,5 L720,20 L780,5 L840,20 L900,5 L960,20 L1020,5 L1080,20 L1140,5 L1200,20"
              stroke="url(#zigzagGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </motion.svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center overflow-hidden">
      {renderDivider()}
    </div>
  );
};
