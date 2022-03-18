
import Login from '../AuthComponent/Login';
import Signup from '../AuthComponent/Signup';
import AuthOtp from '../AuthComponent/AuthOtp';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileHome from './ProfileHome';
import { useSelector } from 'react-redux';

const Stack=createNativeStackNavigator()

const Profile=()=> {

    const AuthStatus=useSelector(s=>s.userAuth.value);

    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                {
        (AuthStatus) ?  <Stack.Screen name='profileHome' component={ProfileHome}/> : <Stack.Screen name='login' component={Login}/>       
                }
            <Stack.Screen name='signup' component={Signup}/>
            <Stack.Screen name='otp'   component={AuthOtp}/>
            
            </Stack.Navigator>
    );
}

export default Profile;