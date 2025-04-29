---
icon: globe
---

# Global Financial Stability Risks

File Location

The component is located within the Next.js App Router structure:\
src/app/risk/global-financial-stability-risks/page.tsx

Technologies Used

The component is built using React, Next.js (specifically the App Router), Tailwind CSS for styling, and TypeScript for type safety.

'use client' Directive

The 'use client' directive is explicitly not included at the top of the file. This designates the component as a Server Component in the Next.js App Router framework. This means the component is primarily rendered on the server before being sent to the client's browser. This is suitable for components that display static content and do not require client-side interactivity like hooks, state management, or browser APIs.

Imports

The component imports the standard React library for using JSX:\
import React from 'react';

Props

As an App Router Page component (page.tsx), this component is not designed to accept external props directly. Its content is self-contained and static as defined within the component file.

State

Based on the provided code, the GlobalFinancialStabilityRisksPage component is stateless. It does not manage any internal state using React's useState or useReducer hooks, consistent with its nature as a static, presentational component suitable for server rendering.

Structure and Rendering

The component renders a main container div that centers the content and applies standard horizontal and vertical padding to create visual space around the text.

The page content is organized into distinct sections:

1. **Header:** A header element is positioned at the top and centered on the page. It contains the main title of the page ("Global Financial Stability Risks: Trade Uncertainty & Geopolitical Shocks") styled with a large, bold font and a dark gray color, followed by a slightly smaller, lighter gray subtitle providing a brief description of the content.
2. **Overview Section:** This section is presented within a centered container with a maximum width. It has a white background, rounded corners, and is styled with a shadow to make it visually distinct. Inside, a smaller, bold heading introduces the "Overview". The main text is presented in paragraphs with comfortable line spacing and a dark gray color, followed by a bulleted list outlining the primary drivers of the risks, with key phrases in bold.
3. **Key Findings & Vulnerabilities Section:** This section uses the same centered, maximum-width container as the overview but has a light gray background, rounded corners, and a subtle shadow. It also includes a light gray border on all sides for additional visual separation. A bold heading introduces "Key Findings & Vulnerabilities". The section includes a description text and then presents the specific findings as a bulleted list, with each vulnerability highlighted in bold.
4. **Policy Recommendations Section:** Similar to the overview, this section is in a centered, maximum-width container with a white background, rounded corners, and a shadow. A bold heading introduces "Policy Recommendations". The recommendations themselves are presented as a numbered, ordered list, with each recommendation starting with a bold phrase and followed by descriptive text.
5. **Footer:** A footer element is centered at the bottom of the page. It contains a small, light gray text attribution for the source report. Below this, a div provides vertical spacing and contains a link styled as blue text with an underline hover effect, allowing users to navigate back to the main Risk Overview page.

Styling

Tailwind CSS utility classes are used throughout the component to apply styling directly via the className attribute.

* Layout is managed using classes like container, mx-auto for centering and setting maximum width, px-4, py-12 for padding, and mb-, mt-, space-y- for vertical spacing between elements.
* Typography is controlled with classes like text-4xl, text-2xl, text-xl, text-lg, text-sm for different font sizes, font-bold, font-semibold for font weights, text-gray-800, text-gray-600, text-gray-700, text-gray-500, text-blue-600 for text colors, text-center for alignment, and leading-relaxed for line spacing.
* The visual appearance of sections is created using background colors (bg-white, bg-gray-50), rounded corners (rounded-lg, rounded-sm), shadows (shadow-md, shadow-sm), and borders (border, border-gray-200).
* Lists are styled using utility classes like list-disc, list-inside for bullet points and list-decimal, list-inside for numbered lists, along with space-y- for spacing between list items.
* The navigation link uses hover:underline to provide a visual cue on hover.

Key Content Covered

The page documents a combined summary of the key findings and policy recommendations from Chapters 1 and 2 of the IMF Global Financial Stability Report, April 2025. It outlines the primary drivers of increased risks (geopolitical risks, trade uncertainty, tightening conditions), details specific vulnerabilities identified across different segments of the financial system and economies, and presents a set of recommended policy actions to enhance resilience.

Usage

This file functions as a dedicated page route within the Next.js App Router structure. Located at src/app/risk/global-financial-stability-risks/page.tsx, it is automatically accessible at the /risk/global-financial-stability-risks URL path. It is intended to be a destination page, typically linked from an overview page like /risk.

Dependencies

The component relies on React, the Next.js framework environment (for routing and server components), and a configured Tailwind CSS setup within the project.
