// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0ZreblIU6uyGf-FMZnd2QVD9DL6s6XaI",
  authDomain: "oauth-5b91e.firebaseapp.com",
  projectId: "oauth-5b91e",
  storageBucket: "oauth-5b91e.appspot.com",
  messagingSenderId: "895303889035",
  appId: "1:895303889035:web:535125c543fd9d378e248e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);