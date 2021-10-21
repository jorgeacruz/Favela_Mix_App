import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function loginF({ route }) {
    const navitagion = useNavigation();
 return (
     <View style={style.container}>
         <View style={style.logo}>
             <FontAwesome name="facebook-square" size={100} color="#fff"/>
         </View>
         <View style={style.formulario}>
         <TextInput style={style.campoInput} placeholder="Digite seu Nome"   placeholderTextColor="#fff" />
            <TextInput style={style.campoInput} placeholder="Digite seu E-mail" placeholderTextColor="#fff" />
            <TextInput  style={style.campoInput} placeholder="Cadastre sua senha" placeholderTextColor="#fff"/>
            <TouchableOpacity style={style.btnCadastro}>
                <Text style={{color:'#000', fontSize:20}}>Login with Facebook</Text>
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
        backgroundColor:'#3b5998', 
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
    justifyContent:'space-around',
    alignItems:'center'
}
});