import * as  firebase from "firebase";
import  "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyCzDWROuc2FDzcb7yFxcxTTesnFSQmShrs",
    authDomain: "formlist-ca0e1.firebaseapp.com",
    projectId: "formlist-ca0e1",
    storageBucket: "formlist-ca0e1.appspot.com",
    messagingSenderId: "213883950711",
    appId: "1:213883950711:web:21ae38e63106e2e8ef5872"
  };

  firebase.initializeApp(firebaseConfig);

  export default  firebase;