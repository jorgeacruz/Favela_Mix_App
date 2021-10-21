import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function loginG({ route }) {
    const navitagion = useNavigation();
 return (
     <View style={style.container}>
         <View style={style.logo}>
             <FontAwesome name="google" size={100} color="#4285F4"/>
         </View>
         <View style={style.formulario}>
         <TextInput style={style.campoInput} placeholder="Digite seu Nome"   placeholderTextColor="#000" />
            <TextInput style={style.campoInput} placeholder="Digite seu E-mail" placeholderTextColor="#000" />
            <TextInput  style={style.campoInput} placeholder="Cadastre sua senha" placeholderTextColor="#000"/>
            <TouchableOpacity style={style.btnCadastro}>
                <Text style={{color:'#fff', fontSize:20}}>Login with Google</Text>
            </TouchableOpacity>

         </View>

         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity onPress={() => navitagion.goBack()}>
           <Image source={require('./imgs/x1.png')} style={{width:20,height:20, marginBottom:10}} />
           </TouchableOpacity>
           </View>

     </View>
     
  );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff', 
    },
    campoInput:{
     borderWidth:1, 
     borderColor:'#000', 
     width:300, 
     height:40, 
     marginBottom:10,
    textAlign:'center',

    },
    formulario:{
        flex:1,
    },
    logo: {
    flex:2,
    justifyContent:'center',
    alignItems:'center'
    },
    btnCadastro: {
    backgroundColor:'#4285F4'
    ,
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center'
}
});