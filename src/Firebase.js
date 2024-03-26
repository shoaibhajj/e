import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "eshop-ffb89.firebaseapp.com",
  projectId: "eshop-ffb89",
  storageBucket: "eshop-ffb89.appspot.com",
  messagingSenderId: "257506645259",
  appId: "1:257506645259:web:fd905b0455fa39b14e3e0e",
  measurementId: "G-8F12CDKLQG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
