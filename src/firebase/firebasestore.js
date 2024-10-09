import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtY-6We55aT2GnqJWDSvNc1HHLmnaI77Y",
  authDomain: "blashio.firebaseapp.com",
  projectId: "blashio",
  storageBucket: "blashio.appspot.com",
  messagingSenderId: "640014273124",
  appId: "1:640014273124:web:3b9abdb1a4ba29ba55ed71"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);






