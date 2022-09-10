// import * as dotenv from 'dotenv';
// dotenv.config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyBErnJMs9hAY6wXNLdNG-tRih_9tNcAg8s",
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentification
const auth = getAuth(app);




export default app;