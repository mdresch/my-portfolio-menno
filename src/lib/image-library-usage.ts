import { prisma } from "./prisma";
import { mediaUrlForSlug } from "./image-library-serialize";

export const IMAGE_USAGE_TYPES = [
  "blog_cover",
  "blog_inline",
  "project_screenshot",
  "project_image",
  "page",
] as const;

export type ImageUsageType = (typeof IMAGE_USAGE_TYPES)[number];

const MEDIA_URL_RE = /\/media\/([a-zA-Z0-9_-]+)/g;

export function extractMediaSlugsFromText(text: string): string[] {
  const slugs = new Set<string>();
  let match: RegExpExecArray | null;
  const re = new RegExp(MEDIA_URL_RE.source, "g");
  while ((match = re.exec(text)) !== null) {
    slugs.add(decodeURIComponent(match[1]));
  }
  return [...slugs];
}

export async function findImageIdByMediaUrl(mediaUrl: string): Promise<string | null> {
  const trimmed = mediaUrl.trim();
  const slugMatch = trimmed.match(/\/media\/([^?#]+)/);
  if (!slugMatch) return null;
  const slug = decodeURIComponent(slugMatch[1]);
  const row = await prisma.imageAsset.findFirst({
    where: { slug, deletedAt: null },
    select: { id: true },
  });
  return row?.id ?? null;
}

export async function registerImageUsage(input: {
  imageId: string;
  usageType: ImageUsageType;
  refSlug?: string | null;
  refPath?: string | null;
}): Promise<void> {
  const refSlug = input.refSlug ?? null;
  await prisma.imageUsage.upsert({
    where: {
      imageId_usageType_refSlug: {
        imageId: input.imageId,
        usageType: input.usageType,
        refSlug,
      },
    },
    create: {
      imageId: input.imageId,
      usageType: input.usageType,
      refSlug,
      refPath: input.refPath ?? null,
    },
    update: {
      refPath: input.refPath ?? null,
      updatedAt: new Date(),
    },
  });
}

export async function syncUsagesForReference(input: {
  refSlug: string;
  refPath: string;
  replaceUsageTypes: ImageUsageType[];
  entries: { mediaUrl: string; usageType: ImageUsageType }[];
}): Promise<{ registered: number; skipped: number }> {
  let registered = 0;
  let skipped = 0;

  await prisma.imageUsage.deleteMany({
    where: {
      refSlug: input.refSlug,
      usageType: { in: [...input.replaceUsageTypes] },
    },
  });

  for (const entry of input.entries) {
    const imageId = await findImageIdByMediaUrl(entry.mediaUrl);
    if (!imageId) {
      skipped += 1;
      continue;
    }
    await registerImageUsage({
      imageId,
      usageType: entry.usageType,
      refSlug: input.refSlug,
      refPath: input.refPath,
    });
    registered += 1;
  }

  return { registered, skipped };
}

export function buildProjectUsageEntries(
  image: string | null | undefined,
  screenshots: string[] | null | undefined
): { mediaUrl: string; usageType: ImageUsageType }[] {
  const entries: { mediaUrl: string; usageType: ImageUsageType }[] = [];
  if (image?.includes("/media/")) {
    entries.push({ mediaUrl: image, usageType: "project_image" });
  }
  for (const url of screenshots ?? []) {
    if (url.includes("/media/")) {
      entries.push({ mediaUrl: url, usageType: "project_screenshot" });
    }
  }
  return entries;
}

export function buildBlogUsageEntries(
  refSlug: string,
  coverImage: string | null | undefined,
  markdownBody: string
): { mediaUrl: string; usageType: ImageUsageType }[] {
  const entries: { mediaUrl: string; usageType: ImageUsageType }[] = [];
  if (coverImage?.includes("/media/")) {
    entries.push({ mediaUrl: coverImage, usageType: "blog_cover" });
  }
  for (const slug of extractMediaSlugsFromText(markdownBody)) {
    const url = mediaUrlForSlug(slug);
    if (coverImage === url) continue;
    entries.push({ mediaUrl: url, usageType: "blog_inline" });
  }
  return entries;
}
