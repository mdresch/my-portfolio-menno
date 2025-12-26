#!/usr/bin/env node
/**
 * Test Database CRUD Operations
 * 
 * This script tests Create, Read, Update, and Delete operations
 * on the Project table to verify database functionality.
 * 
 * Usage:
 *   node scripts/test-database-crud.js
 */

require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['error', 'warn'],
});

async function testCRUD() {
  console.log('🧪 Testing Database CRUD Operations...\n');

  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is not set!');
    process.exit(1);
  }

  let testProjectId = null;
  const testSlug = `test-project-${Date.now()}`;

  try {
    // ============================================
    // TEST 1: CREATE (Insert)
    // ============================================
    console.log('1️⃣  Testing CREATE operation...');
    const newProject = await prisma.project.create({
      data: {
        title: 'Test Project',
        description: 'This is a test project created by the CRUD test script',
        technologies: ['Test', 'Automation'],
        slug: testSlug,
        category: 'Testing',
      },
    });
    testProjectId = newProject.id;
    console.log(`   ✅ Created project with ID: ${testProjectId}\n`);

    // ============================================
    // TEST 2: READ (Select)
    // ============================================
    console.log('2️⃣  Testing READ operations...');
    
    // Read by ID
    const projectById = await prisma.project.findUnique({
      where: { id: testProjectId },
    });
    console.log(`   ✅ Read by ID: ${projectById?.title || 'Not found'}`);

    // Read by slug
    const projectBySlug = await prisma.project.findUnique({
      where: { slug: testSlug },
    });
    console.log(`   ✅ Read by slug: ${projectBySlug?.title || 'Not found'}`);

    // Read all (count)
    const totalCount = await prisma.project.count();
    console.log(`   ✅ Total projects in database: ${totalCount}\n`);

    // ============================================
    // TEST 3: UPDATE
    // ============================================
    console.log('3️⃣  Testing UPDATE operation...');
    const updatedProject = await prisma.project.update({
      where: { id: testProjectId },
      data: {
        title: 'Updated Test Project',
        description: 'This project has been updated',
        technologies: ['Test', 'Automation', 'Updated'],
      },
    });
    console.log(`   ✅ Updated project: ${updatedProject.title}`);
    console.log(`   ✅ Technologies: ${updatedProject.technologies.join(', ')}\n`);

    // ============================================
    // TEST 4: DELETE
    // ============================================
    console.log('4️⃣  Testing DELETE operation...');
    await prisma.project.delete({
      where: { id: testProjectId },
    });
    console.log(`   ✅ Deleted project with ID: ${testProjectId}\n`);

    // Verify deletion
    const deletedProject = await prisma.project.findUnique({
      where: { id: testProjectId },
    });
    if (!deletedProject) {
      console.log('   ✅ Deletion verified: Project no longer exists\n');
    }

    // ============================================
    // TEST 5: Query Operations
    // ============================================
    console.log('5️⃣  Testing Query operations...');
    
    // Find many with ordering
    const recentProjects = await prisma.project.findMany({
      take: 5,
      orderBy: { datePublished: 'desc' },
    });
    console.log(`   ✅ Found ${recentProjects.length} recent projects`);

    // Find with filtering
    const projectsWithTech = await prisma.project.findMany({
      where: {
        technologies: {
          has: 'React', // Check if array contains 'React'
        },
      },
    });
    console.log(`   ✅ Found ${projectsWithTech.length} projects with React\n`);

    console.log('✅ All CRUD tests passed!\n');
    console.log('📊 Test Summary:');
    console.log(`   - CREATE: ✅ Success`);
    console.log(`   - READ: ✅ Success`);
    console.log(`   - UPDATE: ✅ Success`);
    console.log(`   - DELETE: ✅ Success`);
    console.log(`   - QUERIES: ✅ Success`);

  } catch (error) {
    console.error('\n❌ CRUD test failed!\n');
    console.error('Error details:');
    console.error(`   Type: ${error.constructor.name}`);
    console.error(`   Message: ${error.message}\n`);

    // Cleanup: Try to delete test project if it was created
    if (testProjectId) {
      try {
        await prisma.project.delete({
          where: { id: testProjectId },
        });
        console.log('🧹 Cleaned up test project');
      } catch (cleanupError) {
        console.error('⚠️  Could not clean up test project:', cleanupError.message);
      }
    }

    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('\n🔒 Connection closed');
  }
}

// Run the test
testCRUD().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

