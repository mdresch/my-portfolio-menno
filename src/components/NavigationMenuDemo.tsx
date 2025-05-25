"use client"

import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { StrictNavigationMenuLink } from "./StrictNavigationMenuLink";

import { cn } from "../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { MobileMenu } from "./MobileMenu"
import { ComponentItem } from "../types/navigation"

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
]

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
]

export function DarkModeToggle({}: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Set default theme to light
  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('light');
    }
  }, [setTheme]);
  
  if (!mounted) return null;
  
  return (
    <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm">
      <button
        aria-label="Switch to Light Mode"
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          theme === 'light' 
            ? 'bg-sky-500 text-white' 
            : 'bg-white dark:bg-gray-800 text-sky-700 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-gray-700'
        }`}
        onClick={() => setTheme('light')}
      >
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          
        </span>
      </button>
      <button
        aria-label="Switch to Dark Mode"
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          theme === 'dark' 
            ? 'bg-sky-500 text-white' 
            : 'bg-white dark:bg-gray-800 text-sky-700 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-gray-700'
        }`}
        onClick={() => setTheme('dark')}
      >
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full">      {/* Mobile menu button */}
      <div className="md:hidden flex justify-end py-4">
        <button
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
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
      <div className="hidden md:block">
        <NavigationMenu className="flex justify-center mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>                
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div className="flex flex-col">
                        <span className="mb-2 mt-4 text-lg font-medium">
                          Portfolio Menno
                        </span>
                        <span className="text-sm leading-tight text-muted-foreground">
                          Learn more about my background and experience
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>
                  <div className="grid gap-1">
                    <StrictNavigationMenuLink asChild>
                      <Link href="/about" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground")}>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">About Me</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Professional Expertise and Technical Skills
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/now" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">Now</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            What I&apos;m Doing Now - Maturity Dashboard
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/resume" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">Resume</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Interactive Resume - My Work Experience
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>News</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <StrictNavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div className="flex flex-col">
                        <span className="mb-2 mt-4 text-lg font-medium">
                          Blog and Projects
                        </span>
                        <span className="text-sm leading-tight text-muted-foreground">
                          Learn more about my posts and projects
                        </span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>
                  <div className="grid gap-1">
                    <StrictNavigationMenuLink asChild>
                      <Link href="/projects" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">Projects</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Professional Expertise and Technical Skills
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">Blog</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            What I&apos;m Doing Now - Maturity Dashboard
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                    <StrictNavigationMenuLink asChild>
                      <Link href="/admin" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">Admin</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Interactive Resume - My Work Experience
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <NavigationMenuTrigger>Risk</NavigationMenuTrigger>
              <NavigationMenuContent>                
                <div className="grid w-[600px] gap-3 p-4 grid-cols-2">
                  {/* Risk landing page link */}
                  <StrictNavigationMenuLink asChild>
                    <Link href="/risk" className="col-span-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-sky-50 dark:bg-sky-900/40 hover:bg-sky-100 dark:hover:bg-sky-800/60 mb-2">
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-sky-700 dark:text-sky-200">Risk Dashboards Home</span>
                        <span className="text-xs leading-tight text-muted-foreground mt-1">Overview & links to all risk dashboards</span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>
                  {/* Risk components */}

                  {components.map((component) => (
                    <StrictNavigationMenuLink key={component.href} asChild>
                      <Link href={component.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">{component.title}</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            {component.description}
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <NavigationMenuTrigger>Economics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-3 p-4 grid-cols-2">
                  {/* Economics landing page link */}
                  <StrictNavigationMenuLink asChild>
                    <Link href="/dashboards" className="col-span-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-sky-50 dark:bg-sky-900/40 hover:bg-sky-100 dark:hover:bg-sky-800/60 mb-2">
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-sky-700 dark:text-sky-200">Economics Dashboards Home</span>
                        <span className="text-xs leading-tight text-muted-foreground mt-1">Overview & links to all economics dashboards</span>
                      </div>
                    </Link>
                  </StrictNavigationMenuLink>
                  {componentseconomics.map((component) => (
                    <StrictNavigationMenuLink key={component.href} asChild>
                      <Link href={component.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">{component.title}</span>
                          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            {component.description}
                          </span>
                        </div>
                      </Link>
                    </StrictNavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <StrictNavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link href="https://iq4fun.gitbook.io/my-portfolio-menno/">Docs</Link>
              </StrictNavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <StrictNavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link href="/chat">AI Chat</Link>
              </StrictNavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
