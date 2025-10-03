import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useEffectEvent, useState } from 'react'
import { baseService } from '../../../api/baseService';
import { CartContext, CartContextType } from '../../../context/CartContext';
import TSKBButton from '../../../components/core/button';



interface ProductsListDto {
    id: number;
    name: string;
    unitPrice: number;
}

const ProductsMainScreen = ({ route }: any) => {

    const { addItem } = useContext(CartContext) as CartContextType

    const [products, setproducts] = useState<ProductsListDto[]>([])
    const { categoryId } = route.params;

    useEffect(() => {

        const response = baseService.get<ProductsListDto[]>(`/products?categoryId=${categoryId}`)
        response.then((res) => {
            setproducts(res)
        })

        const interval = setInterval(() => {
            console.log("Interval running");
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])




    return <>
        <FlatList
            data={products}
            renderItem={({ item }: { item: ProductsListDto }) => (
                <View
                    style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
                >
                    <Text>{item.name}</Text>
                    <Text>{item.unitPrice}</Text>
                    <TSKBButton title='Add to Cart' onPress={() => addItem({ id: item.id, name: item.name, unitPrice: item.unitPrice, quantity: 1 })} />
                </View>
            )}
        />
    </>
}

export default ProductsMainScreen