import { View ,Text ,ScrollView,StyleSheet,Image } from 'react-native';

const CartHome=({route})=> {

    const product=route.params;
    return ( 
        <ScrollView>
           <View style={{flexDirection:'row',marginTop:60,}}>
           <Image style={{...styles.productImage,width:130,height:110}} source={{uri:product.imgLink}} />
           <View style={{flex:1.8}}>
              <Text  style={styles.productDes}>{product.des}</Text>
              <Text  style={styles.productPrice}>{product.price}</Text> 
           </View>
           </View>
           
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    productImage:{
        marginTop:13,
        resizeMode:'stretch'
     },
  
     productDes:{
         fontSize:15,
         marginLeft:10
     },
     productPrice:{
         fontSize:26,
        alignSelf:'center'
     },
 
})

export default CartHome;