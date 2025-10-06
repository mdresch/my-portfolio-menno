// Database migration script for Vercel deployment
const { execSync } = require('child_process');

console.log('🔄 Running database migrations...');

try {
  // Generate Prisma client
  console.log('📦 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Run migrations
  console.log('🗄️  Running database migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  
  // Seed database
  console.log('🌱 Seeding database...');
  execSync('npx tsx scripts/seed-projects.ts', { stdio: 'inherit' });
  
  console.log('✅ Database setup completed successfully!');
} catch (error) {
  console.error('❌ Database setup failed:', error.message);
  process.exit(1);
}
