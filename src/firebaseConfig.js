import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOIHyhYwutGII_2G5olQ8XorrBlEzVrqc",
  authDomain: "image-f4a49.firebaseapp.com",
  projectId: "image-f4a49",
  storageBucket: "image-f4a49.appspot.com",
  messagingSenderId: "126345642472",
  appId: "1:126345642472:web:807eb61f820ef79c82645d",
  measurementId: "G-FDEPWP33TT"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
