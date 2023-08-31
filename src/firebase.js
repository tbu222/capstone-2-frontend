// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNsNdQ7AhJB-jaadR9N8VyvD1Pw5Q-vck",
  authDomain: "clone-15eea.firebaseapp.com",
  projectId: "clone-15eea",
  storageBucket: "clone-15eea.appspot.com",
  messagingSenderId: "415961489933",
  appId: "1:415961489933:web:ae72e68d309e2bd16aeb44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;