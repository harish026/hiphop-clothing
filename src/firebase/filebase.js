import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC7Pft5prc7EtbPIjpMv3WoDRNl5spJBws",
    authDomain: "hiphop-db.firebaseapp.com",
    databaseURL: "https://hiphop-db.firebaseio.com",
    projectId: "hiphop-db",
    storageBucket: "hiphop-db.appspot.com",
    messagingSenderId: "134492027761",
    appId: "1:134492027761:web:358fabc6795a89a53614d0",
    measurementId: "G-95R64G8JQN"
  };
  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;