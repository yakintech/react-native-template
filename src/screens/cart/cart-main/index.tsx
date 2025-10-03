import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { CartContext, CartContextType } from '../../../context/CartContext'
import TSKBButton from '../../../components/core/button'

const CartMainScreen = () => {

  const { items, clearCart } = useContext(CartContext) as CartContextType

  return <>
    {items.map(item => (
      <View
        style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
        key={item.id}>
        <Text>{item.name}</Text>
        <Text>{item.quantity} adet</Text>
        <Text>{item.unitPrice.toFixed(2)} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)} TRY</Text>
      </View>
    ))}
    <Text style={{ padding: 10, fontWeight: "bold" }}>
      Toplam: {items.reduce((total, item) => total + item.unitPrice * item.quantity, 0).toFixed(2)} TRY
    </Text>

    <TSKBButton title='Clear Cart' onPress={clearCart} mode="contained" />
  </>

}

export default CartMainScreen