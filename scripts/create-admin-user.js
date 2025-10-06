// Script to create admin user in Firebase Auth Emulator
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "demo-key",
  authDomain: "localhost:9099",
  projectId: "my-portfolio-menno",
  storageBucket: "my-portfolio-menno.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo",
  measurementId: "G-DEMO123"
};

async function createAdminUser() {
  try {
    console.log('Initializing Firebase...');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    // Connect to Auth emulator
    connectAuthEmulator(auth, "http://localhost:9099");
    
    console.log('Creating admin user...');
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      'admin@menno.dev', 
      'AdminPassword123!'
    );
    
    console.log('✅ Admin user created successfully!');
    console.log('Email:', userCredential.user.email);
    console.log('UID:', userCredential.user.uid);
    
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('ℹ️ Admin user already exists');
    } else {
      console.error('❌ Error creating admin user:', error.message);
    }
  }
}

createAdminUser();
