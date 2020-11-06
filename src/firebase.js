import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAJNSu3fjgf2DOQx70ydlAW-uNkfPg2siw",
    authDomain: "facebook-main-clone.firebaseapp.com",
    databaseURL: "https://facebook-main-clone.firebaseio.com",
    projectId: "facebook-main-clone",
    storageBucket: "facebook-main-clone.appspot.com",
    messagingSenderId: "573328764769",
    appId: "1:573328764769:web:01f6906d354b4b52741f20",
    measurementId: "G-SF54X9W124"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };