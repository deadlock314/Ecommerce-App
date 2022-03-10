import React from 'react';
import { View,Text } from 'react-native';
import { useSelector } from 'react-redux';

const CartCalc=()=> {
    const TotalAmount=useSelector(s=>s.cartData.totalPrice);
    return (
        <View style={{marginTop:5}}>
           <Text 
            style={{fontSize:23,alignSelf:'flex-end',backgroundColor:'#fff' ,paddingLeft:20,
                   paddingTop:5,paddingBottom:5,paddingRight:30 }}>
               Total Price : ₹{TotalAmount}</Text> 
        </View>
    );
}

export default CartCalc;