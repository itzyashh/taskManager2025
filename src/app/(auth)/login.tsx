import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { LoginInReq } from '@/services/AuthService';
import { useAuth } from '@/providers/AuthProviders';
import { router, Stack } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState<string>('itzyashh');
  const [password, setPassword] = useState<string>('123456');

  const { signIn } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: () => LoginInReq(userNameOrEmail, password),
    onSuccess: signIn,
  });

  return (
    <View className="flex-1 items-center justify-center p-5">
      <Stack.Screen options={{ title: 'Login' }} />
      <Spinner visible={isPending} />

      <Text className="mb-6 text-2xl font-bold">Welcome Back</Text>

      <TextInput
        className="mb-4 h-12 w-full rounded-lg border border-gray-300 px-3"
        onChangeText={setUserNameOrEmail}
        value={userNameOrEmail}
        placeholder="Username or Email"
        autoCapitalize="none"
      />

      <TextInput
        className="mb-4 h-12 w-full rounded-lg border border-gray-300 px-3"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />

      <Button title="Login" onPress={() => mutate()} />

      <View className="mt-4 flex-row">
        <Text>Don't have an account? </Text>
        <Text className="text-blue-500 underline" onPress={() => router.push('/register')}>
          Register
        </Text>
      </View>
    </View>
  );
};

export default Login;
