const firebase = require('firebase/app');
require('firebase/firestore');
require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyA0LjKMgSWy9e1UzJJ8LGaxU9-XFWqWNuc",
    authDomain: "project-hydra-9520d.firebaseapp.com",
    databaseURL: "https://project-hydra-9520d.firebaseio.com",
    projectId: "project-hydra-9520d",
    storageBucket: "project-hydra-9520d.appspot.com",
    messagingSenderId: "948645947281",
    appId: "1:948645947281:web:aacf74f019f9c866d5dc30",
    measurementId: "G-LQ7KC3M5JF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.default.firestore();
  module.exports = db;

