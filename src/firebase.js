import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.APIKEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  databaseURL: `${process.env.DATABASE_URL}`,
  projectId: `${process.env.PROJECTID}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.MESSAGE_SENDER_ID}`,
  appId: `${process.env.APP_ID}`,
  measurementId: `${process.env.MEASUREMENT_ID}`
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
