import * as dotenv from 'dotenv';
dotenv.config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Firebase Authentification
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase


const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app;