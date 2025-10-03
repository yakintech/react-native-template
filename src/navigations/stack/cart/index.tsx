import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartMainScreen from '../../../screens/cart/cart-main'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return <>
   <Stack.Navigator>
     <Stack.Screen name="Cart" component={CartMainScreen} />
   </Stack.Navigator>
  </>
}

export default CartStack