// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3D_bUqXxFuV-_OqDzMmMuwfiT2nTAMlk",
  authDomain: "midterm-yr3sm2.firebaseapp.com",
  projectId: "midterm-yr3sm2",
  storageBucket: "midterm-yr3sm2.firebasestorage.app",
  messagingSenderId: "995494481225",
  appId: "1:995494481225:web:8d3909eaf4650a70da1e98",
  measurementId: "G-M8CL3WRM2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);