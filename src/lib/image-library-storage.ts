import { createHash } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const LOCAL_ROOT = path.join(process.cwd(), "data/image-library");

export const ALLOWED_IMAGE_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

export function sha256Checksum(buffer: Buffer): string {
  return createHash("sha256").update(buffer).digest("hex");
}

export function storageUsesBlob(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
}

export type StoredImage = {
  storageKey: string;
  blobUrl: string | null;
};

export async function storeImageBuffer(
  assetId: string,
  filename: string,
  mimeType: string,
  buffer: Buffer
): Promise<StoredImage> {
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const storageKey = `${assetId}/${safeName}`;

  if (storageUsesBlob()) {
    const { put } = await import("@vercel/blob");
    const blob = await put(storageKey, buffer, {
      access: "public",
      contentType: mimeType,
      addRandomSuffix: false,
    });
    return { storageKey, blobUrl: blob.url };
  }

  const dir = path.join(LOCAL_ROOT, assetId);
  await mkdir(dir, { recursive: true });
  const filePath = path.join(dir, safeName);
  await writeFile(filePath, buffer);
  return { storageKey, blobUrl: null };
}

export async function readImageBytes(
  storageKey: string,
  blobUrl: string | null
): Promise<{ buffer: Buffer; mimeType?: string }> {
  if (blobUrl) {
    const res = await fetch(blobUrl);
    if (!res.ok) throw new Error(`Blob fetch failed: ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const mimeType = res.headers.get("content-type") ?? undefined;
    return { buffer: Buffer.from(arrayBuffer), mimeType };
  }

  const filePath = path.join(LOCAL_ROOT, storageKey);
  const buffer = await readFile(filePath);
  return { buffer };
}
