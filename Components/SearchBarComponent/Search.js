import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import SearchBarHome from './SearchBarHome';
const Stack=createNativeStackNavigator()

function Search() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='searchbar' component={SearchBarHome}/>
        
        </Stack.Navigator>
    );
}

export default Search;