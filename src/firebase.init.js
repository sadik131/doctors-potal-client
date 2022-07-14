// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCysJdLaIdSEvMlVUXEQa9MxnAOoqT0aRk",
  authDomain: "doctors-potals.firebaseapp.com",
  projectId: "doctors-potals",
  storageBucket: "doctors-potals.appspot.com",
  messagingSenderId: "1031150652656",
  appId: "1:1031150652656:web:4a84cd8b26e170b9060635",
  measurementId: "G-S5C432EXGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;