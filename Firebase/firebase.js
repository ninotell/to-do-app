// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBza0lo5OiZtQNs77IJ3U44fvqZD2AJnA",
  authDomain: "to-do-app-rn-e3c38.firebaseapp.com",
  projectId: "to-do-app-rn-e3c38",
  storageBucket: "to-do-app-rn-e3c38.appspot.com",
  messagingSenderId: "1055471818309",
  appId: "1:1055471818309:web:0d410b75f33c1156d3f52c"
};

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)