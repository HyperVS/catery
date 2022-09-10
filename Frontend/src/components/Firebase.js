import * as dotenv from 'dotenv';
dotenv.config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Firebase Authentification
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const provider = new GoogleAuthProvider();



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

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;

  })
  .catch(( error ) => { 
    const errorCode = error.code;
    const errorMessage = error.message;
  })

export default app;