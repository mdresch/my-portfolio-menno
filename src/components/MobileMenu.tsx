"use client"

import React from "react";
import Link from "next/link";
import { DarkModeToggle } from "./NavigationMenuDemo";
import { ComponentItem } from "@/types/navigation";

// Icon component with proper return type
function ChevronIcon({ isOpen }: { isOpen: boolean }): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  components: ComponentItem[];
  componentseconomics: ComponentItem[];
}

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
}

interface MobileAccordionProps {
  title: string;
  children: React.ReactNode;
}

// Mobile navigation link
function MobileLink({ href, children }: MobileLinkProps) {
  return (
    <Link 
      href={href}
      className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:pl-4 hover:border-l-2 hover:border-sky-500 dark:hover:border-sky-400"
    >
      {children}
    </Link>
  );
}

// Mobile accordion for collapsible sections
function MobileAccordion({ title, children }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-t dark:border-gray-700 pt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
      >
        {title}
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 mt-2 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export function MobileMenu({ isOpen, onClose, components, componentseconomics }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Content */}
      <div 
        className={`fixed top-16 left-0 right-0 z-50 w-full md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg border-t dark:border-gray-700 overflow-auto max-h-[calc(100vh-4rem)] transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="p-4">
          <div className="space-y-4">
            {/* Simple mobile link list */}
            <MobileLink href="/about">About Me</MobileLink>
            <MobileLink href="/now">Now</MobileLink>
            <MobileLink href="/resume">Resume</MobileLink>
            <MobileLink href="/projects">Projects</MobileLink>
            <MobileLink href="/blog">Blog</MobileLink>
            
            {/* Collapsible sections */}
            <MobileAccordion title="Risk">
              {components.map((item) => (
                <MobileLink key={item.href} href={item.href}>
                  {item.title}
                  {item.description && <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</span>}
                </MobileLink>
              ))}
            </MobileAccordion>
            {/* Economics landing page link */}
            <MobileLink href="/dashboards" >
              <span className="font-semibold text-sky-600 dark:text-sky-400">Economics Dashboards Home</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Overview & links to all economics dashboards</span>
            </MobileLink>
            <MobileAccordion title="Economics">
              {componentseconomics.map((item) => (
                <MobileLink key={item.href} href={item.href}>
                  {item.title}
                  {item.description && <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</span>}
                </MobileLink>
              ))}
            </MobileAccordion>
            
            <MobileLink href="https://iq4fun.gitbook.io/my-portfolio-menno/">Docs</MobileLink>
            
            <div className="pt-2">
              <DarkModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
