
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,getAuth}from"firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAClTgMrpg4rIF2yAITcEVHktRTdQaGeO0",
  authDomain: "new-auth-7755c.firebaseapp.com",
  projectId: "new-auth-7755c",
  storageBucket: "new-auth-7755c.appspot.com",
  messagingSenderId: "699514089892",
  appId: "1:699514089892:web:905877b59b02cefe01d131",
  measurementId: "G-M3BWCC6E02"
};

const app = initializeApp(firebaseConfig);

//getAuth()
let auth=getAuth()


 export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password)
}

 export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
}

 export function logout(){
  return signOut(auth)
}




