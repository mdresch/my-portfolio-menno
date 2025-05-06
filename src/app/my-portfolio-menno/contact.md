---
icon: address-book
---

# Contact

***

### Contact Page (src\app\contact\page.tsx)

This document provides detailed information about the ContactPage component, which renders a contact form and related contact information.

#### Overview

The ContactPage component displays a user-friendly contact form allowing visitors to send a message. It manages the form's state, handles user input, simulates a form submission process (including loading and status feedback), and provides additional contact details and social media links. It is implemented as a Client Component to handle form interactions.

#### File Location

The component is located within the Next.js App Router structure:

```
      src/app/contact/page.tsx
    
```

#### Technologies Used

* **React:** Core component library, including useState hook for managing form state and submission status.
* **Next.js (App Router):** Routing (page.tsx) and client-side navigation (next/link).
* **Tailwind CSS:** Styling and layout via utility classes.
* **TypeScript:** Provides type safety (indicated by .tsx extension).

#### 'use client' Directive

The 'use client' directive is present at the top of the file. This is necessary because the component uses the useState hook to manage the interactive state of the form (formData, isSubmitting, submitStatus). This directive designates the component as a Client Component, enabling it to execute in the browser and handle user input and form submission events.

#### Imports

The component imports:

* useState: From react, used for managing component state.
* Link from 'next/link';: Used for creating efficient client-side navigation links (specifically, the "Back to Home" link).

#### Props

As an App Router page component (page.tsx), ContactPage does not accept external props.

#### State

The component manages the following state variables using the useState hook:

* formData (object): An object storing the current values of the form fields (name, email, subject, message). Initialized with empty strings for all fields.
* isSubmitting (boolean): A flag indicating whether the form is currently in the process of submitting. Used to disable the submit button and show a loading indicator. Initialized to false.
* submitStatus (object or null): Stores the result of the form submission simulation. It is an object { success: boolean, message: string } on completion or null when no submission has occurred or after clicking "Send Another Message". Used to display feedback to the user. Initialized to null.

#### Form Handling

The component implements client-side form handling:

* **handleChange(event):** This function is attached to the onChange event of the input, select, and textarea elements. It updates the formData state whenever a form field's value changes, using the name attribute of the target element to update the corresponding property in the state object. Type definitions for the event are used (React.ChangeEvent\<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>).
* **handleSubmit(event):** This function is attached to the form's onSubmit event.
  * e.preventDefault(): Prevents the default browser form submission behavior (which would cause a page reload).
  * setIsSubmitting(true): Sets the isSubmitting state to true.
  * **Submission Simulation:** The code uses setTimeout to simulate an asynchronous form submission process.
    * Inside the setTimeout: setIsSubmitting(false) is set to false to end the loading state. setSubmitStatus is called with a success message object ({ success: true, message: '...' }). The formData is reset to clear the form fields.
    * A comment explicitly notes that a real implementation would replace the setTimeout block with an API call (e.g., fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })).
  * The submit button is disabled (disabled={isSubmitting}) during this simulated process.

#### Structure and Rendering

The component renders a main div container (container mx-auto px-4 py-8). The content is structured into:

1. **Header (\<header>):**
   * Main page title (\<h1> - "Contact Me").
   * Introductory paragraph (\<p>).
2. **Main Content Grid (div with grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto):** This grid divides the main content area into two columns on medium screens and up: a wider one for the form (md:col-span-2) and a narrower one for contact info/social links (md:col-span-1).
   * **Contact Form Area (md:col-span-2):**
     * A styled block (bg-white rounded-lg shadow-md p-8) containing either the submission status message or the form itself, determined by the submitStatus state.
     * **Submission Status Block:** Conditionally rendered when submitStatus is not null. Displays a message in a styled div (p-4 rounded-md) with background/text colors (bg-green-50/text-green-800 or bg-red-50/text-red-800) based on submitStatus.success. Includes a "Send Another Message" button if successful.
     * **Contact Form (\<form>):** Conditionally rendered when submitStatus is null. Contains form groups (div with labels and inputs/select/textarea), input attributes (name, id, required, value, onChange), placeholder text, and the submit button with dynamic text and spinner based on isSubmitting.
   * **Contact Information & Social Links Area (md:col-span-1):**
     * Two separate styled blocks (bg-white rounded-lg shadow-md p-8).
     * **Contact Information Block:** Lists email and location with titles, text, icons (SVGs), and email link. Uses flexbox for layout within each item.
     * **Connect with Me Block:** Lists links to social media profiles (GitHub, Twitter, LinkedIn) with titles, text, icons (SVGs), and external links (target="\_blank"). Uses flexbox for layout within each item.
3. **Prefer Email CTA Section (\<section>):**
   * A styled block (bg-blue-50 rounded-lg p-6 border) highlighting the direct email address as an alternative contact method.
4. **Back to Home Link (div):** A centered next/link at the bottom for easy navigation back to the homepage.

#### Styling

Styling is handled using **Tailwind CSS** utility classes applied via the className attribute. Key styling features include:

* **Layout & Spacing:** container, mx-auto, px-, py-, mb-, gap-, grid, grid-cols-, md:grid-cols-, col-span-, max-w-5xl, space-y-, flex, items-center, justify-center, flex-col.
* **Typography:** text-4xl, font-bold, text-gray-800, text-lg, text-gray-600, text-xl, font-semibold, text-gray-700, text-sm, font-medium, text-blue-600, hover:text-blue-600.
* **Backgrounds, Borders, Shadows:** bg-white, rounded-lg, shadow-md, p-8, bg-green-50, text-green-800, bg-red-50, text-red-800, border, border-gray-300, focus:ring-blue-500, border-blue-500, bg-blue-600, hover:bg-blue-700, transition-colors, bg-blue-50, border-blue-100.
* **Form Element Styling:** Custom padding, borders, rounded corners, focus styles.
* **Button Styling:** Background color, text color, rounded corners, hover effects. Dynamic opacity and cursor for the disabled state (isSubmitting). Includes Tailwind's animate-spin for the loading spinner SVG.
* **Icons:** SVG icons are used for visual elements in the contact info and social links sections, styled with color and size classes.
* **Responsiveness:** md: prefixes are used for the grid column layout.

The page uses a clean, sectioned layout with a prominent form area and sidebar contact details, styled responsively with Tailwind.

#### Key Features

* **Interactive Contact Form:** Allows users to submit messages with input validation (via HTML required).
* **State Management:** Uses useState to track form input values, submission status, and feedback.
* **Simulated Submission:** Provides visual feedback (loading state, success message) for the form submission process using a setTimeout placeholder.
* **Conditional Rendering:** Displays the form or the submission status message based on state.
* **Contact Information Block:** Clearly lists email and location.
* **Social Media Links:** Provides direct links to relevant social profiles with icons.
* **Direct Email CTA:** Offers an alternative method of contact via a highlighted email address.
* **Responsive Layout:** Uses a grid to arrange form and info sections for different screen sizes.
* **Client Component:** Enables client-side interactivity required for the form.

#### Usage

As a page.tsx file located at src/app/contact, the Next.js App Router automatically creates a route for this component. It will be accessible via the URL /contact.

This page is typically linked from the main navigation menu, footer, or other relevant sections of the documentation site.

```
      // Located at src/app/contact/page.tsx
// Automatically routes to /contact
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JsxIGNORE\_WHEN\_COPYING\_END

#### Dependencies

* react
* next
* Tailwind CSS (via project configuration)

***
