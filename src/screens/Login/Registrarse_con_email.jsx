import React from 'react'
import { firebaseApp, db } from '../../firebase/credenciales'
import { doc, setDoc, deleteDoc, getDoc,updateDoc, getDocs, collection } from "firebase/firestore";
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

function Registrarse_con_email() {
  // Inputs:
  // - email
  // - password
  // - validación de contraseña
  // - marca

  // Propiedades del usuario:
  // - nombre
  // - apellido
  // - email
  // - contraseña (encriptada)
  // - marca
  // - fecha de creación
  // - fecha de modificación
  // - fecha de eliminación
  // - estado (activo, eliminado)
  // - tipo de usuario (admin, usuario)
  // - validado (true, false)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [validacion, setValidacion] = React.useState('')
  const [marca, setMarca] = React.useState('')
  const [error, setError] = React.useState('')
  const [usuario, setUsuario] = React.useState(null)


  const handleRegistro = async (e) => {
    e.preventDefault()
    if (password !== validacion) {
      setError('Las contraseñas no coinciden')
      return
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res)
      await setDoc(doc(db, 'usuarios', res.user.uid), {
        nombre: '',
        apellido: '',
        email: email,
        marca: marca,
        fecha_creacion: new Date(),
        fecha_modificacion: new Date(),
        fecha_eliminacion: new Date(),
        estado: 'activo',
        tipo_usuario: 'usuario',
        validado: false,
      })
      setError('')
      setEmail('')
      setPassword('')
      setValidacion('')
      setMarca('')
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/invalid-email') {
        setError('Email no válido')
      }
      if (error.code === 'auth/email-already-in-use') {
        setError('Email ya registrado')
      }
    }
  }
  

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user)
      } else {
        setUsuario(null)
      }
    });
  }, [])

  return (
    <div>
      <h3>Registrarse con email</h3>
      <form onSubmit={handleRegistro}>
        <input
          type="email"
          placeholder="Introduce tu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input

          type="password"
          placeholder="Introduce tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Repite tu contraseña"
          onChange={(e) => setValidacion(e.target.value)}
          value={validacion}
        />
        <input
          type="text"
          placeholder="Introduce tu marca"
          onChange={(e) => setMarca(e.target.value)}
          value={marca}
        />
        <button type="submit">Registrarse</button>
      </form>
      {error ? <p>{error}</p> : null}
      {usuario ? <p>Usuario registrado</p> : null}
    </div>
  )
}

export default Registrarse_con_email

  
