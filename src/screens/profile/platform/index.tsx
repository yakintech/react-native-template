import { View, Text, Platform, BackHandler } from 'react-native'
import React from 'react'
import BButton from './button.ios'

const PlatformScreen = () => {

    const title = Platform.select({
        ios: 'This is iOS',
        android: 'This is Android',
        default: 'This is Web or other platform'
    })


    const sub = BackHandler.addEventListener('hardwareBackPress', () => {

        BackHandler.exitApp()
        console.log('back pressed')
        return true
    })


    return <>
        <View style={{ paddingTop: Platform.OS == "ios" ? 60 : 0 }}>
            <Text>{title}</Text>
            <BButton/>
        </View>
    </>
}

export default PlatformScreen