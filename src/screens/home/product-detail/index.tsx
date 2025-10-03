import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseService } from '../../../api/baseService';



interface ProductDetailDto {
    id: number;
    name: string;
    unitPrice: number;
    discontinued: boolean;
    unitsInStock: number;
}

const ProductDetailScreen = ({ route }: any) => {

    const [detail, setdetail] = useState<ProductDetailDto | null>(null)

    const { productId } = route.params;

    useEffect(() => {

        // const controller = new AbortController();
        // const signal = controller.signal;

        // const response = baseService.get<ProductDetailDto>(`/products/${productId}`, { signal });
        // response.then((res) => {
        //     setdetail(res);
        // }).catch((err) => {
        //     if (err.name !== 'AbortError') {
        //     console.error(err);
        //     }
        // });

        // return () => {
        //     controller.abort();
        // };


  




    }, [])





    return (
        <View>
            <Text>Product Detail</Text>
        </View>
    )
}

export default ProductDetailScreen