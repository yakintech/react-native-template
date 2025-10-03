import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../stack/home'
import ProfileStack from '../stack/profile'
import CartStack from '../stack/cart'



const Tab = createBottomTabNavigator()

const TabMain = () => {
  return <>
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Profile' component={ProfileStack} />
      <Tab.Screen name='Cart' component={CartStack} />
    </Tab.Navigator>
  </>
}

export default TabMain