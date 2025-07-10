"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlusIcon, 
  XMarkIcon, 
  ShareIcon, 
  HeartIcon, 
  BookmarkIcon,
  ArrowUpIcon
} from "@heroicons/react/24/outline";

interface FloatingActionButtonProps {
  onShare?: () => void;
  onBookmark?: () => void;
  onScrollToTop?: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onShare,
  onBookmark,
  onScrollToTop
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const actions = [
    {
      icon: ShareIcon,
      label: "Share",
      onClick: onShare || (() => {
        if (navigator.share) {
          navigator.share({
            title: "What I'm Doing Now | Menno Drescher",
            text: "Check out what Menno is currently working on",
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          // Could add a toast notification here
        }
      }),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: BookmarkIcon,
      label: "Bookmark",
      onClick: onBookmark || (() => {
        // Add to bookmarks or favorites
        console.log("Bookmarked!");
      }),
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: ArrowUpIcon,
      label: "Scroll to Top",
      onClick: onScrollToTop || (() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }),
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ 
                  duration: 0.2, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.onClick}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg
                  ${action.color} transition-all duration-200
                  backdrop-blur-sm border border-white/20
                `}
                title={action.label}
              >
                <action.icon className="w-5 h-5" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 
          rounded-full shadow-lg flex items-center justify-center
          text-white transition-all duration-200
          backdrop-blur-sm border border-white/20
          hover:shadow-xl hover:from-blue-600 hover:to-purple-700
        "
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <PlusIcon className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};
