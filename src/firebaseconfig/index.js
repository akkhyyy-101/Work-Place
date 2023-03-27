// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwsoXJZsfoCB-pt1unLXhpMJzCv8_4gsI",
  authDomain: "workplace-feb.firebaseapp.com",
  projectId: "workplace-feb",
  storageBucket: "workplace-feb.appspot.com",
  messagingSenderId: "218517015728",
  appId: "1:218517015728:web:1fe432739e36b4b2a67f75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)