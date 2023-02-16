// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth ,signInWithPopup ,FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcywfBf1P1uc1TbhfEX9jJwzBBX3xEbls",
  authDomain: "fir-react-17e6a.firebaseapp.com",
  projectId: "fir-react-17e6a",
  storageBucket: "fir-react-17e6a.appspot.com",
  messagingSenderId: "204646785289",
  appId: "1:204646785289:web:a841434dde54cd1631b3d8",
  measurementId: "G-XJM2VYBDFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const fbProvider = new FacebookAuthProvider();
export {
    GoogleAuthProvider,auth ,signInWithPopup ,provider,FacebookAuthProvider ,fbProvider
}