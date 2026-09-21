import type { ImageAsset } from "@prisma/client";

/** Public list / picker — omits internal storage fields. */
export type PublicImageAssetDto = {
  id: string;
  slug: string;
  filename: string;
  mimeType: string;
  byteSize: number;
  altText: string | null;
  title: string | null;
  caption: string | null;
  tags: string[];
  mediaUrl: string;
  viewCount?: number;
  usageCount?: number;
};

export type ImageAssetDto = {
  id: string;
  slug: string;
  storageKey: string;
  blobUrl: string | null;
  filename: string;
  mimeType: string;
  byteSize: number;
  width: number | null;
  height: number | null;
  altText: string | null;
  title: string | null;
  caption: string | null;
  description: string | null;
  tags: string[];
  source: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  mediaUrl: string;
  viewCount?: number;
};

export function mediaUrlForSlug(slug: string): string {
  return `/media/${encodeURIComponent(slug)}`;
}

export function coverImageFrontmatterForSlug(slug: string): string {
  return `coverImage: "${mediaUrlForSlug(slug)}"`;
}

export function serializePublicImageAsset(
  row: ImageAsset,
  extras?: { viewCount?: number; usageCount?: number }
): PublicImageAssetDto {
  return {
    id: row.id,
    slug: row.slug,
    filename: row.filename,
    mimeType: row.mimeType,
    byteSize: row.byteSize,
    altText: row.altText,
    title: row.title,
    caption: row.caption,
    tags: row.tags,
    mediaUrl: mediaUrlForSlug(row.slug),
    viewCount: extras?.viewCount,
    usageCount: extras?.usageCount,
  };
}

export function serializeImageAsset(
  row: ImageAsset,
  extras?: { viewCount?: number }
): ImageAssetDto {
  return {
    id: row.id,
    slug: row.slug,
    storageKey: row.storageKey,
    blobUrl: row.blobUrl,
    filename: row.filename,
    mimeType: row.mimeType,
    byteSize: row.byteSize,
    width: row.width,
    height: row.height,
    altText: row.altText,
    title: row.title,
    caption: row.caption,
    description: row.description,
    tags: row.tags,
    source: row.source,
    deletedAt: row.deletedAt?.toISOString() ?? null,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
    mediaUrl: mediaUrlForSlug(row.slug),
    viewCount: extras?.viewCount,
  };
}
