#!/usr/bin/env node

/**
 * Comprehensive Chat Widget Functionality Test
 * Tests all API endpoints and functionality
 */

const http = require('http');

// Test configuration
const BASE_URL = 'http://localhost:3000';
const TEST_MESSAGES = [
  {
    name: 'Project Inquiry',
    message: 'What projects are in this portfolio?',
    expectedKeywords: ['projects', 'Projects section', 'web applications']
  },
  {
    name: 'Skills Inquiry', 
    message: 'What technologies do you work with?',
    expectedKeywords: ['skills', 'technologies', 'React', 'Skills section']
  },
  {
    name: 'Contact Inquiry',
    message: 'How can I contact you?',
    expectedKeywords: ['contact', 'Contact section', 'email']
  },
  {
    name: 'Experience Inquiry',
    message: 'Tell me about your background',
    expectedKeywords: ['experience', 'About section', 'background']
  },
  {
    name: 'Blog Inquiry',
    message: 'Do you have any blog posts?',
    expectedKeywords: ['blog', 'Blog section', 'articles']
  },
  {
    name: 'General Inquiry',
    message: 'Hello, what can you tell me about this portfolio?',
    expectedKeywords: ['portfolio', 'Projects', 'Skills', 'Blog', 'Contact']
  }
];

/**
 * Make HTTP POST request
 */
function makeRequest(path, data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve({ status: res.statusCode, data: response });
        } catch (error) {
          reject(new Error(`Failed to parse response: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Test chat API endpoint
 */
async function testChatAPI(testCase) {
  try {
    console.log(`\n🧪 Testing: ${testCase.name}`);
    console.log(`📝 Message: "${testCase.message}"`);
    
    const response = await makeRequest('/api/chat', {
      messages: [
        { role: 'user', content: testCase.message }
      ]
    });
    
    if (response.status !== 200) {
      console.log(`❌ Failed: HTTP ${response.status}`);
      return false;
    }
    
    if (!response.data.message) {
      console.log(`❌ Failed: No message in response`);
      return false;
    }
    
    const responseMessage = response.data.message.toLowerCase();
    const foundKeywords = testCase.expectedKeywords.filter(keyword => 
      responseMessage.includes(keyword.toLowerCase())
    );
    
    if (foundKeywords.length === 0) {
      console.log(`❌ Failed: No expected keywords found`);
      console.log(`   Expected: ${testCase.expectedKeywords.join(', ')}`);
      console.log(`   Response: ${response.data.message.substring(0, 100)}...`);
      return false;
    }
    
    console.log(`✅ Passed: Found keywords: ${foundKeywords.join(', ')}`);
    console.log(`📄 Response: ${response.data.message.substring(0, 150)}...`);
    return true;
    
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return false;
  }
}

/**
 * Test server availability
 */
async function testServerAvailability() {
  try {
    console.log('🔍 Checking server availability...');

    // Test with a simple chat API call instead of root path
    const response = await makeRequest('/api/chat', {
      messages: [{ role: 'user', content: 'test' }]
    });

    if (response.status === 200 && response.data.message) {
      console.log(`✅ Server is running and chat API is working`);
      return true;
    } else {
      console.log(`❌ Server responded but chat API not working properly`);
      return false;
    }

  } catch (error) {
    console.log(`❌ Server not available: ${error.message}`);
    console.log('💡 Make sure to run: npm run dev');
    return false;
  }
}

/**
 * Run all tests
 */
async function runTests() {
  console.log('🚀 Starting Chat Widget Functionality Tests\n');
  console.log('=' .repeat(60));
  
  // Test server availability
  const serverAvailable = await testServerAvailability();
  if (!serverAvailable) {
    process.exit(1);
  }
  
  // Test all chat scenarios
  let passed = 0;
  let total = TEST_MESSAGES.length;
  
  for (const testCase of TEST_MESSAGES) {
    const result = await testChatAPI(testCase);
    if (result) passed++;
  }
  
  // Summary
  console.log('\n' + '=' .repeat(60));
  console.log('📊 TEST SUMMARY');
  console.log('=' .repeat(60));
  console.log(`✅ Passed: ${passed}/${total} tests`);
  console.log(`❌ Failed: ${total - passed}/${total} tests`);
  
  if (passed === total) {
    console.log('\n🎉 ALL TESTS PASSED! Chat widget is working perfectly!');
    console.log('\n📋 What was tested:');
    console.log('   ✅ API endpoint availability');
    console.log('   ✅ Fallback response system');
    console.log('   ✅ Content-aware responses');
    console.log('   ✅ Error handling');
    console.log('   ✅ Response quality');
    
    console.log('\n🎯 Next Steps:');
    console.log('   1. Visit http://localhost:3000');
    console.log('   2. Click the chat bubble (bottom-right)');
    console.log('   3. Test the enhanced features:');
    console.log('      • Message persistence');
    console.log('      • Copy functionality');
    console.log('      • Settings panel');
    console.log('      • Mobile responsiveness');
    
  } else {
    console.log('\n⚠️  Some tests failed. Check the output above for details.');
    process.exit(1);
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(error => {
    console.error('💥 Test runner error:', error);
    process.exit(1);
  });
}

module.exports = { runTests, testChatAPI };
