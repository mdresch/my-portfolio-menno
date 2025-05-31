// scripts/modules/documentation-generators.js
// Template-based documentation generators for process flows and data models

import {
  safeWriteFile,
  logInfo
} from '../utils.js';
import { REQUIREMENTS_DIR } from '../../config/paths.js';
import path from 'path';

/**
 * Generate and save process flows documentation
 */
export async function saveProcessFlows() {
  const content = `# Concept Process Flows for Requirements Agent Output

## Portfolio Owner

### Project and blog content management
1. User logs in.
2. User creates/edits/deletes a project or blog post.
3. System validates input and saves content.
4. Content is published or updated in the portfolio.
5. User receives confirmation or error notification.

### External service integration management
1. User selects an external service to integrate (e.g., GitHub).
2. System initiates OAuth or API key authentication.
3. User authorizes access.
4. System syncs data and confirms integration.
5. System monitors integration health and notifies user of issues.

### User authentication and authorization
1. User accesses login/register page.
2. User submits credentials or uses SSO.
3. System verifies identity.
4. User is granted access based on role/permissions.

### Analytics data retrieval and display
1. User requests analytics dashboard.
2. System fetches engagement data from database or analytics service.
3. Data is processed and visualized.
4. User views charts and insights.

### Media file management
1. User uploads media files (images, videos, documents).
2. System validates file type and size.
3. Files are stored securely in cloud storage.
4. User can reference files in content.

## Visitors

### Portfolio browsing and interaction
1. Visitor accesses portfolio URL.
2. System loads and displays portfolio content.
3. Visitor navigates through projects and blog posts.
4. System tracks engagement metrics.
5. Visitor can contact portfolio owner or engage with content.

### Search and filtering
1. Visitor uses search functionality.
2. System queries content database.
3. Results are filtered and displayed.
4. Visitor refines search or browses results.

## System Administrator

### User management and moderation
1. Admin accesses admin panel.
2. Admin views user accounts and activity.
3. Admin can suspend/activate accounts or moderate content.
4. System logs admin actions for audit purposes.

### Analytics and reporting
1. Admin requests platform-wide analytics.
2. System aggregates data from all users.
3. Reports are generated and displayed.
4. Admin can export data or configure alerts.

### System maintenance and updates
1. Admin schedules maintenance window.
2. System enters maintenance mode.
3. Updates are deployed and tested.
4. System returns to normal operation.
5. Users are notified of changes.
`;

  const flowsPath = path.join(REQUIREMENTS_DIR, 'process-flows.md');
  await safeWriteFile(flowsPath, content);
  logInfo('Process flows documentation saved.');
}

/**
 * Generate and save data model documentation
 */
export async function saveDataModel() {
  const content = `# Data Model for Portfolio Platform

## Users
- id (PK)
- username
- email
- password_hash
- role (owner, visitor, admin, editor)
- profile_info (JSON or separate fields)
- created_at
- updated_at

## Projects
- id (PK)
- user_id (FK to Users)
- title
- description
- repo_url
- tags
- created_at
- updated_at

## BlogPosts
- id (PK)
- user_id (FK to Users)
- title
- content (Markdown/HTML)
- status (draft/published)
- created_at
- updated_at

## Analytics
- id (PK)
- user_id (FK to Users)
- event_type (page_view, project_view, contact_form)
- event_data (JSON)
- timestamp
- visitor_id (for tracking unique visitors)

## Integrations
- id (PK)
- user_id (FK to Users)
- service_name (github, devto, linkedin)
- access_token (encrypted)
- refresh_token (encrypted)
- config (JSON)
- last_sync
- status (active/inactive/error)

## Media
- id (PK)
- user_id (FK to Users)
- filename
- file_path
- file_size
- mime_type
- uploaded_at

## Comments (if enabled)
- id (PK)
- post_id (FK to BlogPosts)
- author_name
- author_email
- content
- status (pending/approved/spam)
- created_at
`;

  const modelPath = path.join(REQUIREMENTS_DIR, 'data-model.md');
  await safeWriteFile(modelPath, content);
  logInfo('Data model documentation saved.');
}
