import firbase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBK1aCwtw5fZz4FABFA0oVvdMSuG0dCS1A",
  authDomain: "clone-6c4d6.firebaseapp.com",
  projectId: "clone-6c4d6",
  storageBucket: "clone-6c4d6.appspot.com",
  messagingSenderId: "791548219257",
  appId: "1:791548219257:web:3125bc40210aab5320a9a8",
};
const app = firbase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
