// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-byu.firebaseapp.com",
  projectId: "mern-estate-byu",
  storageBucket: "mern-estate-byu.appspot.com",
  messagingSenderId: "94139607372",
  appId: "1:94139607372:web:f1e31e10d0b8341be707e9",
  measurementId: "G-E6QJQEDPKC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);