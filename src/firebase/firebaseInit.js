import firebase from "firebase/app";
import "firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyCnuM2xPHAWlpRcoNFPtxIJAa0-S9kfRlg",
    authDomain: "sunnyhillblog-865c5.firebaseapp.com",
    projectId: "sunnyhillblog-865c5",
    storageBucket: "sunnyhillblog-865c5.appspot.com",
    messagingSenderId: "1005961639831",
    appId: "1:1005961639831:web:93d36e0257a8f09a0b76d2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();