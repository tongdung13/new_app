import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ScreenSaver} from '../../auth/screenSaver';
import Login from '../../auth/login';

const Stack = createStackNavigator();

const TackScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('login');
  }, 5000);
};

export default TackScreen;
