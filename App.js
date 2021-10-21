
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import loginG from './src/pages/Home/loginG';
import loginF from './src/pages/Home/loginF';
import loginB from './src/pages/Home/loginB';
import Burgers from './src/pages/Burgers';

const Stack = createStackNavigator();

export default function app() {
 return (
   <NavigationContainer>
     <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="loginB" component={loginB} options={{headerShown:false}} />
        <Stack.Screen name="loginF" component={loginF} options={{headerShown:false}}/>
        <Stack.Screen name="loginG" component={loginG} options={{headerShown:false}}/>
        <Stack.Screen name="Burgers" component={Burgers} options={{headerShown:false}} />

     </Stack.Navigator>
   </NavigationContainer>
  );
}