import React from 'react';
import {TouchableOpacity,Text,View ,StyleSheet} from 'react-native';
function CustomBtn(props) {
    
    return ( 
        <TouchableOpacity onPress={props.prop.onPressFun} >
                <View style={styles.btn} >
                    <Text style={styles.btnText}>{props.prop.btnTitle}</Text>
                </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    btn:{
        height:40,
        borderRadius:10,
        marginTop:10,
        marginBottom:7,
        backgroundColor:'#ff6719'
    },
    btnText:{
        textAlign:'center',
        fontSize:25,
        color:'#fff'
    }
})

export default CustomBtn;