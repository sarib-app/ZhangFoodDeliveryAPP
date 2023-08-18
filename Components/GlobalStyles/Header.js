

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // You can use any icon library you prefer


import Fontisto from 'react-native-vector-icons/Fontisto'

import Colors from './colors';
// import YtSearchSuggestions from '../Search/YtSearchSuggestions';

function Header (){
const navigation = useNavigation()
const [openSearch,setOpenSearch]=useState(false)

function onHideSearch(){
  setOpenSearch(false)
}
  return (
    <SafeAreaView style={GlobalStyles.Header}>
      <View
      style={{
      alignItems:'center',
      flexDirection:'row',
      marginLeft:10

    
  }}
      >
      <Fontisto 
        name='coffeescript'
                    size={21}
        color={ Colors.FontColorI}

        /> 
<Text
style={GlobalStyles.HeaderText}
>
  CoffeeOn.
</Text>
      </View>



      <View
      style={{
      alignItems:'center',
      flexDirection:'row',
      marginRight:10
    
  }}
      >
    
    <MaterialIcons
onPress={()=> navigation.navigate("SearchScreen")}
name="search" size={25} color={Colors.FontColorI} style={{marginRight:5}}
/>
<MaterialIcons
onPress={()=> navigation.navigate("CartDetailScreen")}
name="add-shopping-cart" size={25} color={Colors.FontColorI} style={{marginRight:5}}
/>

<Fontisto
onPress={()=>setOpenSearch(true)}
name='world'
size={25}
color={Colors.FontColorI}
style={{marginRight:5}}

/>



      </View>
{/* <YtSearchSuggestions 
shouldShow = {openSearch}
onHide={onHideSearch}

/> */}
    </SafeAreaView>
  );
};



export default Header;
