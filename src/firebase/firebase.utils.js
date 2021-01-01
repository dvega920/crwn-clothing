import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDD0fiavr6lkAcayKJc71VREyzFasHpH6M",
    authDomain: "crwn-db-1c9f2.firebaseapp.com",
    projectId: "crwn-db-1c9f2",
    storageBucket: "crwn-db-1c9f2.appspot.com",
    messagingSenderId: "1065024077763",
    appId: "1:1065024077763:web:a57c3a35b65681741ec776",
    measurementId: "G-YDZVMMW7QG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;