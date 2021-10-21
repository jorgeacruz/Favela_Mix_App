import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Favorite from './favorite';
import Carrinho from './cart';
import Menu from './menu';
import Perfil from './perfil';

const Tab = createBottomTabNavigator();

const icons = {
  Menu:{name:'bars', color:'#f00'},
  Favorite:{name:'heart'},
  Perfil:{name:'user'},
  Carrinho:{name:'shopping-cart'}
};

export default function Burgers({ Route }) {
    const navitagion = useNavigation();

 return (
     <NavigationContainer independent={true} >
         <Tab.Navigator screenOptions={({ route }) => ({
             tabBarIcon:({ color, size}) => {
                 const {name} = icons[route.name];
                 return<FontAwesome name={name} color={color} size={size} />
             }
         })}

         tabBarOptions={{style:{backgroundColor:'#000', height:80,}, 
         activeTintColor:'#f7a900', tabStyle:{padding:10,}}}>

             <Tab.Screen name="Menu" component={Menu} />
             <Tab.Screen name="Favorite" component={Favorite} />
             <Tab.Screen name="Perfil" component={Perfil} />
             <Tab.Screen name="Carrinho" component={Carrinho} />

         </Tab.Navigator>
     </NavigationContainer>
  
  );
}