-- Add separate repository and live/demo URLs (replaces single `link` column).

ALTER TABLE "Project" ADD COLUMN "repoUrl" TEXT;
ALTER TABLE "Project" ADD COLUMN "liveUrl" TEXT;

UPDATE "Project"
SET "repoUrl" = TRIM(BOTH FROM "link")
WHERE "link" IS NOT NULL
  AND TRIM(BOTH FROM "link") <> ''
  AND "link" ILIKE '%github.com%';

UPDATE "Project"
SET "liveUrl" = TRIM(BOTH FROM "link")
WHERE "link" IS NOT NULL
  AND TRIM(BOTH FROM "link") <> ''
  AND "link" NOT ILIKE '%github.com%';

ALTER TABLE "Project" DROP COLUMN "link";
