---
icon: pen-to-square
---

# Edit Project

The Edit Project page component provides a form for creating a new project entry or editing an existing one. It is designed to capture various aspects of a project, such as title, description, technologies used, publication date, images, and more. This page is intended to be reusable in both "create" and "edit" contexts based on the presence of an initial project object.

### 1. Component Overview

* **Purpose:** The component’s main purpose is to present a form that allows users to input or modify project data. Once submitted, the data is passed up to a parent component via an `onSubmit` callback, while an `onCancel` callback allows the user to dismiss the form without saving.
* **Technologies Used:** Built using React hooks (e.g., `useState`) to manage form state, this component leverages standard HTML form elements (inputs, textareas, select dropdowns) along with Tailwind CSS for styling.

### 2. Data Structures

#### **Interfaces**

* **Project Interface:** This interface defines the shape of a project object. It includes:
  * `title` and `description`: Project's title and brief description.
  * `technologies`: An array of strings representing the technologies used.
  * Optional fields such as `link`, `datePublished`, `category`, `image`, `caseStudy`, `screenshots`, and `outcomes`.
* **ProjectFormProps Interface:** This defines the props for the form:
  * `initialProject` (optional): Pre-filled project data for editing.
  * `onSubmit`: Function to handle form submission.
  * `onCancel` (optional): Function to handle form cancellation.

#### **Dropdown Options**

* **techOptions:** A fixed array of technology options (e.g., 'React', 'Node.js', etc.) that users can select from.
* **categoryOptions:** A fixed array of category options (e.g., 'WebApplication', 'BusinessApplication', etc.) that classify the project.

### 3. Component State and Handlers

#### **State Initialization**

* The component initializes its state using `useState` to track the project object.
  * If an `initialProject` is provided, the state starts with that data; otherwise, it initializes with default empty values.

#### **Event Handlers**

* **handleChange:** Generalized handler to update the project state when inputs or textareas change. It uses the `name` attribute of the input to update the corresponding property in the project object.
* **handleTechChange:** Specifically handles changes for the technologies select element. It captures multiple chosen options and updates the `technologies` array accordingly.
* **handleScreenshotsChange:** Reads a comma-separated string of URLs and converts it into an array, updating the `screenshots` field in the project object.
* **handleOutcomesChange:** Processes multi-line input for outcomes. It splits the input by newlines, trims the entries, filters out empty lines, and updates the `outcomes` array.
* **handleSubmit:** Prevents the default form submission behavior and calls the `onSubmit` callback with the current state of the project. This is the primary method for saving the form data.

### 4. Form Layout and Styling

* **Form Container:** The `<form>` is styled using Tailwind CSS classes such as `space-y-4`, `bg-white`, `p-6`, `rounded`, and `shadow-md` to provide spacing between elements, a clean background, padding, rounded corners, and a subtle shadow for a card-like appearance.
* **Form Title:** The heading in the form changes dynamically:
  * Displays "Edit Project" if an `initialProject` is provided.
  * Displays "New Project" if adding a new project.
* **Input Elements:** Each input field (for title, description, link, etc.) is styled with consistent classes (`border`, `rounded`, `px-3`, `py-2`, and `w-full`) to ensure uniform appearance and spacing.
* **Multi-Select for Technologies:** The technologies field uses a `<select>` element with the `multiple` attribute, allowing users to select multiple technologies. A small helper text is provided to instruct users on how to select multiple values using Ctrl (Windows) or Cmd (Mac).
* **Specialized Handlers for Screenshots and Outcomes:** The screenshots and outcomes fields use custom handlers to process complex data types (arrays), ensuring that the input string is properly parsed and stored.
* **Action Buttons:** At the bottom of the form:
  * A **submit button** dynamically labels itself as "Update" or "Create" based on whether the form is in edit mode.
  * An optional **Cancel button** is shown if an `onCancel` handler is provided, allowing users to back out of the form.

### 5. Usage

#### **Creating a New Project**

When no `initialProject` prop is passed:

* The form initializes with empty fields.
* Upon submission, a new project object is created and passed to the parent via the `onSubmit` callback.

#### **Editing an Existing Project**

When an `initialProject` is provided:

* The form fields are pre-populated with existing data.
* Any updates are applied and, upon submission, the updated project object is returned via the `onSubmit` callback.

#### **Integration with Parent Components**

This component is meant to be integrated within a broader project management interface where:

* The `onSubmit` callback updates the list of projects in the parent state.
* The `onCancel` callback can be used to close the form modal without making any changes.

### 6. Conclusion

The New Project page (or ProjectForm component) is a flexible, user-friendly form designed to handle both the creation and editing of project entries. With its dedicated state management, clear input fields, and thoughtful UI elements styled by Tailwind CSS, this page offers a comprehensive solution for managing project data within your portfolio.
