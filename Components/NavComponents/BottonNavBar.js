import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Cart from '../CartComponent/Cart';
import Profile from '../ProfileComponent/Profile';
import Home from '../HomeComponent/Home';
import Search from '../SearchBarComponent/SearchBar';
import Notifi from '../NotiComponent/Notification';
import { Ionicons } from '@expo/vector-icons';

const Tab=createBottomTabNavigator();

const BottomNavBar=()=> {
    return (
        <NavigationContainer >
                <Tab.Navigator 
                   screenOptions={({ route }) => ({
                   tabBarIcon: () => {
                   let iconName;
                   if (route.name === 'profile')
                      iconName = 'happy';
                   else
                       iconName=route.name
        return <Ionicons name={iconName} size={35} color='#000' />;  },
          tabBarShowLabel:false,
          tabBarActiveTintColor:'#00f'
        })}>
                <Tab.Screen name='home' component={Home}/>
                <Tab.Screen name='cart'  component={Cart} />
                <Tab.Screen name='search' component={Search}/>
                <Tab.Screen name='notifications'component={Notifi}/>
                <Tab.Screen name='profile' component={Profile}/>
                
                
            </Tab.Navigator>
        </NavigationContainer>
        

    );
}

export default BottomNavBar;
