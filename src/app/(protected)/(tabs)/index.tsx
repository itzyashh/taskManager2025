import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Page = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        headerSearchBarOptions:{
          placeholder: 'Search',
          onSearchButtonPress: () => console.log()
        }
      }} />
      <Text>Page</Text>
    </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({})