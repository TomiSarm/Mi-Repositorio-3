import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZ2-k_EN7GhFdyOBo4dobXAncETk8BpIY",
  authDomain: "ecommerce-291c2.firebaseapp.com",
  projectId: "ecommerce-291c2",
  storageBucket: "ecommerce-291c2.appspot.com",
  messagingSenderId: "582355325054",
  appId: "1:582355325054:web:fbd287edeb6d26c7e6482f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);