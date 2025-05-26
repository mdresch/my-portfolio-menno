// Simple Firebase test to diagnose the 401 error
const fetch = require('node-fetch').default || require('node-fetch');

async function testFirebaseAPI() {
  const apiKey = 'AIzaSyB584hKIFvvUm1JiAsVGcHLpZhh3UwLnrI';
  const email = 'admin@menno.dev';
  const password = 'AdminPassword123!';
  
  console.log('Testing Firebase Authentication API directly...');
  console.log('API Key:', apiKey);
  console.log('Email:', email);
  
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true
    })
  });
  
  console.log('Response status:', response.status);
  console.log('Response headers:', Object.fromEntries(response.headers.entries()));
  
  const responseText = await response.text();
  console.log('Response body:', responseText);
  
  if (response.status === 401) {
    console.log('\n❌ 401 Unauthorized Error');
    console.log('This could mean:');
    console.log('1. Email/Password authentication is not enabled in Firebase Console');
    console.log('2. The API key is invalid or restricted');
    console.log('3. The user credentials are incorrect');
    console.log('4. The Firebase project settings need to be configured');
  }
}

testFirebaseAPI().catch(console.error);
