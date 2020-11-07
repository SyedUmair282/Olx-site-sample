import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB16jrQgLYW_VtMmIOEXRis5TudoeE5OJI",
    authDomain: "olx-site-sample.firebaseapp.com",
    databaseURL: "https://olx-site-sample.firebaseio.com",
    projectId: "olx-site-sample",
    storageBucket: "olx-site-sample.appspot.com",
    messagingSenderId: "964646870544",
    appId: "1:964646870544:web:f6197c598a89bde7b7f495",
    measurementId: "G-WZEYL9F287"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);