
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVBPtv61eVpy18oTwAx3DbXx1ktRvoKlc",
  authDomain: "first-app-1d1d0.firebaseapp.com",
  projectId: "first-app-1d1d0",
  storageBucket: "first-app-1d1d0.firebasestorage.app",
  messagingSenderId: "937345906870",
  appId: "1:937345906870:web:c12b91555ff5706b5fce17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);