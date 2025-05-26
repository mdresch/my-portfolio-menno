import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname, // Recommended for FlatCompat
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // 1. Global ignores
  {
    ignores: [
      "**/node_modules/",
      "**/.next/",
      "**/out/",
      "**/build/",
      "**/dist/",
      "public/", // Static assets
      // If your `functions` directory has its own build output like `lib/`
      // and is at the root, you might add "functions/lib/" here.
      // However, the functions directory has its own eslint.config.js,
      // so its specific build outputs are likely handled there.
    ],
  },

  // 2. ESLint recommended rules for JS files (applies broadly)
  eslintJs.configs.recommended,

  // 3. TypeScript configurations
  // Apply base TypeScript rules
  ...tseslint.configs.recommendedTypeChecked,
  // Configure parser options and specific rules for TS/TSX files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: true, // Auto-detects tsconfig.json from tsconfigRootDir
        tsconfigRootDir: __dirname, // Assumes tsconfig.json is at the project root
      },
      globals: { // Browser globals are relevant for frontend .ts/.tsx files
        ...globals.browser,
      },
    },
    rules: {
      // Override or add TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off", // Common to turn off in Next.js
    },
  },

  // 4. React specific configurations
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Target files within your Next.js app's src directory
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules, // For the new JSX transform
      ...reactHooksPlugin.configs.recommended.rules,
      "react/prop-types": "off", // Not needed in TypeScript projects
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },

  // 5. JSX Accessibility configurations
  {
    files: ["src/**/*.{jsx,tsx}"], // Target JSX/TSX files within your Next.js app's src directory
    plugins: {
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,
    },
  },

  // 6. Next.js specific configurations (using FlatCompat)
  // These configurations from Next.js will apply.
  // Ensure they target Next.js app files correctly.
  // If necessary, you can further scope them by mapping and adding `files` properties.
  ...compat.extends("next/core-web-vitals"),
  // The "next/typescript" extend might be redundant if the main tseslint setup is comprehensive.
  // It often sets up the parser and basic TS rules, which tseslint.configs.recommendedTypeChecked already does.
  // Test if removing this causes any issues or if it's beneficial.
  ...compat.extends("next/typescript"),

  // 7. Custom project-specific rules or overrides (applied globally after others)
  {
    rules: {
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "object-curly-spacing": ["error", "always"],
      "max-len": ["warn", { "code": 120, "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
    },
  },

  // 8. Configuration for eslint.config.mjs itself
  {
    files: ["eslint.config.mjs"], // Target this config file
    languageOptions: {
      globals: {
        ...globals.node, // For `__dirname`, `process`, etc.
      },
    },
  },
];

export default eslintConfig;
