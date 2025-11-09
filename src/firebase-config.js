// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, collection, addDoc, getDocs, onSnapshot,limit, orderBy,query,  startAfter, serverTimestamp } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBY1M4jlBLY2nqSdNRHRost-QXLepOLR-U",
  authDomain: "dataapi-e47b5.firebaseapp.com",
  projectId: "dataapi-e47b5",
  storageBucket: "dataapi-e47b5.firebasestorage.app",
  messagingSenderId: "82982536087",
  appId: "1:82982536087:web:3c060e2f802ee7b2263ad2",
  measurementId: "G-L534QR5YVB"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { db, collection, addDoc, getDocs, onSnapshot,limit, orderBy,serverTimestamp,query ,  startAfter};
export { auth };