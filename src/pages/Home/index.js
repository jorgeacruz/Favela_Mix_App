import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { DarkTheme, useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Burgers from '../Burgers';

const {width,height} = Dimensions.get('screen');

export default function Home({ route }) {
const navigation = useNavigation();

 return (
   <View style={style.container}>
     <StatusBar />
     <View style={{position:'absolute', top:40, zIndex:1}}>
       <Image source={require('./imgs/logo.png')} style={{width:200, height:200}} />
     </View>
     <Swiper autoplay={true} autoplayTimeout={4.0} showsPagination={false}>
      <View>
       <Image source={require('./imgs/burger.jpg')} style={style.imgBuger}/>
      </View>
      <View>
       <Image source={require('./imgs/b1.jpg')} style={style.imgBuger}/>
      </View>
       <View>
       <Image source={require('./imgs/b2.jpg')} style={style.imgBuger}/>
       </View>
     </Swiper>

     <View style={style.areaBtn}>
       <TouchableOpacity style={style.btnG} onPress={() => navigation.navigate('loginG')}>
         <FontAwesome name="google" size={26} color='#000'/>
         <Text style={{color:'#000', fontWeight:'bold'}}>LOGIN WITH GOOGLE</Text>
       </TouchableOpacity>

       <TouchableOpacity style={style.btnF} onPress={() => navigation.navigate('loginF')}>
         <FontAwesome name="facebook-f" size={26} color='#000'/>
         <Text style={{color:'#fff', fontWeight:'bold'}}>LOGIN WITH FACEBOOK</Text>
       </TouchableOpacity>

       <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('loginB')}>
        <FontAwesome name="at" size={26} color='#fff'/>
         <Text style={{color:'#fff', fontWeight:'bold'}}>CADASTRAR MEU EMAIL</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.navigate(Burgers)} style={{justifyContent:'center', marginTop:10}}>
         <Text style={{color:'#fff', fontSize:12}}>Agora não. Vou registrar depois...</Text>
       </TouchableOpacity>

     </View>

   </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor:'#000', flex:1, justifyContent:'center', alignItems:'center', 
  },
  imgBuger: {
    opacity:0.5, width:width, height:height 
  },
  areaBtn: {
    position:'absolute',
    bottom:20,
    alignItems:'center',
    justifyContent:'center'
  },
  btnG: {
    backgroundColor:'#fff', 
    width:300, 
    height:60, 
    flexDirection:'row', 
    justifyContent:'space-around', 
    alignItems:'center', 
    marginBottom:10,
    paddingLeft:30,
    paddingRight:50,
    
  },
  btnF: {
    backgroundColor:'#3b5998', 
    width:300, 
    height:60, 
    flexDirection:'row', 
    justifyContent:'space-around', 
    alignItems:'center', 
    marginBottom:10, 
    paddingLeft:30,
    paddingRight:40,
  },
  btn: {
    backgroundColor:'#000', 
    width:300, 
    height:60, 
    flexDirection:'row', 
    justifyContent:'space-around', 
    alignItems:'center', 
    marginBottom:10,
    paddingLeft:30,
    paddingRight:30
  },
 
});