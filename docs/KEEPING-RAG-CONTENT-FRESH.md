# Keeping RAG Content Fresh

This document explains how to keep your RAG (Retrieval Augmented Generation) chatbot content up-to-date.

## Content Sources

The RAG chatbot uses content extracted from the following sources:

- Blog posts (`content/blog/*.md`)
- Projects (`content/project/*.md`) 
- Risk-related content

## Extraction Process

Content is extracted using three scripts in the `scripts/` directory:

1. `extract-blog-content.ts`: Processes blog post markdown files
2. `extract-project-content.ts`: Processes project markdown files
3. `extract-risk-content.ts`: Processes risk-related content

These scripts generate JSON files in the `data/` directory that are used by the RAG system:

- `data/blog-rag-documents.json`
- `data/project-rag-documents.json`
- `data/blog-rag-risk-documents.json`

## Options for Keeping Content Fresh

### 1. Manual Content Refresh

Run the extraction scripts manually when you update content:

```bash
# Update all content
npm run extract-all-content

# Or update specific content types
npm run extract-blog-content
npm run extract-project-content
npm run extract-risk-content
```

### 2. Content Refresh API Endpoint

The application includes an API endpoint for refreshing content:

```
POST /api/refresh-rag
Authorization: Bearer YOUR_REFRESH_TOKEN
```

Set the `REFRESH_RAG_TOKEN` environment variable to secure this endpoint.

### 3. Automated Content Refresh

For production systems, consider:

- Adding content extraction to your CI/CD pipeline
- Setting up a scheduled task (cron job) to refresh content
- Adding a webhook to trigger content refresh when source content changes

### 4. Dynamic Content Loading

The system now uses dynamic content loading with caching:

- Content is loaded from disk when needed
- A cache timeout ensures fresh content is loaded periodically
- Force refresh is available via the API

## Implementation Details

The RAG document loader is implemented in `src/lib/rag-document-loader.ts` and provides:

- `loadRagDocuments()`: Loads documents with caching
- `refreshRagDocuments()`: Forces reload of documents
- `getAllRagDocuments()`: Gets all documents as a combined array
- `getRagDocumentsByType()`: Gets documents of a specific type

## Best Practices

1. **Update content after significant changes**: Run the extraction process after adding or updating blog posts or projects
2. **Consider performance**: Content extraction involves reading and processing files, which can be resource-intensive
3. **Monitor file sizes**: Very large RAG document files may impact performance
4. **Version your content**: Consider adding version information to your RAG documents
