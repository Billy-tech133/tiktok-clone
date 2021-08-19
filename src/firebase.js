import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF_FPKdV7RQabyTYJlL5sugw-KcDd4r2c",
  authDomain: "tiktok-clone-269b5.firebaseapp.com",
  projectId: "tiktok-clone-269b5",
  storageBucket: "tiktok-clone-269b5.appspot.com",
  messagingSenderId: "96395459882",
  appId: "1:96395459882:web:e4aef1c167a085620b7253",
  measurementId: "G-NDEC3V8TFX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
