"use client";

import React from "react";
import { motion } from "framer-motion";

interface ModernLoaderProps {
  variant?: "dots" | "pulse" | "wave" | "spinner";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "gradient";
}

export const ModernLoader: React.FC<ModernLoaderProps> = ({
  variant = "dots",
  size = "md",
  color = "gradient"
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  const colorClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-500"
  };

  const containerSizes = {
    sm: "w-16 h-8",
    md: "w-24 h-12",
    lg: "w-32 h-16"
  };

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return (
          <div className={`flex items-center justify-center space-x-2 ${containerSizes[size]}`}>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case "pulse":
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case "wave":
        return (
          <div className={`flex items-end justify-center space-x-1 ${containerSizes[size]}`}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1 ${colorClasses[color]} rounded-full`}
                animate={{
                  height: ["20%", "100%", "20%"]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case "spinner":
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-gray-200 rounded-full`}
            style={{
              borderTopColor: color === "gradient" ? "#3b82f6" : 
                            color === "blue" ? "#3b82f6" : "#8b5cf6"
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {renderLoader()}
    </div>
  );
};

// Full page loader component
export const PageLoader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <ModernLoader variant="dots" size="lg" color="gradient" />
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-300 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading amazing content...
        </motion.p>
      </div>
    </motion.div>
  );
};
