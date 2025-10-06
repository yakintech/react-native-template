import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeMainScreen from '../../../screens/home/home-main'
import ProductsMainScreen from '../../../screens/home/products'
import ProductDetailScreen from '../../../screens/home/product-detail'
import { AuthContextData } from '../../../context/AuthContext'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const Stack = createNativeStackNavigator()

const HomeStack = () => {

    const { role } = useContext(AuthContext) as AuthContextData

    // <Stack.Screen name="ProfileEdit" component={
    //     role == "Admin2" ? ProfileEditScreen : () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Yetkisiz Erişim</Text></View>
    //   } />
    return <Stack.Navigator>
        <Stack.Screen name="HomeMain" component={HomeMainScreen} />
        <Stack.Screen name="ProductsMainScreen" component={ProductsMainScreen} />
        <Stack.Screen name="ProductDetail" component={
            role == "Admin2" ? ProductDetailScreen : () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Yetkisiz Erişim</Text></View>
        } />
    </Stack.Navigator>
}

export default HomeStack