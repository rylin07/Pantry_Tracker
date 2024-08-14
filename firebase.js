// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Correct import statement
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "inventory-management-59bf9.firebaseapp.com",
  projectId: "inventory-management-59bf9",
  storageBucket: "inventory-management-59bf9.appspot.com",
  messagingSenderId: "896323724034",
  appId: "1:896323724034:web:391e3e22ff4badaf3cd81b",
  measurementId: "G-MF5TNKQJ8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
