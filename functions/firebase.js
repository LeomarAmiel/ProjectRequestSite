const firebase = require('firebase');
const config = require('./config').firebaseConfig;
require("firebase/firestore");

firebase.initializeApp(config);

module.exports = firebase.firestore();