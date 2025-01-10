import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxeR7fDR_csebxqqVTRMuR0FJaDn3kVms",
  authDomain: "sia-final-exam-2d6ab.firebaseapp.com",
  projectId: "sia-final-exam-2d6ab",
  storageBucket: "sia-final-exam-2d6ab.firebasestorage.app",
  messagingSenderId: "532671754304",
  appId: "1:532671754304:web:49075685a36aa1570d6fa5",
  measurementId: "G-MXB46SSF2N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
