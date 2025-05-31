#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const minimalConfig = path.join(__dirname, '..', 'next.config.minimal.cjs');
const defaultConfig = path.join(__dirname, '..', 'next.config.cjs');
const targetConfig = path.join(__dirname, '..', 'next.config.cjs');

// Determine which config to use based on environment variable
const useMinimal = process.env.NEXT_MINIMAL_BUILD === 'true';

// Copy the appropriate config
fs.copyFileSync(useMinimal ? minimalConfig : defaultConfig, targetConfig);

console.log(`Using ${useMinimal ? 'MINIMAL' : 'DEFAULT'} Next.js build configuration`);
