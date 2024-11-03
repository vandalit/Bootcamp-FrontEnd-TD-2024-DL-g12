// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByT2KR0WOOIz4MwbA-msZGU7i0IM78DQU",
  authDomain: "vuemasfirebase.firebaseapp.com",
  projectId: "vuemasfirebase",
  storageBucket: "vuemasfirebase.firebasestorage.app",
  messagingSenderId: "1016924893541",
  appId: "1:1016924893541:web:9a62b5002f76dca1fa318c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app