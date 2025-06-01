#!/bin/bash

# Incremental build script for Next.js
# This script builds the project in stages to avoid memory issues

echo "🚀 Starting incremental build process..."

# Clean any previous build artifacts
echo "🧹 Cleaning previous build artifacts..."
rm -rf .next
rm -rf out

# Use bare minimum configuration
echo "📝 Using barebones configuration..."
cp next.config.barebones.js next.config.js

# Environment setup
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max_old_space_size=4096"

# Attempt to build with essential pages only
echo "🏗️ Stage 1: Building minimal site with essential pages only..."

# Create _app.js and _document.js in a temporary directory
mkdir -p temp_src/pages
cat > temp_src/pages/_app.js << 'EOF'
import React from 'react';
import '../src/app/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
EOF

cat > temp_src/pages/_document.js << 'EOF'
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
EOF

# Create a minimal index page
cat > temp_src/pages/index.js << 'EOF'
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>My Portfolio</h1>
      <p>This is a minimal version of the portfolio site.</p>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}
EOF

# Create a simple about page
cat > temp_src/pages/about.js << 'EOF'
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
EOF

# Try to build with minimal pages
echo "Building minimal site with essential pages..."
next build --no-lint || {
  echo "❌ Stage 1 build failed. Creating static fallback..."
  mkdir -p out
  cp -r temp_src/pages/* out/
  echo "Created static fallback pages in 'out' directory"
  exit 1
}

echo "✅ Minimal site built successfully!"

# Clean up
rm -rf temp_src

echo "🎉 Incremental build complete!"
