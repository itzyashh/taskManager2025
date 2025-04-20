import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { LoginInReq } from '@/services/AuthService';
import { useAuth } from '@/providers/AuthProviders';
import { Stack } from 'expo-router';

const Login = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState<string>('itzyashh');
  const [password, setPassword] = useState<string>('123456');

  const { signIn } = useAuth();

  const { mutate } = useMutation({
    mutationFn: () => LoginInReq(userNameOrEmail, password),
    onSuccess: signIn,
  });

  return (
    <View className="flex-1 items-center justify-center">
      <TextInput
        className="mb-4 w-['80%'] rounded border border-black p-2"
        onChangeText={setUserNameOrEmail}
        value={userNameOrEmail}
        placeholder="Username or Email"
      />
      <TextInput
        className="w-['80%'] rounded border border-black p-2"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />

      <Button title="Login" onPress={()=>mutate()} />
    </View>
  );
};

export default Login;
