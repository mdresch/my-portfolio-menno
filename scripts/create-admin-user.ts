// This script creates an admin user in Firebase Authentication
// Run with: npx ts-node scripts/create-admin-user.ts

import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

// Initialize Firebase Admin SDK
const serviceAccountPath = path.join(__dirname, '..', 'my-portfolio-menno-1c10fc787618.json');

if (!fs.existsSync(serviceAccountPath)) {
  console.error('Service account key file not found at:', serviceAccountPath);
  console.error('Please ensure the Firebase service account key is in the root directory.');
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'my-portfolio-menno'
  });
}

async function createAdminUser() {
  try {
    const email = 'admin@menno.dev';
    const password = 'AdminPassword123!'; // You should change this after first login
    const displayName = 'Admin User';

    console.log('Creating admin user...');
    
    // Check if user already exists
    try {
      const existingUser = await admin.auth().getUserByEmail(email);
      console.log('User already exists:', existingUser.uid);
      console.log('Email:', existingUser.email);
      console.log('Display Name:', existingUser.displayName);
      return;
    } catch (error: any) {
      if (error.code !== 'auth/user-not-found') {
        throw error;
      }
      // User doesn't exist, continue with creation
    }

    // Create the user
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: displayName,
      emailVerified: true, // Mark email as verified
    });

    console.log('Successfully created admin user:');
    console.log('UID:', userRecord.uid);
    console.log('Email:', userRecord.email);
    console.log('Display Name:', userRecord.displayName);
    console.log('');
    console.log('You can now sign in with:');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('');
    console.log('⚠️  IMPORTANT: Please change the password after your first login!');

  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

createAdminUser()
  .then(() => {
    console.log('Script completed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });