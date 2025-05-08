"use client"

import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Risk",
    href: "/risk",
    description:
      "Risk analysis and management insights",
  },
  {
    title: "Supply Chain Risk",
    href: "/risk/supply-chain-top-25",
    description:
      "Gartner Supply Chain Top 25 for 2024",
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
]

const componentseconomics: { title: string; href: string; description: string }[] = [
    {
      title: "Balance of Trade",
      href: "/dashboards/balance-of=trade",
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
      title: "Market Trends",
      href: "/dashhboards/market-trends",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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

function DarkModeToggle() {
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
            ? 'bg-indigo-500 text-white' 
            : 'bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-gray-700'
        }`}
        onClick={() => setTheme('light')}
      >
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Light
        </span>
      </button>
      <button
        aria-label="Switch to Dark Mode"
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          theme === 'dark' 
            ? 'bg-indigo-500 text-white' 
            : 'bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-gray-700'
        }`}
        onClick={() => setTheme('dark')}
      >
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Dark
        </span>
      </button>
    </div>
  );
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Portfolio Menno
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Learn more about my background and experience
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="About Me">
                Professional Expertise and Technical Skills
              </ListItem>
              <ListItem href="/now" title="Now">
                What I'm Doing Now - Maturity Dashboard
              </ListItem>
              <ListItem href="/resume" title="Resume">
                Interactive Resume - My Work Experience
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>News</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Blog and Projects
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Learn more about my posts and projects
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/projects" title="Projects">
                Professional Expertise and Technical Skills
              </ListItem>
              <ListItem href="/blog" title="Blog">
                What I'm Doing Now - Maturity Dashboard
              </ListItem>
              <ListItem href="/admin/dashboard" title="Admin">
                Interactive Resume - My Work Experience
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Risk</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Economics</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {componentseconomics.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://iq4fun.gitbook.io/my-portfolio-menno/" className={navigationMenuTriggerStyle()}>
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="ml-4">
          <DarkModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"