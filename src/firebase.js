
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBCqo7TXp0iMYjPkGzzDER4tWr_NjV3-M0",
    authDomain: "ecomm-app-2745c.firebaseapp.com",
    projectId: "ecomm-app-2745c",
    storageBucket: "ecomm-app-2745c.appspot.com",
    messagingSenderId: "804654030762",
    appId: "1:804654030762:web:f1a99ae9448ebd9f9095d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };