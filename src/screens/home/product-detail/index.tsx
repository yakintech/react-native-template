import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseService } from '../../../api/baseService';
import RoleProvider from '../../../utils/storage/auth/RoleProvider';



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

        const response = baseService.get<ProductDetailDto>(`/products/${productId}`);
        response.then((res) => {
            setdetail(res);
        })


        // return () => {
        //     controller.abort();
        // };



    }, [])





    return <>
        <View style={{ padding: 20 }}>
            {detail ? <>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{detail.name}</Text>
                <Text>Price: {detail.unitPrice}</Text>
                <RoleProvider roleName="admin">
                    <Text>In Stock: {detail.unitsInStock}</Text>
                </RoleProvider>

                <Text>Discontinued: {detail.discontinued ? "Yes" : "No"}</Text>
            </> : <Text>Loading...</Text>}
        </View>
    </>
}

export default ProductDetailScreen