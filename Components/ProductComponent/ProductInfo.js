import { Text, StyleSheet, ScrollView, Image, View } from 'react-native';
import ProductExtendedDes from './ProductExtendedDes';
import { CustomInfoBtn } from '../CustomComponent/CustomBtn';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartData, updatePrice } from '../../ReduxCode/Reducers';
import { priceAdder } from '../../HelperFunctions/priceAdder';

const ProductInfo = ({ navigation, route }) => {
    const product = route.params;

    const CartData = useSelector((s) => s.cartData);
    const AuthStatus=useSelector(s=>s.userAuth.value);
console.log(AuthStatus);
    const dispatch = useDispatch();

    const AddtoCartHandler = () => {

        const FindDuplicate = () => {
            for (let i = 0; i < CartData.prevCartData.length; i++)
                if (product._id == CartData.prevCartData[i]._id)
                    return false;
            return true
        }
        if (FindDuplicate()){

            dispatch(updateCartData({ ...product }));
            dispatch(updatePrice({
                totalPrice:priceAdder(CartData.totalPrice,product.price,'add'),
                countObj:{id:product._id,count:1}
            }));
        }
        navigation.navigate('cart', { screen: 'cartHome'})
    }


    const BuyNowHandler = () =>  
        (AuthStatus) ? navigation.navigate('cart', { screen: 'buyingPage',params:{...product}} ) : navigation.navigate('profile',{screen:'login'}) 
  

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#fff' }}>
                <Image style={{ ...styles.productImage, width: "90%", height: 270 }} source={{ uri: product.imgLink }} />
                <Text style={styles.productDes}>{product.des}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>

                <View style={styles.productBtn}>
                    <CustomInfoBtn prop={{ btnTitle: "Add to Cart", onPressFun: AddtoCartHandler }} />
                    <CustomInfoBtn prop={{ btnTitle: "Buy Now", onPressFun: BuyNowHandler }} />
                </View>
            </View>
            <ProductExtendedDes prop={{ productId: product.productId, productType: product.type }} />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    productImage: {
        alignSelf: 'center',
        marginTop: 60,
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
        marginBottom: 14
    },
    productBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20

    }
})

export default ProductInfo;