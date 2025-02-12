import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQNXr--NPKC_M6FfueoKbddHjMxjNY6og",
  authDomain: "nsu-hackathon-1e925.firebaseapp.com",
  projectId: "nsu-hackathon-1e925",
  storageBucket: "nsu-hackathon-1e925.firebasestorage.app",
  messagingSenderId: "411575488088",
  appId: "1:411575488088:web:bead3ed7edbaf37b82c42d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
