// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Td-GgTOpkOjVBvU48MiXZBumGCtIp2Y",
  authDomain: "ait-park-me-in-project-id.firebaseapp.com",
  projectId: "ait-park-me-in-project-id",
  storageBucket: "ait-park-me-in-project-id.firebasestorage.app",
  messagingSenderId: "607778444771",
  appId: "1:607778444771:web:91509b6bce0f4967c9bcd6",
  measurementId: "G-C1Q80NGS5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);