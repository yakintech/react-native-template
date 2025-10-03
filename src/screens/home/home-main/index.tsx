import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { baseService } from '../../../api/baseService';
import { CategoryResponseDto } from './models/CategoryResponseDto';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartContext, CartContextType } from '../../../context/CartContext';


const HomeMainScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [categories, setCategories] = useState<CategoryResponseDto[]>([])



  useEffect(() => {

    baseService.get<CategoryResponseDto[]>("/categories")
      .then((res) => {
        setCategories(res)
      })
  }, [])


  return (<>
    {/* <Header /> */}
    <FlatList
      data={categories}
      renderItem={({ item }: { item: CategoryResponseDto }) => (
        <Pressable onPress={() => navigation.navigate("ProductsMainScreen", {
          categoryId: item.id,
          categoryName: item.name
        })}>
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        </Pressable>
      )}
    />

    {/* <TSKBButton title="Hello TSK" /> */}
  </>
  )
}

export default HomeMainScreen