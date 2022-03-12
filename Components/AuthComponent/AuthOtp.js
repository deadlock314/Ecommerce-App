import React, { useState  } from 'react';
import { StyleSheet ,View ,Text, TextInput ,ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { Postreq } from '../../ApiRequests/APIReqHandler';
import {CustomBtn } from '../CustomComponent/CustomBtn';
import { styles } from './AuthStyles';
const AuthOtp=({navigation,route})=>{

    const user=route.params.user;

    const [localOtp,setLocalOtp]=useState();
    const [AuthMes ,setAuthMes] =useState('');
    const [userEmail,setUserEmail]=useState('');
    const [loading,setLoading]=useState(false);

    const dispatch=useDispatch();

    const authReqHandler=()=>{

        setUserEmail(user.email);
        Postreq("https://ecommerce-app-api-1.herokuapp.com/signup/alphakey",{...user,otp:localOtp}).then((res)=>{
        if(res.isUserAuth && res.isCorrectPassword){
            setLoading(true);
            GetReq(`https://ecommerce-app-api-1.herokuapp.com/user/${user.email}`).then((res)=>{
                dispatch(setUserData(res.userAccData));
                dispatch(changeUserAuth(true))
                navigation.navigate('profileHome') 
            })
        }     
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setAuthMes('Enter correct otp and password');
        else if( !res.isUserAuth && !res.isCorrectPassword)
            setAuthMes('please enter correct password')
        else
            setAuthMes('something went wrong try please try again');
        }).catch((err)=>console.log(err))

    }

  
    return ( 
        (loading)? <View style={styles.activityContainer} > <ActivityIndicator size={60} color={'#000'}/> </View> :

        <View style={styles.container}>

            <Text style={styles.title}>Email Verification OTP </Text>
            <TextInput style={styles.input} value={localOtp} keyboardType='numeric' maxLength={6}
             onChangeText={(Otp)=>setLocalOtp(Otp) } selectionColor={'#000'}/>

            <CustomBtn prop={{onPressFun:authReqHandler,btnTitle:"Verify User"}}/>
           {
               (AuthMes)? <Text style={styles.authMes}>{AuthMes}</Text>:<View/>
           }
            <Text style={styles.text} >We just send your OTP via your Email
             <Text style={{color:'#00f'}} >{userEmail}</Text> </Text>

            <Text style={styles.text}>The OTP will expire soon </Text>
            <CustomBtn prop={{onPressFun:'',btnTitle:"Resend OTP"}}/>

        </View>
    );
}



export default AuthOtp;