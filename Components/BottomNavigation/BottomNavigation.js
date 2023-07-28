import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../Home/Home';
import Profile from '../Porfile/Porfile';
import Colors from '../GlobalStyles/colors';
import Header from '../GlobalStyles/Header';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (

<>
<Header/>
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,

        
        tabBarStyle: {
          backgroundColor: Colors.Dark,
          borderTopWidth: 0,
        
        
        },
    })}
    tabBarOptions={{
        activeTintColor: Colors.FontColorI, // Color of the active tab label and icon
        inactiveTintColor: Colors.inActive, // Color of the inactive tab label and icon
         // Background color of the tab bar
      }}
    
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color, size }) => (
        <Fontisto 
        name='coffeescript'
                    size={26}
        color={ color}

        />        
       ),}}


      
      />
      <Tab.Screen name="Profile" component={Profile} 
      
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
            <Ionicons 
            name='settings'
                        size={26}
            color={ color}
            
            
            />      
       ),}}
      />
   
    </Tab.Navigator>
</>
 

  );
};


export default BottomNavigation;
