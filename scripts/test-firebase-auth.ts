// This script tests Firebase Authentication
// Run with: npx tsx scripts/test-firebase-auth.ts

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth';

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyB584hKIFvvUm1JiAsVGcHLpZhh3UwLnrI',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'my-portfolio-menno.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'my-portfolio-menno',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'my-portfolio-menno.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '43048867842',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:43048867842:web:b184135ac8523b4aa7af1b',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-JVLNTJECW3'
};

async function testFirebaseAuth() {
  try {
    console.log('Initializing Firebase...');
    console.log('Config:', JSON.stringify(firebaseConfig, null, 2));
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    console.log('Firebase initialized successfully');
    console.log('Auth instance created');
    
    // Test credentials
    const email = 'admin@menno.dev';
    const password = 'AdminPassword123!';
    
    console.log('Attempting to sign in with:', email);
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('✅ Authentication successful!');
    console.log('User UID:', user.uid);
    console.log('User Email:', user.email);
    console.log('User Display Name:', user.displayName);
    console.log('Email Verified:', user.emailVerified);
    
    // Get ID token
    const idToken = await user.getIdToken();
    console.log('ID Token received (first 50 chars):', idToken.substring(0, 50) + '...');
    
  } catch (error: any) {
    console.error('❌ Authentication failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    
    if (error.code === 'auth/user-not-found') {
      console.log('\n💡 Suggestion: User does not exist. Run the create-admin-user script first.');
    } else if (error.code === 'auth/wrong-password') {
      console.log('\n💡 Suggestion: Password is incorrect.');
    } else if (error.code === 'auth/invalid-email') {
      console.log('\n💡 Suggestion: Email format is invalid.');
    } else if (error.code === 'auth/network-request-failed') {
      console.log('\n💡 Suggestion: Network error. Check internet connection.');
    } else if (error.code === 'auth/api-key-not-valid') {
      console.log('\n💡 Suggestion: Firebase API key is invalid.');
    }
  }
}

testFirebaseAuth()
  .then(() => {
    console.log('\nTest completed.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
