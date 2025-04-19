import { Redirect, Stack } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';

import { useAuth } from '../../providers/AuthProviders';

const ProtectedLayout = () => {
  const { session, isLoading } = useAuth();

  if (isLoading) return <ActivityIndicator />

  if (!session) return <Redirect href="/login" />;

  return (
    <Stack />
  );
};

export default ProtectedLayout;
