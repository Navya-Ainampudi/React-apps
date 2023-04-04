// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAALHD7fYQLTCvDHYVoqmvqwUCEIfaFDCM",
  authDomain: "authentication-72a2d.firebaseapp.com",
  projectId: "authentication-72a2d",
  storageBucket: "authentication-72a2d.appspot.com",
  messagingSenderId: "140127270792",
  appId: "1:140127270792:web:3663cf445cb6dbe3ddac3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export default db;
