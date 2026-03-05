#!/bin/bash

# Script to identify problematic pages in a Next.js build
# This helps detect which pages are causing memory issues

echo "🔍 Starting page-by-page build analysis..."

# Clean any previous build artifacts
echo "🧹 Cleaning previous build artifacts..."
rm -rf .next
rm -rf out

# Create a temp output directory
mkdir -p page_analysis

# Get a list of pages to analyze
echo "📋 Finding pages to analyze..."

# Look for pages in pages/ directory (for Pages Router)
pages_dir="src/pages"
app_dir="src/app"
problem_pages=()
successful_pages=()

# Use bare minimum configuration
echo "📝 Using barebones configuration..."
cp next.config.barebones.js next.config.js

# Set higher memory limit
export NODE_OPTIONS="--max_old_space_size=4096"

# First, try to identify App Router pages that might be problematic
if [ -d "$app_dir" ]; then
  echo "🔍 Analyzing App Router pages in $app_dir..."
  
  # Find page.js/tsx files - these are App Router pages
  app_pages=$(find "$app_dir" -type f -name "page.js" -o -name "page.tsx" | sort)
  
  echo "Found $(echo "$app_pages" | wc -l) pages to analyze."
  
  # Test each page
  for page_file in $app_pages; do
    relative_path=${page_file#"$app_dir/"}
    page_path=$(dirname "$relative_path")
    
    # Skip if it's a special route like api, etc.
    if [[ "$page_path" == api/* ]]; then
      echo "⏩ Skipping API route: $page_path"
      continue
    fi
    
    echo "🧪 Testing page: /$page_path"
    
    # Create a temporary stub for testing this page
    mkdir -p "temp_app/$page_path"
    echo "export default function Page() { return <div>Test</div>; }" > "temp_app/$page_path/page.js"
    
    # Try to build just this page
    if NEXT_BUILD_PAGE="/$page_path" next build >/dev/null 2>&1; then
      echo "✅ Page /$page_path builds successfully"
      successful_pages+=("/$page_path")
    else
      echo "❌ Page /$page_path has build issues"
      problem_pages+=("/$page_path")
    fi
    
    # Clean up
    rm -rf temp_app
    rm -rf .next
  done
fi

# Generate report
echo ""
echo "📊 Page Analysis Report"
echo "----------------------"
echo "✅ Successfully building pages: ${#successful_pages[@]}"
for page in "${successful_pages[@]}"; do
  echo "  - $page"
done

echo ""
echo "❌ Problematic pages: ${#problem_pages[@]}"
for page in "${problem_pages[@]}"; do
  echo "  - $page"
done

echo ""
echo "🛠️ Next steps:"
echo "1. Focus on fixing the problematic pages"
echo "2. Consider splitting complex pages into smaller components"
echo "3. Use dynamic imports for heavy components"
echo "4. Remove unnecessary dependencies from problematic pages"

# Save report to file
{
  echo "# Page Build Analysis"
  echo "Date: $(date)"
  echo ""
  echo "## Successfully Building Pages (${#successful_pages[@]})"
  for page in "${successful_pages[@]}"; do
    echo "- $page"
  done
  echo ""
  echo "## Problematic Pages (${#problem_pages[@]})"
  for page in "${problem_pages[@]}"; do
    echo "- $page"
  done
  echo ""
  echo "## Recommendations"
  echo "1. Focus on fixing the problematic pages"
  echo "2. Consider splitting complex pages into smaller components"
  echo "3. Use dynamic imports for heavy components"
  echo "4. Remove unnecessary dependencies from problematic pages"
} > page_analysis/report.md

echo "📝 Report saved to page_analysis/report.md"
