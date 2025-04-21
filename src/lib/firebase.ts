// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB584hKIFvvUm1JiAsVGcHLpZhh3UwLnrI', // Replace with your actual API key
  authDomain: 'my-portfolio-menno.firebaseapp.com', // Replace with your actual auth domain
  projectId: '43048867842', // Replace with your actual project ID
  storageBucket: 'YOUR_STORAGE_BUCKET', // Replace with your actual storage bucket
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID', // Replace with your actual messaging sender ID
  appId: 'YOUR_APP_ID' // Replace with your actual app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
