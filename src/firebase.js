import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1nCk5xTsPOduodFG-hVHpuA0RUadlQuM",
  authDomain: "challenge-87510.firebaseapp.com",
  databaseURL: "https://challenge-87510.firebaseio.com",
  projectId: "challenge-87510",
  storageBucket: "challenge-87510.appspot.com",
  messagingSenderId: "1008912626100",
  appId: "1:1008912626100:web:9cd6426e6687dba33942e1",
  measurementId: "G-6VLDT95S3P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
