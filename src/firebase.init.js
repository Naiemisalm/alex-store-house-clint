// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXSdhr5LSsfNS-9T17sWZorYcl2XXmPMk",
  authDomain: "alex-store-house.firebaseapp.com",
  projectId: "alex-store-house",
  storageBucket: "alex-store-house.appspot.com",
  messagingSenderId: "1098684827202",
  appId: "1:1098684827202:web:9a4506d3e68b1530590fdb",
  measurementId: "G-DF03K02K1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;