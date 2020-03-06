import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
    {
        apiKey: "AIzaSyAkdtLsRsd7Qz4eKR4bHNLTvWft7JX5xoM",
        authDomain: "crwn-db-c4f2c.firebaseapp.com",
        databaseURL: "https://crwn-db-c4f2c.firebaseio.com",
        projectId: "crwn-db-c4f2c",
        storageBucket: "crwn-db-c4f2c.appspot.com",
        messagingSenderId: "119291797765",
        appId: "1:119291797765:web:3d06c58eae6501140bd76c",
        measurementId: "G-5BBP6MBMG7"
      };
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=() =>auth.signInWithPopup(provider);
export default firebase;