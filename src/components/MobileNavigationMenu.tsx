"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { DarkModeToggle } from "./NavigationMenuDemo"; // Import DarkModeToggle from NavigationMenuDemo

// Type definitions
interface MobileNavItemProps {
  title: string;
  href: string;
  description?: string;
}

interface MobileNavSectionProps {
  title: string;
  children: React.ReactNode;
}

// Risk category items
const riskItems = [
  {
    title: "Risk",
    href: "/risk",
    description: "Risk analysis and management insights",
  },
  {
    title: "Supply Chain Risk",
    href: "/risk/supply-chain-top-25",
    description: "Gartner Supply Chain Top 25 for 2024",
  },
  {
    title: "Business Complexity",
    href: "/risk/global-business-complexity-index",
    description: "Global Business Complexity Index",
  },
  {
    title: "Risk Analysis",
    href: "/risk/gartner-regulatory-risk-survey",
    description: "Unsettled Regulatory and Legal Environment Tops Emerging Risks",
  },
  {
    title: "Global Tariffs",
    href: "/risk/trump-tariffs",
    description: "U.S. Global Trade and Tariff Policy: Implications and Economic Impact",
  },
  {
    title: "Deep Dive Trade",
    href: "/risk/deep-dive-trade",
    description: "Deep Dive on Trade: Wide-Ranging Issues Confront Global Businesses",
  },
];

// Economics category items
const economicsItems = [
  {
    title: "Balance of Trade",
    href: "/dashboards/balance-of-trade",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Currencies",
    href: "/dashboards/currencies",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Economic Indicators",
    href: "/dashboards/economic-indicators",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Macroeconomics",
    href: "/dashboards/macro",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Major Economics",
    href: "/dashboards/major-economics",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Stocks",
    href: "/dashboards/stocks",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Policy Impact",
    href: "/dashboards/policy-impact",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Policy Impact Dashboard",
    href: "/dashboards/policyimpact-dashboard",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

// Hamburger menu icon component
function HamburgerIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      className="w-6 h-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M4 6h16M4 12h16M4 18h16" 
      />
    </svg>
  );
}

// Close icon for mobile menu
function CloseIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      className="w-6 h-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>
  );
}

// Mobile Navigation Item
function MobileNavItem({ 
  title, 
  href, 
  description 
}: MobileNavItemProps) {
  return (
    <li>
      <Link 
        href={href}
        className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="font-medium">{title}</div>
        {description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
            {description}
          </p>
        )}
      </Link>
    </li>
  );
}

// Mobile Navigation Section with collapsible items
function MobileNavSection({ 
  title, 
  children 
}: MobileNavSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li className="border-t dark:border-gray-700 pt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="pl-4 mt-2 space-y-2">
          {children}
        </ul>
      )}
    </li>
  );
}

export function MobileNavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // When clicking outside of the mobile menu, close it
  React.useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="md:hidden">
      {/* Mobile hamburger button */}
      <div className="flex justify-end py-4">
        <button
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div 
          data-mobile-menu
          className="absolute top-full right-0 z-50 w-full bg-white dark:bg-gray-900 shadow-lg rounded-b-lg border-t dark:border-gray-700 overflow-hidden"
        >
          <div className="p-4">
            <ul className="space-y-4">
              <MobileNavItem title="About" href="/about" />
              <MobileNavItem title="Now" href="/now" />
              <MobileNavItem title="Resume" href="/resume" />
              <MobileNavItem title="Projects" href="/projects" />
              <MobileNavItem title="Blog" href="/blog" />
              
              <MobileNavSection title="Risk">
                {riskItems.map((item) => (
                  <MobileNavItem 
                    key={item.href} 
                    title={item.title} 
                    href={item.href} 
                    description={item.description}
                  />
                ))}
              </MobileNavSection>

              <MobileNavSection title="Economics">
                {economicsItems.map((item) => (
                  <MobileNavItem 
                    key={item.href} 
                    title={item.title} 
                    href={item.href} 
                    description={item.description}
                  />
                ))}
              </MobileNavSection>

              <MobileNavItem title="Docs" href="https://iq4fun.gitbook.io/my-portfolio-menno/" />
              
              <li className="pt-2">
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
