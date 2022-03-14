import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDPk0CpUBR8uikvFERRP_oJ5piRrNF1c-A",
  authDomain: "sunnyhillblogs-2a002.firebaseapp.com",
  projectId: "sunnyhillblogs-2a002",
  storageBucket: "sunnyhillblogs-2a002.appspot.com",
  messagingSenderId: "281636170919",
  appId: "1:281636170919:web:e806c1306bdf87dec73f82"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();