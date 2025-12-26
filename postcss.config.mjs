const config = {
  plugins: [
    [
      "@csstools/postcss-oklab-function",
      {
        preserve: true, // Keep original oklch for browsers that support it, convert for others
      },
    ],
    "@tailwindcss/postcss",
  ],
};

export default config;
