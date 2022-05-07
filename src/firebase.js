import { initializeApp } from "firebase/app";
import 'firebase/firestore'
// import firebase from 'firebase/compat/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbQL5iwQ-hJeM5-f6EtEqlisnc9GTZtMA",
    authDomain: "c-linkedin.firebaseapp.com",
    projectId: "c-linkedin",
    storageBucket: "c-linkedin.appspot.com",
    messagingSenderId: "372258507494",
    appId: "1:372258507494:web:4a1baaa599b327cd7a8927",
    measurementId: "G-9BM87L9H9B"

};

const firebaseApp = initializeApp(firebaseConfig);
// const db=firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage=firebase.storage();


export { auth, provider };
// export default db;