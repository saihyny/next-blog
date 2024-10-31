// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-68bdd.firebaseapp.com",
  projectId: "blog-68bdd",
  storageBucket: "blog-68bdd.appspot.com",
  messagingSenderId: "936660735607",
  appId: "1:936660735607:web:16d01b5870fc4d6e7ad872"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);