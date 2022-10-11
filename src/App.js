import React from "react";
//Importamos la aplicación/credenciales
// import firebaseApp from "./firebase/credenciales";
import { firebaseApp } from "./firebase/credenciales";
import Login from "./screens/Login/Main";
import Loading from "./screens/Loading/Main";
import Home from "./screens/Home/Main";
import { setUser } from "./redux/actions/clientActions";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "./firebase/functions/users";

// Conforme se necesite, importar los demás servicios y funciones. Por ejemplo:

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);
// const getUserById = users_functions.getUserById;

function App() {
  const dispatch = useDispatch();
  // Creamos un estado para saber si el usuario está logueado o no
  
  // Creamos un estado para saber si la aplicación está cargando o no
  const [loading, setLoading] = React.useState(true);
  var user_data = useSelector((state) => state.clientReducer.user);
  

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log({ user });
        // Si el usuario está logueado, dispatcheamos setUser con el usuario
        const uid = user.uid;
        getUserById(uid).then((user_data) => {
          dispatch(setUser({ ...user_data, ...user }));
        });
      } else {
        // Si el usuario no está logueado, dispatcheamos setUser con null
        dispatch(setUser(null));
      }
    });
    // Cuando se desmonta el componente, se ejecuta esta función
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    console.log({ user_data });
    setLoading(false);
  }, [user_data]);
  // Si la aplicación está cargando, mostramos el componente Loading
  if (loading || user_data === undefined) {
    return <Loading />;
  }
  // Si el usuario está logueado, mostramos el componente Home
  if (user_data) {
    return <Home />;
  }
  // Si el usuario no está logueado, mostramos el componente Login
  return <Login />;
}

export default App;




