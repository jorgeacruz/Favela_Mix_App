import React from 'react';
import { View, Text,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Carrinho({ route }) {
  const navitagion = useNavigation();

 return (
   <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'#f56'}}>
       <Text> Carrinho de compras </Text>
      
   </View>
  );
}