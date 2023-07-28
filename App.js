import React,{useEffect,useState} from 'react';
import {
  StyleSheet,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import SplashScreen from "react-native-splash-screen"; //import SplashScree

import AboutUs from './Components/AppContents/AboutUs';
import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import Tos from './Components/AppContents/Tos';
import { LogBox } from 'react-native';
import StoreDetailScreen from './Components/StoreDetailScreen/StoreDetailScreen';


LogBox.ignoreAllLogs()
const Stack = createNativeStackNavigator();

const App = () => {

const [loggedIn,setLoggedIn]=useState(false)

useEffect(()=>{
  // SplashScreen.hide()

},[])


return( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName={BottomNavigation} screenOptions={{
      headerShown: false
    }}
    >
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

    <Stack.Screen name="AboutUs" component={AboutUs} />
    <Stack.Screen name="StoreDetailScreen" component={StoreDetailScreen} />

    <Stack.Screen name="Tos" component={Tos} />



    </Stack.Navigator>
    </NavigationContainer>
    )

};



export default App;




