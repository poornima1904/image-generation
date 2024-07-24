// src/auth.js
import { auth, googleAuthProvider } from './firebaseConfig';

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleAuthProvider);
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error signing out', error);
  }
};
