import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// استبدل هذه القيم ببيانات مشروعك من إعدادات فايربيس
const firebaseConfig = {
  apiKey: "AIzaSyDzlC_mo2obyy9atgYDrS1CYdKpsnAkqgo",
  authDomain: "digital-menu-backend.firebaseapp.com",
  projectId: "digital-menu-backend",
  storageBucket: "digital-menu-backend.firebasestorage.app",
  messagingSenderId: "9454812846",
  appId: "1:9454812846:web:7547b10fa99d5096adb73f"
};

// تهيئة التطبيق وقاعدة البيانات
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);