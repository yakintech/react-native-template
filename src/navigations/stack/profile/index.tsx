import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileMainScreen from '../../../screens/profile/profile-main'
import ProfileEditScreen from '../../../screens/profile/profile-edit'


const Stack = createNativeStackNavigator()
const ProfileStack = () => {

  return <>
    <Stack.Navigator >
      <Stack.Screen name="ProfileMain" component={ProfileMainScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
    </Stack.Navigator>
  </>
}

export default ProfileStack