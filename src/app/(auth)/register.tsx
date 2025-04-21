import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { router, Stack } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';
import { RegisterReq } from '@/services/AuthService';
import { useAuth } from '@/providers/AuthProviders';

const Register = () => {
  const [username, setUsername] = useState<string>('test1');
  const [email, setEmail] = useState<string>('test1@gmail.com');
  const [password, setPassword] = useState<string>('123456');

  // You'll need to implement this function in your AuthService
  const { signIn } = useAuth();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => RegisterReq(username, email, password),
    onSuccess: signIn,
  });

  if (error) {
    alert(JSON.stringify(error));
  }

  return (
    <View className="flex-1 items-center justify-center p-5">
      <Stack.Screen options={{ title: 'Register' }} />
      {/* <Spinner visible={isPending} /> */}

      <Text className="mb-6 text-2xl font-bold">Create Account</Text>

      <TextInput
        className="mb-4 h-12 w-full rounded-lg border border-gray-300 px-3"
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
        autoCapitalize="none"
      />

      <TextInput
        className="mb-4 h-12 w-full rounded-lg border border-gray-300 px-3"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="mb-4 h-12 w-full rounded-lg border border-gray-300 px-3"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />

      <Button title="Register" onPress={() => mutate()} />

      <View className="mt-4 flex-row">
        <Text>Already have an account? </Text>
        <Text className="text-blue-500 underline" onPress={() => router.back()}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default Register;
