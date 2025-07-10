#!/usr/bin/env node

/**
 * Test RAG Chat in Production Mode
 * Validates API functionality and response quality
 */

const testQueries = [
  "What are Menno's top technical skills?",
  "Tell me about his latest projects",
  "What blog posts has he written about React?",
  "What's his experience with cloud technologies?",
  "How can I contact Menno for collaboration?",
  "What technologies does he use most frequently?",
  "Describe his full-stack development experience",
  "What makes his portfolio unique?"
];

async function testRagEndpoint() {
  console.log('🧪 Testing RAG Chat API...\n');
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  
  // First, check the API status
  try {
    console.log('📊 Checking API status...');
    const statusResponse = await fetch(`${API_BASE_URL}/api/rag-chat/status`);
    
    if (!statusResponse.ok) {
      throw new Error(`HTTP ${statusResponse.status}: ${statusResponse.statusText}`);
    }
    
    const status = await statusResponse.json();
    
    console.log('✅ API Status:', {
      status: status.status,
      mode: status.mode,
      vertexAIInitialized: status.configuration.vertexAIInitialized,
      hasCredentials: status.configuration.hasCredentials,
      skillsEndpoint: `${API_BASE_URL}/api/skills`,
      projectsEndpoint: `${API_BASE_URL}/api/projects`,
      blogpostsEndpoint: `${API_BASE_URL}/api/blogposts`
    });
    
    if (status.mode === 'mock') {
      console.log('ℹ️  Running in mock mode. To enable production:');
      console.log('   1. Set USE_MOCK_GEMINI=false in .env.local');
      console.log('   2. Ensure Google Cloud credentials are configured');
      console.log('   3. Verify GOOGLE_CLOUD_PROJECT_ID is set');
    } else {
      console.log('🚀 Running in production mode with real Gemini API');
    }
    
    console.log('');
  } catch (error) {
    console.error('❌ Failed to get API status:', error.message);
    return;
  }
  
  // Test portfolio data endpoints
  console.log('📊 Testing portfolio data endpoints...');
  try {
    const [skillsRes, projectsRes, blogRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/skills`),
      fetch(`${API_BASE_URL}/api/projects`),
      fetch(`${API_BASE_URL}/api/blogposts`)
    ]);
    
    const skillsData = skillsRes.ok ? await skillsRes.json() : [];
    const projectsData = projectsRes.ok ? await projectsRes.json() : [];
    const blogData = blogRes.ok ? await blogRes.json() : [];
    
    console.log('✅ Portfolio Data Available:', {
      skills: skillsData.length,
      projects: projectsData.length,
      blogPosts: blogData.length
    });
    console.log('');
  } catch (error) {
    console.error('❌ Portfolio data fetch failed:', error.message);
    console.log('');
  }
  
  // Test each query
  let successCount = 0;
  let failCount = 0;
  const results = [];
  
  for (let i = 0; i < testQueries.length; i++) {
    const query = testQueries[i];
    console.log(`🔍 Test ${i + 1}/${testQueries.length}: "${query}"`);
    
    try {
      const startTime = Date.now();
      
      const response = await fetch(`${API_BASE_URL}/api/rag-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          conversation: []
        })
      });
      
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      
      // Quality checks
      const qualityIssues = [];
      if (result.confidence < 0.7) qualityIssues.push('Low confidence');
      if (responseTime > 10000) qualityIssues.push('Slow response');
      if (!result.message || result.message.length < 50) qualityIssues.push('Short response');
      if (!result.sources || result.sources.length === 0) qualityIssues.push('No sources');
      
      console.log(`✅ Response (${responseTime}ms):`);
      console.log(`   Mode: ${result.mode}`);
      console.log(`   Confidence: ${result.confidence}`);
      console.log(`   Sources: ${result.sources.join(', ')}`);
      console.log(`   Context: ${result.context.skillsCount} skills, ${result.context.projectsCount} projects, ${result.context.blogPostsCount} posts`);
      console.log(`   Response: ${result.message.substring(0, 150)}...`);
      
      if (qualityIssues.length > 0) {
        console.log(`⚠️  Quality Issues: ${qualityIssues.join(', ')}`);
      }
      
      results.push({
        query,
        success: true,
        responseTime,
        confidence: result.confidence,
        mode: result.mode,
        qualityIssues
      });
      
      successCount++;
      console.log('');
      
    } catch (error) {
      console.error(`❌ Test ${i + 1} failed:`, error.message);
      results.push({
        query,
        success: false,
        error: error.message
      });
      failCount++;
      console.log('');
    }
    
    // Add delay between requests to avoid rate limiting
    if (i < testQueries.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Summary
  console.log('📈 Test Summary:');
  console.log(`✅ Successful: ${successCount}/${testQueries.length}`);
  console.log(`❌ Failed: ${failCount}/${testQueries.length}`);
  
  if (successCount > 0) {
    const avgResponseTime = results
      .filter(r => r.success)
      .reduce((sum, r) => sum + r.responseTime, 0) / successCount;
    
    const avgConfidence = results
      .filter(r => r.success)
      .reduce((sum, r) => sum + r.confidence, 0) / successCount;
    
    console.log(`📊 Average Response Time: ${Math.round(avgResponseTime)}ms`);
    console.log(`📊 Average Confidence: ${avgConfidence.toFixed(2)}`);
  }
  
  const qualityIssuesCount = results
    .filter(r => r.success && r.qualityIssues.length > 0)
    .length;
  
  if (qualityIssuesCount > 0) {
    console.log(`⚠️  Responses with quality issues: ${qualityIssuesCount}`);
  }
  
  console.log('\n🎉 RAG Chat testing completed!');
  
  // Overall health assessment
  const healthScore = (successCount / testQueries.length) * 100;
  if (healthScore === 100) {
    console.log('🟢 System Health: Excellent (100%)');
  } else if (healthScore >= 90) {
    console.log(`🟡 System Health: Good (${healthScore.toFixed(1)}%)`);
  } else if (healthScore >= 70) {
    console.log(`🟠 System Health: Fair (${healthScore.toFixed(1)}%)`);
  } else {
    console.log(`🔴 System Health: Poor (${healthScore.toFixed(1)}%)`);
  }
}

// Load environment variables if running locally
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  try {
    require('dotenv').config({ path: '.env.local' });
  } catch (e) {
    // dotenv not available or .env.local doesn't exist
  }
}

if (require.main === module) {
  testRagEndpoint().catch(error => {
    console.error('❌ Test script failed:', error);
    process.exit(1);
  });
}

module.exports = { testRagEndpoint };
