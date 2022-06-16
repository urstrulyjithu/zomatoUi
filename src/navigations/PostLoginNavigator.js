// In App.js in a new project

import React from 'react';
import {View, Text , StyleSheet , Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import MyOrdersScreen from '../screens/MyOrders/MyOrdersScreen';
import SavedScreen from '../screens/Saved/SavedScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import * as routes from './routes/app-routes';
import {Home, Saved, Profile, Ordered} from '../constants/images';
import colors from "../constants/colors";
import fonts from '../constants/fonts';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PostLoginNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 75 }
        }} tabBarOptions={{showLabel : false , activeTintColor :"#000000"}} >
        <Tab.Screen
          name={routes.HOME}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
               <Image style={styles.icon} source={require("../assets/images/home.png")} tintColor={ (focused && colors.primary) }/>
                <Text style={[styles.text , {color:focused?colors.primary:""}]}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={routes.MYORDERS}
          component={MyOrdersScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
               <Image style={styles.icon} source={require("../assets/images/myorders.png")} tintColor={ (focused && colors.primary) }/>
                <Text style={[styles.text , {color:focused?colors.primary:""}]}>My Orders</Text>
              </View>
            
            ),
          }}
        />
        <Tab.Screen
          name={routes.SAVED}
          component={SavedScreen}
          options={{
            tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.icon} source={require("../assets/images/saved.png")} tintColor={ (focused && colors.primary) }/>
              <Text style={[styles.text , {color:focused?colors.primary:""}]} >Saved</Text>
            </View>
            
            ),
          }}
        />
        <Tab.Screen
          name={routes.PROFILE}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.icon} source={require("../assets/images/profile.png")} tintColor={ (focused && colors.primary) }/>
              <Text style={[styles.text , {color:focused?colors.primary:""}]}>Profile</Text>
            </View>
            
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default PostLoginNavigator;

const styles = StyleSheet.create({
  icon:{
    alignSelf:"center",
    padding: 10,
    right:1

  },
  text:{
    alignSelf:"center",
    top:10,
    fontFamily: fonts.bold,
  }
})