import React, { useState } from 'react';
import { View ,Text, TextInput} from 'react-native';
import {CustomBtn} from '../CustomComponent/CustomBtn';
import { Postreq } from '../../ApiRequests/APIReqHandler';
import { styles } from './AuthStyles';
const Signup=({navigation})=>{
    
    const [user,setUser]=useState({name:'' ,email:'',password:''});
    const [signedUpMes ,setsignedUpMes]= useState('');
    
    const signupHandler=()=>{
        Postreq("https://ecommerce-app-api-1.herokuapp.com/signup",{...user}).then((res)=>{

        if(res.isDuplicateUser)
            setsignedUpMes('User already exist in database'); 
        else if(res.isEmailSent)
            navigation.navigate('otp',{user})
        else if(!res.isEmailSent)
            setsignedUpMes('please enter correct email id')
        else
            setsignedUpMes('something went wrong try again');
        }).catch((err)=>console.log(err))

        
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.textLabel}>Name :</Text>
            <TextInput style={styles.input} value={user.name} onChangeText={(name)=>setUser({...user,name}) } selectionColor='#000'/>
            <Text style={styles.textLabel}>Email :</Text>
            <TextInput style={styles.input} value={user.email} onChangeText={(email)=>setUser({...user,email}) }selectionColor='#000'/>
            <Text style={styles.textLabel}>Password :</Text>
            <TextInput style={styles.input}  secureTextEntry={true}  value={user.password} onChangeText={(password)=>setUser({...user,password})} selectionColor='#000'/>
            <CustomBtn prop={{onPressFun:signupHandler,btnTitle:"Signup"}}/>
            {
               (signedUpMes)? <Text style={styles.authMes}>{signedUpMes}</Text>:<View/>
           }
            <Text style={{marginLeft:15 ,fontSize:20 ,color:'#000'}}>Already have an account?
             <Text style={{color:'#0000dd'}} onPress={()=>navigation.navigate('login')} >{` Login`}</Text> </Text>
            
        </View>
    );
}

export default Signup;