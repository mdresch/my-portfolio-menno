'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  UserCircleIcon,
  CodeBracketIcon,
  ShieldExclamationIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  items?: { title: string; href: string }[];
}

// Grouped menuItems for better space usage and logical categorization
const menuGroups = [
  {
    label: 'Profile',
    items: [
      {
        title: 'About',
        href: '/about',
        description: 'Learn more about my background and experience',
        icon: <UserCircleIcon className="w-6 h-6" />,
        items: [
          { title: 'Background', href: '/about#background' },
          { title: 'Skills', href: '/about#skills' },
          { title: 'Experience', href: '/about#experience' },
          { title: 'Now', href: '/now' },
          { title: 'Resume', href: '/resume', icon: <DocumentTextIcon className="w-5 h-5 mr-2 inline" /> },
          { title: 'Contact', href: '/contact' },
        ]
      },
    ]
  },
  {
    label: 'Work',
    items: [
      {
        title: 'Projects',
        href: '/projects',
        description: 'Explore my portfolio of work',
        icon: <CodeBracketIcon className="w-6 h-6" />,
        items: [
          { title: 'Featured Projects', href: '/projects#featured' },
          { title: 'Case Studies', href: '/projects#case-studies' },
          { title: 'Open Source', href: '/projects#open-source' },
        ]
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Articles and insights',
        icon: <DocumentTextIcon className="w-6 h-6" />,
        items: [
          { title: 'All Posts', href: '/blog' },
          { title: 'Visualization Showcase', href: '/dashboards/visualizations-showcase' }
        ]
      },

    ]
  },
  {
    label: 'Dashboards',
    items: [
      {
        title: 'Economics',
        href: '/dashboards',
        description: 'Economic insights, global indices, and market analysis',
        icon: <ChartBarIcon className="w-6 h-6" />,
        items: [
          { title: 'Market Trends', href: '/dashboards/market-trends' },
          { title: 'Macroeconomics', href: '/dashboards/macro' },
          { title: 'Policy Impact', href: '/dashboards/policy-impact' },
          { title: 'Economic Indicators', href: '/dashboards/economic-indicators' },
          { title: 'Balance of Trade', href: '/dashboards/balance-of-trade' },
          { title: 'Indicators Trade', href: '/dashboards/indicators-trade' },
          { title: 'Stocks & Global Indices', href: '/dashboards/stocks' },
          { title: 'Sectors', href: '/dashboards/stocks#sectors' },
          { title: 'Companies', href: '/dashboards/stocks#companies' },
          { title: 'Currencies', href: '/dashboards/currencies' },
          { title: 'Major Economics', href: '/dashboards/major-economics' },
        ]
      },
      {
        title: 'Risk',
        href: '/risk',
        description: 'Risk analysis and management insights',
        icon: <ShieldExclamationIcon className="w-6 h-6" />,
        items: [
          { title: 'Supply Chain Risk', href: '/risk/supply-chain-top-25' },
          { title: 'Business Complexity', href: '/risk/global-business-complexity-index' },
          { title: 'Risk Analysis', href: '/risk/gartner-regulatory-risk-survey' },
          { title: 'Risk Landscape', href: '/risk'},
          { title: 'Global Tariffs', href: '/risk/trump-tariffs' },
        ]
      },
      {
        title: 'Docs',
        href: 'https://iq4fun.gitbook.io/my-portfolio-menno/',
        description: 'Project and portfolio documentation (GitBook)',
        icon: <DocumentTextIcon className="w-6 h-6" />
      },
    ]
  }
];

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

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Menno Drescher
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8 items-center">
              {menuGroups.map((group) => (
                <div key={group.label} className="flex space-x-2 items-center">
                  {group.items.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.items ? (
                        <>
                          <NavigationMenuTrigger className="flex items-center py-2 px-3 rounded-lg text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors font-medium">
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="mt-2 min-w-[18rem] bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-xl shadow-xl p-4 z-50 border border-indigo-100 dark:border-indigo-900">
                            <div className="mb-2 text-indigo-900 dark:text-indigo-200 font-semibold flex items-center">
                              {item.icon && <span className="mr-2">{item.icon}</span>}
                              {item.title}
                            </div>
                            {item.description && (
                              <div className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">{item.description}</div>
                            )}
                            <div className="flex flex-col gap-2">
                              {item.items.map((subItem) => (
                                <NavigationMenuLink asChild key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    className="block text-indigo-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg px-3 py-2 transition-colors flex items-center"
                                  >
                                    {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                                    {subItem.title}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="flex items-center py-2 px-3 rounded-lg text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors font-medium"
                          >
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </div>
              ))}
              <DarkModeToggle />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
