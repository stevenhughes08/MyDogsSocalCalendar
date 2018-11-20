import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDZ-M0WmLinS8jkE2CN1Zk8VLrLdTqLqBg",
    authDomain: "dogcal-6beb7.firebaseapp.com",
    databaseURL: "https://dogcal-6beb7.firebaseio.com",
    projectId: "dogcal-6beb7",
    storageBucket: "dogcal-6beb7.appspot.com",
    messagingSenderId: "1097832021447"

}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;