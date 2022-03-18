import {Text, View,StyleSheet } from 'react-native';

const BuyingStatusBar=({props})=>{
console.log(props);
    let bgcolor1="#fff",bgcolor2="#fff",bgcolor3="#fff",color1="#000",color2="#000",color3="#000";

    if(props>=2) { bgcolor1="#00a600"; color1="#fff"}
    if(props>=3) {bgcolor2="#00a600"; color2="#fff"}
    if(props==4) {bgcolor3="#00a600"; color3="#fff"}
    
    return (
        <View style={styles.container} >
           <View style={{...styles.box ,backgroundColor:bgcolor1 }}><Text style={{...styles.boxText,color:color1}}>Step 1</Text></View>
           <View style={{...styles.pipe,backgroundColor:bgcolor1}} />
           <View style={{...styles.box,backgroundColor:bgcolor2}}><Text style={{...styles.boxText,color:color2}}>Step 2</Text></View>
           <View style={{...styles.pipe,backgroundColor:bgcolor2}} />
           <View style={{...styles.box,backgroundColor:bgcolor3}}><Text style={{...styles.boxText,color:color3}}>Step 3</Text></View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingTop:50 ,
        paddingBottom:20,
        justifyContent:'space-around'
        ,padding:15
    },
    box:{
        width:80,
        alignItems:'center',
        padding:5,
        height:40,
        borderRadius:5
    },
    boxText:{
        fontSize:18
    },
    pipe:{
       
        width:50,
        height:10,
        alignSelf:'center'
    }

});

export default BuyingStatusBar;