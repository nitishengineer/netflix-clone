import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'

const firebaseConfig = {
  apiKey: "AIzaSyC1dlWKhGFZC3d8FVTf8RGPa49571RcfHU",
  authDomain: "netflix-clone-a40ad.firebaseapp.com",
  projectId: "netflix-clone-a40ad",
  storageBucket: "netflix-clone-a40ad.firebasestorage.app",
  messagingSenderId: "302853799935",
  appId: "1:302853799935:web:df864815d33229245771ca"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

// Turns "auth/invalid-credential" into "invalid credential" for humans
const prettyError = (code) => code.split('/')[1].split('-').join(' ')

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db, 'users'), {
      uid: response.user.uid,
      name,
      email,
      authProvider: 'local',
    })
    toast.success(`Welcome to Netflix, ${name}!`)
  } catch (error) {
    toast.error(prettyError(error.code))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    toast.error(prettyError(error.code))
  }
}

const logOut = () => signOut(auth)

export { auth, db, signUp, login, logOut }