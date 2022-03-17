import React, { useState } from 'react';
import { StyleSheet ,View ,Text, TextInput,ActivityIndicator} from 'react-native';
import { useDispatch } from 'react-redux';
import { Postreq ,GetReq } from '../../ApiRequests/APIReqHandler';
import { changeUserAuth, setUserData } from '../../ReduxCode/Reducers';
import {CustomBtn} from '../CustomComponent/CustomBtn';
import { styles } from './AuthStyles';

const Login=({navigation})=> {

    const [user,setUser]=useState({email:'',password:''});
    const [loggedInMes ,setLoggedInMes]= useState('');
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();

    const logInHandler=()=>{

        Postreq("https://ecommerce-app-api-1.herokuapp.com/login",{ email:user.email, password:user.password}).then((res)=>{
        if(res.isUserLoggedIn && res.isCorrectPassword){
            setLoading(true);
            GetReq(`https://ecommerce-app-api-1.herokuapp.com/user/${user.email}`).then((res)=>{
                dispatch(setUserData(res.userAccData));
                dispatch(changeUserAuth(true))
                navigation.navigate('profileHome') 
            })
        }
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setLoggedInMes('Enter correct email and password');
        else if( !res.isUserLoggedIn && !res.isCorrectPassword)
            setLoggedInMes('please enter correct password')
        else
            setLoggedInMes('something went wrong try please try again');

        } ).catch( (err)=>console.log(err) )

    }
    
        

    return ( 
        (loading)? <View style={styles.activityContainer}><ActivityIndicator size={40} color={'#000'}/></View> :
    
        <View style={styles.container}>

            <Text style={styles.textLabel}>Email :</Text>
            <TextInput style={styles.input} value={user.email} onChangeText={(email)=>setUser({...user,email}) }selectionColor='#000'/>
            <Text style={styles.textLabel}>Password :</Text>
            <TextInput style={styles.input}  secureTextEntry={true}  value={user.password}
                onChangeText={(password)=>setUser({...user,password})} selectionColor='#000'/>
            <Text style={{color:'#0000dd',marginLeft:15,fontSize:19}} >Forgot your password?</Text>
            
            <CustomBtn prop={{onPressFun:logInHandler,btnTitle:"Login"}}/>
            {
               (loggedInMes)? <Text style={styles.authMes}>{loggedInMes}</Text>:<View/>
           }
            <Text style={{marginLeft:15 ,fontSize:20}}>Didn't have an account? 
            <Text style={{color:'#0000dd'}}  onPress={()=>navigation.navigate('signup')} >{` Sign Up`} </Text> </Text>
            
        </View>
    );
}

export default Login;