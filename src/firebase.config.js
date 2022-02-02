// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoI0xKKENb6Y1gmc9fKrCUI9k5BgsjnXE",
  authDomain: "house-marketplace-app-3807b.firebaseapp.com",
  projectId: "house-marketplace-app-3807b",
  storageBucket: "house-marketplace-app-3807b.appspot.com",
  messagingSenderId: "353249199401",
  appId: "1:353249199401:web:84930a7c91773ae1a6a338"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()

