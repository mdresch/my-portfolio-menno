import type { ImageUsageType } from "./image-library-usage";

export async function syncImageUsagesClient(input: {
  refSlug: string;
  refPath: string;
  replaceUsageTypes: ImageUsageType[];
  entries: { mediaUrl: string; usageType: ImageUsageType }[];
}): Promise<void> {
  try {
    await fetch("/api/images/usage/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(input),
    });
  } catch (e) {
    console.warn("syncImageUsagesClient:", e);
  }
}
