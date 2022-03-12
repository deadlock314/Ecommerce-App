
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import CartStructBtn from './CartStructBtn';
import CartCalc from './CartCalc';
import EmptyCart from './EmptyCart';

const CartHome = ({navigation}) => {

    const product = useSelector((state) => state.cartData.prevCartData);
    
    return (
        (product.length>0) ? <ScrollView>
        {
            (product) ? <View style={{marginTop:40 }}>
                {
                    product.map((p) => {
                        return (
                            <View key={p._id} style={{backgroundColor:'#fff' }} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ ...styles.productImage, width: 110, height: 95 }} source={{ uri: p.imgLink }} />
                                    <View style={{ flex: 1.8 }}>
                                        <Text style={styles.productDes}>{p.des}</Text>
                                        <Text style={styles.productPrice}>{p.price}</Text>
                                    </View>
                                </View>

                                <CartStructBtn props={{_id:p._id,price:p.price}}/>
                            </View>
                        )
                    })
                }
                <CartCalc />
            </View> :
                <View>

                </View>
        }
    </ScrollView>:<EmptyCart navi={navigation}/>
    );
}

const styles = StyleSheet.create({
    productImage: {
        marginTop: 2,
        resizeMode: 'stretch'
    },

    productDes: {
        fontSize: 15,
        marginLeft: 10
    },
    productPrice: {
        fontSize: 26,
        marginLeft: 27
    },

})

export default CartHome;