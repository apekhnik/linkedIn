import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD6884f0Tbhn0Sl-Vz60UgLd9YmWj2FJO0",
  authDomain: "linkedin-clone-8fcf0.firebaseapp.com",
  projectId: "linkedin-clone-8fcf0",
  storageBucket: "linkedin-clone-8fcf0.appspot.com",
  messagingSenderId: "885829369408",
  appId: "1:885829369408:web:f5560500c1c4a17d3569a5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
