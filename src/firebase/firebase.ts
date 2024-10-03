// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ODs2JFIvR3hm2wdx9iWT6TV8XRbAwJs",
  authDomain: "react-blog-cons.firebaseapp.com",
  projectId: "react-blog-cons",
  storageBucket: "react-blog-cons.appspot.com",
  messagingSenderId: "977268141612",
  appId: "1:977268141612:web:38321f04b1cdc70b45ab89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storageFr = getStorage(app);
export { app, db, storageFr };
