import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjV7hJAGynyPEVXNVbeYuJmZxFCQNPA9w",
  authDomain: "simple-firebase-authenti-b5.firebaseapp.com",
  projectId: "simple-firebase-authenti-b5",
  storageBucket: "simple-firebase-authenti-b5.appspot.com",
  messagingSenderId: "859394212128",
  appId: "1:859394212128:web:5e0961f352a7aa10505745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;