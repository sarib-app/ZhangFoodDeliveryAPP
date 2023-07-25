

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from './colors';
import YtSearchSuggestions from '../Search/YtSearchSuggestions';

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
      <MaterialCommunityIcons
name='netflix'
size={30}
color={Colors.FontColorI}
/>
<Text
style={GlobalStyles.HeaderText}
>
  EarnFlix
</Text>
      </View>



      <View
      style={{
      alignItems:'center',
      flexDirection:'row',
      marginRight:10
    
  }}
      >
      <MaterialCommunityIcons
      onPress={()=> navigation.navigate("Notification")}
name='bell-outline'
size={30}
color={Colors.FontColorI}
style={{marginRight:10}}
/>


<Ionicons
onPress={()=>setOpenSearch(true)}
name='md-search-outline'
size={30}
color={Colors.FontColorI}
/>


      </View>
<YtSearchSuggestions 
shouldShow = {openSearch}
onHide={onHideSearch}

/>
    </SafeAreaView>
  );
};



export default Header;
