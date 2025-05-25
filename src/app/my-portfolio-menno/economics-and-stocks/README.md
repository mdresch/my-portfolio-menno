---
icon: arrow-trend-up
---

# Economics & Stocks

***

### Economics Dashboards Landing Page (src\app\dashboards\page.tsx)

This document provides documentation for the DashboardsLandingPage component, which serves as the main landing page for accessing various economics-related dashboards.

#### Overview

The DashboardsLandingPage component renders a static page that acts as a central hub for users to navigate to different economics dashboards available on the site. It provides an introduction to the dashboard section and lists links to individual dashboards focused on specific topics like Market Trends, Macroeconomics, Policy Impact, and more. Each dashboard is represented by a styled card with a title and brief description.

#### File Location

The component is located within the Next.js App Router structure:

```
      src/app/dashboards/page.tsx
    
```

#### Technologies Used

* **React:** Core component library.
* **Next.js (App Router):** Routing and client-side navigation (next/link).
* **Tailwind CSS:** Styling and layout via utility classes.

#### Server Component (Absence of 'use client')

Since the 'use client' directive is not present at the top of this file, this component is a **Server Component** by default in the Next.js App Router. It is rendered on the server, and the resulting HTML is sent to the browser. This is suitable for a static page like this that doesn't require client-side interactivity or browser-specific APIs.

#### Imports

The component imports:

* import Link from 'next/link';: Used for creating efficient client-side navigation links to the individual dashboard pages (/dashboards/...).

#### Props

As an App Router page component (page.tsx), DashboardsLandingPage does not accept external props passed directly.

#### State

This component is a static Server Component and does not use React state hooks (e.g., useState) or manage any internal, dynamic state.

#### Structure and Rendering

The component renders a main div container (container mx-auto px-4 py-12). The content is structured simply:

1. **Header (\<h1>):** The main title of the page ("Economics Dashboards").
2. **Introduction (\<p>):** A paragraph introducing the purpose of the page and the dashboards.
3. **Dashboard Links Grid (div with grid grid-cols-1 md:grid-cols-2 gap-8):**
   * This div uses a CSS Grid layout to arrange the dashboard links responsively (single column on small screens, two columns on medium and larger screens) with spacing (gap-8).
   * Each dashboard link is wrapped in a next/link component (\<Link href="...">).
   * The content inside each Link is a styled div (block bg-white rounded-lg shadow-md p-6 hover:bg-blue-50 transition) designed to look like a card.
   * Each card contains a title (\<h2>) and a brief description (\<p>).
   * There are multiple such cards, linking to various dashboard routes:
     * /dashboards/market-trends
     * /dashboards/macro
     * /dashboards/policy-impact
     * /dashboards/economic-indicators
     * /dashboards/currencies
     * /dashboards/overview-dashboard
     * /dashboards/policyimpact-dashboard
     * /dashboards/stocks
     * /dashboards/balance-of-trade
     * /dashboards/indicators-trade
     * /dashboards/major-economics

#### Styling

Styling is handled by **Tailwind CSS** utility classes via the className attribute. Key styling features include:

* **Layout & Spacing:** container, mx-auto, px-, py-, mb-, gap-, grid, grid-cols-, md:grid-cols-, block.
* **Typography:** text-4xl, font-bold, text-lg, text-gray-700, max-w-2xl, text-2xl, font-semibold, text-gray-600.
* **Backgrounds, Borders, Shadows:** bg-white, rounded-lg, shadow-md, p-6.
* **Hover Effects:** hover:bg-blue-50, transition for interactive visual feedback on the link cards.
* **Responsiveness:** md:grid-cols-2 adjusts the grid layout based on screen size.

The page utilizes a simple, clean layout with card-like links for easy navigation, styled responsively using Tailwind.

#### Key Features

* **Dashboard Directory:** Serves as the primary entry point for users interested in economics dashboards.
* **Clear Navigation:** Presents distinct links with titles and descriptions for each available dashboard.
* **Card-based Design:** Uses visually appealing cards for each link, improving discoverability and user experience.
* **Responsive Grid:** The layout adapts to different screen sizes using a responsive grid.
* **Client-side Navigation:** Uses next/link for fast, seamless transitions between pages.
* **Server Component:** Renders efficiently on the server, contributing to faster initial page loads.

#### Usage

As a page.tsx file located at src/app/dashboards, the Next.js App Router automatically creates a route for this component. It will be accessible via the URL /dashboards.

This page is intended to be linked from the main navigation menu or other relevant sections of the documentation site.

```
      // Located at src/app/dashboards/page.tsx
// Automatically routes to /dashboards
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JsxIGNORE\_WHEN\_COPYING\_END

#### Dependencies

* react (implicitly used by Next.js)
* next
* Tailwind CSS (via project configuration)

***
