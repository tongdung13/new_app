/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/auth/login';
import { ScreenSaver } from './src/auth/screenSaver';
import Register from './src/auth/register';
import Forgot from './src/auth/forgot';
import Sale from './src/sales/sale';
import Home from './src/components/home/home';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screenSaver" component={ScreenSaver} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="forgot" component={Forgot} options={{ headerShown: false }} />
        <Stack.Screen name="sale" component={Sale} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
