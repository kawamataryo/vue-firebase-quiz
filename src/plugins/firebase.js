import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fir-uug.firebaseapp.com",
  databaseURL: "https://fir-uug.firebaseio.com",
  projectId: "fir-uug",
  storageBucket: "fir-uug.appspot.com",
  messagingSenderId: "297246453909",
  appId: "1:297246453909:web:f50d69c2cce6a6d0"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();

// Timestamp型を使うために
// 参考 https://qiita.com/teramotodaiki/items/b3592326579166003102
const settings = {timestampsInSnapshots: true};
db.settings(settings);
