import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGTAUQ3TKyrkqjiFEy0whW0LHyqDVwsrs",
  authDomain: "imessage-clone-530e2.firebaseapp.com",
  databaseURL: "https://imessage-clone-530e2.firebaseio.com",
  projectId: "imessage-clone-530e2",
  storageBucket: "imessage-clone-530e2.appspot.com",
  messagingSenderId: "616277898768",
  appId: "1:616277898768:web:1203969f08b8ead3163c95",
  measurementId: "G-16JC6P185C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
