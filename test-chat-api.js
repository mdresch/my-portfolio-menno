const http = require('http');

function testChatAPI() {
  console.log('Testing chat API...');
  
  const postData = JSON.stringify({
    messages: [
      { role: 'user', content: 'Hello! Can you tell me about this portfolio?' }
    ]
  });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/chat',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, (res) => {
    console.log('Response status:', res.statusCode);
    console.log('Response headers:', res.headers);
    
    let responseBody = '';
    
    res.on('data', (chunk) => {
      responseBody += chunk;
    });
    
    res.on('end', () => {
      console.log('Response body:', responseBody);
      
      if (res.statusCode === 200) {
        try {
          const jsonResponse = JSON.parse(responseBody);
          console.log('Parsed JSON:', jsonResponse);
        } catch (e) {
          console.log('Response is not valid JSON');
        }
      }
    });
  });

  req.on('error', (error) => {
    console.error('Error testing API:', error.message);
  });

  req.write(postData);
  req.end();
}

testChatAPI();
