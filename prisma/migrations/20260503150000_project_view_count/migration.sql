-- Track project detail page views (incremented via POST .../increment-view).
ALTER TABLE "Project" ADD COLUMN IF NOT EXISTS "viewCount" INTEGER NOT NULL DEFAULT 0;
