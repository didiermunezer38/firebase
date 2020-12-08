import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-93zslLSeQFENbCOJBK3TqSKauxQn2Sg",
  authDomain: "sabbath-collector.firebaseapp.com",
  databaseURL: "https://sabbath-collector.firebaseio.com",
  projectId: "sabbath-collector",
  storageBucket: "sabbath-collector.appspot.com",
  messagingSenderId: "230283052625",
  appId: "1:230283052625:web:670d03a00bab06883c5a70",
  measurementId: "G-W0VSQSHGJN",
};
firebase.initializeApp(config);
export default firebase;
