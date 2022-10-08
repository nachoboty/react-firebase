import React from 'react'
import { firebaseApp, db } from '../../firebase/credenciales'
import { doc, setDoc, deleteDoc, getDoc, updateDoc, getDocs, collection } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
const auth = getAuth(firebaseApp);

function Main() {

  function handleLogOut() {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogOut}>Cerrar sesión</button>
    </div>
  )
}

export default Main