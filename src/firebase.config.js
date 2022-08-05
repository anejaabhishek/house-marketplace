// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKbyVMRAMT6OniWKAkbg9HK7NRJslsjN0",
  authDomain: "house-marketplace-app-8ccb5.firebaseapp.com",
  projectId: "house-marketplace-app-8ccb5",
  storageBucket: "house-marketplace-app-8ccb5.appspot.com",
  messagingSenderId: "565080919768",
  appId: "1:565080919768:web:cb0523746ed23e3b8751ad",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
