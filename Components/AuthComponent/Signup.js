import React, { useState } from 'react';
import { StyleSheet ,View ,Text, TextInput} from 'react-native';
import CustomBtn from '../UnitComponent/CustomBtn';

const Signup=({navigation})=>{
    
    const [user,setUser]=useState({name:'' ,email:'',password:''});
    const [signedUpMes ,setsignedUpMes]= useState('');
    
    const signupResHandler=(res)=>{
        if(res.isDuplicateUser)
            setsignedUpMes('User already exist in database'); 
        else if(res.isEmailSent)
            navigation.navigate('otp')
        else if(!res.isEmailSent)
            setsignedUpMes('please enter correct email id')
        else
            setsignedUpMes('something went wrong try again');
    }

    const signupHandler= async()=>{   
        try{
            const res= await fetch("https://ecommerce-app-api-1.herokuapp.com/signup"
            ,{
                method:"POST",credentials:'include',
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                   ...user
                })
            })
            const resObj= await res.json();
            signupResHandler(resObj)

        } catch(err){
            setsignedUpMes('something went wrong try please try again');
            
        }
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Name :</Text>
            <TextInput style={styles.input} value={user.name} onChangeText={(name)=>setUser({...user,name}) }/>
            <Text style={styles.text}>Email :</Text>
            <TextInput style={styles.input} value={user.email} onChangeText={(email)=>setUser({...user,email}) }/>
            <Text style={styles.text}>Password :</Text>
            <TextInput style={styles.input}  secureTextEntry={true}  value={user.password} onChangeText={(password)=>setUser({...user,password})}/>
            <CustomBtn prop={{onPressFun:signupHandler,btnTitle:"Signup"}}/>
            <Text style={{marginLeft:15 ,fontSize:20 ,color:'#f00'}}>{signedUpMes}</Text>
            <Text style={{marginLeft:15 ,fontSize:20 ,color:'#000'}}>Already have an account?
             <Text style={{color:'#0000dd'}} onPress={()=>navigation.navigate('login')} >{` Login`}</Text> </Text>
            
        </View>
    );
}


const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        margin:20
    },
    text:{
        fontSize:22,
        marginBottom:10
    },
    input:{
        borderWidth:2,
        borderColor:'#000',
        height:40,
        borderRadius:10,
        marginBottom:10,
        fontSize:20
    },

})

export default Signup;