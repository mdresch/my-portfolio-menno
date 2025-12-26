"use client";

import React from "react";
import { motion } from "./ClientMotionWrapper";

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient" | "elevated";
  hoverEffect?: "lift" | "glow" | "scale" | "tilt";
  borderColor?: string;
  onClick?: () => void;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = "",
  variant = "default",
  hoverEffect = "lift",
  borderColor = "border-gray-200/50 dark:border-gray-700/50",
  onClick
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "glass":
        return "bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30";
      case "gradient":
        return "bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800 dark:to-gray-900 border border-blue-200/50 dark:border-gray-700/50";
      case "elevated":
        return "bg-white dark:bg-gray-800 shadow-2xl border border-gray-100 dark:border-gray-700";
      default:
        return `bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border ${borderColor}`;
    }
  };

  const getHoverVariants = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            transition: { duration: 0.3, ease: "easeOut" }
          }
        };
      case "glow":
        return {
          hover: {
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }
        };
      case "scale":
        return {
          hover: {
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" }
          }
        };
      case "tilt":
        return {
          hover: {
            rotateY: 5,
            rotateX: 5,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }
        };
      default:
        return {
          hover: {
            y: -5,
            transition: { duration: 0.2, ease: "easeOut" }
          }
        };
    }
  };

  return (
    <motion.div
      className={`
        rounded-2xl p-6 shadow-xl cursor-pointer
        ${getVariantClasses()}
        ${className}
      `}
      variants={getHoverVariants()}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {children}
    </motion.div>
  );
};

// Specialized card variants
export const GlassCard: React.FC<Omit<ModernCardProps, 'variant'>> = (props) => (
  <ModernCard {...props} variant="glass" />
);

export const GradientCard: React.FC<Omit<ModernCardProps, 'variant'>> = (props) => (
  <ModernCard {...props} variant="gradient" />
);

export const ElevatedCard: React.FC<Omit<ModernCardProps, 'variant'>> = (props) => (
  <ModernCard {...props} variant="elevated" />
);
