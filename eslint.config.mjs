import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use FlatCompat to load configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // 1. Global ignores (files/directories to skip)
  {
    ignores: [
      "**/node_modules/",
      "**/.next/",
      "**/out/",
      "**/build/",
      "**/dist/",
      "public/",
    ],
  },
  
  // 2. Use Next.js recommended configuration
  // This handles both JavaScript and TypeScript files
  ...compat.extends("next"),
  ...compat.extends("next/core-web-vitals"),

  // 3. Simpler project rules that are less likely to cause issues
  {
    rules: {
      "no-unused-vars": ["warn"],
      "no-undef": ["error"],
      "semi": ["warn", "always"]
    }
  },
];

export default eslintConfig;

