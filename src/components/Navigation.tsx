'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  UserCircleIcon,
  CodeBracketIcon,
  ShieldExclamationIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface MenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  items?: { title: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: 'About',
    href: '/about',
    description: 'Learn more about my background and experience',
    icon: <UserCircleIcon className="w-6 h-6" />,
    items: [
      { title: 'Background', href: '/about#background' },
      { title: 'Skills', href: '/about#skills' },
      { title: 'Experience', href: '/about#experience' },
      { title: 'Now', href: '/now' }, // Added Now page under About
    ]
  },
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
    title: 'Risk Management',
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
    title: 'Economics & Stocks',
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
    title: 'Blog',
    href: '/blog',
    description: 'Articles and insights',
    icon: <DocumentTextIcon className="w-6 h-6" />,
    items: [
      { title: 'All Posts', href: '/blog' },
      { title: 'Visualization Showcase', href: '/dashboards/visualizations-showcase' }
    ]
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with Menno Drescher',
    icon: <UserCircleIcon className="w-6 h-6" />
  },
  {
    title: 'Resume',
    href: '/resume',
    description: 'View Menno Drescher\'s professional resume',
    icon: <DocumentTextIcon className="w-6 h-6" />
  },
];

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-4 px-3 py-1 rounded text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Menno Drescher
          </Link>
          
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="flex items-center space-x-1">
                  <Link 
                    href={item.href}
                    className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.title}
                    {item.items && (
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    )}
                  </Link>
                </div>
                
                {item.items && activeMenu === item.title && (
                  <div className="absolute left-0 mt-2 w-[36rem] bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 gap-8 z-50">
                    <div className="col-span-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-500 mb-6">{item.description}</p>
                      )}
                    </div>
                    <div className="space-y-4">
                      {item.items.slice(0, Math.ceil(item.items.length / 2)).map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg p-3 transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {item.items.slice(Math.ceil(item.items.length / 2)).map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg p-3 transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
