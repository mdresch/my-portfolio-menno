/**
 * Assign coverImage to each content/blog/*.md that does not already have one,
 * round-robin across sorted files in public/images (jpg/jpeg/png/webp).
 *
 * Run: node scripts/assign-blog-cover-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imgDir = path.join(root, "public/images");
const blogDir = path.join(root, "content/blog");

function imageUrl(file) {
  return "/images/" + encodeURIComponent(file);
}

function frontmatterHasCover(fmBlock) {
  return /^coverImage\s*:/m.test(fmBlock);
}

let images;
try {
  images = fs
    .readdirSync(imgDir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, "en"));
} catch (e) {
  console.error("Cannot read image directory:", imgDir, e);
  process.exit(1);
}

if (images.length === 0) {
  console.error("No images found in", imgDir);
  process.exit(1);
}

let posts;
try {
  posts = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, "en"));
} catch (e) {
  console.error("Cannot read blog directory:", blogDir, e);
  process.exit(1);
}

let added = 0;
let skippedHasCover = 0;
let skippedNoFm = 0;
let errors = 0;

for (let i = 0; i < posts.length; i++) {
  const rel = posts[i];
  const filePath = path.join(blogDir, rel);
  try {
    let raw = fs.readFileSync(filePath, "utf8");
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) {
      skippedNoFm++;
      console.warn("No frontmatter:", rel);
      continue;
    }
    if (frontmatterHasCover(fmMatch[1])) {
      skippedHasCover++;
      continue;
    }
    const url = imageUrl(images[i % images.length]);
    raw = raw.replace(/^---\r?\n/, `---\ncoverImage: "${url}"\n`);
    fs.writeFileSync(filePath, raw, "utf8");
    added++;
  } catch (e) {
    errors++;
    console.error("Error processing", rel, e instanceof Error ? e.message : e);
  }
}

console.log({
  images: images.length,
  posts: posts.length,
  addedCoverImage: added,
  skippedAlreadyHadCover: skippedHasCover,
  skippedNoFrontmatter: skippedNoFm,
  fileErrors: errors,
});
