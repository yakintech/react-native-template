import { View, Text, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigations/tab'
import CartProvider from './src/context/CartContext'
import AuthProvider, { AuthContext, AuthContextData } from './src/context/AuthContext'

import PlatformScreen from './src/screens/profile/platform'

const App = () => {


  return <PlatformScreen />


  return <>
    <NavigationContainer>
      <CartProvider>
        <AuthProvider>
          <TabMain />
        </AuthProvider>
      </CartProvider>
    </NavigationContainer>
  </>
}

export default App