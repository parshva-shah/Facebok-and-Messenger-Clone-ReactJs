import firebase from 'firebase';
import firestore from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_6xGl_Lsy8JKEKqqzDd8UC2bDK55bQ70",
  authDomain: "fb-clone-bb235.firebaseapp.com",
  databaseURL: "https://fb-clone-bb235.firebaseio.com",
  projectId: "fb-clone-bb235",
  storageBucket: "fb-clone-bb235.appspot.com",
  messagingSenderId: "641932837892",
  appId: "1:641932837892:web:f3787f0e8a72457dc5a151",
  measurementId: "G-MJ9Y00H8LQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db