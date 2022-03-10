import React from 'react';
import { Image,TouchableOpacity ,View,Text ,StyleSheet} from 'react-native';
const ProductType=({props})=> {

    const imgArr={laptops:require(`../../assets/laptops.jpg`) ,earphones:require(`../../assets/earphones.jpg`)
                 ,mobiles: require(`../../assets/mobiles.jpg`),smartwatches:require(`../../assets/smartwatches.jpg`)}
    const capitalize=s=>s && s[0].toUpperCase() + s.slice(1);  
    return(

    <View style={styles.container} >
        <TouchableOpacity onPress={()=>props.navi.navigate('productStruct',{productType:props.name})}>
            <Image source={imgArr[props.name.replace(' ','')]} style={styles.productTmage}/>
            <Text style={styles.productTitle}>{capitalize(props.name)}</Text>
       </TouchableOpacity>
    </View>  

    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:295,
        width:'45%',
        marginTop:10,
        marginLeft:10,
        borderRadius:15,
        justifyContent:'center'
    },
    productTitle:{
        alignSelf:'center',
        fontSize:20,
        color:'#000'
        ,
        marginTop:20
    },
    productTmage:{
        width:'80%',
        height:100,
        alignSelf:'center',
        resizeMode:'stretch',
        marginTop:40
    }
    
})

export default ProductType;