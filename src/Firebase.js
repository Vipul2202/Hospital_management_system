import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBzRv3PsVFk6COZFL1zucYuXfDxNHfGKUM",
    authDomain: "abhi-237d3.firebaseapp.com",
    projectId: "abhi-237d3",
    storageBucket: "abhi-237d3.appspot.com",
    messagingSenderId: "302136657772",
    appId: "1:302136657772:web:be6a346d30cce2147e1549"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.storage();
export {db};