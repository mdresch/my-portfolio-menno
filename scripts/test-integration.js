#!/usr/bin/env node

/**
 * Integration Test Suite for Frontend-Backend Connection
 * Tests the connection between Vercel frontend and Azure backend services
 */

const https = require('https');
const http = require('http');

// Configuration
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://my-portfolio-menno.vercel.app';
const BACKEND_URL = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_BASE_URL;
const TIMEOUT = 10000; // 10 seconds

// Colors for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Logging functions
const log = {
  info: (msg) => console.log(`${colors.blue}[INFO]${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}[SUCCESS]${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}[WARNING]${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}[ERROR]${colors.reset} ${msg}`),
  test: (msg) => console.log(`${colors.cyan}[TEST]${colors.reset} ${msg}`),
};

/**
 * Make HTTP request with timeout
 */
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const isHttps = urlObj.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: {
        'User-Agent': 'Integration-Test/1.0',
        'Content-Type': 'application/json',
        ...options.headers,
      },
      timeout: TIMEOUT,
    };

    const req = client.request(requestOptions, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = {
            status: res.statusCode,
            headers: res.headers,
            data: data ? JSON.parse(data) : null,
            raw: data,
          };
          resolve(response);
        } catch (error) {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            data: null,
            raw: data,
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    if (options.body) {
      req.write(JSON.stringify(options.body));
    }

    req.end();
  });
}

/**
 * Test frontend health
 */
async function testFrontendHealth() {
  log.test('Testing frontend health...');
  
  try {
    const response = await makeRequest(`${FRONTEND_URL}/api/health`);
    
    if (response.status === 200 && response.data) {
      log.success(`Frontend health check passed`);
      log.info(`Status: ${response.data.status}`);
      log.info(`Environment: ${response.data.environment}`);
      log.info(`Backend Integration: ${response.data.features?.backendIntegration ? 'Yes' : 'No'}`);
      return true;
    } else {
      log.warning(`Frontend health check returned status ${response.status}`);
      return false;
    }
  } catch (error) {
    log.error(`Frontend health check failed: ${error.message}`);
    return false;
  }
}

/**
 * Test backend health
 */
async function testBackendHealth() {
  log.test('Testing backend health...');
  
  if (!BACKEND_URL) {
    log.warning('Backend URL not configured');
    return false;
  }
  
  try {
    const response = await makeRequest(`${BACKEND_URL}/health`);
    
    if (response.status === 200) {
      log.success('Backend health check passed');
      return true;
    } else {
      log.warning(`Backend health check returned status ${response.status}`);
      return false;
    }
  } catch (error) {
    log.error(`Backend health check failed: ${error.message}`);
    return false;
  }
}

/**
 * Test API endpoints
 */
async function testApiEndpoints() {
  log.test('Testing API endpoints...');
  
  const endpoints = [
    { path: '/projects', name: 'Projects' },
    { path: '/skills', name: 'Skills' },
    { path: '/blogposts', name: 'Blog Posts' },
  ];

  let passedCount = 0;
  
  for (const endpoint of endpoints) {
    try {
      const url = BACKEND_URL ? `${BACKEND_URL}${endpoint.path}` : `${FRONTEND_URL}/api${endpoint.path}`;
      const response = await makeRequest(url);
      
      if (response.status === 200) {
        log.success(`${endpoint.name} endpoint working`);
        passedCount++;
      } else {
        log.warning(`${endpoint.name} endpoint returned status ${response.status}`);
      }
    } catch (error) {
      log.error(`${endpoint.name} endpoint failed: ${error.message}`);
    }
  }
  
  return passedCount === endpoints.length;
}

/**
 * Test chat functionality
 */
async function testChatFunctionality() {
  log.test('Testing chat functionality...');
  
  try {
    const response = await makeRequest(`${FRONTEND_URL}/api/chat`, {
      method: 'POST',
      body: {
        messages: [
          { role: 'user', content: 'Hello, this is a test message' }
        ]
      }
    });
    
    if (response.status === 200 && response.data?.message) {
      log.success('Chat functionality working');
      
      // Check if it's using AI or fallback
      if (response.data.message.includes('AI service is currently unavailable')) {
        log.info('Chat using fallback mode (expected if AI tokens not configured)');
      } else {
        log.info('Chat using AI mode');
      }
      return true;
    } else {
      log.warning(`Chat test returned status ${response.status}`);
      return false;
    }
  } catch (error) {
    log.error(`Chat test failed: ${error.message}`);
    return false;
  }
}

/**
 * Test contact form
 */
async function testContactForm() {
  log.test('Testing contact form...');
  
  try {
    const testMessage = {
      name: 'Integration Test',
      email: 'test@example.com',
      subject: 'Test Message',
      message: 'This is a test message from the integration test suite.'
    };
    
    const url = BACKEND_URL ? `${BACKEND_URL}/contact` : `${FRONTEND_URL}/api/contact`;
    const response = await makeRequest(url, {
      method: 'POST',
      body: testMessage
    });
    
    if (response.status === 200 || response.status === 201) {
      log.success('Contact form working');
      return true;
    } else {
      log.warning(`Contact form test returned status ${response.status}`);
      return false;
    }
  } catch (error) {
    log.error(`Contact form test failed: ${error.message}`);
    return false;
  }
}

/**
 * Test CORS configuration
 */
async function testCorsConfiguration() {
  log.test('Testing CORS configuration...');
  
  if (!BACKEND_URL) {
    log.warning('Backend URL not configured, skipping CORS test');
    return false;
  }
  
  try {
    const response = await makeRequest(`${BACKEND_URL}/projects`, {
      headers: {
        'Origin': FRONTEND_URL,
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type',
      }
    });
    
    if (response.headers['access-control-allow-origin']) {
      log.success('CORS configuration working');
      return true;
    } else {
      log.warning('CORS headers not found in response');
      return false;
    }
  } catch (error) {
    log.error(`CORS test failed: ${error.message}`);
    return false;
  }
}

/**
 * Run all tests
 */
async function runAllTests() {
  console.log('🚀 Starting Integration Test Suite');
  console.log('=====================================');
  console.log(`Frontend URL: ${FRONTEND_URL}`);
  console.log(`Backend URL: ${BACKEND_URL || 'Not configured'}`);
  console.log('');

  const tests = [
    { name: 'Frontend Health', fn: testFrontendHealth },
    { name: 'Backend Health', fn: testBackendHealth },
    { name: 'API Endpoints', fn: testApiEndpoints },
    { name: 'Chat Functionality', fn: testChatFunctionality },
    { name: 'Contact Form', fn: testContactForm },
    { name: 'CORS Configuration', fn: testCorsConfiguration },
  ];

  let passedTests = 0;
  const results = [];

  for (const test of tests) {
    console.log(`\n--- ${test.name} ---`);
    try {
      const result = await test.fn();
      results.push({ name: test.name, passed: result });
      if (result) passedTests++;
    } catch (error) {
      log.error(`Test "${test.name}" threw an error: ${error.message}`);
      results.push({ name: test.name, passed: false });
    }
  }

  // Summary
  console.log('\n=====================================');
  console.log('📊 TEST SUMMARY');
  console.log('=====================================');
  
  results.forEach(result => {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} ${result.name}`);
  });
  
  console.log('');
  console.log(`Total: ${passedTests}/${tests.length} tests passed`);
  
  if (passedTests === tests.length) {
    log.success('🎉 All tests passed! Integration is working correctly.');
  } else if (passedTests > 0) {
    log.warning(`⚠️  ${tests.length - passedTests} test(s) failed. Some functionality may be degraded.`);
  } else {
    log.error('💥 All tests failed. Integration is not working.');
  }
  
  // Exit with appropriate code
  process.exit(passedTests === tests.length ? 0 : 1);
}

// Handle command line arguments
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log('Integration Test Suite');
  console.log('');
  console.log('Usage: node test-integration.js [options]');
  console.log('');
  console.log('Environment Variables:');
  console.log('  FRONTEND_URL              Frontend URL (default: https://my-portfolio-menno.vercel.app)');
  console.log('  BACKEND_URL               Backend API URL');
  console.log('  NEXT_PUBLIC_API_BASE_URL  Alternative backend URL');
  console.log('');
  console.log('Options:');
  console.log('  --help, -h               Show this help message');
  process.exit(0);
}

// Run the tests
runAllTests().catch(error => {
  log.error(`Test runner error: ${error.message}`);
  process.exit(1);
});
