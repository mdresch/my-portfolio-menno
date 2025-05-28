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

## MediaFiles
- id (PK)
- user_id (FK to Users)
- file_url
- file_type
- linked_project_id (nullable, FK to Projects)
- linked_blogpost_id (nullable, FK to BlogPosts)
- uploaded_at

## Integrations
- id (PK)
- user_id (FK to Users)
- service_name (GitHub, Dev.to, etc.)
- access_token (encrypted)
- status
- last_synced_at

## Analytics
- id (PK)
- user_id (FK to Users)
- type (project_view, blog_view, etc.)
- target_id (FK to Projects or BlogPosts)
- count
- date

## Notifications
- id (PK)
- user_id (FK to Users)
- type
- message
- is_read
- created_at

## Comments
- id (PK)
- blogpost_id (FK to BlogPosts)
- user_id (FK to Users, nullable for anonymous)
- content
- created_at

## SupportTickets
- id (PK)
- user_id (FK to Users)
- subject
- description
- status (open, closed, pending)
- created_at
- updated_at

## Drafts
- id (PK)
- user_id (FK to Users)
- type (project, blogpost)
- content
- version
- created_at
- updated_at
