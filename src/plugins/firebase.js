import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "futta-marry.firebaseapp.com",
  databaseURL: "https://futta-marry.firebaseio.com",
  projectId: "futta-marry",
  storageBucket: "",
  messagingSenderId: "703492354241"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.firestore();

// Timestamp型を使うために
// 参考 https://qiita.com/teramotodaiki/items/b3592326579166003102
const settings = {timestampsInSnapshots: true};
db.settings(settings);
