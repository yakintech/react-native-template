import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import TSKBButton from '../../../components/core/button'
import DeviceInfo from "react-native-device-info"
import { AuthContext, AuthContextData } from '../../../context/AuthContext'

const ProfileMainScreen = () => {

    const [photo, setPhoto] = useState<string | undefined>()
    const [deviceId, setDeviceId] = useState<string | undefined>()

    const {logout} = useContext(AuthContext) as AuthContextData

    useEffect(() => {

        DeviceInfo.getUniqueId()
            .then((uniqueId) => {
                setDeviceId(uniqueId)

            })
            .catch((error) => {
                console.error("Error getting device ID:", error);
                return undefined;
            });

    }, [])


    return <>
        {/* <Header /> */}
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}
        >

            <Image src={photo} style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' }} />
            <TSKBButton title='Select Image' onPress={() => {
                launchImageLibrary({
                    mediaType: 'photo',
                    includeBase64: false,
                }, (response) => {
                    console.log(response);
                    if (response?.assets && response.assets.length > 0) {
                        setPhoto(response.assets[0].uri)
                    }
                })
            }} />
            <Text>Device ID: {deviceId}</Text>
            <TSKBButton title='Logout' onPress={logout} />
        </View>

    </>
}

export default ProfileMainScreen