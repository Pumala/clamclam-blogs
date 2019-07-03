import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCs6Rx0yOdpOdRPIvVAtfakY8TrAPBM1F0",
    authDomain: "clamclamblogs.firebaseapp.com",
    databaseURL: "https://clamclamblogs.firebaseio.com",
    projectId: "clamclamblogs",
    storageBucket: "clamclamblogs.appspot.com",
    messagingSenderId: "437724133612",
    appId: "1:437724133612:web:7db837e148de7d18"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;