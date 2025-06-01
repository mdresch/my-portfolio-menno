#!/bin/bash

# Build Optimization Script for Next.js Portfolio
# This script performs build in chunks to avoid memory issues

# Configuration
BUILD_LOG="build.log"
MAX_MEMORY="4096"
MINIMAL_BUILD="${1:-false}"  # Use minimal build by default if specified

# Clear previous log
> "$BUILD_LOG"

echo "Starting optimized build process..." | tee -a "$BUILD_LOG"
date | tee -a "$BUILD_LOG"

# Step 1: Clean build artifacts
echo "Cleaning previous build artifacts..." | tee -a "$BUILD_LOG"
npm run clean 2>&1 | tee -a "$BUILD_LOG" || echo "No clean script defined, continuing..."

# Step 2: Validate environment variables
echo "Validating environment setup..." | tee -a "$BUILD_LOG"
if [ -f ".env.local" ]; then
  echo "Found .env.local file" | tee -a "$BUILD_LOG"
else
  echo "Warning: No .env.local file found. Some features may not work properly." | tee -a "$BUILD_LOG"
fi

# Step 3: Run the build with appropriate settings
if [ "$MINIMAL_BUILD" = "true" ]; then
  echo "Running MINIMAL build with $MAX_MEMORY MB memory limit..." | tee -a "$BUILD_LOG"
  export NODE_OPTIONS="--max_old_space_size=$MAX_MEMORY --v8-pool-size=0"
  NEXT_MINIMAL_BUILD=true npm run build:minimal 2>&1 | tee -a "$BUILD_LOG"
else
  echo "Running PRODUCTION build with $MAX_MEMORY MB memory limit..." | tee -a "$BUILD_LOG"
  export NODE_OPTIONS="--max_old_space_size=$MAX_MEMORY"
  npm run build:prod 2>&1 | tee -a "$BUILD_LOG"
fi

# Step 4: Check build result
BUILD_EXIT_CODE=${PIPESTATUS[0]}
if [ $BUILD_EXIT_CODE -eq 0 ]; then
  echo "Build completed successfully!" | tee -a "$BUILD_LOG"
  date | tee -a "$BUILD_LOG"
  echo "Output directory: .next/" | tee -a "$BUILD_LOG"
  
  # Optional: Run additional optimization (e.g., compression)
  if [ -d ".next" ]; then
    echo "Build size: $(du -sh .next | cut -f1)" | tee -a "$BUILD_LOG"
  fi
else
  echo "Build failed with exit code $BUILD_EXIT_CODE" | tee -a "$BUILD_LOG"
  echo "Check $BUILD_LOG for details" | tee -a "$BUILD_LOG"
  
  # Output the last 20 lines of the log for easy debugging
  echo "Last 20 lines of build log:" | tee -a "$BUILD_LOG"
  tail -n 20 "$BUILD_LOG" | tee -a "$BUILD_LOG"
fi

echo "Build process complete." | tee -a "$BUILD_LOG"
date | tee -a "$BUILD_LOG"
