import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;