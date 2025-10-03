import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ProfileStack from './src/navigations/stack/profile'
import TabMain from './src/navigations/tab'
import CartProvider from './src/context/CartContext'

const App = () => {
  return <>
    <NavigationContainer>
      <CartProvider>
        <TabMain />
      </CartProvider>
    </NavigationContainer>
  </>
}

export default App