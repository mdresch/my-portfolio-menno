"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import {
  FolderIcon,
  NewspaperIcon,
  ShieldExclamationIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SearchCategory =
  | "Projects"
  | "Blog"
  | "Risk"
  | "Dashboards"
  | "Chat"
  | "Pages";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
}

// ─── Static search index ─────────────────────────────────────────────────────

const SEARCH_ITEMS: SearchItem[] = [
  // ── Pages ───────────────────────────────────────────────────────────────────
  { id: "home", title: "Home", description: "Portfolio home page", href: "/", category: "Pages" },
  { id: "about", title: "About Me", description: "Professional expertise and technical skills", href: "/about", category: "Pages" },
  { id: "resume", title: "Resume", description: "Interactive resume with work experience", href: "/resume", category: "Pages" },
  { id: "now", title: "Now", description: "Current projects and maturity dashboard", href: "/now", category: "Pages" },
  { id: "contact", title: "Friends Contact", description: "Elio-inspired cosmic contact form", href: "/friends-contact", category: "Pages" },

  // ── Projects ─────────────────────────────────────────────────────────────────
  { id: "projects", title: "Projects", description: "All projects overview", href: "/projects", category: "Projects" },

  // ── Blog ─────────────────────────────────────────────────────────────────────
  { id: "blog", title: "Blog", description: "All blog posts and articles", href: "/blog", category: "Blog" },

  // ── Chat / AI ────────────────────────────────────────────────────────────────
  { id: "chat", title: "Standard Chat", description: "General purpose AI chat interface", href: "/chat", category: "Chat" },
  { id: "chat-vertex", title: "Vertex AI Chat", description: "Advanced Google Vertex AI integration", href: "/chat/vertex-ai-chat", category: "Chat" },
  { id: "chat-rag", title: "Portfolio RAG Chat", description: "Chat with my portfolio knowledge base", href: "/chat/rag-chat", category: "Chat" },
  { id: "chat-genkit", title: "Genkit Demo", description: "Google Genkit AI framework demo", href: "/chat/genkit", category: "Chat" },

  // ── Risk ────────────────────────────────────────────────────────────────────
  { id: "risk-supply-chain-top-25", title: "Supply Chain Risk", description: "Gartner Supply Chain Top 25 for 2024", href: "/risk/supply-chain-top-25", category: "Risk" },
  { id: "risk-ma", title: "Mergers & Acquisitions", description: "Mergers and Acquisitions Landscape", href: "/risk/mergers-acquisitions-landscape", category: "Risk" },
  { id: "risk-supply-chain-disruption", title: "Supply Chain Disruption", description: "Supply Chain Disruption Risk Management", href: "/risk/supply-chain-disruption", category: "Risk" },
  { id: "risk-trade-policy", title: "Trade Policy", description: "Trade Policy and Tariffs", href: "/risk/trade-policy", category: "Risk" },
  { id: "risk-geopolitical", title: "Geopolitical Risk", description: "Geopolitical Risk and Supply Chain Resilience", href: "/risk/geopolitical-risk", category: "Risk" },
  { id: "risk-resilience", title: "Supply Chain Resilience", description: "Supply Chain Resilience and Risk Management", href: "/risk/supply-chain-resilience", category: "Risk" },
  { id: "risk-complexity", title: "Business Complexity", description: "Global Business Complexity Index", href: "/risk/global-business-complexity-index", category: "Risk" },
  { id: "risk-gartner-survey", title: "Risk Analysis", description: "Unsettled Regulatory and Legal Environment Tops Emerging Risks", href: "/risk/gartner-regulatory-risk-survey", category: "Risk" },
  { id: "risk-tariffs", title: "Global Tariffs", description: "U.S. Global Trade and Tariff Policy: Implications and Economic Impact", href: "/risk/trump-tariffs", category: "Risk" },
  { id: "risk-deep-dive", title: "Deep Dive Trade", description: "Deep Dive on Trade: Wide-Ranging Issues Confront Global Businesses", href: "/risk/deep-dive-trade", category: "Risk" },
  { id: "risk-cost-optimization", title: "Cost Optimization", description: "Cost Optimization in a Volatile Economy", href: "/risk/cost-optimization", category: "Risk" },

  // ── Dashboards ──────────────────────────────────────────────────────────────
  { id: "dashboards", title: "Dashboards Overview", description: "All economics dashboards", href: "/dashboards", category: "Dashboards" },
  { id: "dash-balance-of-trade", title: "Balance of Trade", description: "Trade balance data and analysis", href: "/dashboards/balance-of-trade", category: "Dashboards" },
  { id: "dash-currencies", title: "Currencies", description: "Currency exchange rates and trends", href: "/dashboards/currencies", category: "Dashboards" },
  { id: "dash-economic-indicators", title: "Economic Indicators", description: "Key economic indicators dashboard", href: "/dashboards/economic-indicators", category: "Dashboards" },
  { id: "dash-macro", title: "Macroeconomics", description: "Macroeconomic data and analysis", href: "/dashboards/macro", category: "Dashboards" },
  { id: "dash-major-economics", title: "Major Economics", description: "Major world economies comparison", href: "/dashboards/major-economics", category: "Dashboards" },
  { id: "dash-stocks", title: "Stocks", description: "Stock market dashboard", href: "/dashboards/stocks", category: "Dashboards" },
  { id: "dash-policy-impact", title: "Policy Impact", description: "Policy impact analysis dashboard", href: "/dashboards/policy-impact", category: "Dashboards" },
  { id: "dash-policyimpact-dashboard", title: "Policy Impact Dashboard", description: "Detailed policy impact metrics", href: "/dashboards/policyimpact-dashboard", category: "Dashboards" },
];

// ─── Category metadata ───────────────────────────────────────────────────────

const CATEGORY_META: Record<
  SearchCategory,
  { icon: React.ReactElement; color: string; bgColor: string }
> = {
  Projects: {
    icon: <FolderIcon className="w-4 h-4" />,
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-100 dark:bg-violet-900/40",
  },
  Blog: {
    icon: <NewspaperIcon className="w-4 h-4" />,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  Risk: {
    icon: <ShieldExclamationIcon className="w-4 h-4" />,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/40",
  },
  Dashboards: {
    icon: <ChartBarIcon className="w-4 h-4" />,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/40",
  },
  Chat: {
    icon: <ChatBubbleLeftRightIcon className="w-4 h-4" />,
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-100 dark:bg-sky-900/40",
  },
  Pages: {
    icon: <RocketLaunchIcon className="w-4 h-4" />,
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-100 dark:bg-gray-800",
  },
};

const CATEGORY_ORDER: SearchCategory[] = [
  "Pages",
  "Projects",
  "Blog",
  "Risk",
  "Dashboards",
  "Chat",
];

// ─── Helper: simple fuzzy/substring search ───────────────────────────────────

function scoreItem(item: SearchItem, query: string): number {
  const q = query.toLowerCase();
  const title = item.title.toLowerCase();
  const desc = item.description.toLowerCase();
  if (title === q) return 3;
  if (title.startsWith(q)) return 2;
  if (title.includes(q) || desc.includes(q)) return 1;
  return 0;
}

function filterItems(query: string): SearchItem[] {
  if (!query.trim()) return SEARCH_ITEMS;
  return SEARCH_ITEMS.filter((item) => scoreItem(item, query) > 0).sort(
    (a, b) => scoreItem(b, query) - scoreItem(a, query)
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: SearchCategory }) {
  const meta = CATEGORY_META[category];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${meta.color} ${meta.bgColor}`}
    >
      {meta.icon}
      {category}
    </span>
  );
}

interface ResultItemProps {
  item: SearchItem;
  isActive: boolean;
  // eslint-disable-next-line no-unused-vars
  onSelect: (item: SearchItem) => void;
  onMouseEnter: () => void;
  // eslint-disable-next-line no-unused-vars
  onCopyLink: (e: React.MouseEvent, href: string) => void;
  // eslint-disable-next-line no-unused-vars
  onAskAI: (e: React.MouseEvent, item: SearchItem) => void;
  // eslint-disable-next-line no-unused-vars
  itemRef: (el: HTMLButtonElement | null) => void;
}

function ResultItem({
  item,
  isActive,
  onSelect,
  onMouseEnter,
  onCopyLink,
  onAskAI,
  itemRef,
}: ResultItemProps) {
  const meta = CATEGORY_META[item.category];
  return (
    <button
      ref={itemRef}
      className={`w-full text-left px-4 py-3 flex items-center gap-3 rounded-xl transition-all duration-150 group ${
        isActive
          ? "bg-blue-50 dark:bg-blue-900/30 ring-1 ring-blue-300 dark:ring-blue-700"
          : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
      }`}
      onMouseEnter={onMouseEnter}
      onClick={() => onSelect(item)}
    >
      {/* Category icon */}
      <span
        className={`flex-shrink-0 p-2 rounded-lg ${meta.bgColor} ${meta.color}`}
      >
        {meta.icon}
      </span>

      {/* Text content */}
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
          {item.title}
        </span>
        <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">
          {item.description}
        </span>
      </span>

      {/* Action buttons – visible on hover / active */}
      <span
        className={`flex-shrink-0 flex items-center gap-1 transition-opacity duration-150 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <span
          role="button"
          title="Copy link"
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={(e) => onCopyLink(e, item.href)}
        >
          <ClipboardDocumentIcon className="w-4 h-4" />
        </span>
        <span
          role="button"
          title="Ask AI about this"
          className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          onClick={(e) => onAskAI(e, item)}
        >
          <SparklesIcon className="w-4 h-4" />
        </span>
        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-300 dark:text-gray-600" />
      </span>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface GlobalSearchPaletteProps {
  /** Controlled: pass `true` to open, `false` to close from the outside. */
  open?: boolean;
  /** Called when the palette requests to be closed. */
  onClose?: () => void;
}

export function GlobalSearchPalette({ open: openProp, onClose }: GlobalSearchPaletteProps) {
  const router = useRouter();
  const [internalOpen, setInternalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedHref, setCopiedHref] = useState<string | null>(null);

  const isOpen = openProp !== undefined ? openProp : internalOpen;

  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
    setQuery("");
    setActiveIndex(0);
  }, [onClose]);

  // ── Keyboard shortcut: Ctrl/Cmd+K is handled by GlobalSearchPaletteProvider ─
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // ── Focus input when palette opens ────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // ── Scroll active item into view ───────────────────────────────────────────
  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const results = filterItems(query);

  // Group results by category (preserve CATEGORY_ORDER)
  const grouped = CATEGORY_ORDER.reduce<Record<string, SearchItem[]>>((acc, cat) => {
    const items = results.filter((r) => r.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  // Flat list for keyboard navigation
  const flatResults = CATEGORY_ORDER.flatMap((cat) => grouped[cat] ?? []);

  // ── Navigation ─────────────────────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, flatResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flatResults[activeIndex]) {
      handleSelect(flatResults[activeIndex]);
    }
  };

  const handleSelect = (item: SearchItem) => {
    router.push(item.href);
    close();
  };

  const handleCopyLink = (e: React.MouseEvent, href: string) => {
    e.stopPropagation();
    const url = `${window.location.origin}${href}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedHref(href);
      setTimeout(() => setCopiedHref(null), 1500);
    });
  };

  const handleAskAI = (e: React.MouseEvent, item: SearchItem) => {
    e.stopPropagation();
    const prompt = encodeURIComponent(`Tell me about "${item.title}": ${item.description}`);
    router.push(`/chat?q=${prompt}`);
    close();
  };

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Build flat index lookup for activeIndex from grouped display order
  const flatIndexOf = (item: SearchItem) => flatResults.indexOf(item);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={close}
      />

      {/* Palette */}
      <div
        role="dialog"
        aria-label="Search palette"
        aria-modal="true"
        className="fixed left-1/2 top-[12vh] z-[9999] w-full max-w-2xl -translate-x-1/2 px-4"
      >
        <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <MagnifyingGlassIcon className="w-5 h-5 flex-shrink-0 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search pages, projects, blog posts, dashboards…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none"
              aria-label="Search"
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="flex-shrink-0 p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Clear search"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 font-mono">
              Esc
            </kbd>
          </div>

          {/* Results */}
          <div
            className="max-h-[60vh] overflow-y-auto py-2 px-2"
            role="listbox"
            aria-label="Search results"
          >
            {flatResults.length === 0 ? (
              <div className="py-10 text-center text-sm text-gray-400 dark:text-gray-500">
                No results for &ldquo;{query}&rdquo;
              </div>
            ) : (
              Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="mb-3">
                  {/* Category header */}
                  <div className="flex items-center gap-2 px-4 py-1.5">
                    <CategoryBadge category={category as SearchCategory} />
                  </div>
                  {/* Items */}
                  <div className="space-y-0.5">
                    {items.map((item) => {
                      const idx = flatIndexOf(item);
                      return (
                        <ResultItem
                          key={item.id}
                          item={item}
                          isActive={idx === activeIndex}
                          onSelect={handleSelect}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onCopyLink={handleCopyLink}
                          onAskAI={handleAskAI}
                          itemRef={(el) => { itemRefs.current[idx] = el; }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer hint */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60">
            <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded font-mono">↑↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded font-mono">↵</kbd>
                open
              </span>
              <span className="flex items-center gap-1">
                <SparklesIcon className="w-3 h-3" />
                Ask AI
              </span>
              <span className="flex items-center gap-1">
                <ClipboardDocumentIcon className="w-3 h-3" />
                Copy link
              </span>
            </div>
            {copiedHref && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-pulse">
                Link copied!
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Trigger button (for use in headers / nav bars) ───────────────────────────

interface SearchTriggerProps {
  onClick: () => void;
  /** Optional extra className overrides */
  className?: string;
}

export function SearchTrigger({ onClick, className = "" }: SearchTriggerProps) {
  const isMac =
    typeof navigator !== "undefined" && navigator.platform.toUpperCase().includes("MAC");

  return (
    <button
      onClick={onClick}
      aria-label="Open search palette (Ctrl+K)"
      className={`group flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 border border-gray-200/60 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md ${className}`}
    >
      <MagnifyingGlassIcon className="w-4 h-4 flex-shrink-0" />
      <span className="hidden lg:inline">Search</span>
      <kbd className="hidden lg:flex items-center gap-0.5 text-xs font-mono text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded px-1.5 py-0.5 shadow-sm">
        {isMac ? "⌘" : "Ctrl"}K
      </kbd>
    </button>
  );
}

// ─── Custom event name for external open triggers ─────────────────────────────

export const OPEN_SEARCH_PALETTE_EVENT = "openSearchPalette";

/**
 * Dispatch the custom event from anywhere to open the palette.
 * e.g. `dispatchOpenSearchPalette()` from a nav trigger button.
 */
export function dispatchOpenSearchPalette() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_SEARCH_PALETTE_EVENT));
  }
}

// ─── Convenience wrapper: self-contained palette + trigger ────────────────────

export function GlobalSearchPaletteProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Ctrl/Cmd+K keyboard shortcut
    const keyHandler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    // Custom event from external trigger buttons
    const eventHandler = () => setOpen(true);

    window.addEventListener("keydown", keyHandler);
    window.addEventListener(OPEN_SEARCH_PALETTE_EVENT, eventHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener(OPEN_SEARCH_PALETTE_EVENT, eventHandler);
    };
  }, []);

  return (
    <GlobalSearchPalette
      open={open}
      onClose={() => setOpen(false)}
    />
  );
}
