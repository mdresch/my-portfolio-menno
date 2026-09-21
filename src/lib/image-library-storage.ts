import { createHash } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const LOCAL_ROOT = path.resolve(process.cwd(), "data/image-library");

const MIME_EXT: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};

export const MAX_SLUG_RESOLVE_ATTEMPTS = 200;

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

/** Detect MIME from magic bytes (do not trust client Content-Type). */
export function detectImageMimeFromBuffer(buffer: Buffer): string | null {
  if (buffer.length < 12) return null;
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return "image/jpeg";
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) {
    return "image/png";
  }
  if (buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46) return "image/gif";
  if (
    buffer[0] === 0x52 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x46 &&
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  ) {
    return "image/webp";
  }
  return null;
}

/** Basename only, no path segments or leading dots. */
export function safeStoredFilename(originalName: string, mimeType: string): string {
  const base = path.basename(originalName.replace(/\\/g, "/"));
  const stripped = base.replace(/^\.+/, "").replace(/[/\\]/g, "_");
  const ext = MIME_EXT[mimeType] ?? "";
  const stem = (stripped.replace(/\.[^.]+$/, "") || "image")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/\.+/g, ".")
    .slice(0, 120);
  return `${stem || "image"}${ext}`;
}

function assertPathUnderRoot(root: string, target: string): string {
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(target);
  if (resolved !== resolvedRoot && !resolved.startsWith(resolvedRoot + path.sep)) {
    throw new Error("Invalid storage path");
  }
  return resolved;
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
  if (!/^[a-z0-9]+$/i.test(assetId)) {
    throw new Error("Invalid asset id");
  }
  const safeName = safeStoredFilename(filename, mimeType);
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

  const dir = assertPathUnderRoot(LOCAL_ROOT, path.join(LOCAL_ROOT, assetId));
  await mkdir(dir, { recursive: true });
  const filePath = assertPathUnderRoot(LOCAL_ROOT, path.join(dir, safeName));
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

  if (storageKey.includes("..") || storageKey.includes("\\")) {
    throw new Error("Invalid storage key");
  }
  const filePath = assertPathUnderRoot(LOCAL_ROOT, path.join(LOCAL_ROOT, storageKey));
  const buffer = await readFile(filePath);
  return { buffer };
}
