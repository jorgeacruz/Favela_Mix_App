import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function loginB({ route }) {
    const navitagion = useNavigation();
 return (
   <View style={style.container}>
       <View style={style.logo}>
           <Image source={require('./imgs/logo.png')} style={{width:250, height:250}}/>
       </View>
       <View style={style.formulario}>
            <TextInput style={style.campoInput} placeholder="Digite seu Nome"   placeholderTextColor="#fff" />
            <TextInput style={style.campoInput} placeholder="Digite seu E-mail" placeholderTextColor="#fff" />
            <TextInput  style={style.campoInput} placeholder="Cadastre sua senha" placeholderTextColor="#fff"/>
            <TouchableOpacity style={style.btnCadastro}>
                <Text style={{color:'#000', fontSize:20}}>Fazer Cadastro</Text>
            </TouchableOpacity>
       </View>
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
       <TouchableOpacity onPress={() => navitagion.goBack()}>
           <Image source={require('./imgs/x.png')} style={{width:20,height:20, marginBottom:10}} />
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
        backgroundColor:'#000'
    },
    campoInput:{
     borderWidth:1, 
     borderColor:'#fff', 
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
    backgroundColor:'#fff',
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center'
}
});