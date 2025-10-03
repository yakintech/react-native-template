import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigations/tab'
import CartProvider from './src/context/CartContext'


const App = () => {


  
  // const [loading, setLoading] = useState(true)
  // if(loading) {
  //   return <SplashScreen onFinish={() => setLoading(false)} />
  // }


  return <>
    <NavigationContainer>
      <CartProvider>
        <TabMain />
      </CartProvider>
    </NavigationContainer>
  </>
}

export default App