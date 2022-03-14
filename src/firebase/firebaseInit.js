import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8b6pYbBDuPMNpFpxecT0m-W6aWvTcFrA",
  authDomain: "sunnyhillblogs-fdcdd.firebaseapp.com",
  projectId: "sunnyhillblogs-fdcdd",
  storageBucket: "sunnyhillblogs-fdcdd.appspot.com",
  messagingSenderId: "281499845911",
  appId: "1:281499845911:web:1e72f20c8d90976cd42352"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();