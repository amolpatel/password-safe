import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyASAfLKi-RQXzOWeqCPPBi08A_zIQtwGHs",
  authDomain: "password-safe-aafd6.firebaseapp.com",
  databaseURL: "https://password-safe-aafd6.firebaseio.com",
  projectId: "password-safe-aafd6",
  storageBucket: "password-safe-aafd6.appspot.com",
  messagingSenderId: "388281520966"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('accounts/');
export const auth = firebase.auth();