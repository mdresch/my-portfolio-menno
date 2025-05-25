---
icon: file-user
---

# Interactive Resume

***

### Interactive Resume Page (src\app\resume\page.tsx)

This document provides detailed information about the ResumePage component, which renders the interactive resume page.

#### Overview

The ResumePage component is responsible for rendering the main page that displays the interactive version of the professional resume. It sets the page's static metadata for SEO purposes and delegates the rendering of the actual resume content and its interactivity to a dedicated child component, ResumeContainer.

#### File Location

The component is located within the Next.js App Router structure:

```
      src/app/resume/page.tsx
    
```

#### Technologies Used

* **React:** Core component library.
* **Next.js (App Router):** Routing (page.tsx), Static Metadata API (metadata export), Server Components.
* **TypeScript:** Provides type safety (indicated by .tsx extension).
* **Tailwind CSS:** Styling and layout via utility classes.
* **ResumeContainer (Custom Component):** Renders the core interactive resume content.

#### Server Component (Absence of 'use client')

Since the 'use client' directive is not present at the top of this file, this component is a **Server Component** by default in the Next.js App Router. It renders on the server and sends the resulting HTML to the browser. This is suitable for this page component as its primary role is setting metadata and rendering a child component (ResumeContainer), which might itself be a Client Component if it requires interactivity (like handling clicks, filtering, etc.). The static nature of this outer shell benefits from server rendering.

#### Imports

The component imports:

* import React from 'react';: Standard React import for JSX.
* import { Metadata } from 'next';: Type definition for the exported metadata object.
* import ResumeContainer from '@/components/resume/ResumeContainer';: Imports the custom component responsible for rendering the main resume content.

#### Props

As an App Router page component (page.tsx), ResumePage does not accept external props passed directly.

#### State

This component is a static Server Component and does not use React state hooks (e.g., useState) or manage any internal, dynamic state.

#### Metadata (metadata export)

The page exports a static metadata object to define SEO information:

```
      export const metadata: Metadata = {
  // ... metadata properties ...
};
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). TypeScriptIGNORE\_WHEN\_COPYING\_END

This object configures:

* title: The title displayed in the browser tab or search results.
* description: A brief summary for search engine results.
* keywords: Relevant search terms.
* openGraph: Metadata for social media sharing previews (title, description, type set to 'profile', images - with specified URL, dimensions, and alt text, canonical URL). Note the placeholder image URL and the explicit baseUrl needed for absolute URLs.
* twitter: Metadata specifically for Twitter cards (card type, title, description, images). Uses the same placeholder image URL.
* alternates.canonical: Specifies the canonical URL for the page, important for SEO to prevent duplicate content issues. The explicit URL (https://my-portfolio-menno.vercel.app/resume) is provided.

This metadata is processed by Next.js at build time or on request to generate the \<head> section of the HTML document.

#### Structure and Rendering

The ResumePage component renders a main div container:

1. **Container (div with container mx-auto px-4 py-8):** Provides responsive centering and padding for the page content using Tailwind classes.
2. **Page Title (\<h1>):** Displays "Interactive Resume" with centering and margin classes (text-3xl font-bold text-center mb-8).
3. **Resume Content (ResumeContainer):** Renders the ResumeContainer component. This is where the actual interactive resume content (sections, experience, skills, etc.) is displayed and managed.

#### Styling

Styling is primarily handled by **Tailwind CSS** utility classes applied to the main div container and the \<h1> element. The layout, typography, and spacing for these top-level elements are controlled here. The visual presentation and interactive styling of the actual resume content (experience entries, skill lists, etc.) are the responsibility of the ResumeContainer child component and its descendants.

#### Key Features

* **Static SEO Metadata:** Provides rich metadata for search engines and social sharing using Next.js's built-in API.
* **Server-side Rendering (SSR):** Renders the initial page structure on the server, benefiting performance.
* **Modularity:** Separates the page layout and metadata definition from the complex interactive resume content rendering logic (handled by ResumeContainer).
* **Clear Structure:** Simple HTML structure for the page wrapper.

#### Usage

As a page.tsx file located at src/app/resume, the Next.js App Router automatically creates a route for this component. It will be accessible via the URL /resume.

This page is intended to be linked from the main navigation menu or other relevant sections of the documentation site.

```
      // Located at src/app/resume/page.tsx
// Automatically routes to /resume
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JsxIGNORE\_WHEN\_COPYING\_END

#### Dependencies

* react
* next
* @/components/resume/ResumeContainer
* Tailwind CSS (via project configuration)

***
