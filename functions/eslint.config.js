import globals from "globals";
import tseslint from "typescript-eslint";
import pluginImport from "eslint-plugin-import";

// For eslint-config-google, you might need to manually add rules or find a flat config compatible version.
// This example focuses on typescript-eslint and eslint-plugin-import.

export default tseslint.config(
  {
    // Global ignores for all configurations
    ignores: [
      "lib/", // Compiled output
      "node_modules/",
      "*.config.js", // Ignores this eslint.config.js itself if it's in the root of `src`
    ],
  },
  {
    // Base configuration applicable to all linted files
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      "import": pluginImport,
    },
    rules: {
      // General rules from eslint-config-google or your preference
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "object-curly-spacing": ["error", "always"],
      "max-len": ["warn", { "code": 120 }],
      // Import plugin rules (example)
      "import/no-unresolved": "off", // Often turned off for Firebase/TS pathing
      "import/order": "warn",
    },
  },
  {
    // Configuration specifically for TypeScript files in the src directory
    files: ["src/**/*.ts"],
    extends: [
      ...tseslint.configs.recommended, // Recommended TypeScript rules
      // ...tseslint.configs.stylistic, // Optional: for stylistic rules
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // Ensure this points to your functions tsconfig.json
      },
      globals: {
        ...globals.node, // Node.js global variables
      },
    },
    rules: {
      // Override or add TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  }
);