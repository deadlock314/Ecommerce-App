import React from 'react';
import {TouchableOpacity,Text,View ,StyleSheet} from 'react-native';
function CustomBtn({prop}) {
    
    return ( 
        <TouchableOpacity onPress={prop.onPressFun} >
                <View style={styles.btn} >
                    <Text style={styles.btnText}>{prop.btnTitle}</Text>
                </View>
        </TouchableOpacity>
    );
}

const CustomInfoBtn=({prop})=>{
    return (
         <TouchableOpacity onPress={prop.onPressFun} >
                <View style={{...styles.btn,height:42,paddingTop:7,width:125}} >
                    <Text style={{...styles.btnText,fontSize:20}}>{ prop.btnTitle}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    btn:{
        height:40,
        borderRadius:10,
        marginTop:10,
        marginBottom:7,
        backgroundColor:'#ff6719',
        
    },
    btnText:{
        textAlign:'center',
        fontSize:25,
        color:'#fff'
    }
})

export {CustomBtn,CustomInfoBtn} ;