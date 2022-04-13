import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkKJK7y4Ks9_yjLmFY2lqt_2VwwRH0fGE',
  authDomain: 'crwn-clothing-d2625.firebaseapp.com',
  projectId: 'crwn-clothing-d2625',
  storageBucket: 'crwn-clothing-d2625.appspot.com',
  messagingSenderId: '417520365935',
  appId: '1:417520365935:web:c0af8dd86871a25be8f89a',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);
