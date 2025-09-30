-- CreateTable
CREATE TABLE "public"."Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "technologies" TEXT[],
    "link" TEXT,
    "datePublished" TIMESTAMP(3),
    "category" TEXT,
    "screenshots" TEXT[],
    "outcomes" TEXT[],
    "challenges" TEXT[],
    "caseStudy" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "public"."Project"("slug");
