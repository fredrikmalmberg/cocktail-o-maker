// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4xzl7SUT4MsgkM_Pkn8MzuajnyRUMV7c",
  authDomain: "cocktail-o-maker.firebaseapp.com",
  projectId: "cocktail-o-maker",
  storageBucket: "cocktail-o-maker.appspot.com",
  messagingSenderId: "504803544788",
  appId: "1:504803544788:web:737988c937a2ed966b7541",
  databaseURL: "https://cocktail-o-maker-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
// const analytics = getAnalytics(FireBaseApp);

export default app;
