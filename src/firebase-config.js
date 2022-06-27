import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "foenanderwedding.firebaseapp.com",
    projectId: "foenanderwedding",
    storageBucket: "foenanderwedding.appspot.com",
    messagingSenderId: "745964579862",
    appId: "1:745964579862:web:c4860132901724408e5937",
    measurementId: "G-61NY814NZN"
  };

  initializeApp(firebaseConfig);

  export const db = getFirestore() 