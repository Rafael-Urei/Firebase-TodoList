// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ILoginData } from "../../pages/Login/types";
import { IRegisterData } from "../../pages/Register/types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE9S6MAgJcANwzJbI4V5KIPgRGYjYWr_A",
  authDomain: "login-project-15f09.firebaseapp.com",
  projectId: "login-project-15f09",
  storageBucket: "login-project-15f09.appspot.com",
  messagingSenderId: "579497264070",
  appId: "1:579497264070:web:aa0e859fb677140ded68c7",
  measurementId: "G-3CVS1MRZ30",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export async function SignIn(
  data: ILoginData,
  setLoading: (value: boolean) => void,
  navigate: (value: string) => void
) {
  try {
    setLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    setLoading(false);
  } finally {
    setLoading(false);
  }
}

export async function SignUp(
  data: IRegisterData,
  setLoading: (value: boolean) => void,
  navigate: (value: string) => void
) {
  try {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    navigate("/login");
  } catch (error) {
    console.log(error);
    setLoading(false);
  } finally {
    setLoading(false);
  }
}

export async function SignOut(navigate: (value: string) => void) {
  try {
    await signOut(auth);
    alert("Signed out");
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
}
