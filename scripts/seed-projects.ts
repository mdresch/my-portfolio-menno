import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import dotenv from 'dotenv';

dotenv.config();

// import prisma client; use the compiled path resolution that works with tsx
import { prisma } from '../src/lib/prisma';

const projectsDirectory = path.join(process.cwd(), 'content', 'project');

async function loadProjectFile(filePath: string) {
  const raw = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(raw);

  // Normalize fields to match Prisma model
  const slug = data.slug || path.basename(filePath).replace(/\.md$/, '');

  return {
    slug,
    title: data.title || slug,
    description: data.description || null,
    technologies: Array.isArray(data.technologies) ? data.technologies : (data.technologies ? String(data.technologies).split(',').map((s: string) => s.trim()) : []),
    link: data.link || null,
    datePublished: data.datePublished ? new Date(data.datePublished) : null,
    category: data.category || null,
    screenshots: Array.isArray(data.screenshots) ? data.screenshots : [],
    outcomes: Array.isArray(data.outcomes) ? data.outcomes : [],
    challenges: Array.isArray(data.challenges) ? data.challenges : [],
    caseStudy: content || null,
  };
}

export async function seed() {
  try {
    const files = await fs.readdir(projectsDirectory);
    const mdFiles = files.filter((f) => f.endsWith('.md'));

    console.log(`Found ${mdFiles.length} project files`);

    for (const fileName of mdFiles) {
      const fullPath = path.join(projectsDirectory, fileName);
      const project = await loadProjectFile(fullPath);

      // Upsert by slug
      const upserted = await prisma.project.upsert({
        where: { slug: project.slug },
        update: {
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          link: project.link,
          datePublished: project.datePublished,
          category: project.category,
          screenshots: project.screenshots,
          outcomes: project.outcomes,
          challenges: project.challenges,
          caseStudy: project.caseStudy,
        },
        create: {
          slug: project.slug,
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          link: project.link,
          datePublished: project.datePublished,
          category: project.category,
          screenshots: project.screenshots,
          outcomes: project.outcomes,
          challenges: project.challenges,
          caseStudy: project.caseStudy,
        },
      });

      console.log(`Upserted project: ${upserted.slug} (id=${upserted.id})`);
    }

    console.log('Seeding complete.');
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

// If run directly, execute the seed. This keeps programmatic import usable for prisma seed hooks.
if (require.main === module) {
  seed().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
