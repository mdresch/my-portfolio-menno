#!/bin/bash

# Progressive Build Script for Next.js
# This script attempts to build the project with increasing levels of optimization

echo "🚀 Starting progressive build process..."
mkdir -p build_logs

# Clean any previous build artifacts
echo "🧹 Cleaning previous build artifacts..."
rm -rf .next
rm -rf out

# Try different build configurations in order of increasing optimization
echo "🔄 Starting build progression..."

# Stage 1: Try regular build with increased memory
echo "🏗️ Stage 1: Standard build with increased memory..."
export NODE_OPTIONS="--max_old_space_size=4096"
if next build --no-lint > build_logs/stage1.log 2>&1; then
  echo "✅ Stage 1 successful! Standard build completed."
  exit 0
fi

echo "❌ Stage 1 failed. Moving to Stage 2..."

# Stage 2: Use simple configuration
echo "🏗️ Stage 2: Using simplified configuration..."
cp next.config.simple.js next.config.js
if NODE_OPTIONS="--max_old_space_size=4096 --v8-pool-size=0" next build --no-lint > build_logs/stage2.log 2>&1; then
  echo "✅ Stage 2 successful! Build with simplified config completed."
  exit 0
fi

echo "❌ Stage 2 failed. Moving to Stage 3..."

# Stage 3: Use ultra-simple configuration
echo "🏗️ Stage 3: Using ultra-simple configuration..."
cp next.config.ultra-simple.js next.config.js
if NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max_old_space_size=4096 --v8-pool-size=0 --no-warnings" next build --no-lint > build_logs/stage3.log 2>&1; then
  echo "✅ Stage 3 successful! Build with ultra-simple config completed."
  exit 0
fi

echo "❌ Stage 3 failed. Moving to Stage 4..."

# Stage 4: Create static export
echo "🏗️ Stage 4: Creating static export..."
./scripts/build-deployable.sh > build_logs/stage4.log 2>&1
if [ $? -eq 0 ]; then
  echo "✅ Stage 4 successful! Created static fallback site."
  echo "📁 Deployment-ready files are in the 'out' directory."
else
  echo "❌ All build stages failed! Check build_logs for details."
  exit 1
fi

# Create summary report
echo "📊 Creating build summary report..."
{
  echo "# Build Process Summary"
  echo "Date: $(date)"
  echo ""
  echo "## Build Stages Results"
  echo "- Stage 1 (Standard Build): ❌ Failed"
  echo "- Stage 2 (Simplified Config): ❌ Failed"
  echo "- Stage 3 (Ultra-Simple Config): ❌ Failed"
  echo "- Stage 4 (Static Export): ✅ Succeeded"
  echo ""
  echo "## Next Steps"
  echo "1. Deploy the static site from the 'out' directory"
  echo "2. Run the page analysis script to identify problematic pages"
  echo "3. Refactor the identified problematic pages"
  echo "4. Try incremental builds once problematic pages are fixed"
} > build_report.md

echo "📝 Build summary saved to build_report.md"
echo "📊 Detailed logs available in the build_logs directory"
