import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDN1-wb23N4PxCeT8VjeAfviA9VeMTFt_Y",
    authDomain: "opensources-f6212.firebaseapp.com",
    projectId: "opensources-f6212",
    storageBucket: "opensources-f6212.appspot.com",
    messagingSenderId: "814028335042",
    appId: "1:814028335042:web:23486e7690c16d3dc6985b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();