import { Text,StyleSheet ,ScrollView,Image,View } from 'react-native';
import ProductExtendedDes from './ProductExtendedDes';
import {CustomInfoBtn} from '../CustomComponent/CustomBtn';
const ProductInfo=({navigation,route})=> {
    const product=route.params;

    const AddtoCartHandler=()=>navigation.navigate('cartHome',{screen:'cart',  ...product})
    const BuyNowHandler=()=>navigation.navigate('cart',{screen:'cartHome',...product})

    return (
        <ScrollView>
                <View style={{backgroundColor:'#fff'}}>
                <Image style={{...styles.productImage,width:"90%",height:250}} source={{uri:product.imgLink}} />
                <Text  style={styles.productDes}>{product.des}</Text>
                <Text  style={styles.productPrice}>{product.price}</Text>

                <View style={styles.productBtn}>
                    <CustomInfoBtn prop={{btnTitle:"Add to Cart",onPressFun:AddtoCartHandler}} />
                    <CustomInfoBtn prop={{btnTitle:"Buy Now", onPressFun:BuyNowHandler}} />
                </View>
                </View>
                <ProductExtendedDes prop={{productId:product.productId,productType:product.type}}/>
        </ScrollView> 
        
     );
}

const styles=StyleSheet.create({
    productImage:{
        alignSelf:'center',
        marginTop:60,
        marginBottom:10,
        resizeMode:'stretch'
     },
  
     productDes:{
         fontSize:19,
         marginLeft:10
     },
     productPrice:{
         fontSize:26,
         marginLeft:25,
         marginBottom:14
     },
     productBtn:{
         flexDirection:'row',
         justifyContent:'space-around',
         marginBottom:20
        
     }
})

export default ProductInfo;