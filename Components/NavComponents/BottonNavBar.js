import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Cart from '../CartComponent/Cart';
import Profile from '../ProfileComponent/Profile';
import Home from '../HomeComponent/Home';
import Search from '../SearchBarComponent/Search';
import Notifi from '../NotiComponent/Notification';
import { Ionicons } from '@expo/vector-icons';

const Tab=createBottomTabNavigator();

const BottomNavBar=()=> {
    return (
        <NavigationContainer >
                <Tab.Navigator 
                   screenOptions={({ route }) => ({
                   tabBarActiveTintColor:'#00f',
                   tabBarIcon: ({focused}) => {
                   let iconName;
                   if (route.name === 'profile')
                      iconName =  (focused)?'person':'person-outline';
                   else
                       iconName= (focused)?route.name:`${route.name}-outline`
                       
        return <Ionicons name={iconName} size={30} color={(focused)?'#165191':'#000'} />;  },

          tabBarShowLabel:false,headerShown:false
        })}>
                <Tab.Screen name='home' component={Home}/>
                <Tab.Screen name='notifications'component={Notifi}/>
                <Tab.Screen name='search' component={Search}/>
                <Tab.Screen name='cart'  component={Cart} />
                <Tab.Screen name='profile' component={Profile}/>
                
                
            </Tab.Navigator>
        </NavigationContainer>
        

    );
}

export default BottomNavBar;
