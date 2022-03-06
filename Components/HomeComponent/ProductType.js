import React from 'react';
import { Image,TouchableOpacity ,View,Text ,StyleSheet, Touchable} from 'react-native';

const ProductType=({props})=> {

    return(

    <View style={styles.container} >
        <TouchableOpacity onPress={()=>props.navi.navigate('productStruct',{productType:props.name})}>
            {/* <Image source={{uri:props.imgLink}}/> */}
        <Text style={styles.productTitle}>{props.name}</Text>
       </TouchableOpacity>
    </View>  

    );
}

const width="45%"
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:295,
        width:width,
        marginTop:10,
        marginLeft:10,
        borderRadius:15,
        justifyContent:'center'
    },
    productTitle:{
        alignSelf:'center',
        fontSize:20,
        color:'#000'
    }
    
})

export default ProductType;