// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';

import MainNavigator from './src/navigations/MainNavigator';


function App() {
  return (
    <View style={{height:"100%"}}>
      <MainNavigator />
    </View>
     
    
  );
}

export default App;