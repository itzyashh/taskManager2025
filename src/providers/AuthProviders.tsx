import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { User } from '../types';
import * as SecureStore from 'expo-secure-store';
import { axiosInstance } from '@/config/AxiosInstance';

type Session = {
  user: User;
  accessToken: string;
};

const AuthContext = createContext<{
  signOut: () => void;
  signIn: (user: User) => void;
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
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    loadToken();
  }, []);

  const signIn = (user: User) => {
    
    // AxiosIntance.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    const newSession: Session = {
      user,
      accessToken: user.token!,
    };
    setSession(newSession);
    
    
    if (newSession) {
      saveSession(newSession);
    }
  };
  const signOut = async () => {
    axiosInstance.defaults.headers.common['Authorization'] = null
    setSession(null)
    await SecureStore.deleteItemAsync('session')
  };

  const saveSession = (session: Session) => {
    SecureStore.setItem('session', JSON.stringify(session));
  };
  const loadToken = async () => {
    const session = await SecureStore.getItemAsync('session');
    if (session) {
      setSession(JSON.parse(session));
    } else {
      setSession(null);
    }
  };

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
