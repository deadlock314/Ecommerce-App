import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartHome from './CartHome';

const Stack=createNativeStackNavigator()

const Cart=()=>{
    return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='cartHome' component={CartHome}/>
        </Stack.Navigator>
    );
}

export default Cart;