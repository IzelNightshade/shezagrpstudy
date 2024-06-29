// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX-BbZ2tJ2P3tSQNLF5T5VXQal0SHvNZk",
  authDomain: "grpstudy-9ff73.firebaseapp.com",
  projectId: "grpstudy-9ff73",
  storageBucket: "grpstudy-9ff73.appspot.com",
  messagingSenderId: "889805366651",
  appId: "1:889805366651:web:51aeadcad19b5f03ed49de",
  measurementId: "G-5FWD4325Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}
