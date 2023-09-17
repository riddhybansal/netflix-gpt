// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBva2Wk5q7XD3hQr_i0usWuSjiL0eqK3n4",
  authDomain: "netflixgpt-88f53.firebaseapp.com",
  projectId: "netflixgpt-88f53",
  storageBucket: "netflixgpt-88f53.appspot.com",
  messagingSenderId: "616374417805",
  appId: "1:616374417805:web:41fd56e9e1fd71e85d65c4",
  measurementId: "G-9M6EZE4474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()