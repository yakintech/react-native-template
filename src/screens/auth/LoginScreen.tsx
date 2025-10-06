import { View, Text, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-paper';
import { AuthContext, AuthContextData } from '../../context/AuthContext';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext) as AuthContextData

  const handleLogin = () => {
    login(email, password);
  }

  return <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ width: '100%', marginBottom: 10 }}
      />
      <Pressable onPress={handleLogin} style={{ backgroundColor: '#6200ee', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: '#fff' }}>Login</Text>
      </Pressable>
    </View>
  </>
}

export default LoginScreen