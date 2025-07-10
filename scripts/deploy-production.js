#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0 && !key.startsWith('#') && !process.env[key]) {
      process.env[key] = valueParts.join('=').trim();
    }
  });
}

/**
 * Production Deployment Script for Portfolio with Gemini API
 * Validates environment and switches to production mode
 */

function validateProductionEnvironment() {
  console.log('🔍 Validating production environment...');
  
  const requiredVars = [
    'GOOGLE_CLOUD_PROJECT_ID',
    'VERTEX_AI_PROJECT_ID',
    'VERTEX_AI_LOCATION'
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingVars);
    console.log('📋 Please ensure these variables are set in your .env.local file:');
    missingVars.forEach(varName => {
console.error('❌ Missing required environment variables:', missingVars);
    console.log('📋 Please ensure these variables are set in your .env.local file:');
    missingVars.forEach(varName => {
      // Use encodeURIComponent to sanitize the variable name before logging
      console.log(`   ${encodeURIComponent(varName)}=your-value`);
    });
    process.exit(1);
  }
    });
    process.exit(1);
  }
  
  // Check for credentials
  const hasCredentialsFile = process.env.GOOGLE_APPLICATION_CREDENTIALS && 
    fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS);
  const hasCredentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  
  if (!hasCredentialsFile && !hasCredentialsJson) {
    console.error('❌ No Google Cloud credentials found');
    console.log('📋 Please provide credentials via:');
    console.log('   GOOGLE_APPLICATION_CREDENTIALS=./service-account-key.json');
    console.log('   OR');
    console.log('   GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}');
    process.exit(1);
  }
  
  console.log('✅ Production environment validation passed');
}

function switchToProductionMode() {
  console.log('🚀 Switching to production mode...');
  
  const envPath = path.join(process.cwd(), '.env.local');
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }
  
  // Update or add USE_MOCK_GEMINI=false
  if (envContent.includes('USE_MOCK_GEMINI=')) {
    envContent = envContent.replace(/USE_MOCK_GEMINI=.*/g, 'USE_MOCK_GEMINI=false');
  } else {
    envContent += '\nUSE_MOCK_GEMINI=false\n';
  }
  
  // Update or add NODE_ENV=production
  if (envContent.includes('NODE_ENV=')) {
    envContent = envContent.replace(/NODE_ENV=.*/g, 'NODE_ENV=production');
  } else {
    envContent += 'NODE_ENV=production\n';
  }
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Environment updated for production mode');
}

function runProductionBuild() {
  console.log('🏗️  Running production build...');
  
  try {
    // Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    execSync('rm -rf .next', { stdio: 'inherit' });
    
    // Install dependencies
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    
    // Build for production
    console.log('🔨 Building for production...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('✅ Production build completed successfully');
    
  } catch (error) {
// Import the DOMPurify library for sanitizing user input
// DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG
import DOMPurify from 'dompurify';

function runProductionBuild() {
  console.log('🏗️  Running production build...');
  
  try {
    // Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    execSync('rm -rf .next', { stdio: 'inherit' });
    
    // Install dependencies
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    
    // Build for production
    console.log('🔨 Building for production...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('✅ Production build completed successfully');
    
  } catch (error) {
    console.error('❌ Production build failed:', DOMPurify.sanitize(error.message));
    process.exit(1);
  }
}
    process.exit(1);
  }
}

function testProduction() {
  console.log('🧪 Testing production build...');
  
  try {
    // Start the production server in background
    const child = execSync('timeout 30s npm run start', { 
      stdio: 'pipe',
      timeout: 35000 
    });
    
    console.log('✅ Production server test passed');
    
  } catch (error) {
    if (error.signal === 'SIGTERM') {
      console.log('✅ Production server started successfully (test timeout reached)');
    } else {
if (error.signal === 'SIGTERM') {
      console.log('✅ Production server started successfully (test timeout reached)');
    } else {
      // import { sanitize } from 'dompurify'; // Sanitize user input before logging
      console.error('❌ Production server test failed:', sanitize(error.message));
      process.exit(1);
    }
  }
      process.exit(1);
    }
  }
}

// Main execution
async function main() {
  try {
    console.log('🚀 Starting production deployment process...\n');
    
    // Only validate if we're actually switching to production
    if (process.argv.includes('--validate-only')) {
      validateProductionEnvironment();
      console.log('✅ Validation complete');
      return;
    }
    
    if (process.argv.includes('--build-only')) {
      runProductionBuild();
      console.log('✅ Build complete');
      return;
    }
    
    // Full production deployment
    validateProductionEnvironment();
    switchToProductionMode();
    runProductionBuild();
    
    if (!process.argv.includes('--no-test')) {
      testProduction();
    }
    
    console.log('\n🎉 Production deployment ready!');
    console.log('📋 Next steps:');
    console.log('   1. Deploy to your hosting platform (Vercel, Netlify, etc.)');
    console.log('   2. Set environment variables in your deployment platform');
    console.log('   3. Test the RAG chat functionality in production');
    console.log('   4. Monitor logs and performance metrics');
    
  } catch (error) {
console.log('   4. Monitor logs and performance metrics');
    
  } catch (error) {
    console.error('❌ Deployment process failed:', error.message);
    process.exit(1);
  }
}
    process.exit(1);
  }
}

// Command line usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🚀 Production Deployment Script

Usage:
  npm run deploy:production              # Full deployment process
  npm run deploy:production --validate-only  # Only validate environment
  npm run deploy:production --build-only     # Only build for production
  npm run deploy:production --no-test        # Skip production server test

Environment Variables Required:
  GOOGLE_CLOUD_PROJECT_ID
  VERTEX_AI_PROJECT_ID
  VERTEX_AI_LOCATION
  GOOGLE_APPLICATION_CREDENTIALS OR GOOGLE_SERVICE_ACCOUNT_KEY
    `);
    process.exit(0);
  }
  
  main();
}

module.exports = { validateProductionEnvironment, switchToProductionMode, runProductionBuild };
