#!/bin/bash

# Ultra-simplified build script for Next.js 15.3.0
# This script attempts to build with minimal process and maximum stability

echo "🚀 Starting minimal build process..."

# Clean any previous build artifacts
echo "🧹 Cleaning previous build artifacts..."
rm -rf .next
rm -rf out

# Use simplified configuration
echo "📝 Using ultra-simple configuration..."
cp next.config.ultra-simple.js next.config.js

# Disable telemetry and increase debug output
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max_old_space_size=4096 --v8-pool-size=0 --no-warnings"

# Build with absolute minimum features
echo "🏗️ Building static export..."
next build --no-lint

# Check build status
if [ $? -eq 0 ]; then
  echo "✅ Build completed successfully!"
else
  echo "❌ Build failed! Trying an even more minimal approach..."
  
  # Create a stripped-down home page for testing
  mkdir -p out
  cat > out/index.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My Portfolio (Minimal)</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; }
    p { color: #666; }
  </style>
</head>
<body>
  <h1>My Portfolio</h1>
  <p>This is a minimal static version of the portfolio site.</p>
  <p>The full interactive version is currently being optimized.</p>
</body>
</html>
EOF

  echo "Created fallback static page in 'out/index.html'"
  echo "You can deploy this minimal version while working on fixing the full build"
fi
