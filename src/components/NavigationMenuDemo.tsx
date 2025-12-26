"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
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

// Professional Heroicons imports
import {
  UserCircleIcon,
  DocumentTextIcon,
  ClockIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  SparklesIcon,
  NewspaperIcon,
  FolderIcon,
  BookOpenIcon,
  ShieldExclamationIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  FireIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  // Handle scroll effect for enhanced navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className={cn(
      "w-full sticky top-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
        : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-700/30 shadow-md"
    )}>
      {/* Mobile menu button and chat button */}
      <div className="md:hidden flex justify-between items-center py-4 px-4">
        {/* Chat button */}
        <Link
          href="/chat"
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-900 via-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-sm"
          aria-label="Open Chat"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
          <span>Chat</span>
        </Link>
        
        {/* Menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-200"
          aria-label="Open main menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        components={components}
        componentseconomics={componentseconomics}
      />
      
      {/* Desktop menu */}
      <div className="hidden md:block relative">
        <NavigationMenu className="flex justify-center mx-auto py-3 px-4">
          <NavigationMenuList className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl px-3 py-2 shadow-xl border border-gray-200/40 dark:border-gray-700/40">
            <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "group relative flex items-center gap-2 px-5 py-2.5 h-11 rounded-xl font-medium text-sm transition-all duration-300",
          "bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-950/40 dark:to-sky-950/40",
          "hover:from-blue-100 hover:to-sky-100 dark:hover:from-blue-900/50 dark:hover:to-sky-900/50",
          "border border-blue-200/60 dark:border-blue-800/40",
          "hover:border-blue-300 dark:hover:border-blue-700/60",
          "hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30",
          "text-blue-700 dark:text-blue-300",
          pathname === "/" || pathname === "/about" || pathname === "/now" || pathname === "/resume" || pathname === "/friends-contact" || pathname === "/quick-wins-demo"
            ? "ring-2 ring-blue-500/50 dark:ring-blue-400/50 shadow-md bg-blue-100 dark:bg-blue-900/30"
            : ""
        )}>
          <UserCircleIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span>About</span>
        </NavigationMenuTrigger>
              <NavigationMenuContent>                
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30">                  
                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-blue-900 via-blue-700 to-sky-600 p-6 no-underline outline-none focus:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white group"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <UserCircleIcon className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform" />
                          <span className="text-lg font-bold">Portfolio</span>
                        </div>
                        <span className="text-sm leading-tight text-white/90">
                          Learn more about my background, experience, and professional journey
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  
                  <div className="grid gap-2">
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/about" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 dark:hover:from-blue-900/30 dark:hover:to-sky-900/30",
                          "hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50",
                          pathname === "/about" ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                            <UserCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">About Me</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Professional expertise and technical skills
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/now" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 dark:hover:from-sky-900/30 dark:hover:to-cyan-900/30",
                          "hover:shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-sky-200/50 dark:hover:border-sky-700/50",
                          pathname === "/now" ? "bg-sky-50 dark:bg-sky-900/20 border-sky-300 dark:border-sky-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40 transition-colors">
                            <ClockIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Now</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Current projects and maturity dashboard
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/resume" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/30 dark:hover:to-blue-900/30",
                          "hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-cyan-200/50 dark:hover:border-cyan-700/50",
                          pathname === "/resume" ? "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-300 dark:border-cyan-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/40 transition-colors">
                            <DocumentTextIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Resume</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Interactive resume with work experience
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/friends-contact" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:hover:from-indigo-900/30 dark:hover:to-blue-900/30",
                          "hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-indigo-200/50 dark:hover:border-indigo-700/50",
                          pathname === "/friends-contact" ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors">
                            <RocketLaunchIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Friends Contact</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Elio-inspired cosmic contact form
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/quick-wins-demo" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 dark:hover:from-sky-900/30 dark:hover:to-cyan-900/30",
                          "hover:shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-sky-200/50 dark:hover:border-sky-700/50",
                          pathname === "/quick-wins-demo" ? "bg-sky-50 dark:bg-sky-900/20 border-sky-300 dark:border-sky-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40 transition-colors">
                            <SparklesIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Quick Wins Demo</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Frontend improvements showcase
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "group relative flex items-center gap-2 px-5 py-2.5 h-11 rounded-xl font-medium text-sm transition-all duration-300",
          "bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40",
          "hover:from-indigo-100 hover:to-blue-100 dark:hover:from-indigo-900/50 dark:hover:to-blue-900/50",
          "border border-indigo-200/60 dark:border-indigo-800/40",
          "hover:border-indigo-300 dark:hover:border-indigo-700/60",
          "hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30",
          "text-indigo-700 dark:text-indigo-300",
          pathname === "/projects" || pathname === "/blog" || pathname === "/admin" || pathname.startsWith("/blog/")
            ? "ring-2 ring-indigo-500/50 dark:ring-indigo-400/50 shadow-md bg-indigo-100 dark:bg-indigo-900/30"
            : ""
        )}>
          <NewspaperIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span>Content</span>
        </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30">                  
                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/projects"
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-600 p-6 no-underline outline-none focus:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white group"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <FolderIcon className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform" />
                          <span className="text-lg font-bold">Projects & Blog</span>
                        </div>
                        <span className="text-sm leading-tight text-white/90">
                          Explore my technical projects and blog posts
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  
                  <div className="grid gap-2">
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/projects" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:hover:from-indigo-900/30 dark:hover:to-blue-900/30",
                          "hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-indigo-200/50 dark:hover:border-indigo-700/50",
                          pathname === "/projects" ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors">
                            <FolderIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Projects</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Technical projects and portfolio work
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/blog" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 dark:hover:from-blue-900/30 dark:hover:to-sky-900/30",
                          "hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50",
                          pathname === "/blog" || pathname.startsWith("/blog/") ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                            <BookOpenIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Blog</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Articles, insights, and technical writing
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/admin" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-blue-900/10 hover:to-blue-50 dark:hover:from-blue-950/30 dark:hover:to-blue-900/30",
                          "hover:shadow-lg hover:shadow-blue-900/10 dark:hover:shadow-blue-900/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-blue-800/50 dark:hover:border-blue-700/50",
                          pathname.startsWith("/admin") ? "bg-blue-900/10 dark:bg-blue-950/20 border-blue-800 dark:border-blue-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-900/20 dark:bg-blue-950/30 group-hover:bg-blue-900/30 dark:group-hover:bg-blue-900/40 transition-colors">
                            <AcademicCapIcon className="w-5 h-5 text-blue-800 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Admin</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Content management and administration
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="https://iq4fun.gitbook.io/my-portfolio-menno/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 dark:hover:from-sky-900/30 dark:hover:to-cyan-900/30",
                          "hover:shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-sky-200/50 dark:hover:border-sky-700/50"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40 transition-colors">
                            <DocumentTextIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-1">
                              Documentation
                              <span className="text-xs">↗</span>
                            </div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Comprehensive guides and documentation
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "group relative flex items-center gap-2 px-5 py-2.5 h-11 rounded-xl font-medium text-sm transition-all duration-300",
          "bg-gradient-to-r from-blue-900/10 to-blue-50 dark:from-blue-950/40 dark:to-blue-950/40",
          "hover:from-blue-900/20 hover:to-blue-100 dark:hover:from-blue-900/50 dark:hover:to-blue-900/50",
          "border border-blue-800/60 dark:border-blue-800/40",
          "hover:border-blue-700 dark:hover:border-blue-700/60",
          "hover:shadow-lg hover:shadow-blue-900/20 dark:hover:shadow-blue-900/30",
          "text-blue-900 dark:text-blue-300",
          pathname.startsWith("/risk")
            ? "ring-2 ring-blue-800/50 dark:ring-blue-700/50 shadow-md bg-blue-900/20 dark:bg-blue-900/30"
            : ""
        )}>
          <ShieldExclamationIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span>Risk</span>
        </NavigationMenuTrigger>
              <NavigationMenuContent>                
                <div className="grid w-[700px] gap-3 p-6 grid-cols-2 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30">                  
                  {/* Risk landing page link */}
                  <StrictNavigationMenuLink asChild>
                    <Link 
                      href="/risk" 
                      className="col-span-2 group block select-none space-y-1 rounded-xl p-5 leading-none no-underline outline-none transition-all duration-300 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 hover:from-blue-950 hover:via-blue-800 hover:to-indigo-700 mb-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                          <ShieldExclamationIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-white">Risk Dashboards Home</span>
                          <span className="text-xs leading-tight text-white/90 mt-1">Overview & links to all risk dashboards</span>
                        </div>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>
                  {/* Risk components */}                  
                  {components.map((component) => (
                    <StrictNavigationMenuLink key={component.href} asChild>
                      <Link 
                        href={component.href} 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-blue-900/10 hover:to-blue-50 dark:hover:from-blue-900/30 dark:hover:to-blue-900/30",
                          "hover:shadow-lg hover:shadow-blue-900/10 dark:hover:shadow-blue-900/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-blue-800/50 dark:hover:border-blue-700/50",
                          pathname === component.href ? "bg-blue-900/10 dark:bg-blue-900/20 border-blue-800 dark:border-blue-700" : ""
                        )}
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">{component.title}</span>
                          <span className="line-clamp-2 text-xs leading-snug text-gray-600 dark:text-gray-400">
                            {component.description}
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "group relative flex items-center gap-2 px-5 py-2.5 h-11 rounded-xl font-medium text-sm transition-all duration-300",
          "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
          "hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/50 dark:hover:to-cyan-900/50",
          "border border-blue-200/60 dark:border-blue-800/40",
          "hover:border-blue-300 dark:hover:border-blue-700/60",
          "hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30",
          "text-blue-700 dark:text-blue-300",
          pathname.startsWith("/dashboards")
            ? "ring-2 ring-blue-500/50 dark:ring-blue-400/50 shadow-md bg-blue-100 dark:bg-blue-900/30"
            : ""
        )}>
          <ChartBarIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span>Economics</span>
        </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[700px] gap-3 p-6 grid-cols-2 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30">                  
                  {/* Economics landing page link */}
                  <StrictNavigationMenuLink asChild>
                    <Link 
                      href="/dashboards" 
                      className="col-span-2 group block select-none space-y-1 rounded-xl p-5 leading-none no-underline outline-none transition-all duration-300 bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 hover:from-blue-800 hover:via-cyan-700 hover:to-sky-600 mb-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                          <ChartBarIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-white">Economics Dashboards Home</span>
                          <span className="text-xs leading-tight text-white/90 mt-1">Overview & links to all economics dashboards</span>
                        </div>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  
                  {componentseconomics.map((component) => (
                    <StrictNavigationMenuLink key={component.href} asChild>
                      <Link 
                        href={component.href} 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30",
                          "hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50",
                          pathname === component.href ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700" : ""
                        )}
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">{component.title}</span>
                          <span className="line-clamp-2 text-xs leading-snug text-gray-600 dark:text-gray-400">
                            {component.description}
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                "group relative flex items-center gap-2 px-5 py-2.5 h-11 rounded-xl font-medium text-sm transition-all duration-300",
                "bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40",
                "hover:from-indigo-100 hover:to-blue-100 dark:hover:from-indigo-900/50 dark:hover:to-blue-900/50",
                "border border-indigo-200/60 dark:border-indigo-800/40",
                "hover:border-indigo-300 dark:hover:border-indigo-700/60",
                "hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30",
                "text-indigo-700 dark:text-indigo-300",
                pathname.startsWith("/chat") || pathname === "/firebase-ai-test"
                  ? "ring-2 ring-indigo-500/50 dark:ring-indigo-400/50 shadow-md bg-indigo-100 dark:bg-indigo-900/30"
                  : ""
              )}>
                <ChatBubbleLeftRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>AI Chat</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30">                  
                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/chat"
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500 p-6 no-underline outline-none focus:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white group"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <CpuChipIcon className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform" />
                          <span className="text-lg font-bold">AI Chat Hub</span>
                        </div>
                        <span className="text-sm leading-tight text-white/90">
                          Explore AI-powered chat and testing interfaces
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>                  
                  <div className="grid gap-2">
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/chat" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:hover:from-indigo-900/30 dark:hover:to-blue-900/30",
                          "hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-indigo-200/50 dark:hover:border-indigo-700/50",
                          pathname === "/chat" ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors">
                            <ChatBubbleLeftRightIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Chat Interface</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Main AI chat interface and conversation tools
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/chat/AI-Logic" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 dark:hover:from-blue-900/30 dark:hover:to-sky-900/30",
                          "hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50",
                          pathname === "/chat/AI-Logic" ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                            <CpuChipIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">AI Logic</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              AI reasoning and logic processing interface
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/chat/genkit" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 dark:hover:from-sky-900/30 dark:hover:to-cyan-900/30",
                          "hover:shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-sky-200/50 dark:hover:border-sky-700/50",
                          pathname === "/chat/genkit" ? "bg-sky-50 dark:bg-sky-900/20 border-sky-300 dark:border-sky-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40 transition-colors">
                            <FireIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">GenKit</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Firebase GenKit AI development and testing
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/firebase-ai-test" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-cyan-50 hover:to-sky-50 dark:hover:from-cyan-900/30 dark:hover:to-sky-900/30",
                          "hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-cyan-200/50 dark:hover:border-cyan-700/50",
                          pathname === "/firebase-ai-test" ? "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-300 dark:border-cyan-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/40 transition-colors">
                            <SparklesIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Firebase AI Test</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Firebase integration testing for AI services
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link 
                        href="/chat/vertex-ai-chat" 
                        className={cn(
                          "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 dark:hover:from-sky-900/30 dark:hover:to-cyan-900/30",
                          "hover:shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-500/20",
                          "transform hover:scale-[1.02] border border-transparent hover:border-sky-200/50 dark:hover:border-sky-700/50",
                          pathname === "/chat/vertex-ai-chat" ? "bg-sky-50 dark:bg-sky-900/20 border-sky-300 dark:border-sky-700" : ""
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40 transition-colors">
                            <CpuChipIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 mb-1">Vertex AI Chat</div>
                            <div className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                              Chat with Vertex AI using portfolio data
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>        
        </NavigationMenu>        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
