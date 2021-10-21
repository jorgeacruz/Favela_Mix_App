import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Perfil({ route }) {
  const navitagion = useNavigation();

 return (
   <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'#07fb'}}>
       <Text> Profile </Text>
   </View>
  );
}