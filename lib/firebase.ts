import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDuRVa3bFmh3g8SrIN0E1IUhr7_tLk1quk',
  authDomain: 'react-game-fa518.firebaseapp.com',
  projectId: 'react-game-fa518',
  storageBucket: 'react-game-fa518.appspot.com',
  messagingSenderId: '265926317298',
  appId: '1:265926317298:web:e77a3de774830163bfec6b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export async function getUserWithEmail(uid) {
  const query = firestore.collection('users').doc(uid);
  const userDoc = await query.get();

  return userDoc;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
