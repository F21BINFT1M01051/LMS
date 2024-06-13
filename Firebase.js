// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA395i1sczZZqooR_DGXKhq1le1WsLwn6I",
  authDomain: "lmsproject-01.firebaseapp.com",
  projectId: "lmsproject-01",
  storageBucket: "lmsproject-01.appspot.com",
  messagingSenderId: "707251699783",
  appId: "1:707251699783:web:9e4ab45d1684c2fdf73162",
  measurementId: "G-1JSCLGR0T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;