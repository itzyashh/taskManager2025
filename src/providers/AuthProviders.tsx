import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { User } from '../types';

type Session = {
  user: User;
  accessToken: string;
};

const AuthContext = createContext<{
  signOut: () => void;
  signIn: (handle: string) => void;
  session?: Session | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<Session>();

  const signIn = () => {};
  const signOut = () => {};

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        signIn,
        signOut,
        session,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
