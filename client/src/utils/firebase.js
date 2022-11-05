import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9cvgf73K3YVGsiwGatLxrSTpZvnaBWS8",
  authDomain: "smartify-40596.firebaseapp.com",
  projectId: "smartify-40596",
  storageBucket: "smartify-40596.appspot.com",
  messagingSenderId: "408328020025",
  appId: "1:408328020025:web:2b78c55ca1e4d227ccede8",
};

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage("gs://smartify-40596.appspot.com");

export default app;
