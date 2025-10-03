import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '../../../assets/logo/1024.png'

const SplashScreen = ({ onFinish }: any) => {

    useEffect(() => {

        const timer = setTimeout(() => {
            onFinish()
        }, 3000);

        return () => clearTimeout(timer);

    }, [])


    return <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Image source={Logo} style={{ width: 200, height: 200 }} />
    </View>

    </>
}

export default SplashScreen