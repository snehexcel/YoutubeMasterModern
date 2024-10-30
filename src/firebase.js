// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnuCfnJIixRVdxit1XC1Om0KQ9gHskV9o",
  authDomain: "yt-clone-e3307.firebaseapp.com",
  projectId: "yt-clone-e3307",
  storageBucket: "yt-clone-e3307.appspot.com",
  messagingSenderId: "697308892778",
  appId: "1:697308892778:web:543797a130d5d4734dc413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };