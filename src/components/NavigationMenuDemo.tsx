"use client"

import * as React from "react"
import Link from "next/link"

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

export function NavigationMenuDemo() {
  return (
          <NavigationMenu>
        <NavigationMenuList>
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