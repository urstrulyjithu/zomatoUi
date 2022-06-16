// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PreLoginNavigator from './PreloginNavigator';
import PostLoginNavigator from './PostLoginNavigator';
import * as routes from "./routes/app-routes";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.POSTLOGINNAVIGATOR}>
        <Stack.Screen name={routes.POSTLOGINNAVIGATOR} options={{ headerShown: false }} component={PostLoginNavigator} />
        <Stack.Screen name={routes.PRELOGINNAVIGATOR} component={PreLoginNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;