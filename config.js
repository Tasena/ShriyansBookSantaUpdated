import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyC3RD4h2ydIOhjO1fbf7TqgUlyIQEGFr5g",
  authDomain: "book-santa-trial.firebaseapp.com",
  projectId: "book-santa-trial",
  storageBucket: "book-santa-trial.appspot.com",
  messagingSenderId: "747801087346",
  appId: "1:747801087346:web:c4e3e07bb939440bab21eb"
};
  //if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
  //}
  export default firebase.firestore();