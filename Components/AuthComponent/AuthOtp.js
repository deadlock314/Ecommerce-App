import React, { useState  } from 'react';
import { StyleSheet ,View ,Text, TextInput} from 'react-native';
import { Postreq } from '../../ApiRequests/APIReqHandler';
import {CustomBtn } from '../CustomComponent/CustomBtn';

const AuthOtp=({navigation,route})=>{

    const user=route.params.user;

    const [localOtp,setLocalOtp]=useState();
    const [AuthMes ,setAuthMes] =useState('');
    const [userEmail,setUserEmail]=useState('');
    
    const authReqHandler=()=>{
        setUserEmail(user.email);
        Postreq("https://ecommerce-app-api-1.herokuapp.com/signup/alphakey",{...user,otp:localOtp}).then((res)=>{
        if(res.isUserAuth && res.isCorrectPassword)
            navigation.navigate('profileHome',{email:user.email}) 
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setAuthMes('Enter correct otp and password');
        else if( !res.isUserAuth && !res.isCorrectPassword)
            setAuthMes('please enter correct password')
        else
            setAuthMes('something went wrong try please try again');
        }).catch((err)=>console.log(err))

    }

  
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Email Verification Otp </Text>
            <TextInput style={styles.input} value={localOtp} keyboardType='numeric' maxLength={6}
             onChangeText={(Otp)=>setLocalOtp(Otp) } selectionColor={'#000'}/>
            <CustomBtn prop={{onPressFun:authReqHandler,btnTitle:"Verify User"}}/>
            <Text style={{marginLeft:15 ,fontSize:21, marginBottom:2,color:'#ff0000'}}>{AuthMes}</Text>
            <Text style={styles.text} >We just send your OTP via your Email <Text style={{color:'#00f'}} >{userEmail}</Text> </Text>
            <Text style={styles.text}>The OTP will expire soon </Text>
            <CustomBtn prop={{onPressFun:'',btnTitle:"Resend OTP"}}/>
            
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        margin:20
    },
    title:{
        fontSize:22,
        marginBottom:15,
        alignSelf:'center'
    },
    input:{
        borderWidth:2,
        borderColor:'#000',
        height:40,
        borderRadius:10,
        marginBottom:10,
        fontSize:20,
        textAlignVertical: 'center',
        padding:10,
        textAlign:'center'
     
    },
    text:{
        marginLeft:15 
        ,fontSize:20,
        marginBottom:2
    }

})

export default AuthOtp;