import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Menu({ route }) {
  const navitagion = useNavigation();

 return (
   <SafeAreaView style={style.container}>
     <StatusBar hidden={true} />
     <View style={style.topHeader}>
      <Image source={require('../Home/imgs/hamburguer-h.png')} style={{width:40, height:40}} />
      <Text style={style.textHeader}>FAVELA MIX BURGERS</Text>
     </View>

     <ScrollView style={{flex:1, paddingTop:10,}}>
       
       <View style={{ height:200, backgroundColor:'#fff'}}>

       </View>
       <View style={style.galeriaBurges}>

       </View>
       <View style={{height:400}}>

       </View>
      
     </ScrollView>
   
   </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },
  topHeader:{
    backgroundColor:'#000',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    height:80,
    alignSelf: 'stretch',
    padding:20
    },
    textHeader: {
      fontWeight:'bold',
      color:'#f7a900',
      fontSize:23,
    },
    galeriaBurges:{
      width:410,
      height:400,
    
    }
});