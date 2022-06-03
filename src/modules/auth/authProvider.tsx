import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut as signOutFirebase,
  User,
} from 'firebase/auth';

import { auth, provider } from '@api/firebase/firebaseConfig';

interface AuthContextValue {
  user: User | null;
  actions: {
    loginWithGoogle: () => void;
    signUpWithEmail: (email: string, password: string) => void;
    signInWithEmail: (email: string, password: string) => void;
    signOut: () => void;
  };
}

const authContext = createContext({} as AuthContextValue);

const AuthProvider = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  const loginWithGoogle = (): void => {
    signInWithRedirect(auth, provider);
  };

  const signUpWithEmail = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
  };

  const signInWithEmail = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };

  const signOut = (): void => {
    signOutFirebase(auth).catch((error) => {
      // An error happened.
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const value = useMemo(
    () => ({
      user,
      actions: {
        loginWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        signOut,
      },
    }),
    [user]
  );

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = (): AuthContextValue => useContext(authContext);
