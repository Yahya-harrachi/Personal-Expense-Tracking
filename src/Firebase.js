
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCnpTnF0P-0kruDmIiuDymwLoMl9O9kHl8",
  authDomain: "personal-expense-tracker-26425.firebaseapp.com",
  projectId: "personal-expense-tracker-26425",
  storageBucket: "personal-expense-tracker-26425.appspot.com",
  messagingSenderId: "66578447968",
  appId: "1:66578447968:web:1606109a39cfaf7ef74d05",
  measurementId: "G-BX8ZTPKXKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;