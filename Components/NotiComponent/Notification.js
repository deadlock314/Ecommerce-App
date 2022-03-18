import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
const Stack=createNativeStackNavigator()

function Notifi(props) {
    return (
        <Text>
            Notifi
        </Text>
        // <Stack.Navigator screenOptions={{headerShown:false}}>
        //     <Stack.Screen name='signup' component={Signup}/>
        //     <Stack.Screen name='otp'   component={AuthOtp}/>
        //     <Stack.Screen name='login' component={Login}/>
        // </Stack.Navigator>
    );
}

export default Notifi;