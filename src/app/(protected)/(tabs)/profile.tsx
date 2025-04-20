import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useAuth } from '@/providers/AuthProviders'

const Profile = () => {

    const {signOut} = useAuth()
  return (
    <SafeAreaView>
      <Text onPress={signOut}>Log out</Text>
    </SafeAreaView>
  )
}

export default Profile