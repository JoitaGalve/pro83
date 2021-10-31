import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import {RFValue} from 'react-native-responsive-fontsize'
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () =>{



  return (
    
      <Tab.Navigator
      labeled = {false}
      barStyle = {styles.bottomTabStyle}
      screenOptions = {({route})=>({
  tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'CreateStory') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return (<Ionicons name={iconName} size={RFValue(25)} color={color} style = {styles.icon} />
            )
                },

        })}
      
          
        
          activeTintColor = {'tomato'}
          inactiveTintColor = {'gray'}
        
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreateStory} />
      </Tab.Navigator>
  );
}

export default BottomTabNavigator

const styles = StyleSheet.create({

  bottomTabStyle:{
    backgroundColor:'black',
    height:'10%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:'hidden',
    position:'absolute'
  },

  icon:{
    width:RFValue(30),
    height:RFValue(30)
  },
})