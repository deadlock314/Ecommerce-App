import React, { useState } from 'react';
import { StyleSheet ,View ,Text, TextInput} from 'react-native';
import CustomBtn from '../UnitComponent/CustomBtn';

function Login() {

    const [user,setUser]=useState({email:'',password:''});
    const [loggedInMes ,setLoggedInMes]= useState('');
    
    const loginResHandler=(res)=>{
        if(res.isUserLoggedIn && res.isCorrectPassword)
            setLoggedInMes('User sucessfullyloggedIn'); 
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setLoggedInMes('Enter correct email and password');
        else if( !res.isUserLoggedIn && !res.isCorrectPassword)
            setLoggedInMes('please enter correct password')
        else
            setLoggedInMes('something went wrong try please try again');
    }

    const logInHandler= async()=>{   
        try{
            const res= await fetch("https://ecommerce-app-api-1.herokuapp.com/login"
            ,{
                method:"POST",credentials:'include',
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:user.email,
                    password:user.password,
                })
            })
            const resObj= await res.json();
            loginResHandler(resObj)

        } catch(err){
            setLoggedInMes('something went wrong try please try again');
            
        }
    }
  

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Email :</Text>
            <TextInput style={styles.input} value={user.email} onChangeText={(email)=>setUser({...user,email}) }/>
            <Text style={styles.text}>Password :</Text>
            <TextInput style={styles.input}  secureTextEntry={true}  value={user.password} onChangeText={(password)=>setUser({...user,password})}/>
            <Text style={{color:'#0000dd',marginLeft:15,fontSize:17}} >Forgot your password?</Text>
            <CustomBtn prop={{onPressFun:logInHandler,btnTitle:"Login"}}/>
            <Text style={{marginLeft:15 ,fontSize:20 ,color:'#ff0000'}}>{loggedInMes}</Text>
            <Text style={{marginLeft:15 ,fontSize:20}}>Didn't have an account? <Text style={{color:'#0000dd'}} >Sign Up</Text> </Text>
            
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

export default Login;