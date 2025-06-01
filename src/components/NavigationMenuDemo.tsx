"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { StrictNavigationMenuLink } from "./StrictNavigationMenuLink";

import { cn } from "../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { MobileMenu } from "./MobileMenu";
import { ComponentItem } from "../types/navigation";

// Define interfaces for component props
interface IconProps {
  className?: string;
}

/** 
 * Props for the DarkModeToggle component.
 * Currently takes no props, but using type alias for future extensibility.
 */
type DarkModeToggleProps = Record<string, never>;

/**
 * Props for the NavigationMenuDemo component.
 * Currently takes no props, but using type alias for future extensibility.
 */
type NavigationMenuDemoProps = Record<string, never>;

const components: ComponentItem[] = [
  {
    title: "Supply Chain Risk",
    href: "/risk/supply-chain-top-25",
    description:
      "Gartner Supply Chain Top 25 for 2024",
  },
  {
    title: "Mergers & Acquisitions",
    href: "/risk/mergers-acquisitions-landscape",
    description:
      "Mergers and Acquisitions Landscape"
  },
  {
    title: "Supply Chain Disruption",
    href: "/risk/supply-chain-disruption",
    description:
      "Supply Chain Disruption Risk Management",
  },
  {
    title: "Trade Policy",
    href: "/risk/trade-policy",
    description:
      "Trade Policy and Tariffs",
  },
  {
    title: "Geopolitical Risk",
    href: "/risk/geopolitical-risk",
    description:
      "Geopolitical Risk and Supply Chain Resilience",
  },
  {
    title: "Supply Chain Resilience",
    href: "/risk/supply-chain-resilience",
    description:
      "Supply Chain Resilience and Risk Management",
  },
  {
    title: "Business Complexity",
    href: "/risk/global-business-complexity-index",
    description:
      "Global Business Complexity Index",
  },
  {
    title: "Risk Analysis",
    href: "/risk/gartner-regulatory-risk-survey",
    description: "Unsettled Regulatory and Legal Environment Tops Emerging Risks",
  },
  {
    title: "Global Tariffs",
    href: "/risk/trump-tariffs",
    description:
      "U.S. Global Trade and Tariff Policy: Implications and Economic Impact",
  },
  {
    title: "Deep Dive Trade",
    href: "/risk/deep-dive-trade",
    description:
      "Deep Dive on Trade: Wide-Ranging Issues Confront Global Businesses",
  },
  {
    title: "Cost Optimization - Volatile Economy",
    href: "/risk/cost-optimization",
    description:
      "Cost Optimization in a Volatile Economy",
  }
];

const componentseconomics: ComponentItem[] = [
  {
    title: "Balance of Trade",
    href: "/dashboards/balance-of-trade",
    description:
        "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Currencies",
    href: "/dashboards/currencies",
    description:
        "For sighted users to preview content available behind a link.",
  },
  {
    title: "Economic Indicators",
    href: "/dashboards/economic-indicators",
    description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Macroeconomics",
    href: "/dashboards/macro",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Major Economics",
    href: "/dashboards/major-economics",
    description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Stocks",
    href: "/dashboards/stocks",
    description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Policy Impact",
    href: "/dashboards/policy-impact",
    description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Policy Impact Dashboard",
    href: "/dashboards/policyimpact-dashboard",
    description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

export function DarkModeToggle({}: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Set default theme to light
  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("theme")) {
      setTheme("light");
    }
  }, [setTheme]);
  
  if (!mounted) return null;
  
  return (
    <div className="flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300">
      <button
        aria-label="Switch to Light Mode"
        className={`px-4 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center relative overflow-hidden ${
          theme === "light" 
            ? "bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-white shadow-lg transform scale-105 hover:shadow-xl hover:from-amber-500 hover:via-orange-600 hover:to-yellow-600" 
            : "bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-105"
        }`}
        onClick={() => setTheme("light")}
      >
        <span className="flex items-center relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Light
        </span>
      </button>
      <button
        aria-label="Switch to Dark Mode"
        className={`px-4 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center relative overflow-hidden ${
          theme === "dark" 
            ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-600 text-white shadow-lg transform scale-105 hover:shadow-xl hover:from-indigo-600 hover:via-purple-700 hover:to-blue-700" 
            : "bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-600/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105"
        }`}
        onClick={() => setTheme("dark")}
      >
        <span className="flex items-center relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Dark
        </span>
      </button>
    </div>
  );
}

// Hamburger menu icon component
function HamburgerIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      className={className}
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
function CloseIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (    
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      className={className}
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



export function NavigationMenuDemo({}: NavigationMenuDemoProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-end py-4 px-4">
        <button
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <HamburgerIcon className="w-5 h-5" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        components={components}
        componentseconomics={componentseconomics}
      />      {/* Desktop menu */}
      <div className="hidden md:block">
        <NavigationMenu className="flex justify-center mx-auto py-2">
          <NavigationMenuList className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl px-2 py-1 shadow-2xl border border-gray-200/30 dark:border-gray-700/30">            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-700/50 shadow-sm hover:shadow-md">About</NavigationMenuTrigger>
              <NavigationMenuContent>                
                <div className="grid gap-3 p-6 md:w-[450px] lg:w-[550px] lg:grid-cols-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 no-underline outline-none focus:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white"
                    >
                      <div className="flex flex-col">
                        <span className="mb-2 mt-4 text-lg font-semibold">
                          Portfolio Menno
                        </span>
                        <span className="text-sm leading-tight text-white/90">
                          Learn more about my background and experience
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  <div className="grid gap-2">
                    <StrictNavigationMenuLink asChild>
                      <Link href="/about" className={cn("block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50")}>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">About Me</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Professional Expertise and Technical Skills
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/now" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Now</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            What I&apos;m Doing Now - Maturity Dashboard
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/resume" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Resume</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Interactive Resume - My Work Experience
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 hover:from-green-100 hover:to-blue-100 dark:hover:from-green-800/30 dark:hover:to-blue-800/30 transition-all duration-300 rounded-xl border border-transparent hover:border-green-200 dark:hover:border-green-700/50 shadow-sm hover:shadow-md">News</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[450px] lg:w-[550px] lg:grid-cols-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 p-6 no-underline outline-none focus:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white"
                    >
                      <div className="flex flex-col">                        <span className="mb-2 mt-4 text-lg font-semibold">
                          Blog and Projects
                        </span>
                        <span className="text-sm leading-tight text-white/90">
                          Learn more about my posts and projects
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  <div className="grid gap-2">
                    <StrictNavigationMenuLink asChild>
                      <Link href="/projects" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-green-200/50 dark:hover:border-green-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Projects</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Professional Expertise and Technical Skills
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/blog" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-green-200/50 dark:hover:border-green-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Blog</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            What I&apos;m Doing Now - Maturity Dashboard
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/admin" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-green-200/50 dark:hover:border-green-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Admin</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Interactive Resume - My Work Experience
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 hover:from-red-100 hover:to-orange-100 dark:hover:from-red-800/30 dark:hover:to-orange-800/30 transition-all duration-300 rounded-xl border border-transparent hover:border-red-200 dark:hover:border-red-700/50 shadow-sm hover:shadow-md">Risk</NavigationMenuTrigger>
              <NavigationMenuContent>                
                <div className="grid w-[650px] gap-3 p-6 grid-cols-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">                  {/* Risk landing page link */}
                  <StrictNavigationMenuLink asChild>
                    <Link href="/risk" className="col-span-2 block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 mb-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-white">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-white">Risk Dashboards Home</span>
                        <span className="text-xs leading-tight text-white/90 mt-1">Overview & links to all risk dashboards</span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>
                  {/* Risk components */}                  {components.map((component) => (
                    <StrictNavigationMenuLink key={component.href} asChild>
                      <Link href={component.href} className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 dark:hover:from-red-900/20 dark:hover:to-orange-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-red-200/50 dark:hover:border-red-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">{component.title}</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            {component.description}
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-800/30 dark:hover:to-teal-800/30 transition-all duration-300 rounded-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-700/50 shadow-sm hover:shadow-md">Economics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[650px] gap-3 p-6 grid-cols-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">                  {/* Economics landing page link */}
                  <StrictNavigationMenuLink asChild>
                    <Link href="/dashboards" className="col-span-2 block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 mb-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-white">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-white">Economics Dashboards Home</span>
                        <span className="text-xs leading-tight text-white/90 mt-1">Overview & links to all economics dashboards</span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  {componentseconomics.map((component) => (
                    <StrictNavigationMenuLink key={component.href} asChild>
                      <Link href={component.href} className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-emerald-200/50 dark:hover:border-emerald-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">{component.title}</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            {component.description}
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <StrictNavigationMenuLink className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 hover:from-slate-100 hover:to-gray-100 dark:hover:from-slate-800/30 dark:hover:to-gray-800/30 transition-all duration-300 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50 shadow-sm hover:shadow-md px-4 py-2 font-medium" asChild>
                <Link href="https://iq4fun.gitbook.io/my-portfolio-menno/">Docs</Link>
              </StrictNavigationMenuLink>
            </NavigationMenuItem>            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 hover:from-violet-100 hover:to-indigo-100 dark:hover:from-violet-800/30 dark:hover:to-indigo-800/30 transition-all duration-300 rounded-xl border border-transparent hover:border-violet-200 dark:hover:border-violet-700/50 shadow-sm hover:shadow-md">AI Chat</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[450px] lg:w-[550px] lg:grid-cols-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/chat"
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 p-6 no-underline outline-none focus:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white"
                    >
                      <div className="flex flex-col">
                        <span className="mb-2 mt-4 text-lg font-semibold">
                          AI Chat Hub
                        </span>
                        <span className="text-sm leading-tight text-white/90">
                          Explore AI-powered chat and testing interfaces
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  <div className="grid gap-2">
                    <StrictNavigationMenuLink asChild>
                      <Link href="/chat" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-50 hover:to-indigo-50 dark:hover:from-violet-900/20 dark:hover:to-indigo-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-violet-200/50 dark:hover:border-violet-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Chat Interface</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Main AI chat interface and conversation tools
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/chat/AI-Logic" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-50 hover:to-indigo-50 dark:hover:from-violet-900/20 dark:hover:to-indigo-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-violet-200/50 dark:hover:border-violet-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">AI Logic</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            AI reasoning and logic processing interface
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/chat/genkit" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-50 hover:to-indigo-50 dark:hover:from-violet-900/20 dark:hover:to-indigo-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-violet-200/50 dark:hover:border-violet-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">GenKit</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Firebase GenKit AI development and testing
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/firebase-ai-test" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-50 hover:to-indigo-50 dark:hover:from-violet-900/20 dark:hover:to-indigo-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-violet-200/50 dark:hover:border-violet-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Firebase AI Test</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Firebase integration testing for AI services
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/chat/vertex-ai-chat" className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-50 hover:to-indigo-50 dark:hover:from-violet-900/20 dark:hover:to-indigo-900/20 hover:shadow-md transform hover:scale-[1.02] border border-transparent hover:border-violet-200/50 dark:hover:border-violet-700/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">Vertex AI Chat</span>
                          <span className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                            Chat with Vertex AI using portfolio data
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>        </NavigationMenu>        
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
