#!/usr/bin/env node
/**
 * Test PostgreSQL Database Connection
 * 
 * This script tests the connection to the PostgreSQL database using Prisma.
 * It verifies that:
 * - DATABASE_URL is set
 * - Connection can be established
 * - Database schema is accessible
 * - Prisma client can query the database
 * 
 * Usage:
 *   node scripts/test-database-connection.js
 * 
 * Or with explicit DATABASE_URL:
 *   DATABASE_URL="postgresql://..." node scripts/test-database-connection.js
 */

require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['error', 'warn'],
});

async function testConnection() {
  console.log('🔍 Testing Database Connection...\n');

  // Check if DATABASE_URL is set
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('❌ DATABASE_URL environment variable is not set!');
    console.error('\nPlease set it in one of these ways:');
    console.error('  1. Create a .env.local file with: DATABASE_URL="your-connection-string"');
    console.error('  2. Export it: export DATABASE_URL="your-connection-string"');
    console.error('  3. Pass it inline: DATABASE_URL="your-connection-string" node scripts/test-database-connection.js');
    process.exit(1);
  }

  // Mask the password in the connection string for display
  const maskedUrl = databaseUrl.replace(/:([^:@]+)@/, ':****@');
  console.log(`📡 Connection String: ${maskedUrl}\n`);

  try {
    // Test 1: Basic connection
    console.log('1️⃣  Testing basic connection...');
    await prisma.$connect();
    console.log('   ✅ Connected successfully\n');

    // Test 2: Query database version
    console.log('2️⃣  Testing database query...');
    const result = await prisma.$queryRaw`SELECT version()`;
    const version = result[0]?.version || 'Unknown';
    console.log(`   ✅ Database version: ${version.split(' ')[0]} ${version.split(' ')[1]}\n`);

    // Test 3: Check if Project table exists
    console.log('3️⃣  Checking database schema...');
    const tableCheck = await prisma.$queryRaw`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'Project'
      )
    `;
    const tableExists = tableCheck[0]?.exists;
    
    if (tableExists) {
      console.log('   ✅ Project table exists\n');
      
      // Test 4: Count projects
      console.log('4️⃣  Testing data access...');
      const projectCount = await prisma.project.count();
      console.log(`   ✅ Found ${projectCount} project(s) in database\n`);
    } else {
      console.log('   ⚠️  Project table does not exist');
      console.log('   💡 Run migrations: npx prisma migrate deploy\n');
    }

    // Test 5: Test a simple query
    console.log('5️⃣  Testing Prisma query...');
    const projects = await prisma.project.findMany({ take: 1 });
    console.log(`   ✅ Successfully queried ${projects.length} project(s)\n`);

    console.log('✅ All connection tests passed!\n');
    console.log('📊 Connection Summary:');
    console.log(`   - Database: Connected`);
    console.log(`   - Schema: ${tableExists ? 'Initialized' : 'Not initialized'}`);
    console.log(`   - Projects: ${tableExists ? await prisma.project.count() : 'N/A'}`);

  } catch (error) {
    console.error('\n❌ Connection test failed!\n');
    console.error('Error details:');
    console.error(`   Type: ${error.constructor.name}`);
    console.error(`   Message: ${error.message}\n`);

    // Provide helpful error messages
    if (error.message.includes('P1001')) {
      console.error('💡 This error usually means:');
      console.error('   - The database server is not reachable');
      console.error('   - The host/port in DATABASE_URL is incorrect');
      console.error('   - A firewall is blocking the connection');
    } else if (error.message.includes('P1000')) {
      console.error('💡 This error usually means:');
      console.error('   - Authentication failed');
      console.error('   - The username/password in DATABASE_URL is incorrect');
    } else if (error.message.includes('P1003')) {
      console.error('💡 This error usually means:');
      console.error('   - The database does not exist');
      console.error('   - The database name in DATABASE_URL is incorrect');
    } else if (error.message.includes('SSL')) {
      console.error('💡 This error usually means:');
      console.error('   - SSL connection is required but not configured');
      console.error('   - Add ?sslmode=require to your DATABASE_URL');
    }

    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('\n🔒 Connection closed');
  }
}

// Run the test
testConnection().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

