import React from 'react'
import {firebaseApp} from '../../firebase/credenciales'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Inicio_sesion_email() {
  return (
    <div>Inicio_sesion_email</div>
  )
}

export default Inicio_sesion_email