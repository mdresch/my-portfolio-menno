export function parseCoverImageFromMarkdown(content: string): string | null {
  const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return null;
  const line = fm[1].match(/^coverImage:\s*["']?([^"'\n]+)["']?\s*$/m);
  return line?.[1]?.trim() ?? null;
}

export function setCoverImageInMarkdown(content: string, coverImage: string | null): string {
  const bodyMatch = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/);
  if (!bodyMatch) {
    if (!coverImage) return content;
    return `---\ncoverImage: "${coverImage}"\n---\n\n${content}`;
  }

  let fmBlock = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  const body = bodyMatch[1];

  fmBlock = fmBlock
    .split("\n")
    .filter((line) => !/^coverImage:/.test(line.trim()))
    .join("\n")
    .trimEnd();

  if (coverImage) {
    fmBlock = fmBlock ? `${fmBlock}\ncoverImage: "${coverImage}"` : `coverImage: "${coverImage}"`;
  }

  return `---\n${fmBlock}\n---\n\n${body.replace(/^\n+/, "")}`;
}

export function insertMarkdownImageAtEnd(content: string, mediaUrl: string, alt: string): string {
  const altSafe = alt.replace(/]/g, "");
  const snippet = `\n\n![${altSafe}](${mediaUrl})\n`;
  return content.trimEnd() + snippet;
}
