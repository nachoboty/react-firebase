import React from "react";
//Importamos la aplicación/credenciales
// import firebaseApp from "./firebase/credenciales";
import {firebaseApp} from "./firebase/credenciales";
import Login from "./screens/Login/Main";
import Loading from "./screens/Loading/Main";
import Home from "./screens/Home/Main";

// Conforme se necesite, importar los demás servicios y funciones. Por ejemplo:

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  // Creamos un estado para saber si el usuario está logueado o no
  const [user, setUser] = React.useState(undefined);

  // Creamos un estado para saber si la aplicación está cargando o no
  const [loading, setLoading] = React.useState(true);

  // Cuando auth cambia, se ejecuta esta función
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Si la aplicación está cargando, mostramos el componente Loading
  if (loading && user === undefined) {
    return <Loading />;
  }

  // Si el usuario está logueado, mostramos el componente Home
  if (user) {
    return <Home />;
  }

  // Si el usuario no está logueado, mostramos el componente Login
  return <Login />;
}

export default App;




