import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from './menu';


export default function Favorite({ route }) {
  const navitagion = useNavigation();

 return (
   <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'#08b'}}>
       <Text> Favorite </Text>
       <TouchableOpacity onPress={() => navitagion.navigate(Menu)} style={{height:30, width:300, backgroundColor:'#000', justifyContent:'center', alignItems:'center', marginBottom:10}}>
         <Text style={{color:'#fff'}}>home</Text>
       </TouchableOpacity>
   </View>
  );
}