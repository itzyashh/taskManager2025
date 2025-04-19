import { Redirect, Stack } from 'expo-router';

import { useAuth } from '../../providers/AuthProviders';
import { ActivityIndicator } from 'react-native';

const AuthLayout = () => {
  const { session, isLoading } = useAuth();

  if (isLoading) return <ActivityIndicator />

  if (session) return <Redirect href="/(protected)/(tabs)" />;
  return <Stack />;
};

export default AuthLayout;
