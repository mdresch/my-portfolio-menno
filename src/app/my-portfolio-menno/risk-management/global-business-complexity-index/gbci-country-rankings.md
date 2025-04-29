---
icon: globe
---

# GBCI Country Rankings

***

### GBCI Country Rankings Page (src\app\risk\global-business-complexity-index\rankings\page.tsx)

This document provides documentation for the RankingsPage component, which displays a sortable and filterable table of countries ranked by the Global Business Complexity Index.

#### Overview

The RankingsPage component renders a page that presents the full list of countries included in the Global Business Complexity Index report in a tabular format. Users can filter the list by region, search by country name, and sort the table by various columns (Rank, Country, Region, Overall Score, Dimension Scores, Trend). The page also includes information about the scoring ranges and trend indicators.

#### File Location

The component is located within the Next.js App Router structure, nested under the GBCI page:

```
      src/app/risk/global-business-complexity-index/rankings/page.tsx
    
```

#### Technologies Used

* **React:** Core component library, including useState for managing component state (filter, sort, search).
* **Next.js (App Router):** Routing and client-side navigation (next/link).
* **Tailwind CSS:** Styling and layout via utility classes.
* **TypeScript:** Provides type safety (indicated by .tsx extension).
* **@/lib/riskData:** Imports data (allCountryData) and helper functions (getComplexityColor) from a local data source.
* 'use client': Directive required for using React Hooks (useState).

#### 'use client' Directive

The 'use client' directive is included at the top of the file. This is mandatory because the component uses the useState hook to manage the interactive elements of the page (filtering, sorting, searching). This marks the component as a Client Component, enabling it to run in the browser and handle user interactions.

#### Imports

The component imports:

* import React, { useState } from 'react';: Standard import for React and the useState hook.
* import Link from 'next/link';: Used for client-side navigation to the parent GBCI page and country detail pages.
* import { allCountryData, getComplexityColor } from '@/lib/riskData';: Imports the data source containing country complexity information and a utility function to get color classes based on complexity scores.

#### State

The component manages the following state variables using the useState hook:

* filter (string): Holds the currently selected region filter ("all", "EMEA", "Americas", "APAC"). Initialized to "all".
* sortBy (string): Holds the key of the column currently being sorted ("rank", "country", "region", "overall", "regulatory", "tax", "corporate", "employment", "trend"). Initialized to "rank".
* sortOrder (string): Holds the current sort order ("asc" or "desc"). Initialized to "asc".
* searchTerm (string): Holds the value entered into the search input. Initialized to "".

These state variables control how the allCountryData is filtered and sorted before being rendered in the table.

#### Helper Components/Functions

* **TrendIcon({ trend }):** A small functional component that takes a trend string ("up", "down", or anything else) and returns the corresponding SVG icon (up arrow, down arrow, or horizontal line) with appropriate color styling.
* **getComplexityColor(score):** (Imported from @/lib/riskData) This function takes a complexity score (number) and returns the Tailwind CSS class string corresponding to its complexity level color (e.g., "bg-red-100 text-red-800" for Very High complexity).

#### Structure and Rendering

The component renders a main div container (container mx-auto px-4 py-8). The content is structured as follows:

1. **Header (\<header>):**
   * Includes a "Back to Global Business Complexity Index" Link with an SVG arrow icon.
   * Contains the page title (\<h1>) and a descriptive subtitle (\<p>).
2. **Introduction & Color Legend Section (\<section>):**
   * Provides a brief description of the rankings page.
   * Displays the color legend for complexity score ranges using styled \<span> elements with Tailwind background and text color classes.
3. **Filter and Search Controls (div within the \<section>):**
   * Contains input elements for filtering and searching:
     * A \<select> dropdown for filtering by region, updating the filter state.
     * An \<input type="text"> for searching by country name, updating the searchTerm state.
   * Uses flexbox (flex flex-col md:flex-row gap-4) for responsive layout of controls.
4. **Rankings Table (div with overflow-x-auto):**
   * A wrapper div with overflow-x-auto to ensure the table is scrollable horizontally on smaller screens if it exceeds the container width.
   * A \<table> element displays the country data.
   * **Table Header (\<thead>):**
     * Includes table headings (\<th>) for each column (Rank, Country, Region, Overall, Regulatory, Tax, Corporate, Employment, Trend).
     * Headings are clickable (onClick={() => toggleSortOrder(...) }) to trigger sorting.
     * Includes conditional rendering to show an up or down arrow next to the currently sorted column heading.
     * Dimension columns (Regulatory, Tax, Corporate, Employment) are hidden on screens smaller than 'md' using hidden md:table-cell.
   * **Table Body (\<tbody>):**
     * Maps over the filteredData array (which is the result of applying the current filter, searchTerm, and sortOrder to allCountryData).
     * For each country object, a table row (\<tr>) is rendered.
     * Table cells (\<td>) display the country data.
     * Country names are wrapped in a Link to potentially navigate to a detailed country profile page (the URL is dynamically generated based on the country name).
     * Complexity scores (Overall, Regulatory, etc.) are displayed within \<span> elements styled using getComplexityColor.
     * The Trend column displays the TrendIcon component.
5. **Mobile Hint (div):** A text block visible only on small screens (md:hidden) providing a hint about clicking country names for details.
6. **Understanding Metrics Section (\<section>):** Explains what each dimension metric and trend indicator represents using bulleted lists.
7. **Call to Action Block (div):** A styled block (bg-blue-50 rounded-lg p-6 border) promoting comprehensive country profiles, with a Link button.
8. **Navigation Buttons (div at the end):** A section with next/link components for navigation back to the Methodology page and forward to the Trends & Insights page. Uses responsive flexbox and SVG icons.

#### Styling

Styling is handled by **Tailwind CSS** utility classes via the className attribute. Key styling features:

* **Layout & Spacing:** container, mx-auto, px-, py-, mb-, mt-, gap-, flex, items-center, justify-between, flex-col, md:flex-row, flex-1, space-y-.
* **Typography:** text-3xl, text-4xl, font-bold, text-gray-800, text-lg, text-gray-600, text-2xl, font-semibold, text-xl, font-medium, text-gray-700, text-sm, text-xs, uppercase, tracking-wider, italic.
* **Backgrounds, Borders, Shadows:** bg-white, bg-gray-50, rounded-lg, shadow-md, shadow-sm, border, border-gray-300, divide-y, divide-gray-200, bg-blue-50, border-blue-100.
* **Table Styling:** table-auto, w-full, px-, py-, text-left, hover:bg-gray-50. Hidden/visible columns on different breakpoints using hidden md:table-cell.
* **Complexity Color Spans:** Using dynamic classes generated by getComplexityColor (e.g., bg-red-100 text-red-800) applied to score \<span> elements.
* **Interactivity Indicators:** cursor-pointer on table headers.
* **Icons:** Using SVG icons within links and the TrendIcon component.

The page utilizes responsive design for the filter controls and table columns, and employs state management to update the displayed data based on user interactions.

#### Key Content Covered

The page serves as an interactive presentation of the GBCI country data:

* A ranked list of 77 jurisdictions based on business complexity.
* Breakdown of complexity scores by four dimensions: Regulatory, Tax, Corporate, and Employment.
* Indication of year-over-year complexity trend for each country.
* Interactive filtering by region and searching by country name.
* Clickable column headers for sorting the data.
* Explanation of the complexity score ranges and trend icons.
* Links to potential detailed country profile pages.
* Call to action for further analysis or resources.

#### Usage

As a page.tsx file located at src/app/risk/global-business-complexity-index/rankings, the Next.js App Router automatically creates a route for this component. It will be accessible via the URL /risk/global-business-complexity-index/rankings.

This page is linked from the main Global Business Complexity Index overview page (/risk/global-business-complexity-index) and provides navigation links to the Methodology and Trends & Insights pages. It also dynamically generates links to hypothetical country detail pages.

```
      // Located at src/app/risk/global-business-complexity-index/rankings/page.tsx
// Automatically routes to /risk/global-business-complexity-index/rankings
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JsxIGNORE\_WHEN\_COPYING\_END

#### Dependencies

* react
* next
* @/lib/riskData (containing allCountryData and getComplexityColor)
* Tailwind CSS (via project configuration)
