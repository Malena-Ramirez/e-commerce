import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-DFd4mVw1ZHyhqqi8seR65mFPnAR4sKM",
  authDomain: "e-commerce-390d9.firebaseapp.com",
  projectId: "e-commerce-390d9",
  storageBucket: "e-commerce-390d9.appspot.com",
  messagingSenderId: "855450211798",
  appId: "1:855450211798:web:034030b174b3b2cfcd0077"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const google = new firebase.auth.GoogleAuthProvider();

export {
  db,
  google,
  firebase
}