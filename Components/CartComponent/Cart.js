import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyingPage from './BuyingPage';
import CartHome from './CartHome';

const Stack=createNativeStackNavigator()

const Cart=()=>{
    return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='cartHome' component={CartHome}/>
            <Stack.Screen name='buyingPage' component={BuyingPage}/>
        </Stack.Navigator>
    );
}

export default Cart;