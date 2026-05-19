-- CreateTable
CREATE TABLE "ImageAsset" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "blobUrl" TEXT,
    "filename" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "byteSize" INTEGER NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "altText" TEXT,
    "title" TEXT,
    "caption" TEXT,
    "description" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "source" TEXT NOT NULL DEFAULT 'upload',
    "checksum" TEXT,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImageAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageView" (
    "id" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referrer" TEXT,
    "path" TEXT,
    "userAgent" TEXT,
    "isBot" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ImageView_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImageAsset_slug_key" ON "ImageAsset"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ImageAsset_checksum_key" ON "ImageAsset"("checksum");

-- CreateIndex
CREATE INDEX "ImageAsset_deletedAt_idx" ON "ImageAsset"("deletedAt");

-- CreateIndex
CREATE INDEX "ImageAsset_createdAt_idx" ON "ImageAsset"("createdAt");

-- CreateIndex
CREATE INDEX "ImageView_imageId_occurredAt_idx" ON "ImageView"("imageId", "occurredAt");

-- AddForeignKey
ALTER TABLE "ImageView" ADD CONSTRAINT "ImageView_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "ImageAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
