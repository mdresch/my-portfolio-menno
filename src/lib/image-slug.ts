export function slugifyFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "image";
}

export function uniqueSlugCandidate(base: string, suffix: string): string {
  const trimmed = `${base}-${suffix}`.replace(/-+/g, "-").slice(0, 96);
  return trimmed;
}
