import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87GYx0u77-qJNtoybMyUCsm8pVnPNOhg",
  authDomain: "crypto-tracker-fa526.firebaseapp.com",
  projectId: "crypto-tracker-fa526",
  storageBucket: "crypto-tracker-fa526.appspot.com",
  messagingSenderId: "543805630902",
  appId: "1:543805630902:web:a23e4b492a010dd0393917"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

