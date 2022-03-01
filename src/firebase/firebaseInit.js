import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyALXPr8C1iNq9uFIx_GANAW4m9lRZ5EhVo",
    authDomain: "sunnyhillblog.firebaseapp.com",
    projectId: "sunnyhillblog",
    storageBucket: "sunnyhillblog.appspot.com",
    messagingSenderId: "165881526381",
    appId: "1:165881526381:web:3689f597e8ceaaadf96764"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();
  