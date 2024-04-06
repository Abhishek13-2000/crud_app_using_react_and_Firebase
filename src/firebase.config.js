// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIcvZIqE4T8yblZ1vDRii4c0PGWYoKf8k",
  authDomain: "react-fire-crud-9bcc1.firebaseapp.com",
  projectId: "react-fire-crud-9bcc1",
  storageBucket: "react-fire-crud-9bcc1.appspot.com",
  messagingSenderId: "467896523181",
  appId: "1:467896523181:web:c47296623682728092a924"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getDatabase(app)