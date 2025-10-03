import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ padding: 20, backgroundColor: '#f8f8f8', borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Categories</Text>
        </View>
    )
}

export default Header