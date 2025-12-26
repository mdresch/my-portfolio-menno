"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";

// Icons
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Navigation data
const navigationItems = [
  {
    label: "Home",
    href: "/",
    icon: "🏠"
  },
  {
    label: "About",
    href: "/about",
    icon: "👤"
  },
  {
    label: "Resume",
    href: "/resume",
    icon: "📄"
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "🚀"
  },
  {
    label: "Blog",
    href: "/blog",
    icon: "📝"
  },
  {
    label: "Job Seeker Hub",
    href: "/job-seeker",
    icon: "💼"
  }
];

const dashboardItems = [
  {
    label: "Policy Impact",
    href: "/dashboards/policy-impact",
    description: "Policy analysis and economic impact"
  },
  {
    label: "Currencies",
    href: "/dashboards/currencies",
    description: "Currency exchange rates and analysis"
  },
  {
    label: "Economic Indicators",
    href: "/dashboards/economic-indicators",
    description: "Key economic metrics and trends"
  },
  {
    label: "Balance of Trade",
    href: "/dashboards/balance-of-trade",
    description: "Trade balance and export/import data"
  }
];

const riskItems = [
  {
    label: "Supply Chain Risk",
    href: "/risk/supply-chain-disruption",
    description: "Supply chain disruption analysis"
  },
  {
    label: "Geopolitical Risk",
    href: "/risk/geopolitical-risk",
    description: "Global political risk assessment"
  },
  {
    label: "Trade Policy",
    href: "/risk/trade-policy",
    description: "Trade policy and tariff analysis"
  },
  {
    label: "Business Complexity",
    href: "/risk/global-business-complexity-index",
    description: "Global business complexity metrics"
  }
];

const jobSeekerItems = [
  {
    label: "Profile Builder",
    href: "/job-seeker?tab=profile",
    description: "Create and manage your professional profile"
  },
  {
    label: "Networking Hub",
    href: "/job-seeker?tab=networking",
    description: "Connect with industry professionals"
  },
  {
    label: "Industry Trends",
    href: "/job-seeker?tab=trends",
    description: "Stay updated with market insights"
  },
  {
    label: "Completion Guide",
    href: "/job-seeker?tab=guide",
    description: "Optimize your professional presence"
  }
];

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <SunIcon className={cn(
          "absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-300",
          theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        )} />
        <MoonIcon className={cn(
          "absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300",
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
        )} />
      </div>
    </button>
  );
}

// Dropdown Component
function Dropdown({ label, items, icon }: { label: string; items: any[]; icon?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {label}
        <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
            <div className="p-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Mobile Menu Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <CloseIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Main Navigation
            </h3>
            <div className="space-y-1">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200",
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                    onClick={onClose}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Dashboards */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Dashboards
            </h3>
            <div className="space-y-1">
              {dashboardItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-colors duration-200",
                      isActive
                        ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                    onClick={onClose}
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Risk Analysis */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Risk Analysis
            </h3>
            <div className="space-y-1">
              {riskItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-colors duration-200",
                      isActive
                        ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                    onClick={onClose}
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Job Seeker Tools */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Job Seeker Tools
            </h3>
            <div className="space-y-1">
              {jobSeekerItems.map((item, index) => {
                // Check if current path matches the base path for job seeker items
                const isActive = pathname === '/job-seeker' && item.href.startsWith('/job-seeker');
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-colors duration-200",
                      isActive
                        ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                    onClick={onClose}
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-1">
              <Link
                href="/now"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={onClose}
              >
                <span className="text-lg">⏰</span>
                Now
              </Link>
              <Link
                href="/friends-contact"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={onClose}
              >
                <span className="text-lg">📧</span>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Main Navigation Component
export default function ModernNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-200">
                M
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  Menno Drescher
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Portfolio & Analytics
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Main Navigation Items */}
              <div className="flex items-center gap-1">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                        isActive
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                      )}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Dropdown Menus */}
              <div className="flex items-center gap-2">
                <Dropdown label="Dashboards" items={dashboardItems} icon="📊" />
                <Dropdown label="Risk Analysis" items={riskItems} icon="⚠️" />
                <Dropdown label="Job Seeker" items={jobSeekerItems} icon="💼" />
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
}
