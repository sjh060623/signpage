import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD_Tqevd0cioiihsDyXJ5FKE_ay-L1gn1Y",
    authDomain: "loginpage-72b3f.firebaseapp.com",
    projectId: "loginpage-72b3f",
    storageBucket: "loginpage-72b3f.appspot.com",
    messagingSenderId: "215593079161",
    appId: "1:215593079161:web:2baf15e8890844a2b0dfa8",
    measurementId: "G-BSBHEZH8ZK"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  
  export const authService = firebase.auth();
  export const dbService = firebase.firestore();
  export const storageService = firebase.storage();
  