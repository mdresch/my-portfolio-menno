# Projects

## Projects Page Documentation

The Projects page is a client-side rendered component built with React and Next.js. . It is designed to display a list of projects, enable filtering by search query, technology, or category, and support adding/editing projects through a dynamic form modal. The following sections describe its key components and functionality.

### **1. Client-Side Rendering and Imports**

At the very top of the file, the `"use client";` directive informs Next.js  that this component should be rendered on the client. The component imports several dependencies:

* **React & useState:** For managing state (such as search queries, filters, form visibility, and project list).
* **ProjectJsonLd:** A component that outputs structured JSON-LD data for each project. This improves SEO and provides metadata for search engines.
* **ProjectForm:** A form component used to add or edit projects. The form is displayed in a modal.
* **marked:** A Markdown parser that is used to convert Markdown content (e.g., case studies) to HTML.
* **ProjectMarkdown:** A type (interface) defining the expected shape of project data, including frontmatter (metadata) and content.

### **2. Component State and Data Preparation**

Inside the component, several state variables are declared:

* **query:** Holds the search query string to filter projects by title or description.
* **selectedTech & selectedCategory:** Store the currently selected technology and category for filtering.
* **showForm & editIndex:** Control visibility of the project form modal and track whether an existing project is being edited (by its index) or a new one is being added.
* **projectList:** Maintains the current list of projects. Initially, it is set to the list passed through props.

#### **Derived Data**

* **allTechs:** A unique list of all technologies used in projects, generated using a `Set` on the flattened technologies arrays from each project.
* **allCategories:** A distinct list of project categories extracted from the project list. This aids in populating the category filter.

### **3. Filtering Logic**

The component uses the following filtering criteria to determine which projects are displayed:

* **Text Search (query):** It checks if the project’s title or description (converted to lowercase) contains the query text.
* **Technology Filter (selectedTech):** If a technology is selected, the project must include that technology in its `technologies` array.
* **Category Filter (selectedCategory):** When a category is chosen, the project’s category must exactly match.

Only projects meeting all the active criteria are included in the `filteredProjects` array.

### **4. Project Form Functionality**

The Projects page supports both adding new projects and editing existing ones via a form modal:

* **handleFormSubmit:** This function updates the project list when the form is submitted.
  * If editing (i.e., `editIndex` is not null), it replaces the project at that index.
  * If adding a new project, it appends the new project object to the project list.
* **handleEdit & handleNew:** These toggle the form's visibility and set the editing context.
  * **handleEdit:** Sets the `editIndex` to the index of the project to be edited and shows the form.
  * **handleNew:** Clears any editing context and brings up a blank form for a new project.
* **handleCancel:** Hides the form and resets `editIndex` without making changes.

The modal is rendered conditionally when `showForm` is true, displaying the `ProjectForm` component in an overlay.

### **5. Rendering the Main Interface**

The main `return` block of the component consists of several sections:

* **Structured Data Injection:** At the top, the component maps over the project list and renders a `<ProjectJsonLd>` component for each project to add SEO metadata.
* **Heading & New Project Button:** A large heading ("My Projects") is shown followed by a button that triggers the new project form.
* **Filter Controls:** A flex container holds:
  * A search input for filtering projects by text.
  * Two `<select>` dropdowns for filtering projects by technology and category using the derived `allTechs` and `allCategories` arrays.
* **Project Listing Grid:** The filtered projects are displayed in a responsive grid layout:
  * **Project Card:** Each card shows the title, description, and (if available) a case study (rendered from Markdown using `marked.parse`), screenshots, outcomes, and technologies (rendered as badges).
  * If a project has an external link, a clickable anchor is rendered with a call-to-action label (e.g., "View Project →").
  * An "Edit" button is positioned in the top-right corner of each project card, allowing inline editing via the modal.
* **Conditional Rendering:** If no projects match the filters, a notification card with a message ("No projects found.") is displayed.

### **6. Styling and UX Considerations**

The interface makes heavy use of Tailwind CSS classes:

* **Layout & Spacing:** Classes like `container`, `mx-auto`, `px-4`, and `py-8` ensure the content remains well-centered and padded.
* **Responsive Design:** Grid layouts (`grid-cols-1 md:grid-cols-2`) allow for responsiveness across devices.
* **Visual Feedback:** Buttons have hover states (e.g., `hover:bg-blue-700`, `hover:shadow-xl`) that enhance user interaction.
* **Modal Presentation:** The form modal uses fixed positioning with a translucent overlay for focus and visibility.

### **Conclusion**

The Projects page is designed to empower users with dynamic project management capabilities:

* **Interactive Filtering:** Enable users to search, filter, and browse projects effortlessly.
* **Inline Editing:** Provide an in-app mechanism for adding, editing, and maintaining project details using a modal form.
* **SEO Integration:** Leverage structured data (via `ProjectJsonLd`) to enhance discoverability.

This comprehensive setup not only makes managing portfolio projects straightforward but also ensures a high-quality user experience and maintainability going forward.
