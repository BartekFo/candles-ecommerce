import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutFirebase,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/router';

import { auth, provider } from '@api/firebase/firebaseConfig';
import RouteConstant from '@consts/route';

interface AuthContextValue {
  user: User | null;
  isLoginProcess: boolean;
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
  const router = useRouter();
  const [isLoginProcess, setIsLoginProcess] = useState(false);

  const loginWithGoogle = useCallback((): void => {
    setIsLoginProcess(true);
    signInWithPopup(auth, provider).then(() => {
      setIsLoginProcess(false);
      router.push(RouteConstant.Home);
    });
  }, [router]);

  const signUpWithEmail = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password);
    // TODO: Handle Errors
    //   .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });
  };

  const signInWithEmail = useCallback(
    (email: string, password: string): void => {
      setIsLoginProcess(true);
      signInWithEmailAndPassword(auth, email, password).then(() => {
        setIsLoginProcess(false);
        router.push(RouteConstant.Home);
      });
      // TODO: Handle errors for logins
      //   .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // ..
      // });
    },
    [router]
  );

  const signOut = (): void => {
    signOutFirebase(auth);
    // TODO: Same as earlier
    //   .catch((error) => {
    //   // An error happened.
    // });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      setIsLoginProcess(false);
    }
  }, [setIsLoginProcess, user]);

  const value = useMemo(
    () => ({
      user,
      isLoginProcess,
      actions: {
        loginWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        signOut,
      },
    }),
    [isLoginProcess, loginWithGoogle, signInWithEmail, user]
  );

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = (): AuthContextValue => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('Component can not be used outside of AuthProvider');
  }

  return context;
};
