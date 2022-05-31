import { createContext, PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import { auth } from '@api/firebase/firebaseConfig';

const authContext = createContext<User | null>(null);

const AuthProvider = ({ children }: PropsWithChildren<ReactNode>): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

export default AuthProvider;
