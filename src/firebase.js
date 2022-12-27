// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCns-z79LAyqRNq4A46hTnj2jr-XoyjzDk",
    authDomain: "netflix-clone2-d2973.firebaseapp.com",
    projectId: "netflix-clone2-d2973",
    storageBucket: "netflix-clone2-d2973.appspot.com",
    messagingSenderId: "184349414777",
    appId: "1:184349414777:web:6f9bf4996bd8d77193cba8"
  };

  const app = firebase.initializeApp(firebaseConfig)//initialize our firebase
  const db = app.firestore();//real time database of firebase
  const auth = app.auth();// this is authentication

  export {auth}
  export default db;