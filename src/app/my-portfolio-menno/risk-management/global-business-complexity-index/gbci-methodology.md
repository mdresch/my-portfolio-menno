---
icon: square-list
---

# GBCI Methodology

***

### GBCI Methodology Page (src\app\risk\global-business-complexity-index\methodology\page.tsx)

This document provides documentation for the MethodologyPage component, which describes the research framework and process behind the Global Business Complexity Index (GBCI).

#### Overview

The MethodologyPage component renders a static content page detailing the methodology used to create the Global Business Complexity Index. It explains the research framework, data collection process, the four key dimensions of complexity assessed, the scoring methodology, and the validation process. The page is designed to provide transparency on how the GBCI rankings and insights are derived.

#### File Location

The component is located within the Next.js App Router structure, nested under the GBCI page:

```
      src/app/risk/global-business-complexity-index/methodology/page.tsx
    
```

#### Technologies Used

* **React:** Core component library.
* **Next.js (App Router):** Routing and client-side navigation (next/link).
* **Tailwind CSS:** Styling and layout via utility classes.
* **TypeScript:** Provides type safety (indicated by .tsx extension).
* 'use client': Directive allowing for client-side features.

#### 'use client' Directive

The 'use client' directive is included at the top of the file. This marks the component as a Client Component. While this specific component primarily displays static content and uses no React Hooks or browser APIs in its current form, the directive enables it to use such features if they are added in the future.

#### Imports

The component imports:

* import React from 'react';: Standard import for using React and JSX.
* import Link from 'next/link';: Used for creating client-side navigation links to the parent GBCI page and other related pages (/risk/global-business-complexity-index).

#### Props

As an App Router page component (page.tsx), MethodologyPage does not accept external props.

#### State

Based on the provided code, the MethodologyPage component does not use React state hooks (e.g., useState) and does not manage any internal, dynamic state.

#### Structure and Rendering

The component renders a main div container (container mx-auto px-4 py-8). The content is structured into:

1. **Header (\<header>):**
   * Includes a "Back to Global Business Complexity Index" Link with an SVG arrow icon, acting as a breadcrumb.
   * Contains the page title (\<h1>) and a descriptive subtitle (\<p>).
2. **Main Content Layout (div with grid grid-cols-1 lg:grid-cols-3 gap-8):** This divides the content into a main section (lg:col-span-2) on the left and a sidebar (lg:col-span-1) on the right for larger screens.
   * **Main Content Area (lg:col-span-2):** Contains several \<section> blocks, each presenting a part of the methodology:
     * "Research Framework" section.
     * "Data Collection Process" section with an ordered list detailing the sources.
     * "Complexity Dimensions" section, outlining the four key areas (Regulatory, Tax, Corporate, Employment & HR) with sub-points listed under each dimension.
     * "Scoring Methodology" section, explaining the scoring scale and the weighting model (highlighted in a bg-blue-50 block).
     * "Validation Process" section with an ordered list detailing the steps.
     * Each section uses styled blocks (bg-white rounded-lg shadow-md p-6 mb-8).
   * **Sidebar Area (lg:col-span-1):**
     * Uses sticky top-8 positioning to keep the sidebar visible while scrolling the main content.
     * Contains a "Methodology Summary" block (bg-white rounded-lg shadow-md p-6) with key facts about the methodology using simple lists.
     * Contains a "Related Resources" block (bg-gray-50 rounded-lg p-6 border) listing links to other GBCI sub-pages (Rankings, Trends) and a direct link to download a PDF methodology paper (using a standard \<a> tag for an external file). Includes SVG icons for link types.
3. **Navigation Buttons (div at the end):** A section with next/link components for navigation back to the GBCI overview page and forward to the Country Rankings page. Uses responsive flexbox (flex flex-col sm:flex-row justify-between) and SVG icons.

#### Styling

Styling is handled by **Tailwind CSS** utility classes via the className attribute. Key styling features include:

* **Layout & Spacing:** container, mx-auto, px-, py-, mb-, mt-, gap-, flex, items-center, justify-between, grid, grid-cols-, lg:grid-cols-, lg:col-span-, sticky, top-8, space-y-.
* **Typography:** text-3xl, text-4xl, font-bold, text-gray-800, text-lg, text-gray-600, text-2xl, font-semibold, text-xl, font-medium, text-gray-700, text-sm.
* **Backgrounds, Borders, Shadows:** bg-white, bg-gray-50, bg-blue-50, rounded-lg, shadow-md, border, border-gray-200.
* **Lists:** list-decimal, list-disc, pl-.
* **Icons:** Using SVG icons within links for visual cues.

The page uses a responsive two-column layout on larger screens, with distinct card-like styling for content blocks and sidebar sections.

#### Key Content Covered

The page serves as a detailed explanation of the GBCI methodology, covering:

* The overarching research framework and its annual update process.
* The three primary data collection sources: expert surveys, statistical data, and regulatory analysis.
* Detailed breakdown of the four dimensions of business complexity assessed: Regulatory, Tax, Corporate Compliance, and Employment & HR, including examples of factors within each.
* Explanation of the 100-point scoring scale and the specific weighting applied to each dimension.
* The validation process used to ensure accuracy and reliability.
* A summary sidebar highlighting key methodological points and providing links to related GBCI content.

#### Usage

As a page.tsx file located within the nested App Router path src/app/risk/global-business-complexity-index/methodology, the component is automatically routed by Next.js and accessible via the URL /risk/global-business-complexity-index/methodology.

It is linked from the main Global Business Complexity Index overview page (/risk/global-business-complexity-index) and provides navigation links to other related GBCI sub-pages.

```
      // Located at src/app/risk/global-business-complexity-index/methodology/page.tsx
// Automatically routes to /risk/global-business-complexity-index/methodology
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JsxIGNORE\_WHEN\_COPYING\_END

#### Dependencies

* react
* next
* Tailwind CSS (via project configuration)

***
