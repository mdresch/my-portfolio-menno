import dotenv from 'dotenv';
dotenv.config();

import { seed } from '../scripts/seed-projects';

async function run() {
  try {
    await seed();
    console.log('prisma seed finished');
  } catch (err) {
    console.error('prisma seed error', err);
    process.exitCode = 1;
  }
}

run();
