import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigations/tab'
import CartProvider from './src/context/CartContext'
import AuthProvider, { AuthContext, AuthContextData } from './src/context/AuthContext'


const App = () => {


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