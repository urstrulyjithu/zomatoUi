// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PreLoginScreen from '../screens/SplashScreen/PreLoginScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import * as routes from "./routes/app-routes";



const PreLoginStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PreLoginNavigator = () => {
  return (
    <NavigationContainer>
      <PreLoginStack.Navigator>
        <PreLoginStack.Screen name={routes.SIGNUP} component={SignUpScreen} />
        <PreLoginStack.Screen name={routes.LOGIN} component={LoginScreen} />
        <PreLoginStack.Screen name={routes.PRELOGIN} component={PreLoginScreen} />

      </PreLoginStack.Navigator>
    </NavigationContainer>
  );
}

export default PreLoginNavigator;