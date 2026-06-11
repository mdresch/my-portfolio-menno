-- CreateTable
CREATE TABLE "ImageUsage" (
    "id" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "usageType" TEXT NOT NULL,
    "refSlug" TEXT,
    "refPath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImageUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ImageUsage_imageId_idx" ON "ImageUsage"("imageId");

-- CreateIndex
CREATE INDEX "ImageUsage_refSlug_idx" ON "ImageUsage"("refSlug");

-- CreateIndex
CREATE UNIQUE INDEX "ImageUsage_imageId_usageType_refSlug_key" ON "ImageUsage"("imageId", "usageType", "refSlug");

-- AddForeignKey
ALTER TABLE "ImageUsage" ADD CONSTRAINT "ImageUsage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "ImageAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
