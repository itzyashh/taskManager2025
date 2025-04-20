import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView>
      
      <Stack.Screen options={{
        headerSearchBarOptions:{
          placeholder: 'Search',
          onSearchButtonPress: () => console.log()
        }
      }} />
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})