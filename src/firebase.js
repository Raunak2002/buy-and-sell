import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export default app;