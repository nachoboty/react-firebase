import { db } from '../credenciales'
import { doc, setDoc, deleteDoc, getDoc, getDocs, updateDoc, collection } from "firebase/firestore";


var collectionRef = "usuarios";

export async function getUserById(id) {
    const docRef = doc(db, collectionRef, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}

const users_functions = {
    getUserById
}

export default users_functions