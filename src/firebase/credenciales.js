// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDnWIjjRV8H76nwjd1jNZzjep0bBrZUyEQ",
  authDomain: "boty-nacho.firebaseapp.com",
  projectId: "boty-nacho",
  storageBucket: "boty-nacho.appspot.com",
  messagingSenderId: "214116006055",
  appId: "1:214116006055:web:cbefb8615a15e867308382",
  measurementId: "G-1R5GGCXZMV"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
