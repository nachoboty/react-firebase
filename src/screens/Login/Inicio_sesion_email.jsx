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

// Copy this structure, for login with email
// return (
//   <div>
//     <h3>Registrarse con email</h3>
//     <form onSubmit={handleRegistro}>
//       <input
//         type="email"
//         placeholder="Introduce tu email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />
//       <input

//         type="password"
//         placeholder="Introduce tu contraseña"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       <input
//         type="password"
//         placeholder="Repite tu contraseña"
//         onChange={(e) => setValidacion(e.target.value)}
//         value={validacion}
//       />
//       <input
//         type="text"
//         placeholder="Introduce tu marca"
//         onChange={(e) => setMarca(e.target.value)}
//         value={marca}
//       />
//       <button type="submit">Registrarse</button>
//     </form>
//     {error ? <p>{error}</p> : null}
//     {usuario ? <p>Usuario registrado</p> : null}
//   </div>
// )


function Inicio_sesion_email() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [error, setError] = React.useState('')
  const [usuario, setUsuario] = React.useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      setUsuario(user)
      setError('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/invalid-email') {
        setError('Email no válido')
      }
      if (error.code === 'auth/user-not-found') {
        setError('Email no registrado')
      }
      if (error.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta')
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
      <h3>Iniciar sesión con email</h3>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar sesión</button>
      </form>
      {error ? <p>{error}</p> : null}
      {usuario ? <p>Usuario logueado</p> : null}
    </div>
  )
}

export default Inicio_sesion_email