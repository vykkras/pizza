// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqHUxuZih6yb4QrplPoFrd82KASOVgM70",
  authDomain: "pizza-vote.firebaseapp.com",
  projectId: "pizza-vote",
  storageBucket: "pizza-vote.firebasestorage.app",
  messagingSenderId: "930114233781",
  appId: "1:930114233781:web:baf8224607c0a7dc00a5fc",
  measurementId: "G-8C4SXCJXJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};