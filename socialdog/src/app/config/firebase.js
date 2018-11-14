import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkN_m3voAcvb93HPrksncpXNa5b6JJFXk",
    authDomain: "socialdog-a0800.firebaseapp.com",
    databaseURL: "https://socialdog-a0800.firebaseio.com",
    projectId: "socialdog-a0800",
    storageBucket: "socialdog-a0800.appspot.com",
    messagingSenderId: "458883442501"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;