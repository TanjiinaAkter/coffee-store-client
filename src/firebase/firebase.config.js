// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_APIKEY,
  authDomain: import.meta.env.API_AUTHDOMAIN,
  projectId: import.meta.env.API_PROJECTID,
  storageBucket: import.meta.env.API_STORAGEBUCKET,
  messagingSenderId: import.meta.env.API_MESSAGINGSENDERID,
  appId: import.meta.env.API_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
