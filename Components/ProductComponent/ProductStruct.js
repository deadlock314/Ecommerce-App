import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { GetReq } from '../../ApiRequests/APIReqHandler';
import { getAsyncStorage, setAsyncStorage } from '../../HelperFunctions/AsyncStorageFuns';

const ProductStruct = ({ navigation, route }) => {

    const productType = route.params.productType;

    const height = (productType == "laptops") ? 190 : 240;
    const width = (productType == "laptops") ? 270 : 240;

    const [loading, setLoading] = useState(true);
    let [productList, setProductList] = useState([]);

    const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

    useEffect(() => {

        getAsyncStorage(`${productType}Data`).then((resStorage) => {
            if (resStorage.length>0) {
                setProductList(resStorage);
                setLoading(false)
            }
            else {
                GetReq(`https://ecommerce-app-api-1.herokuapp.com/${productType.replace(' ', '')}`).then((res) => {
                    setProductList(res[0][productType.replace(' ', '')]);
                    setAsyncStorage(`${productType}Data`, productList)
                    setLoading(false)
                    if (res.isError) setLoading(true)
                })
            }
        }).catch((err) => console.log(err))
    }, [])
    console.log(productList);
    return (

        <ScrollView>
            <Text style={styles.productTitle}>{capitalize(productType)}</Text>
            {(loading) ? <View></View>
                :
                productList.map((product) => {
                    return (

                        <TouchableOpacity key={product._id} onPress={() => navigation.navigate('productInfo', { ...product, type: productType })}>
                            <View style={styles.container}>
                                <Image style={{ ...styles.productImage, width: width, height: height }} source={{ uri: product.imgLink }} />
                                <Text style={styles.productDes}>{product.des}</Text>
                                <Text style={styles.productPrice}>{product.price}</Text>
                            </View>
                        </TouchableOpacity>

                    )
                })

            }
            <TouchableOpacity><Text style={{ alignSelf: 'center', color: "#00f", fontSize: 20, margin: 8 }}>Next page</Text></TouchableOpacity>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#fff",
        marginTop: 20,
        alignSelf: 'center'
    }
    ,
    productImage: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10,
        resizeMode: 'stretch'
    },

    productDes: {
        fontSize: 19,
        marginLeft: 10
    },
    productPrice: {
        fontSize: 26,
        marginLeft: 25,
        marginBottom: 4
    },
    productTitle: {
        fontSize: 28,
        marginTop: 50,
        alignSelf: 'center',
        fontWeight: "900"
    }

})

export default ProductStruct;