
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDRsF-A6rFsYyltb9j2hrddlnIuBd8rVHY",
  authDomain: "thestartup-da7c7.firebaseapp.com",
  projectId: "thestartup-da7c7",
  storageBucket: "thestartup-da7c7.firebasestorage.app",
  messagingSenderId: "183714938559",
  appId: "1:183714938559:web:c178558690643b8e14500a",
  measurementId: "G-4NHQ4J7HXS"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
