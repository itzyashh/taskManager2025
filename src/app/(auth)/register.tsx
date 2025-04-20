import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { router, Stack } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';

const Register = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // You'll need to implement this function in your AuthService
  // const { mutate, isPending } = useMutation({
  //   mutationFn: () => RegisterReq(username, email, password),
  //   onSuccess: () => {
  //     // Navigate to login or directly sign in user
  //     router.push('/login')
  //   },
  // })

  return (
    <View className="flex-1 items-center justify-center p-5">
      <Stack.Screen options={{ title: 'Register' }} />
      {/* <Spinner visible={isPending} /> */}
      
      <Text className="text-2xl font-bold mb-6">Create Account</Text>
      
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-3 mb-4"
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
        autoCapitalize="none"
      />
      
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-3 mb-4"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-3 mb-4"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />

      <Button 
        title="Register" 
        onPress={() => {
          // Uncomment when ready
          // mutate()
          console.log('Register pressed', { username, email, password });
        }} 
      />
      
      <View className="flex-row mt-4">
        <Text>Already have an account? </Text>
        <Text 
          className="text-blue-500 underline"
          onPress={() => router.back()}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default Register;