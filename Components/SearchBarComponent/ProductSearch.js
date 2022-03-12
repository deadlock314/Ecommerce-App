import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View ,ScrollView } from 'react-native';
import { GetReq } from '../../ApiRequests/APIReqHandler';
import SearchBar from './SearchBar';
import ProductShortInfo from '../ProductComponent/ProductShrortInfo';

const ProductSearch = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [productList,setProductList]=useState([]);

    const OnSearchHandler = () => {
        setLoading(true)
        GetReq(`https://ecommerce-app-api-1.herokuapp.com/productsearch/terms?product_type=${"laptops"}&des=${searchText}`)
           .then((res) =>{
               setProductList(res)
               setLoading(false)
           })
           .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }



    return (

        <View>
            <SearchBar searchTextProps={{ searchText, setSearchText }} onSubmitFun={OnSearchHandler} />
            {
                (loading) ? <View style={{ justifyContent: "center" }} >
                                <ActivityIndicator size={'small'} color={'#000'} />
                            </View> 
                          : (productList) ? <ScrollView>
                                {
                                      productList.map((product) => {
                                        return (
                                        <ProductShortInfo props={{ ...product }} navi={navigation} productType={"laptops"} />)
                                    })
                                }
                            </ScrollView> : <View> </View>
            }
        </View>

    );
}


export default ProductSearch;