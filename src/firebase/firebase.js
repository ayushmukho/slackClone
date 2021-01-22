import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC-tlKuEkKX3DbWewiYMzQ0VoDe3gZPDhg",
    authDomain: "slack-clone-39332.firebaseapp.com",
    projectId: "slack-clone-39332",
    storageBucket: "slack-clone-39332.appspot.com",
    messagingSenderId: "75578507937",
    appId: "1:75578507937:web:54113c76d53249a2a026e0",
    measurementId: "G-CTX0ZXELF9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;