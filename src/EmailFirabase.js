

import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,signOut,getAuth, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeIgllrxLZ3GfdZ-CJ1YvvJORR09977_w",
  authDomain: "new-auth-96b7b.firebaseapp.com",
  projectId: "new-auth-96b7b",
  storageBucket: "new-auth-96b7b.appspot.com",
  messagingSenderId: "5451266190",
  appId: "1:5451266190:web:39c9c025997227086c71df",
  measurementId: "G-56FW6Y8G37"
};

const app = initializeApp(firebaseConfig);

let auth=getAuth()

export function signup(Email,Password){
    return createUserWithEmailAndPassword( auth,Email,Password)
}
export function login(Email,Password){
    return signInWithEmailAndPassword(auth,Email,Password)
}

export function logout(){
    return signOut(auth) 
}