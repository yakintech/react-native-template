import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeMainScreen from '../../../screens/home/home-main'
import ProductsMainScreen from '../../../screens/home/products'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return <Stack.Navigator>
        <Stack.Screen name="HomeMain" component={HomeMainScreen} />
        <Stack.Screen name="ProductsMainScreen" component={ProductsMainScreen} />
    </Stack.Navigator>
}

export default HomeStack