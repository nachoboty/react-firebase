import React from 'react'
import { firebaseApp, db } from '../../firebase/credenciales'
import { doc, setDoc, deleteDoc, getDoc, updateDoc, getDocs, collection } from "firebase/firestore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from './Admin';
import Data from './Data';
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
    <Router>
      <button onClick={handleLogOut}>Cerrar sesión</button>
      {/* 
      Add a botton to got to admin page and the data page
      */}
      <button onClick={() => { window.location.href = '/admin' }}>Admin</button>
      <button onClick={() => { window.location.href = '/data' }}>Data</button>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  )
}

export default Main