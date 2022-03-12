import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductSearch from './ProductSearch';
import ProductInfo from '../ProductComponent/ProductInfo';

const Stack=createNativeStackNavigator()

function Search() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='searchbar' component={ProductSearch}/>
            <Stack.Screen name="productInfo" component={ProductInfo}/>
        </Stack.Navigator>
    );
}

export default Search;