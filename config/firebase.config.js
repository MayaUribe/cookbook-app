import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBfCt5_y03sE6oXLWwzxZEfEoeqvJpExZs',
  authDomain: 'cookbook-b0d4f.firebaseapp.com',
  databaseURL: 'https://cookbook-b0d4f.firebaseio.com',
  storageBucket: 'cookbook-b0d4f.appspot.com',
  appId: '1:384642986962:ios:022cc1b48c9bb1b5',
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
