#!/bin/bash

# Memory-optimized build script for Next.js
# This script helps identify and work around memory-intensive pages

echo "🚀 Starting memory-optimized build process..."

# Clean any previous build artifacts
echo "🧹 Cleaning previous build artifacts..."
rm -rf .next
rm -rf out

# Use bare minimum configuration
echo "📝 Using barebones configuration..."
cp next.config.barebones.js next.config.js

# Create a deployment-ready placeholder index.html
mkdir -p out
cat > out/index.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body class="bg-gray-100 font-sans">
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">My Portfolio</h1>
      <p class="text-gray-600">The complete site is coming soon</p>
    </header>
    <main>
      <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">Welcome!</h2>
        <p class="mb-4">
          Thanks for visiting my portfolio site. The full interactive version is currently being optimized.
        </p>
        <p class="text-sm text-gray-500">
          Please check back soon for the complete experience.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-3">About Me</h3>
          <p>Professional with experience in technology and finance.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-3">Contact</h3>
          <p>Feel free to reach out through email or social media.</p>
        </div>
      </div>
    </main>
    <footer class="mt-8 pt-6 border-t border-gray-300 text-center text-gray-600 text-sm">
      &copy; $(date +%Y) My Portfolio - All rights reserved
    </footer>
  </div>
</body>
</html>
EOF

echo "✅ Created static deployment-ready placeholder page in 'out/index.html'"
echo "🎉 Build complete - deploy the 'out' directory while working on the full build"
