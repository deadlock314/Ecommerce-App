import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GetReq } from '../../ApiRequests/APIReqHandler';
import { getAsyncStorage, setAsyncStorage } from '../../HelperFunctions/AsyncStorageFuns';
import ProductShortInfo from './ProductShrortInfo';

const ProductStruct = ({ navigation,  route }) => {

    const productType = route.params.productType;
    
    const [loading, setLoading] = useState(true);
    let [productList, setProductList] = useState([]);

    const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

    useEffect(() => {

        getAsyncStorage(`${productType}Data`).then((resStorage) => {
            if(resStorage.length > 0){
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

    return (
        (loading)?<View style={{justifyContent:'center',flex:1}} ><ActivityIndicator size={50} color={"#000"} /></View> :
        <ScrollView>
            <Text style={{fontSize: 28, marginTop: 50, alignSelf: 'center',fontWeight: "900" }}> { capitalize(productType)}</Text>
            <View>
            {
                                productList.map((product) => {
                                    return (<ProductShortInfo key={product._id} props={{ ...product }} navi={navigation} productType={productType} />)
                                }) 
                           
           }
            </View>
            <TouchableOpacity>
                <Text style={{ alignSelf: 'center', color: "#00f", fontSize: 20, margin: 8 }}>Next page</Text>
            </TouchableOpacity>
        </ScrollView >


    );
}

export default ProductStruct;