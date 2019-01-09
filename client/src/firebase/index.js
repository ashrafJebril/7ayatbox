import firebase from "firebase/app";
import "firebase/storage";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBbE0yTDLrZcaB1bHEsqcpGO9ggg2UCwnE",
  authDomain: "hayatbox-dd128.firebaseapp.com",
  databaseURL: "https://hayatbox-dd128.firebaseio.com",
  projectId: "hayatbox-dd128",
  storageBucket: "hayatbox-dd128.appspot.com",
  messagingSenderId: "526198401849"
};
firebase.initializeApp(config);

const storage = firebase.storage();
export { storage, firebase as default };
