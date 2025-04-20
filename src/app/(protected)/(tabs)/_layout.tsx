import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color={'black'} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
