import React, { useState } from 'react';
import { StyleSheet ,View ,Text, TextInput} from 'react-native';
import { Postreq } from '../../ApiRequests/APIReqHandler';
import {CustomBtn} from '../CustomComponent/CustomBtn';

const Login=({navigation})=> {

    const [user,setUser]=useState({email:'',password:''});
    const [loggedInMes ,setLoggedInMes]= useState('');
    
    const logInHandler=()=>{

        Postreq("https://ecommerce-app-api-1.herokuapp.com/login",{ email:user.email, password:user.password}).then((res)=>{
        if(res.isUserLoggedIn && res.isCorrectPassword)
             navigation.navigate('profileHome',{email:user.email})
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setLoggedInMes('Enter correct email and password');
        else if( !res.isUserLoggedIn && !res.isCorrectPassword)
            setLoggedInMes('please enter correct password')
        else
            setLoggedInMes('something went wrong try please try again');

        } ).catch( (err)=>console.log(err) )

    }
    
        

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Email :</Text>
            <TextInput style={styles.input} value={user.email} onChangeText={(email)=>setUser({...user,email}) } selectionColor='#000'/>
            <Text style={styles.text}>Password :</Text>
            <TextInput style={styles.input}  secureTextEntry={true}  value={user.password} onChangeText={(password)=>setUser({...user,password})} selectionColor='#000'/>
            <Text style={{color:'#0000dd',marginLeft:15,fontSize:17}} >Forgot your password?</Text>
            <CustomBtn prop={{onPressFun:logInHandler,btnTitle:"Login"}}/>
            <Text style={{marginLeft:15 ,fontSize:20 ,color:'#ff0000'}}>{loggedInMes}</Text>
            <Text style={{marginLeft:15 ,fontSize:20}}>Didn't have an account? 
            <Text style={{color:'#0000dd'}}  onPress={()=>navigation.navigate('signup')} >{` Sign Up`} </Text> </Text>
            
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
        fontSize:20,
        textAlignVertical: 'top',
        padding:10
    },

})

export default Login;