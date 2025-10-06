import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useEffectEvent, useState } from 'react'
import { baseService } from '../../../api/baseService';
import { CartContext, CartContextType } from '../../../context/CartContext';
import TSKBButton from '../../../components/core/button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



interface ProductsListDto {
    id: number;
    name: string;
    unitPrice: number;
}

const ProductsMainScreen = ({ route }: any) => {


    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const { addItem } = useContext(CartContext) as CartContextType

    const [products, setproducts] = useState<ProductsListDto[]>([])
    const { categoryId } = route.params;

    useEffect(() => {

        baseService.get<ProductsListDto[]>(`/products?categoryId=${categoryId}`)
            .then((res) => {
                setproducts(res)
            })
    }, [])




    return <>
        <FlatList
            data={products}
            renderItem={({ item }: { item: ProductsListDto }) => (
                <>

                    <View
                        style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
                    >
                        <Text>{item.name}</Text>
                        <Text>{item.unitPrice}</Text>
                        <TSKBButton title='Add to Cart' onPress={() => addItem({ id: item.id, name: item.name, unitPrice: item.unitPrice, quantity: 1 })} />
                        <Pressable
                            style={{ marginTop: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, alignItems: 'center' }}
                            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
                        >
                            <Text>Go to Detail</Text>
                        </Pressable>
                    </View>

                </>

            )}
        />
    </>
}

export default ProductsMainScreen