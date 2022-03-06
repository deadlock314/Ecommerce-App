import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Products';
import ProductStruct from '../ProductComponent/ProductStruct';
import ProductInfo from '../ProductComponent/ProductInfo';
import CartHome from '../CartComponent/CartHome';
const Stack=createNativeStackNavigator();

const Home=()=> {
    return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='products' component={Products}/>
            <Stack.Screen name="productStruct" component={ProductStruct}/>
            <Stack.Screen name="productInfo" component={ProductInfo}/>
            <Stack.Screen name='cartHome' component={CartHome}/>
        </Stack.Navigator>
    );
}

export default Home;