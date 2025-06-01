# Data Model for Portfolio Platform

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
