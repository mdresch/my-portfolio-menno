import dotenv from 'dotenv';
dotenv.config();

import { prisma } from '../src/lib/prisma';

async function run() {
  try {
    const projects = await prisma.project.findMany({ orderBy: { datePublished: 'desc' } });
    console.log(`Found ${projects.length} projects`);
    console.log(JSON.stringify(projects, null, 2));
  } catch (err) {
    console.error('Error querying projects:', err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

run();
