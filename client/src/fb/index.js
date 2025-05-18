import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBNi-M4eSiO8yqISPTg5HTV5Jjhpnkcax8",
  authDomain: "vitalvantage1.firebaseapp.com",
  databaseURL: "https://vitalvantage1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vitalvantage1",
  storageBucket: "vitalvantage1.firebasestorage.app",
  messagingSenderId: "153756473225",
  appId: "1:153756473225:web:e573ddfebe9b6ab66cb358",
  measurementId: "G-QQ98S6FZ9V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };