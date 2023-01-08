import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATcGPBZzTb0BNGkfCyqe81xvZl9weF-wE",
  authDomain: "buy-sell-5b5dd.firebaseapp.com",
  projectId: "buy-sell-5b5dd",
  storageBucket: "buy-sell-5b5dd.appspot.com",
  messagingSenderId: "634393508126",
  appId: "1:634393508126:web:4597def92a4cbfd345710f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth();
export const db = getFirestore();
export default app;