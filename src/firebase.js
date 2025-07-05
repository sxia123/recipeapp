import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhQqOh987BMMtYQuEpz5UoSD6I7N8rCwc",
  authDomain: "recipeapp-d61cc.firebaseapp.com",
  projectId: "recipeapp-d61cc",
  storageBucket: "recipeapp-d61cc.firebasestorage.app",
  messagingSenderId: "113092676541",
  appId: "1:113092676541:web:05093e39160311ec62a0d4",
  measurementId: "G-Y2LVWJLQXX",
};

// ✅ Only initialize if no apps exist
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
