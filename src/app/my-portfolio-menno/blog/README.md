# Blog

***

### Blog Page Wrapper (src\app\blog\page.tsx)

This document provides detailed information about the BlogPageWrapper component, which serves as the main landing page for the blog section of the documentation site.

#### Overview

The BlogPageWrapper component is a client-side page component responsible for fetching and displaying a list of blog posts. It provides interactive features such as searching by keyword and filtering by category and year, allowing users to easily find relevant blog content.

#### File Location

The component is located within the Next.js App Router structure:

```
      src/app/blog/page.tsx
    
```

#### Technologies Used

* **React:** Core component library, including useState and useEffect hooks.
* **Next.js (App Router):** Routing (page.tsx) and client-side navigation (next/link).
* **Tailwind CSS:** Styling and layout via utility classes.
* **TypeScript:** Provides type safety (indicated by .tsx extension).
* **fetch API:** Used within useEffect to fetch data from an internal API route (/api/posts).
* **BlogSearch (Custom Component):** Used for the search input functionality.

#### 'use client' Directive

The "use client" directive is present at the top of the file. This is necessary because the component uses React Hooks (useState, useEffect) to manage its state (search query, filters, post data) and perform client-side data fetching. This directive designates the component as a Client Component, enabling it to run in the browser.

#### Imports

The component imports:

* React, { Suspense, useState }: Standard React import and the useState hook. (Suspense is imported but not used in the provided code).
* Metadata: Imported but not used in this client component. Metadata is typically handled in server components or a generateMetadata function.
* fetchPostsFromGitHub: Imported from @/lib/github but is not called or used within this client component's logic.
* Link from 'next/link';: Used for client-side navigation to individual blog post pages.
* BlogPost from '@/components/blog/BlogPost';: Imported but is **not used** in the component's JSX. The blog post list items render the post summary directly.
* notFound from 'next/navigation';: Imported but is not used in the provided code.
* BlogSearch from '@/components/BlogSearch';: Imports and uses the custom search input component.
* CategoryFilter from '@/components/CategoryFilter';: Imported but is **not used** in the component's JSX. Filtering is implemented using native \<select> elements.

#### Props

As an App Router page component (page.tsx), BlogPageWrapper does not accept external props passed directly from parent components. It manages all necessary data and state internally.

#### State

The component manages the following state variables using the useState hook:

* query (string): Stores the current search query entered by the user. Initialized to an empty string.
* selectedCategory (string): Stores the category selected by the user in the filter dropdown. Initialized to an empty string.
* selectedYear (string): Stores the year selected by the user in the filter dropdown. Initialized to an empty string.
* posts (array): Stores the array of blog post objects fetched from the API. Initialized as an empty array.

The component also defines, but does not use in its current logic, sortBy (string), sortOrder (string), and toggleSortOrder (function), which seem intended for sorting functionality that is not implemented in the filtering logic.

#### Data Fetching

Blog post data is fetched client-side using the useEffect hook:

```
      React.useEffect(() => {
  fetch('/api/posts')
    .then(res => res.json())
    .then(data => setPosts(data.filter((post: any) => post && post.title && post.slug)));
}, []); // Empty dependency array ensures this runs only once after the initial render
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JavaScriptIGNORE\_WHEN\_COPYING\_END

* The effect runs only once after the component mounts due to the empty dependency array \[].
* It fetches data from the /api/posts endpoint (presumably a Next.js API route that retrieves and processes blog post data).
* It processes the fetched data by filtering out any items that don't have a title or slug before setting the posts state.

#### Filtering Logic

The component implements filtering based on the current state (query, selectedCategory, selectedYear). This is done synchronously whenever one of these state variables changes, by computing filteredPosts:

```
      const filteredPosts = posts.filter((post: any) => {
  // Checks if title, excerpt, or author contains the search query (case-insensitive)
  const matchesQuery = /* ... */;
  // Checks if the post has categories and includes the selected category, or if no category is selected
  const matchesCategory = selectedCategory ? (post.categories || []).includes(selectedCategory) : true;
  // Checks if the post date's year matches the selected year, or if no year is selected
  const matchesYear = selectedYear ? new Date(post.date).getFullYear().toString() === selectedYear : true;
  return matchesQuery && matchesCategory && matchesYear; // Post must match all active criteria
});
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JavaScriptIGNORE\_WHEN\_COPYING\_END

The filteredPosts array is then used to render the list of blog posts. The component defines state and a function (sortBy, sortOrder, toggleSortOrder) for sorting but does not apply any sorting logic to filteredData in the provided code.

#### Structure and Rendering

The component renders a main div container (max-w-4xl mx-auto px-4 py-8). The layout is structured as follows:

1. **Page Title (\<h1>):** Displays "Blog".
2. **Filter/Search Controls (div):** A container (flex flex-col md:flex-row gap-4 mb-6) holding the input elements for filtering and searching:
   * **Search Input:** Renders the BlogSearch component, passing the setQuery function to its onSearch prop.
   * **Category Select:** A native HTML \<select> dropdown. Its value is bound to selectedCategory, and selecting an option updates this state. Options are dynamically generated from unique categories found in the posts data.
   * **Year Select:** A native HTML \<select> dropdown. Its value is bound to selectedYear, and selecting an option updates this state. Options are dynamically generated from unique years found in the posts data and sorted descending.
   * The controls are laid out vertically on small screens and horizontally on medium screens and up.
3. **Conditional Content:**
   * If filteredPosts.length is 0, a styled warning block (bg-yellow-50 border-l-4 border-yellow-500) with a "No blog posts found" message is displayed.
   * If filteredPosts.length is greater than 0, a list (\<ul> with space-y-8) is rendered.
4. **Blog Post List Items (\<li>):** Each item in filteredPosts is mapped to an \<li>. Each \<li> contains:
   * **Cover Image:** Conditionally renders an \<img> tag if post.coverImage exists. It includes layout/styling classes (w-40 h-28 relative rounded overflow-hidden), object-cover, loading="lazy", and an eslint-disable-next-line comment to suppress the Next.js Image component warning when using a standard \<img>.
   * **Post Summary:** A div containing:
     * **Title:** A next/link component (\<a> styled as a link) with the post title (post.title), navigating to the individual post page (/blog/${post.slug}).
     * **Metadata:** A div displaying the author (post.author) and reading time (post.readingTime) if they exist.
     * **Excerpt:** Conditionally renders a paragraph (\<p>) with the post excerpt (post.excerpt), using line-clamp-3 to limit it to three lines.

#### Styling

Styling is entirely handled by **Tailwind CSS** utility classes applied via the className attribute. This includes:

* **Layout and Spacing:** max-w-4xl, mx-auto, px-4, py-8, mb-, gap-4, flex, flex-col, md:flex-row, space-y-8, items-start, flex-shrink-0, w-40, h-28, relative.
* **Typography:** text-3xl, font-bold, text-xl, text-blue-700, hover:underline, font-semibold, text-sm, text-gray-500, text-gray-600, mt-2, line-clamp-3.
* **Backgrounds, Borders, Shadows:** border, rounded, bg-yellow-50, border-l-4, border-yellow-500, p-4, bg-gray-100.
* **Conditional/Utility:** line-clamp-3, overflow-hidden, object-cover.

The page uses a responsive layout for the filters and search bar and a card-like structure for the list items.

#### Key Features

* **Client-side Data Fetching:** Retrieves blog posts after the page loads in the browser.
* **Keyword Search:** Allows users to filter posts by terms in the title, excerpt, or author.
* **Category Filtering:** Enables filtering posts by selecting categories from a dropdown.
* **Year Filtering:** Allows filtering posts by the publication year using a dropdown.
* **Dynamic Filter Options:** The category and year filter options are generated based on the data fetched.
* **Responsive Layout:** Filters and search bar adjust layout on different screen sizes.
* **No Results Indication:** Clearly informs the user when no posts match the current filters/search.
* **Post Summaries:** Displays a brief overview of each post with image, title, metadata, and excerpt.
* **Client-side Navigation:** Uses next/link for smooth page transitions to individual blog posts.

#### Usage

As a page.tsx file located at src/app/blog, the Next.js App Router automatically creates a route for this component. It will be accessible via the URL /blog.

This page serves as the main landing page for the blog and is typically linked from the site's main navigation.

```
      // Located at src/app/blog/page.tsx
// Automatically routes to /blog
    
```

IGNORE\_WHEN\_COPYING\_STARTcontent\_copy  downloadUse code [with caution](https://support.google.com/legal/answer/13505487). JsxIGNORE\_WHEN\_COPYING\_END

#### Dependencies

* react
* next
* @/components/BlogSearch
* Implicit dependency on a /api/posts route.
* Tailwind CSS (via project configuration)

***
