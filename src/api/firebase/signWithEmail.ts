import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '@api/firebase/firebaseConfig';

export const signWithEmail = (email: string, password: string): void => {
  createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

export const signInWithEmail = (email: string, password: string): void => {
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};

export const singOut = (): void => {
  signOut(auth).catch((error) => {
    // An error happened.
  });
};
