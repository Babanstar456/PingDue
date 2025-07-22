// ./firebase/config.ts
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKYz_7JqeMbdLwDmVe6cU1waT-ghsbdaI",
  authDomain: "pingdue-efc3c.firebaseapp.com",
  projectId: "pingdue-efc3c",
  storageBucket: "pingdue-efc3c.appspot.com", // ✅ Corrected domain
  messagingSenderId: "293605640906",
  appId: "1:293605640906:web:2d3e67fb9239e915c9c233",
  measurementId: "G-RYMDLZW5RJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup };
