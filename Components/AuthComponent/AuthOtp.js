import React, { useState } from 'react';
import { StyleSheet ,View ,Text, TextInput} from 'react-native';
import CustomBtn from '../UnitComponent/CustomBtn';

function AuthOtp() {

    const [localOtp,setLocalOtp]=useState('');
    const [AuthMes ,setAuthMes] =useState('');
    const [userEmail,setUserEmail]=useState('');
    
    const authResHandler=(res)=>{
        if(res.isUserAuth && res.isCorrectPassword)
            setAuthMes('User sucessfully Auth'); 
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setAuthMes('Enter correct otp and password');
        else if( !res.isUserAuth && !res.isCorrectPassword)
            setAuthMes('please enter correct password')
        else
            setAuthMes('something went wrong try please try again');
    }

    const authReqHandler= async()=>{   
        try{
            const res= await fetch("https://ecommerce-app-api-1.herokuapp.com/signup/alphakey"
            ,{
                method:"POST",credentials:'include',
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    ...user,otp:localOtp
                })
            })
            const resObj= await res.json();
            authResHandler(resObj)

        } catch(err){
            setAuthMes('something went wrong try please try again');
            
        }
    }
  

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Email Verification Otp </Text>
            <TextInput style={styles.input} value={localOtp} onChangeText={(Otp)=>setLocalOtp({Otp}) }/>
            <CustomBtn prop={{onPressFun:authReqHandler,btnTitle:"Verify User"}}/>
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
        fontSize:20
    },
    text:{
        marginLeft:15 
        ,fontSize:20,
        marginBottom:2
    }

})

export default AuthOtp;