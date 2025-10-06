import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../stack/home'
import ProfileStack from '../stack/profile'
import CartStack from '../stack/cart'
import { AuthContext, AuthContextData } from '../../context/AuthContext'
import LoginScreen from '../../screens/auth/LoginScreen'



const Tab = createBottomTabNavigator()

const TabMain = () => {

  const { isAuthenticated, loading } = useContext(AuthContext) as AuthContextData
 
  if (loading) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  }


  return <>
    {
      !isAuthenticated ? <LoginScreen/> : <>
        <Tab.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Tab.Screen name='Home' component={HomeStack} />
          <Tab.Screen name='Cart' component={CartStack} />
          <Tab.Screen name='Profile' component={ProfileStack} />
        </Tab.Navigator>
      </>
    }
  </>
}

export default TabMain