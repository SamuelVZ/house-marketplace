import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAlZHFBCQA1tLGqOAWDQs7e39mVFQA2M3s",
    authDomain: "house-marketplace-cf14c.firebaseapp.com",
    projectId: "house-marketplace-cf14c",
    storageBucket: "house-marketplace-cf14c.appspot.com",
    messagingSenderId: "762792333597",
    appId: "1:762792333597:web:7ad4dd0204c427a98ed1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();